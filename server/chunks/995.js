exports.id = 995;
exports.ids = [995];
exports.modules = {

/***/ 60925:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});

/***/ }),

/***/ 7155:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'","fontStyle":"normal"},
	"className": "__className_e66fe9"
};


/***/ }),

/***/ 24578:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addBasePath", ({
    enumerable: true,
    get: function() {
        return addBasePath;
    }
}));
const _addpathprefix = __webpack_require__(30893);
const _normalizetrailingslash = __webpack_require__(61094);
const basePath =  false || "";
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)( false ? 0 : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 56937:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "callServer", ({
    enumerable: true,
    get: function() {
        return callServer;
    }
}));
const _approuter = __webpack_require__(52987);
async function callServer(actionId, actionArgs) {
    const actionDispatcher = (0, _approuter.getServerActionDispatcher)();
    if (!actionDispatcher) {
        throw new Error("Invariant: missing action dispatcher.");
    }
    return new Promise((resolve, reject)=>{
        actionDispatcher({
            actionId,
            actionArgs,
            resolve,
            reject
        });
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map


/***/ }),

/***/ 73049:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "AppRouterAnnouncer", ({
    enumerable: true,
    get: function() {
        return AppRouterAnnouncer;
    }
}));
const _react = __webpack_require__(18038);
const _reactdom = __webpack_require__(98704);
const ANNOUNCER_TYPE = "next-route-announcer";
const ANNOUNCER_ID = "__next-route-announcer__";
function getAnnouncerNode() {
    var _existingAnnouncer_shadowRoot;
    const existingAnnouncer = document.getElementsByName(ANNOUNCER_TYPE)[0];
    if (existingAnnouncer == null ? void 0 : (_existingAnnouncer_shadowRoot = existingAnnouncer.shadowRoot) == null ? void 0 : _existingAnnouncer_shadowRoot.childNodes[0]) {
        return existingAnnouncer.shadowRoot.childNodes[0];
    } else {
        const container = document.createElement(ANNOUNCER_TYPE);
        container.style.cssText = "position:absolute";
        const announcer = document.createElement("div");
        announcer.ariaLive = "assertive";
        announcer.id = ANNOUNCER_ID;
        announcer.role = "alert";
        announcer.style.cssText = "position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal";
        // Use shadow DOM here to avoid any potential CSS bleed
        const shadow = container.attachShadow({
            mode: "open"
        });
        shadow.appendChild(announcer);
        document.body.appendChild(container);
        return announcer;
    }
}
function AppRouterAnnouncer(param) {
    let { tree } = param;
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const announcer = getAnnouncerNode();
        setPortalNode(announcer);
        return ()=>{
            const container = document.getElementsByTagName(ANNOUNCER_TYPE)[0];
            if (container == null ? void 0 : container.isConnected) {
                document.body.removeChild(container);
            }
        };
    }, []);
    const [routeAnnouncement, setRouteAnnouncement] = (0, _react.useState)("");
    const previousTitle = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        let currentTitle = "";
        if (document.title) {
            currentTitle = document.title;
        } else {
            const pageHeader = document.querySelector("h1");
            if (pageHeader) {
                currentTitle = pageHeader.innerText || pageHeader.textContent || "";
            }
        }
        // Only announce the title change, but not for the first load because screen
        // readers do that automatically.
        if (previousTitle.current !== undefined) {
            setRouteAnnouncement(currentTitle);
        }
        previousTitle.current = currentTitle;
    }, [
        tree
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(routeAnnouncement, portalNode) : null;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-announcer.js.map


/***/ }),

/***/ 66265:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RSC: function() {
        return RSC;
    },
    ACTION: function() {
        return ACTION;
    },
    NEXT_ROUTER_STATE_TREE: function() {
        return NEXT_ROUTER_STATE_TREE;
    },
    NEXT_ROUTER_PREFETCH: function() {
        return NEXT_ROUTER_PREFETCH;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    FETCH_CACHE_HEADER: function() {
        return FETCH_CACHE_HEADER;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_VARY_HEADER: function() {
        return RSC_VARY_HEADER;
    },
    FLIGHT_PARAMETERS: function() {
        return FLIGHT_PARAMETERS;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    }
});
const RSC = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const FETCH_CACHE_HEADER = "x-vercel-sc-headers";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const RSC_VARY_HEADER = RSC + ", " + NEXT_ROUTER_STATE_TREE + ", " + NEXT_ROUTER_PREFETCH + ", " + NEXT_URL;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc";
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map


/***/ }),

/***/ 52987:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getServerActionDispatcher: function() {
        return getServerActionDispatcher;
    },
    urlToUrlWithoutFlightMarker: function() {
        return urlToUrlWithoutFlightMarker;
    },
    default: function() {
        return AppRouter;
    }
});
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(18038));
const _approutercontext = __webpack_require__(57085);
const _routerreducer = __webpack_require__(27189);
const _routerreducertypes = __webpack_require__(92836);
const _createhreffromurl = __webpack_require__(34331);
const _hooksclientcontext = __webpack_require__(39569);
const _usereducerwithdevtools = __webpack_require__(57951);
const _errorboundary = __webpack_require__(31232);
const _createinitialrouterstate = __webpack_require__(61684);
const _isbot = __webpack_require__(98735);
const _addbasepath = __webpack_require__(24578);
const _approuterannouncer = __webpack_require__(73049);
const _redirectboundary = __webpack_require__(81442);
const _findheadincache = __webpack_require__(71333);
const _infinitepromise = __webpack_require__(96360);
const _approuterheaders = __webpack_require__(66265);
const _removebasepath = __webpack_require__(42666);
const _hasbasepath = __webpack_require__(94374);
const isServer = "undefined" === "undefined";
// Ensure the initialParallelRoutes are not combined because of double-rendering in the browser with Strict Mode.
let initialParallelRoutes = isServer ? null : new Map();
let globalServerActionDispatcher = null;
function getServerActionDispatcher() {
    return globalServerActionDispatcher;
}
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url, location.origin);
    urlWithoutFlightParameters.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    if (true) {
        if (false) {}
    }
    return urlWithoutFlightParameters;
}
function isExternalURL(url) {
    return url.origin !== window.location.origin;
}
function HistoryUpdater(param) {
    let { tree, pushRef, canonicalUrl, sync } = param;
    (0, _react.useInsertionEffect)(()=>{
        // Identifier is shortened intentionally.
        // __NA is used to identify if the history entry can be handled by the app-router.
        // __N is used to identify if the history entry can be handled by the old router.
        const historyState = {
            __NA: true,
            tree
        };
        if (pushRef.pendingPush && (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== canonicalUrl) {
            // This intentionally mutates React state, pushRef is overwritten to ensure additional push/replace calls do not trigger an additional history entry.
            pushRef.pendingPush = false;
            window.history.pushState(historyState, "", canonicalUrl);
        } else {
            window.history.replaceState(historyState, "", canonicalUrl);
        }
        sync();
    }, [
        tree,
        pushRef,
        canonicalUrl,
        sync
    ]);
    return null;
}
const createEmptyCacheNode = ()=>({
        status: _approutercontext.CacheStates.LAZY_INITIALIZED,
        data: null,
        subTreeData: null,
        parallelRoutes: new Map()
    });
function useServerActionDispatcher(dispatch) {
    const serverActionDispatcher = (0, _react.useCallback)((actionPayload)=>{
        (0, _react.startTransition)(()=>{
            dispatch({
                ...actionPayload,
                type: _routerreducertypes.ACTION_SERVER_ACTION,
                mutable: {},
                cache: createEmptyCacheNode()
            });
        });
    }, [
        dispatch
    ]);
    globalServerActionDispatcher = serverActionDispatcher;
}
/**
 * Server response that only patches the cache and tree.
 */ function useChangeByServerResponse(dispatch) {
    return (0, _react.useCallback)((previousTree, flightData, overrideCanonicalUrl)=>{
        (0, _react.startTransition)(()=>{
            dispatch({
                type: _routerreducertypes.ACTION_SERVER_PATCH,
                flightData,
                previousTree,
                overrideCanonicalUrl,
                cache: createEmptyCacheNode(),
                mutable: {}
            });
        });
    }, [
        dispatch
    ]);
}
function useNavigate(dispatch) {
    return (0, _react.useCallback)((href, navigateType, forceOptimisticNavigation, shouldScroll)=>{
        const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
        return dispatch({
            type: _routerreducertypes.ACTION_NAVIGATE,
            url,
            isExternalUrl: isExternalURL(url),
            locationSearch: location.search,
            forceOptimisticNavigation,
            shouldScroll: shouldScroll != null ? shouldScroll : true,
            navigateType,
            cache: createEmptyCacheNode(),
            mutable: {}
        });
    }, [
        dispatch
    ]);
}
/**
 * The global router that wraps the application components.
 */ function Router(param) {
    let { buildId, initialHead, initialTree, initialCanonicalUrl, children, assetPrefix } = param;
    const initialState = (0, _react.useMemo)(()=>(0, _createinitialrouterstate.createInitialRouterState)({
            buildId,
            children,
            initialCanonicalUrl,
            initialTree,
            initialParallelRoutes,
            isServer,
            location: !isServer ? window.location : null,
            initialHead
        }), [
        buildId,
        children,
        initialCanonicalUrl,
        initialTree,
        initialHead
    ]);
    const [{ tree, cache, prefetchCache, pushRef, focusAndScrollRef, canonicalUrl, nextUrl }, dispatch, sync] = (0, _usereducerwithdevtools.useReducerWithReduxDevtools)(_routerreducer.reducer, initialState);
    (0, _react.useEffect)(()=>{
        // Ensure initialParallelRoutes is cleaned up from memory once it's used.
        initialParallelRoutes = null;
    }, []);
    // Add memoized pathname/query for useSearchParams and usePathname.
    const { searchParams, pathname } = (0, _react.useMemo)(()=>{
        const url = new URL(canonicalUrl,  true ? "http://n" : 0);
        return {
            // This is turned into a readonly class in `useSearchParams`
            searchParams: url.searchParams,
            pathname: (0, _hasbasepath.hasBasePath)(url.pathname) ? (0, _removebasepath.removeBasePath)(url.pathname) : url.pathname
        };
    }, [
        canonicalUrl
    ]);
    const changeByServerResponse = useChangeByServerResponse(dispatch);
    const navigate = useNavigate(dispatch);
    useServerActionDispatcher(dispatch);
    /**
   * The app router that is exposed through `useRouter`. It's only concerned with dispatching actions to the reducer, does not hold state.
   */ const appRouter = (0, _react.useMemo)(()=>{
        const routerInstance = {
            back: ()=>window.history.back(),
            forward: ()=>window.history.forward(),
            prefetch: (href, options)=>{
                // Don't prefetch for bots as they don't navigate.
                // Don't prefetch during development (improves compilation performance)
                if ((0, _isbot.isBot)(window.navigator.userAgent) || "production" === "development") {
                    return;
                }
                const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
                // External urls can't be prefetched in the same way.
                if (isExternalURL(url)) {
                    return;
                }
                (0, _react.startTransition)(()=>{
                    var _options_kind;
                    dispatch({
                        type: _routerreducertypes.ACTION_PREFETCH,
                        url,
                        kind: (_options_kind = options == null ? void 0 : options.kind) != null ? _options_kind : _routerreducertypes.PrefetchKind.FULL
                    });
                });
            },
            replace: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, "replace", Boolean(options.forceOptimisticNavigation), (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            push: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, "push", Boolean(options.forceOptimisticNavigation), (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            refresh: ()=>{
                (0, _react.startTransition)(()=>{
                    dispatch({
                        type: _routerreducertypes.ACTION_REFRESH,
                        cache: createEmptyCacheNode(),
                        mutable: {},
                        origin: window.location.origin
                    });
                });
            },
            // @ts-ignore we don't want to expose this method at all
            fastRefresh: ()=>{
                if (true) {
                    throw new Error("fastRefresh can only be used in development mode. Please use refresh instead.");
                } else {}
            }
        };
        return routerInstance;
    }, [
        dispatch,
        navigate
    ]);
    (0, _react.useEffect)(()=>{
        // Exists for debugging purposes. Don't use in application code.
        if (window.next) {
            window.next.router = appRouter;
        }
    }, [
        appRouter
    ]);
    if (false) {}
    (0, _react.useEffect)(()=>{
        // If the app is restored from bfcache, it's possible that
        // pushRef.mpaNavigation is true, which would mean that any re-render of this component
        // would trigger the mpa navigation logic again from the lines below.
        // This will restore the router to the initial state in the event that the app is restored from bfcache.
        function handlePageShow(event) {
            var _window_history_state;
            if (!event.persisted || !((_window_history_state = window.history.state) == null ? void 0 : _window_history_state.tree)) return;
            dispatch({
                type: _routerreducertypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: window.history.state.tree
            });
        }
        window.addEventListener("pageshow", handlePageShow);
        return ()=>{
            window.removeEventListener("pageshow", handlePageShow);
        };
    }, [
        dispatch
    ]);
    // When mpaNavigation flag is set do a hard navigation to the new url.
    // Infinitely suspend because we don't actually want to rerender any child
    // components with the new URL and any entangled state updates shouldn't
    // commit either (eg: useTransition isPending should stay true until the page
    // unloads).
    //
    // This is a side effect in render. Don't try this at home, kids. It's
    // probably safe because we know this is a singleton component and it's never
    // in <Offscreen>. At least I hope so. (It will run twice in dev strict mode,
    // but that's... fine?)
    if (pushRef.mpaNavigation) {
        const location1 = window.location;
        if (pushRef.pendingPush) {
            location1.assign(canonicalUrl);
        } else {
            location1.replace(canonicalUrl);
        }
        // TODO-APP: Should we listen to navigateerror here to catch failed
        // navigations somehow? And should we call window.stop() if a SPA navigation
        // should interrupt an MPA one?
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    /**
   * Handle popstate event, this is used to handle back/forward in the browser.
   * By default dispatches ACTION_RESTORE, however if the history entry was not pushed/replaced by app-router it will reload the page.
   * That case can happen when the old router injected the history entry.
   */ const onPopState = (0, _react.useCallback)((param)=>{
        let { state } = param;
        if (!state) {
            // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
            return;
        }
        // This case happens when the history entry was pushed by the `pages` router.
        if (!state.__NA) {
            window.location.reload();
            return;
        }
        // @ts-ignore useTransition exists
        // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
        // Without startTransition works if the cache is there for this path
        (0, _react.startTransition)(()=>{
            dispatch({
                type: _routerreducertypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: state.tree
            });
        });
    }, [
        dispatch
    ]);
    // Register popstate event to call onPopstate.
    (0, _react.useEffect)(()=>{
        window.addEventListener("popstate", onPopState);
        return ()=>{
            window.removeEventListener("popstate", onPopState);
        };
    }, [
        onPopState
    ]);
    const head = (0, _react.useMemo)(()=>{
        return (0, _findheadincache.findHeadInCache)(cache, tree[1]);
    }, [
        cache,
        tree
    ]);
    let content = /*#__PURE__*/ _react.default.createElement(_redirectboundary.RedirectBoundary, null, head, cache.subTreeData, /*#__PURE__*/ _react.default.createElement(_approuterannouncer.AppRouterAnnouncer, {
        tree: tree
    }));
    if (false) {}
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(HistoryUpdater, {
        tree: tree,
        pushRef: pushRef,
        canonicalUrl: canonicalUrl,
        sync: sync
    }), /*#__PURE__*/ _react.default.createElement(_hooksclientcontext.PathnameContext.Provider, {
        value: pathname
    }, /*#__PURE__*/ _react.default.createElement(_hooksclientcontext.SearchParamsContext.Provider, {
        value: searchParams
    }, /*#__PURE__*/ _react.default.createElement(_approutercontext.GlobalLayoutRouterContext.Provider, {
        value: {
            buildId,
            changeByServerResponse,
            tree,
            focusAndScrollRef,
            nextUrl
        }
    }, /*#__PURE__*/ _react.default.createElement(_approutercontext.AppRouterContext.Provider, {
        value: appRouter
    }, /*#__PURE__*/ _react.default.createElement(_approutercontext.LayoutRouterContext.Provider, {
        value: {
            childNodes: cache.parallelRoutes,
            tree: tree,
            // Root node always has `url`
            // Provided in AppTreeContext to ensure it can be overwritten in layout-router
            url: canonicalUrl
        }
    }, content))))));
}
function AppRouter(props) {
    const { globalErrorComponent, ...rest } = props;
    return /*#__PURE__*/ _react.default.createElement(_errorboundary.ErrorBoundary, {
        errorComponent: globalErrorComponent
    }, /*#__PURE__*/ _react.default.createElement(Router, rest));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 45661:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "bailoutToClientRendering", ({
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
}));
const _dynamicnossr = __webpack_require__(89708);
const _staticgenerationasyncstorage = __webpack_require__(13539);
function bailoutToClientRendering() {
    const staticGenerationStore = _staticgenerationasyncstorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _dynamicnossr.suspense)();
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 22633:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "clientHookInServerComponentError", ({
    enumerable: true,
    get: function() {
        return clientHookInServerComponentError;
    }
}));
const _interop_require_default = __webpack_require__(82147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(18038));
function clientHookInServerComponentError(hookName) {
    if (false) {}
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-hook-in-server-component-error.js.map


/***/ }),

/***/ 31232:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorBoundaryHandler: function() {
        return ErrorBoundaryHandler;
    },
    GlobalError: function() {
        return GlobalError;
    },
    // Exported so that the import signature in the loaders can be identical to user
    // supplied custom global error signatures.
    default: function() {
        return _default;
    },
    ErrorBoundary: function() {
        return ErrorBoundary;
    }
});
const _interop_require_default = __webpack_require__(82147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(18038));
const _navigation = __webpack_require__(90696);
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "28px",
        margin: "0 8px"
    }
};
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.error) {
            return {
                error: null,
                previousPathname: props.pathname
            };
        }
        return {
            error: state.error,
            previousPathname: props.pathname
        };
    }
    render() {
        if (this.state.error) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, this.props.errorStyles, /*#__PURE__*/ _react.default.createElement(this.props.errorComponent, {
                error: this.state.error,
                reset: this.reset
            }));
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null,
            previousPathname: this.props.pathname
        };
    }
}
function GlobalError(param) {
    let { error } = param;
    const digest = error == null ? void 0 : error.digest;
    return /*#__PURE__*/ _react.default.createElement("html", {
        id: "__next_error__"
    }, /*#__PURE__*/ _react.default.createElement("head", null), /*#__PURE__*/ _react.default.createElement("body", null, /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.error
    }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("h2", {
        style: styles.text
    }, "Application error: a " + (digest ? "server" : "client") + "-side exception has occurred (see the " + (digest ? "server logs" : "browser console") + " for more information)."), digest ? /*#__PURE__*/ _react.default.createElement("p", {
        style: styles.text
    }, "Digest: " + digest) : null))));
}
const _default = GlobalError;
function ErrorBoundary(param) {
    let { errorComponent, errorStyles, children } = param;
    const pathname = (0, _navigation.usePathname)();
    if (errorComponent) {
        return /*#__PURE__*/ _react.default.createElement(ErrorBoundaryHandler, {
            pathname: pathname,
            errorComponent: errorComponent,
            errorStyles: errorStyles
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 28047:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DYNAMIC_ERROR_CODE: function() {
        return DYNAMIC_ERROR_CODE;
    },
    DynamicServerError: function() {
        return DynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
class DynamicServerError extends Error {
    constructor(type){
        super("Dynamic server usage: " + type);
        this.digest = DYNAMIC_ERROR_CODE;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map


/***/ }),

/***/ 96360:
/***/ ((module, exports) => {

"use strict";
/**
 * Used to cache in createInfinitePromise
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createInfinitePromise", ({
    enumerable: true,
    get: function() {
        return createInfinitePromise;
    }
}));
let infinitePromise;
function createInfinitePromise() {
    if (!infinitePromise) {
        // Only create the Promise once
        infinitePromise = new Promise(()=>{
        // This is used to debug when the rendering is never updated.
        // setTimeout(() => {
        //   infinitePromise = new Error('Infinite promise')
        //   resolve()
        // }, 5000)
        });
    }
    return infinitePromise;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=infinite-promise.js.map


/***/ }),

/***/ 50831:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return OuterLayoutRouter;
    }
}));
const _interop_require_default = __webpack_require__(82147);
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(18038));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__webpack_require__(98704));
const _approutercontext = __webpack_require__(57085);
const _fetchserverresponse = __webpack_require__(38080);
const _infinitepromise = __webpack_require__(96360);
const _errorboundary = __webpack_require__(31232);
const _matchsegments = __webpack_require__(17618);
const _handlesmoothscroll = __webpack_require__(17887);
const _redirectboundary = __webpack_require__(81442);
const _notfoundboundary = __webpack_require__(16505);
const _getsegmentvalue = __webpack_require__(97741);
const _createroutercachekey = __webpack_require__(88870);
/**
 * Add refetch marker to router state at the point of the current layout segment.
 * This ensures the response returned is not further down than the current layout segment.
 */ function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchsegments.matchSegment)(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        {
                            ...treeToRecreate[1],
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                "refetch"
                            ]
                        }
                    ];
                }
                return [
                    treeToRecreate[0],
                    {
                        ...treeToRecreate[1],
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    }
                ];
            }
        }
    }
    return treeToRecreate;
}
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (true) return null;
    // Only apply strict mode warning when not in production
    if (false) {}
    return _reactdom.default.findDOMNode(instance);
}
const rectProperties = [
    "bottom",
    "height",
    "left",
    "right",
    "top",
    "width",
    "x",
    "y"
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        "sticky",
        "fixed"
    ].includes(getComputedStyle(element).position)) {
        if (false) {}
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === "top") {
        return document.body;
    }
    var _document_getElementById;
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return (_document_getElementById = document.getElementById(hashFragment)) != null ? _document_getElementById : document.getElementsByName(hashFragment)[0];
}
class InnerScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        // Because this property is overwritten in handlePotentialScroll it's fine to always run it when true as it'll be set to false for subsequent renders.
        if (this.props.focusAndScrollRef.apply) {
            this.handlePotentialScroll();
        }
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args);
        this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
            const { focusAndScrollRef, segmentPath } = this.props;
            if (focusAndScrollRef.apply) {
                // segmentPaths is an array of segment paths that should be scrolled to
                // if the current segment path is not in the array, the scroll is not applied
                // unless the array is empty, in which case the scroll is always applied
                if (focusAndScrollRef.segmentPaths.length !== 0 && !focusAndScrollRef.segmentPaths.some((scrollRefSegmentPath)=>segmentPath.every((segment, index)=>(0, _matchsegments.matchSegment)(segment, scrollRefSegmentPath[index])))) {
                    return;
                }
                let domNode = null;
                const hashFragment = focusAndScrollRef.hashFragment;
                if (hashFragment) {
                    domNode = getHashFragmentDomNode(hashFragment);
                }
                // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
                // This already caused a bug where the first child was a <link/> in head.
                if (!domNode) {
                    domNode = findDOMNode(this);
                }
                // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
                if (!(domNode instanceof Element)) {
                    return;
                }
                // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
                // If the element is skipped, try to select the next sibling and try again.
                while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                    // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                    if (domNode.nextElementSibling === null) {
                        return;
                    }
                    domNode = domNode.nextElementSibling;
                }
                // State is mutated to ensure that the focus and scroll is applied only once.
                focusAndScrollRef.apply = false;
                focusAndScrollRef.hashFragment = null;
                focusAndScrollRef.segmentPaths = [];
                (0, _handlesmoothscroll.handleSmoothScroll)(()=>{
                    // In case of hash scroll, we only need to scroll the element into view
                    if (hashFragment) {
                        domNode.scrollIntoView();
                        return;
                    }
                    // Store the current viewport height because reading `clientHeight` causes a reflow,
                    // and it won't change during this function.
                    const htmlElement = document.documentElement;
                    const viewportHeight = htmlElement.clientHeight;
                    // If the element's top edge is already in the viewport, exit early.
                    if (topOfElementInViewport(domNode, viewportHeight)) {
                        return;
                    }
                    // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                    // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                    // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                    // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                    htmlElement.scrollTop = 0;
                    // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                    if (!topOfElementInViewport(domNode, viewportHeight)) {
                        domNode.scrollIntoView();
                    }
                }, {
                    // We will force layout by querying domNode position
                    dontForceLayout: true,
                    onlyHashChange: focusAndScrollRef.onlyHashChange
                });
                // Mutate after scrolling so that it can be read by `handleSmoothScroll`
                focusAndScrollRef.onlyHashChange = false;
                // Set focus on the element
                domNode.focus();
            }
        };
    }
}
function ScrollAndFocusHandler(param) {
    let { segmentPath, children } = param;
    const context = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    return /*#__PURE__*/ _react.default.createElement(InnerScrollAndFocusHandler, {
        segmentPath: segmentPath,
        focusAndScrollRef: context.focusAndScrollRef
    }, children);
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter(param) {
    let { parallelRouterKey, url, childNodes, childProp, segmentPath, tree, // isActive,
    cacheKey } = param;
    const context = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    const { buildId, changeByServerResponse, tree: fullTree } = context;
    // Read segment path from the parallel router cache node.
    let childNode = childNodes.get(cacheKey);
    // If childProp is available this means it's the Flight / SSR case.
    if (childProp && // TODO-APP: verify if this can be null based on user code
    childProp.current !== null) {
        if (!childNode) {
            // Add the segment's subTreeData to the cache.
            // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
            childNode = {
                status: _approutercontext.CacheStates.READY,
                data: null,
                subTreeData: childProp.current,
                parallelRoutes: new Map()
            };
            childNodes.set(cacheKey, childNode);
        } else {
            if (childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED) {
                // @ts-expect-error we're changing it's type!
                childNode.status = _approutercontext.CacheStates.READY;
                // @ts-expect-error
                childNode.subTreeData = childProp.current;
            }
        }
    }
    // When childNode is not available during rendering client-side we need to fetch it from the server.
    if (!childNode || childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED) {
        /**
     * Router state with refetch marker added
     */ // TODO-APP: remove ''
        const refetchTree = walkAddRefetch([
            "",
            ...segmentPath
        ], fullTree);
        childNode = {
            status: _approutercontext.CacheStates.DATA_FETCH,
            data: (0, _fetchserverresponse.fetchServerResponse)(new URL(url, location.origin), refetchTree, context.nextUrl, buildId),
            subTreeData: null,
            head: childNode && childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED ? childNode.head : undefined,
            parallelRoutes: childNode && childNode.status === _approutercontext.CacheStates.LAZY_INITIALIZED ? childNode.parallelRoutes : new Map()
        };
        /**
     * Flight data fetch kicked off during render and put into the cache.
     */ childNodes.set(cacheKey, childNode);
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (!childNode) {
        throw new Error("Child node should always exist");
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (childNode.subTreeData && childNode.data) {
        throw new Error("Child node should not have both subTreeData and data");
    }
    // If cache node has a data request we have to unwrap response by `use` and update the cache.
    if (childNode.data) {
        /**
     * Flight response data
     */ // When the data has not resolved yet `use` will suspend here.
        const [flightData, overrideCanonicalUrl] = (0, _react.use)(childNode.data);
        // segmentPath from the server does not match the layout's segmentPath
        childNode.data = null;
        // setTimeout is used to start a new transition during render, this is an intentional hack around React.
        setTimeout(()=>{
            (0, _react.startTransition)(()=>{
                changeByServerResponse(fullTree, flightData, overrideCanonicalUrl);
            });
        });
        // Suspend infinitely as `changeByServerResponse` will cause a different part of the tree to be rendered.
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    // If cache node has no subTreeData and no data request we have to infinitely suspend as the data will likely flow in from another place.
    // TODO-APP: double check users can't return null in a component that will kick in here.
    if (!childNode.subTreeData) {
        (0, _react.use)((0, _infinitepromise.createInfinitePromise)());
    }
    const subtree = /*#__PURE__*/ _react.default.createElement(_approutercontext.LayoutRouterContext.Provider, {
        value: {
            tree: tree[1][parallelRouterKey],
            childNodes: childNode.parallelRoutes,
            // TODO-APP: overriding of url for parallel routes
            url: url
        }
    }, childNode.subTreeData);
    // Ensure root layout is not wrapped in a div as the root layout renders `<html>`
    return subtree;
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary(param) {
    let { children, loading, loadingStyles, hasLoading } = param;
    if (hasLoading) {
        return /*#__PURE__*/ _react.default.createElement(_react.Suspense, {
            fallback: /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, loadingStyles, loading)
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
function OuterLayoutRouter(param) {
    let { parallelRouterKey, segmentPath, childProp, error, errorStyles, templateStyles, loading, loadingStyles, hasLoading, template, notFound, notFoundStyles, styles } = param;
    const context = (0, _react.useContext)(_approutercontext.LayoutRouterContext);
    if (!context) {
        throw new Error("invariant expected layout router to be mounted");
    }
    const { childNodes, tree, url } = context;
    // Get the current parallelRouter cache node
    let childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!childNodesForParallelRouter) {
        childNodesForParallelRouter = new Map();
        childNodes.set(parallelRouterKey, childNodesForParallelRouter);
    }
    // Get the active segment in the tree
    // The reason arrays are used in the data format is that these are transferred from the server to the browser so it's optimized to save bytes.
    const treeSegment = tree[1][parallelRouterKey][0];
    const childPropSegment = childProp.segment;
    // If segment is an array it's a dynamic route and we want to read the dynamic route value as the segment to get from the cache.
    const currentChildSegmentValue = (0, _getsegmentvalue.getSegmentValue)(treeSegment);
    /**
   * Decides which segments to keep rendering, all segments that are not active will be wrapped in `<Offscreen>`.
   */ // TODO-APP: Add handling of `<Offscreen>` when it's available.
    const preservedSegments = [
        treeSegment
    ];
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, styles, preservedSegments.map((preservedSegment)=>{
        const isChildPropSegment = (0, _matchsegments.matchSegment)(preservedSegment, childPropSegment);
        const preservedSegmentValue = (0, _getsegmentvalue.getSegmentValue)(preservedSegment);
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(preservedSegment);
        return(/*
            - Error boundary
              - Only renders error boundary if error component is provided.
              - Rendered for each segment to ensure they have their own error state.
            - Loading boundary
              - Only renders suspense boundary if loading components is provided.
              - Rendered for each segment to ensure they have their own loading state.
              - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
          */ /*#__PURE__*/ _react.default.createElement(_approutercontext.TemplateContext.Provider, {
            key: (0, _createroutercachekey.createRouterCacheKey)(preservedSegment, true),
            value: /*#__PURE__*/ _react.default.createElement(ScrollAndFocusHandler, {
                segmentPath: segmentPath
            }, /*#__PURE__*/ _react.default.createElement(_errorboundary.ErrorBoundary, {
                errorComponent: error,
                errorStyles: errorStyles
            }, /*#__PURE__*/ _react.default.createElement(LoadingBoundary, {
                hasLoading: hasLoading,
                loading: loading,
                loadingStyles: loadingStyles
            }, /*#__PURE__*/ _react.default.createElement(_notfoundboundary.NotFoundBoundary, {
                notFound: notFound,
                notFoundStyles: notFoundStyles
            }, /*#__PURE__*/ _react.default.createElement(_redirectboundary.RedirectBoundary, null, /*#__PURE__*/ _react.default.createElement(InnerLayoutRouter, {
                parallelRouterKey: parallelRouterKey,
                url: url,
                tree: tree,
                childNodes: childNodesForParallelRouter,
                childProp: isChildPropSegment ? childProp : null,
                segmentPath: segmentPath,
                cacheKey: cacheKey,
                isActive: currentChildSegmentValue === preservedSegmentValue
            }))))))
        }, templateStyles, template));
    }));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 17618:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    matchSegment: function() {
        return matchSegment;
    },
    canSegmentBeOverridden: function() {
        return canSegmentBeOverridden;
    }
});
const _getsegmentparam = __webpack_require__(41844);
const matchSegment = (existingSegment, segment)=>{
    // segment is either Array or string
    if (typeof existingSegment === "string") {
        if (typeof segment === "string") {
            // Common case: segment is just a string
            return existingSegment === segment;
        }
        return false;
    }
    if (typeof segment === "string") {
        return false;
    }
    return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
};
const canSegmentBeOverridden = (existingSegment, segment)=>{
    var _getSegmentParam;
    if (Array.isArray(existingSegment) || !Array.isArray(segment)) {
        return false;
    }
    return ((_getSegmentParam = (0, _getsegmentparam.getSegmentParam)(existingSegment)) == null ? void 0 : _getSegmentParam.param) === segment[0];
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map


/***/ }),

/***/ 90696:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
// useLayoutSegments() // Only the segments for the current place. ['children', 'dashboard', 'children', 'integrations'] -> /dashboard/integrations (/dashboard/layout.js would get ['children', 'dashboard', 'children', 'integrations'])

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    usePathname: function() {
        return usePathname;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtml.ServerInsertedHTMLContext;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtml.useServerInsertedHTML;
    },
    useRouter: function() {
        return useRouter;
    },
    useParams: function() {
        return useParams;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    notFound: function() {
        return _notfound.notFound;
    }
});
const _react = __webpack_require__(18038);
const _approutercontext = __webpack_require__(57085);
const _hooksclientcontext = __webpack_require__(39569);
const _clienthookinservercomponenterror = __webpack_require__(22633);
const _getsegmentvalue = __webpack_require__(97741);
const _serverinsertedhtml = __webpack_require__(79618);
const _redirect = __webpack_require__(82622);
const _notfound = __webpack_require__(5858);
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
        this.size = urlSearchParams.size;
    }
}
function useSearchParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSearchParams");
    const searchParams = (0, _react.useContext)(_hooksclientcontext.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (true) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __webpack_require__(45661);
        if (bailoutToClientRendering()) {
            // TODO-APP: handle dynamic = 'force-static' here and on the client
            return readonlySearchParams;
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("usePathname");
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontext.PathnameContext);
}
function useRouter() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useRouter");
    const router = (0, _react.useContext)(_approutercontext.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// this function performs a depth-first search of the tree to find the selected
// params
function getSelectedParams(tree, params) {
    if (params === void 0) params = {};
    const parallelRoutes = tree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith("__PAGE__")) continue;
        // Ensure catchAll and optional catchall are turned into an array
        const isCatchAll = isDynamicParameter && (segment[2] === "c" || segment[2] === "oc");
        if (isCatchAll) {
            params[segment[0]] = segment[1].split("/");
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
function useParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useParams");
    const globalLayoutRouterContext = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!globalLayoutRouterContext) {
        // This only happens in `pages`. Type is overwritten in navigation.d.ts
        return null;
    }
    return getSelectedParams(globalLayoutRouterContext.tree);
}
// TODO-APP: handle parallel routes
/**
 * Get the canonical parameters from the current level to the leaf node.
 */ function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith("__PAGE__")) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegments");
    const { tree } = (0, _react.useContext)(_approutercontext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegment");
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 16505:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NotFoundBoundary", ({
    enumerable: true,
    get: function() {
        return NotFoundBoundary;
    }
}));
const _interop_require_default = __webpack_require__(82147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(18038));
const _navigation = __webpack_require__(90696);
class NotFoundErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((error == null ? void 0 : error.digest) === "NEXT_NOT_FOUND") {
            return {
                notFoundTriggered: true
            };
        }
        // Re-throw if error is not for 404
        throw error;
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.notFoundTriggered) {
            return {
                notFoundTriggered: false,
                previousPathname: props.pathname
            };
        }
        return {
            notFoundTriggered: state.notFoundTriggered,
            previousPathname: props.pathname
        };
    }
    render() {
        if (this.state.notFoundTriggered) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            }),  false && /*#__PURE__*/ 0, this.props.notFoundStyles, this.props.notFound);
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            notFoundTriggered: !!props.asNotFound,
            previousPathname: props.pathname
        };
    }
}
function NotFoundBoundary(param) {
    let { notFound, notFoundStyles, asNotFound, children } = param;
    const pathname = (0, _navigation.usePathname)();
    return notFound ? /*#__PURE__*/ _react.default.createElement(NotFoundErrorBoundary, {
        pathname: pathname,
        notFound: notFound,
        notFoundStyles: notFoundStyles,
        asNotFound: asNotFound
    }, children) : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found-boundary.js.map


/***/ }),

/***/ 5858:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    notFound: function() {
        return notFound;
    },
    isNotFoundError: function() {
        return isNotFoundError;
    }
});
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
function isNotFoundError(error) {
    return (error == null ? void 0 : error.digest) === NOT_FOUND_ERROR_CODE;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 18811:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/*
    This is a simple promise queue that allows you to limit the number of concurrent promises
    that are running at any given time. It's used to limit the number of concurrent
    prefetch requests that are being made to the server but could be used for other
    things as well.
*/ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "PromiseQueue", ({
    enumerable: true,
    get: function() {
        return PromiseQueue;
    }
}));
const _class_private_field_loose_base = __webpack_require__(88324);
const _class_private_field_loose_key = __webpack_require__(94567);
var _maxConcurrency = /*#__PURE__*/ _class_private_field_loose_key._("_maxConcurrency"), _runningCount = /*#__PURE__*/ _class_private_field_loose_key._("_runningCount"), _queue = /*#__PURE__*/ _class_private_field_loose_key._("_queue"), _processNext = /*#__PURE__*/ _class_private_field_loose_key._("_processNext");
class PromiseQueue {
    enqueue(promiseFn) {
        let taskResolve;
        let taskReject;
        const taskPromise = new Promise((resolve, reject)=>{
            taskResolve = resolve;
            taskReject = reject;
        });
        const task = async ()=>{
            try {
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]++;
                const result = await promiseFn();
                taskResolve(result);
            } catch (error) {
                taskReject(error);
            } finally{
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]--;
                _class_private_field_loose_base._(this, _processNext)[_processNext]();
            }
        };
        const enqueueResult = {
            promiseFn: taskPromise,
            task
        };
        // wonder if we should take a LIFO approach here
        _class_private_field_loose_base._(this, _queue)[_queue].push(enqueueResult);
        _class_private_field_loose_base._(this, _processNext)[_processNext]();
        return taskPromise;
    }
    bump(promiseFn) {
        const index = _class_private_field_loose_base._(this, _queue)[_queue].findIndex((item)=>item.promiseFn === promiseFn);
        if (index > -1) {
            const bumpedItem = _class_private_field_loose_base._(this, _queue)[_queue].splice(index, 1)[0];
            _class_private_field_loose_base._(this, _queue)[_queue].unshift(bumpedItem);
            _class_private_field_loose_base._(this, _processNext)[_processNext](true);
        }
    }
    constructor(maxConcurrency = 5){
        Object.defineProperty(this, _processNext, {
            value: processNext
        });
        Object.defineProperty(this, _maxConcurrency, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _runningCount, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _queue, {
            writable: true,
            value: void 0
        });
        _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] = maxConcurrency;
        _class_private_field_loose_base._(this, _runningCount)[_runningCount] = 0;
        _class_private_field_loose_base._(this, _queue)[_queue] = [];
    }
}
function processNext(forced) {
    if (forced === void 0) forced = false;
    if ((_class_private_field_loose_base._(this, _runningCount)[_runningCount] < _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] || forced) && _class_private_field_loose_base._(this, _queue)[_queue].length > 0) {
        var _class_private_field_loose_base__queue_shift;
        (_class_private_field_loose_base__queue_shift = _class_private_field_loose_base._(this, _queue)[_queue].shift()) == null ? void 0 : _class_private_field_loose_base__queue_shift.task();
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=promise-queue.js.map


/***/ }),

/***/ 81442:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectErrorBoundary: function() {
        return RedirectErrorBoundary;
    },
    RedirectBoundary: function() {
        return RedirectBoundary;
    }
});
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(18038));
const _navigation = __webpack_require__(90696);
const _redirect = __webpack_require__(82622);
function HandleRedirect(param) {
    let { redirect, reset, redirectType } = param;
    const router = (0, _navigation.useRouter)();
    (0, _react.useEffect)(()=>{
        // @ts-ignore startTransition exists
        _react.default.startTransition(()=>{
            if (redirectType === _redirect.RedirectType.push) {
                router.push(redirect, {});
            } else {
                router.replace(redirect, {});
            }
            reset();
        });
    }, [
        redirect,
        redirectType,
        reset,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _redirect.isRedirectError)(error)) {
            const url = (0, _redirect.getURLFromRedirectError)(error);
            const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
            return {
                redirect: url,
                redirectType
            };
        }
        // Re-throw if error is not for redirect
        throw error;
    }
    render() {
        const { redirect, redirectType } = this.state;
        if (redirect !== null && redirectType !== null) {
            return /*#__PURE__*/ _react.default.createElement(HandleRedirect, {
                redirect: redirect,
                redirectType: redirectType,
                reset: ()=>this.setState({
                        redirect: null
                    })
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            redirect: null,
            redirectType: null
        };
    }
}
function RedirectBoundary(param) {
    let { children } = param;
    const router = (0, _navigation.useRouter)();
    return /*#__PURE__*/ _react.default.createElement(RedirectErrorBoundary, {
        router: router
    }, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-boundary.js.map


/***/ }),

/***/ 82622:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectType: function() {
        return RedirectType;
    },
    getRedirectError: function() {
        return getRedirectError;
    },
    redirect: function() {
        return redirect;
    },
    isRedirectError: function() {
        return isRedirectError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    }
});
const _requestasyncstorage = __webpack_require__(1715);
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
var RedirectType;
(function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
})(RedirectType || (RedirectType = {}));
function getRedirectError(url, type) {
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ";" + type + ";" + url;
    const requestStore = _requestasyncstorage.requestAsyncStorage.getStore();
    if (requestStore) {
        error.mutableCookies = requestStore.mutableCookies;
    }
    return error;
}
function redirect(url, type) {
    if (type === void 0) type = "replace";
    throw getRedirectError(url, type);
}
function isRedirectError(error) {
    if (typeof (error == null ? void 0 : error.digest) !== "string") return false;
    const [errorCode, type, destination] = error.digest.split(";", 3);
    return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string";
}
function getURLFromRedirectError(error) {
    if (!isRedirectError(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(";", 3)[2];
}
function getRedirectTypeFromError(error) {
    if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
    }
    return error.digest.split(";", 3)[1];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map


/***/ }),

/***/ 56926:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
}));
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(18038));
const _approutercontext = __webpack_require__(57085);
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontext.TemplateContext);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 94173:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "applyFlightData", ({
    enumerable: true,
    get: function() {
        return applyFlightData;
    }
}));
const _approutercontext = __webpack_require__(57085);
const _filllazyitemstillleafwithhead = __webpack_require__(32684);
const _fillcachewithnewsubtreedata = __webpack_require__(38921);
function applyFlightData(existingCache, cache, flightDataPath, wasPrefetched) {
    if (wasPrefetched === void 0) wasPrefetched = false;
    // The one before last item is the router state tree patch
    const [treePatch, subTreeData, head] = flightDataPath.slice(-3);
    // Handles case where prefetch only returns the router tree patch without rendered components.
    if (subTreeData === null) {
        return false;
    }
    if (flightDataPath.length === 3) {
        cache.status = _approutercontext.CacheStates.READY;
        cache.subTreeData = subTreeData;
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, existingCache, treePatch, head, wasPrefetched);
    } else {
        // Copy subTreeData for the root node of the cache.
        cache.status = _approutercontext.CacheStates.READY;
        cache.subTreeData = existingCache.subTreeData;
        cache.parallelRoutes = new Map(existingCache.parallelRoutes);
        // Create a copy of the existing cache with the subTreeData applied.
        (0, _fillcachewithnewsubtreedata.fillCacheWithNewSubTreeData)(cache, existingCache, flightDataPath, wasPrefetched);
    }
    return true;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-flight-data.js.map


/***/ }),

/***/ 63914:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "applyRouterStatePatchToTree", ({
    enumerable: true,
    get: function() {
        return applyRouterStatePatchToTree;
    }
}));
const _matchsegments = __webpack_require__(17618);
/**
 * Deep merge of the two router states. Parallel route keys are preserved if the patch doesn't have them.
 */ function applyPatch(initialTree, patchTree) {
    const [initialSegment, initialParallelRoutes] = initialTree;
    const [patchSegment, patchParallelRoutes] = patchTree;
    // if the applied patch segment is __DEFAULT__ then we can ignore it and return the initial tree
    // this is because the __DEFAULT__ segment is used as a placeholder on navigation
    if (patchSegment === "__DEFAULT__" && initialSegment !== "__DEFAULT__") {
        return initialTree;
    }
    if ((0, _matchsegments.matchSegment)(initialSegment, patchSegment)) {
        const newParallelRoutes = {};
        for(const key in initialParallelRoutes){
            const isInPatchTreeParallelRoutes = typeof patchParallelRoutes[key] !== "undefined";
            if (isInPatchTreeParallelRoutes) {
                newParallelRoutes[key] = applyPatch(initialParallelRoutes[key], patchParallelRoutes[key]);
            } else {
                newParallelRoutes[key] = initialParallelRoutes[key];
            }
        }
        for(const key in patchParallelRoutes){
            if (newParallelRoutes[key]) {
                continue;
            }
            newParallelRoutes[key] = patchParallelRoutes[key];
        }
        const tree = [
            initialSegment,
            newParallelRoutes
        ];
        if (initialTree[2]) {
            tree[2] = initialTree[2];
        }
        if (initialTree[3]) {
            tree[3] = initialTree[3];
        }
        if (initialTree[4]) {
            tree[4] = initialTree[4];
        }
        return tree;
    }
    return patchTree;
}
function applyRouterStatePatchToTree(flightSegmentPath, flightRouterState, treePatch) {
    const [segment, parallelRoutes, , , isRootLayout] = flightRouterState;
    // Root refresh
    if (flightSegmentPath.length === 1) {
        const tree = applyPatch(flightRouterState, treePatch);
        return tree;
    }
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Tree path returned from the server should always match up with the current tree in the browser
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        return null;
    }
    const lastSegment = flightSegmentPath.length === 2;
    let parallelRoutePatch;
    if (lastSegment) {
        parallelRoutePatch = applyPatch(parallelRoutes[parallelRouteKey], treePatch);
    } else {
        parallelRoutePatch = applyRouterStatePatchToTree(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey], treePatch);
        if (parallelRoutePatch === null) {
            return null;
        }
    }
    const tree = [
        flightSegmentPath[0],
        {
            ...parallelRoutes,
            [parallelRouteKey]: parallelRoutePatch
        }
    ];
    // Current segment is the root layout
    if (isRootLayout) {
        tree[4] = true;
    }
    return tree;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-router-state-patch-to-tree.js.map


/***/ }),

/***/ 89089:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    extractPathFromFlightRouterState: function() {
        return extractPathFromFlightRouterState;
    },
    computeChangedPath: function() {
        return computeChangedPath;
    }
});
const _interceptionroutes = __webpack_require__(96624);
const _matchsegments = __webpack_require__(17618);
const segmentToPathname = (segment)=>{
    if (typeof segment === "string") {
        return segment;
    }
    return segment[1];
};
function normalizePathname(pathname) {
    return pathname.split("/").reduce((acc, segment)=>{
        if (segment === "" || segment.startsWith("(") && segment.endsWith(")")) {
            return acc;
        }
        return acc + "/" + segment;
    }, "") || "/";
}
function extractPathFromFlightRouterState(flightRouterState) {
    const segment = Array.isArray(flightRouterState[0]) ? flightRouterState[0][1] : flightRouterState[0];
    if (segment === "__DEFAULT__" || _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m))) return undefined;
    if (segment.startsWith("__PAGE__")) return "";
    const path = [
        segment
    ];
    var _flightRouterState_;
    const parallelRoutes = (_flightRouterState_ = flightRouterState[1]) != null ? _flightRouterState_ : {};
    const childrenPath = parallelRoutes.children ? extractPathFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        path.push(childrenPath);
    } else {
        for (const [key, value] of Object.entries(parallelRoutes)){
            if (key === "children") continue;
            const childPath = extractPathFromFlightRouterState(value);
            if (childPath !== undefined) {
                path.push(childPath);
            }
        }
    }
    // TODO-APP: optimise this, it's not ideal to join and split
    return normalizePathname(path.join("/"));
}
function computeChangedPathImpl(treeA, treeB) {
    const [segmentA, parallelRoutesA] = treeA;
    const [segmentB, parallelRoutesB] = treeB;
    const normalizedSegmentA = segmentToPathname(segmentA);
    const normalizedSegmentB = segmentToPathname(segmentB);
    if (_interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>normalizedSegmentA.startsWith(m) || normalizedSegmentB.startsWith(m))) {
        return "";
    }
    if (!(0, _matchsegments.matchSegment)(segmentA, segmentB)) {
        var _extractPathFromFlightRouterState;
        // once we find where the tree changed, we compute the rest of the path by traversing the tree
        return (_extractPathFromFlightRouterState = extractPathFromFlightRouterState(treeB)) != null ? _extractPathFromFlightRouterState : "";
    }
    for(const parallelRouterKey in parallelRoutesA){
        if (parallelRoutesB[parallelRouterKey]) {
            const changedPath = computeChangedPathImpl(parallelRoutesA[parallelRouterKey], parallelRoutesB[parallelRouterKey]);
            if (changedPath !== null) {
                return segmentToPathname(segmentB) + "/" + changedPath;
            }
        }
    }
    return null;
}
function computeChangedPath(treeA, treeB) {
    const changedPath = computeChangedPathImpl(treeA, treeB);
    if (changedPath == null || changedPath === "/") {
        return changedPath;
    }
    // lightweight normalization to remove route groups
    return normalizePathname(changedPath);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=compute-changed-path.js.map


/***/ }),

/***/ 34331:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createHrefFromUrl", ({
    enumerable: true,
    get: function() {
        return createHrefFromUrl;
    }
}));
function createHrefFromUrl(url, includeHash) {
    if (includeHash === void 0) includeHash = true;
    return url.pathname + url.search + (includeHash ? url.hash : "");
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-href-from-url.js.map


/***/ }),

/***/ 61684:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createInitialRouterState", ({
    enumerable: true,
    get: function() {
        return createInitialRouterState;
    }
}));
const _approutercontext = __webpack_require__(57085);
const _createhreffromurl = __webpack_require__(34331);
const _filllazyitemstillleafwithhead = __webpack_require__(32684);
const _computechangedpath = __webpack_require__(89089);
function createInitialRouterState(param) {
    let { buildId, initialTree, children, initialCanonicalUrl, initialParallelRoutes, isServer, location, initialHead } = param;
    const cache = {
        status: _approutercontext.CacheStates.READY,
        data: null,
        subTreeData: children,
        // The cache gets seeded during the first render. `initialParallelRoutes` ensures the cache from the first render is there during the second render.
        parallelRoutes: isServer ? new Map() : initialParallelRoutes
    };
    // When the cache hasn't been seeded yet we fill the cache with the head.
    if (initialParallelRoutes === null || initialParallelRoutes.size === 0) {
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, initialTree, initialHead);
    }
    var _ref;
    return {
        buildId,
        tree: initialTree,
        cache,
        prefetchCache: new Map(),
        pushRef: {
            pendingPush: false,
            mpaNavigation: false
        },
        focusAndScrollRef: {
            apply: false,
            onlyHashChange: false,
            hashFragment: null,
            segmentPaths: []
        },
        canonicalUrl: // This is safe to do as canonicalUrl can't be rendered, it's only used to control the history updates in the useEffect further down in this file.
        location ? (0, _createhreffromurl.createHrefFromUrl)(location) : initialCanonicalUrl,
        nextUrl: (_ref = (0, _computechangedpath.extractPathFromFlightRouterState)(initialTree) || (location == null ? void 0 : location.pathname)) != null ? _ref : null
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-initial-router-state.js.map


/***/ }),

/***/ 28503:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createOptimisticTree", ({
    enumerable: true,
    get: function() {
        return createOptimisticTree;
    }
}));
const _matchsegments = __webpack_require__(17618);
function createOptimisticTree(segments, flightRouterState, parentRefetch) {
    const [existingSegment, existingParallelRoutes, url, refresh, isRootLayout] = flightRouterState || [
        null,
        {}
    ];
    const segment = segments[0];
    const isLastSegment = segments.length === 1;
    const segmentMatches = existingSegment !== null && (0, _matchsegments.matchSegment)(existingSegment, segment);
    // if there are multiple parallel routes at this level, we need to refetch here
    // to ensure we get the correct tree. This is because we don't know which
    // parallel route will match the next segment.
    const hasMultipleParallelRoutes = Object.keys(existingParallelRoutes).length > 1;
    const shouldRefetchThisLevel = !flightRouterState || !segmentMatches || hasMultipleParallelRoutes;
    let parallelRoutes = {};
    if (existingSegment !== null && segmentMatches) {
        parallelRoutes = existingParallelRoutes;
    }
    let childTree;
    // if there's multiple parallel routes at this level, we shouldn't create an
    // optimistic tree for the next level because we don't know which one will
    // match the next segment.
    if (!isLastSegment && !hasMultipleParallelRoutes) {
        const childItem = createOptimisticTree(segments.slice(1), parallelRoutes ? parallelRoutes.children : null, parentRefetch || shouldRefetchThisLevel);
        childTree = childItem;
    }
    const result = [
        segment,
        {
            ...parallelRoutes,
            ...childTree ? {
                children: childTree
            } : {}
        }
    ];
    if (url) {
        result[2] = url;
    }
    if (!parentRefetch && shouldRefetchThisLevel) {
        result[3] = "refetch";
    } else if (segmentMatches && refresh) {
        result[3] = refresh;
    }
    if (segmentMatches && isRootLayout) {
        result[4] = isRootLayout;
    }
    return result;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-optimistic-tree.js.map


/***/ }),

/***/ 14621:
/***/ ((module, exports) => {

"use strict";
/**
 * Create data fetching record for Promise.
 */ // TODO-APP: change `any` to type inference.

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createRecordFromThenable", ({
    enumerable: true,
    get: function() {
        return createRecordFromThenable;
    }
}));
function createRecordFromThenable(thenable) {
    thenable.status = "pending";
    thenable.then((value)=>{
        if (thenable.status === "pending") {
            thenable.status = "fulfilled";
            thenable.value = value;
        }
    }, (err)=>{
        if (thenable.status === "pending") {
            thenable.status = "rejected";
            thenable.value = err;
        }
    });
    return thenable;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-record-from-thenable.js.map


/***/ }),

/***/ 88870:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createRouterCacheKey", ({
    enumerable: true,
    get: function() {
        return createRouterCacheKey;
    }
}));
function createRouterCacheKey(segment, withoutSearchParameters) {
    if (withoutSearchParameters === void 0) withoutSearchParameters = false;
    return Array.isArray(segment) ? segment[0] + "|" + segment[1] + "|" + segment[2] : withoutSearchParameters && segment.startsWith("__PAGE__") ? "__PAGE__" : segment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-router-cache-key.js.map


/***/ }),

/***/ 38080:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fetchServerResponse", ({
    enumerable: true,
    get: function() {
        return fetchServerResponse;
    }
}));
const _client = __webpack_require__(97897);
const _approuterheaders = __webpack_require__(66265);
const _approuter = __webpack_require__(52987);
const _appcallserver = __webpack_require__(56937);
const _routerreducertypes = __webpack_require__(92836);
const _hash = __webpack_require__(20199);
function doMpaNavigation(url) {
    return [
        (0, _approuter.urlToUrlWithoutFlightMarker)(url).toString(),
        undefined
    ];
}
async function fetchServerResponse(url, flightRouterState, nextUrl, currentBuildId, prefetchKind) {
    const headers = {
        // Enable flight response
        [_approuterheaders.RSC]: "1",
        // Provide the current router state
        [_approuterheaders.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(flightRouterState))
    };
    /**
   * Three cases:
   * - `prefetchKind` is `undefined`, it means it's a normal navigation, so we want to prefetch the page data fully
   * - `prefetchKind` is `full` - we want to prefetch the whole page so same as above
   * - `prefetchKind` is `auto` - if the page is dynamic, prefetch the page data partially, if static prefetch the page data fully
   */ if (prefetchKind === _routerreducertypes.PrefetchKind.AUTO) {
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH] = "1";
    }
    if (nextUrl) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    const uniqueCacheQuery = (0, _hash.hexHash)([
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH] || "0",
        headers[_approuterheaders.NEXT_ROUTER_STATE_TREE],
        headers[_approuterheaders.NEXT_URL]
    ].join(","));
    try {
        let fetchUrl = new URL(url);
        if (true) {
            if (false) {}
        }
        // Add unique cache query to avoid caching conflicts on CDN which don't respect to Vary header
        fetchUrl.searchParams.set(_approuterheaders.NEXT_RSC_UNION_QUERY, uniqueCacheQuery);
        const res = await fetch(fetchUrl, {
            // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
            credentials: "same-origin",
            headers
        });
        const responseUrl = (0, _approuter.urlToUrlWithoutFlightMarker)(res.url);
        const canonicalUrl = res.redirected ? responseUrl : undefined;
        const contentType = res.headers.get("content-type") || "";
        let isFlightResponse = contentType === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
        if (true) {
            if (false) {}
        }
        // If fetch returns something different than flight response handle it like a mpa navigation
        // If the fetch was not 200, we also handle it like a mpa navigation
        if (!isFlightResponse || !res.ok) {
            return doMpaNavigation(responseUrl.toString());
        }
        // Handle the `fetch` readable stream that can be unwrapped by `React.use`.
        const [buildId, flightData] = await (0, _client.createFromFetch)(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        if (currentBuildId !== buildId) {
            return doMpaNavigation(res.url);
        }
        return [
            flightData,
            canonicalUrl
        ];
    } catch (err) {
        console.error("Failed to fetch RSC payload. Falling back to browser navigation.", err);
        // If fetch fails handle it like a mpa navigation
        // TODO-APP: Add a test for the case where a CORS request fails, e.g. external url redirect coming from the response.
        // See https://github.com/vercel/next.js/issues/43605#issuecomment-1451617521 for a reproduction.
        return [
            url.toString(),
            undefined
        ];
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fetch-server-response.js.map


/***/ }),

/***/ 89996:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillCacheWithDataProperty", ({
    enumerable: true,
    get: function() {
        return fillCacheWithDataProperty;
    }
}));
const _approutercontext = __webpack_require__(57085);
const _createroutercachekey = __webpack_require__(88870);
function fillCacheWithDataProperty(newCache, existingCache, flightSegmentPath, fetchResponse, bailOnParallelRoutes) {
    if (bailOnParallelRoutes === void 0) bailOnParallelRoutes = false;
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap || bailOnParallelRoutes && existingCache.parallelRoutes.size > 1) {
        // Bailout because the existing cache does not have the path to the leaf node
        // or the existing cache has multiple parallel routes
        // Will trigger lazy fetch in layout-router because of missing segment
        return {
            bailOptimistic: true
        };
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    // In case of last segment start off the fetch at this level and don't copy further down.
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childSegmentMap.set(cacheKey, {
                status: _approutercontext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Start fetch in the place where the existing cache doesn't have the data yet.
        if (!childCacheNode) {
            childSegmentMap.set(cacheKey, {
                status: _approutercontext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    return fillCacheWithDataProperty(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2), fetchResponse);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-data-property.js.map


/***/ }),

/***/ 38921:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillCacheWithNewSubTreeData", ({
    enumerable: true,
    get: function() {
        return fillCacheWithNewSubTreeData;
    }
}));
const _approutercontext = __webpack_require__(57085);
const _invalidatecachebyrouterstate = __webpack_require__(21727);
const _filllazyitemstillleafwithhead = __webpack_require__(32684);
const _createroutercachekey = __webpack_require__(88870);
function fillCacheWithNewSubTreeData(newCache, existingCache, flightDataPath, wasPrefetched) {
    const isLastEntry = flightDataPath.length <= 5;
    const [parallelRouteKey, segment] = flightDataPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childCacheNode = {
                status: _approutercontext.CacheStates.READY,
                data: null,
                subTreeData: flightDataPath[3],
                // Ensure segments other than the one we got data for are preserved.
                parallelRoutes: existingChildCacheNode ? new Map(existingChildCacheNode.parallelRoutes) : new Map()
            };
            if (existingChildCacheNode) {
                (0, _invalidatecachebyrouterstate.invalidateCacheByRouterState)(childCacheNode, existingChildCacheNode, flightDataPath[2]);
            }
            (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(childCacheNode, existingChildCacheNode, flightDataPath[2], flightDataPath[4], wasPrefetched);
            childSegmentMap.set(cacheKey, childCacheNode);
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    fillCacheWithNewSubTreeData(childCacheNode, existingChildCacheNode, flightDataPath.slice(2), wasPrefetched);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-new-subtree-data.js.map


/***/ }),

/***/ 32684:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fillLazyItemsTillLeafWithHead", ({
    enumerable: true,
    get: function() {
        return fillLazyItemsTillLeafWithHead;
    }
}));
const _approutercontext = __webpack_require__(57085);
const _createroutercachekey = __webpack_require__(88870);
function fillLazyItemsTillLeafWithHead(newCache, existingCache, routerState, head, wasPrefetched) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                const existingCacheNode = parallelRouteCacheNode.get(cacheKey);
                const newCacheNode = wasPrefetched && existingCacheNode ? {
                    status: existingCacheNode.status,
                    data: existingCacheNode.data,
                    subTreeData: existingCacheNode.subTreeData,
                    parallelRoutes: new Map(existingCacheNode.parallelRoutes)
                } : {
                    status: _approutercontext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes)
                };
                // Overrides the cache key with the new cache node.
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                // Traverse deeper to apply the head / fill lazy items till the head.
                fillLazyItemsTillLeafWithHead(newCacheNode, existingCacheNode, parallelRouteState, head, wasPrefetched);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        const newCacheNode = {
            status: _approutercontext.CacheStates.LAZY_INITIALIZED,
            data: null,
            subTreeData: null,
            parallelRoutes: new Map()
        };
        const existingParallelRoutes = newCache.parallelRoutes.get(key);
        if (existingParallelRoutes) {
            existingParallelRoutes.set(cacheKey, newCacheNode);
        } else {
            newCache.parallelRoutes.set(key, new Map([
                [
                    cacheKey,
                    newCacheNode
                ]
            ]));
        }
        fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head, wasPrefetched);
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-lazy-items-till-leaf-with-head.js.map


/***/ }),

/***/ 76489:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PrefetchCacheEntryStatus: function() {
        return PrefetchCacheEntryStatus;
    },
    getPrefetchEntryCacheStatus: function() {
        return getPrefetchEntryCacheStatus;
    }
});
const FIVE_MINUTES = 5 * 60 * 1000;
const THIRTY_SECONDS = 30 * 1000;
var PrefetchCacheEntryStatus;
(function(PrefetchCacheEntryStatus) {
    PrefetchCacheEntryStatus["fresh"] = "fresh";
    PrefetchCacheEntryStatus["reusable"] = "reusable";
    PrefetchCacheEntryStatus["expired"] = "expired";
    PrefetchCacheEntryStatus["stale"] = "stale";
})(PrefetchCacheEntryStatus || (PrefetchCacheEntryStatus = {}));
function getPrefetchEntryCacheStatus(param) {
    let { kind, prefetchTime, lastUsedTime } = param;
    // if the cache entry was prefetched or read less than 30s ago, then we want to re-use it
    if (Date.now() < (lastUsedTime != null ? lastUsedTime : prefetchTime) + THIRTY_SECONDS) {
        return lastUsedTime ? "reusable" : "fresh";
    }
    // if the cache entry was prefetched less than 5 mins ago, then we want to re-use only the loading state
    if (kind === "auto") {
        if (Date.now() < prefetchTime + FIVE_MINUTES) {
            return "stale";
        }
    }
    // if the cache entry was prefetched less than 5 mins ago and was a "full" prefetch, then we want to re-use it "full
    if (kind === "full") {
        if (Date.now() < prefetchTime + FIVE_MINUTES) {
            return "reusable";
        }
    }
    return "expired";
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-prefetch-cache-entry-status.js.map


/***/ }),

/***/ 7462:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "handleMutable", ({
    enumerable: true,
    get: function() {
        return handleMutable;
    }
}));
const _computechangedpath = __webpack_require__(89089);
function handleMutable(state, mutable) {
    var _mutable_canonicalUrl;
    var _mutable_shouldScroll;
    // shouldScroll is true by default, can override to false.
    const shouldScroll = (_mutable_shouldScroll = mutable.shouldScroll) != null ? _mutable_shouldScroll : true;
    var _mutable_scrollableSegments, _computeChangedPath;
    return {
        buildId: state.buildId,
        // Set href.
        canonicalUrl: mutable.canonicalUrl != null ? mutable.canonicalUrl === state.canonicalUrl ? state.canonicalUrl : mutable.canonicalUrl : state.canonicalUrl,
        pushRef: {
            pendingPush: mutable.pendingPush != null ? mutable.pendingPush : state.pushRef.pendingPush,
            mpaNavigation: mutable.mpaNavigation != null ? mutable.mpaNavigation : state.pushRef.mpaNavigation
        },
        // All navigation requires scroll and focus management to trigger.
        focusAndScrollRef: {
            apply: shouldScroll ? (mutable == null ? void 0 : mutable.scrollableSegments) !== undefined ? true : state.focusAndScrollRef.apply : false,
            onlyHashChange: !!mutable.hashFragment && state.canonicalUrl.split("#")[0] === ((_mutable_canonicalUrl = mutable.canonicalUrl) == null ? void 0 : _mutable_canonicalUrl.split("#")[0]),
            hashFragment: shouldScroll ? mutable.hashFragment && mutable.hashFragment !== "" ? decodeURIComponent(mutable.hashFragment.slice(1)) : state.focusAndScrollRef.hashFragment : null,
            segmentPaths: shouldScroll ? (_mutable_scrollableSegments = mutable == null ? void 0 : mutable.scrollableSegments) != null ? _mutable_scrollableSegments : state.focusAndScrollRef.segmentPaths : []
        },
        // Apply cache.
        cache: mutable.cache ? mutable.cache : state.cache,
        prefetchCache: mutable.prefetchCache ? mutable.prefetchCache : state.prefetchCache,
        // Apply patched router state.
        tree: mutable.patchedTree !== undefined ? mutable.patchedTree : state.tree,
        nextUrl: mutable.patchedTree !== undefined ? (_computeChangedPath = (0, _computechangedpath.computeChangedPath)(state.tree, mutable.patchedTree)) != null ? _computeChangedPath : state.canonicalUrl : state.nextUrl
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-mutable.js.map


/***/ }),

/***/ 88457:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "invalidateCacheBelowFlightSegmentPath", ({
    enumerable: true,
    get: function() {
        return invalidateCacheBelowFlightSegmentPath;
    }
}));
const _createroutercachekey = __webpack_require__(88870);
function invalidateCacheBelowFlightSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    // In case of last entry don't copy further down.
    if (isLastEntry) {
        childSegmentMap.delete(cacheKey);
        return;
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    invalidateCacheBelowFlightSegmentPath(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-below-flight-segmentpath.js.map


/***/ }),

/***/ 21727:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "invalidateCacheByRouterState", ({
    enumerable: true,
    get: function() {
        return invalidateCacheByRouterState;
    }
}));
const _createroutercachekey = __webpack_require__(88870);
function invalidateCacheByRouterState(newCache, existingCache, routerState) {
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const segmentForParallelRoute = routerState[1][key][0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
        if (existingParallelRoutesCacheNode) {
            let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
            parallelRouteCacheNode.delete(cacheKey);
            newCache.parallelRoutes.set(key, parallelRouteCacheNode);
        }
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-by-router-state.js.map


/***/ }),

/***/ 32615:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isNavigatingToNewRootLayout", ({
    enumerable: true,
    get: function() {
        return isNavigatingToNewRootLayout;
    }
}));
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    // Compare segments
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    if (currentTree[4]) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextTree[4];
    }
    // Current tree  didn't have its root layout here, must have changed.
    if (nextTree[4]) {
        return true;
    }
    // We can't assume it's `parallelRoutes.children` here in case the root layout is `app/@something/layout.js`
    // But it's not possible to be more than one parallelRoutes before the root layout is found
    // TODO-APP: change to traverse all parallel routes
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-navigating-to-new-root-layout.js.map


/***/ }),

/***/ 22401:
/***/ ((module, exports) => {

"use strict";
/**
 * Read record value or throw Promise if it's not resolved yet.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "readRecordValue", ({
    enumerable: true,
    get: function() {
        return readRecordValue;
    }
}));
function readRecordValue(thenable) {
    // @ts-expect-error TODO: fix type
    if (thenable.status === "fulfilled") {
        // @ts-expect-error TODO: fix type
        return thenable.value;
    } else {
        throw thenable;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=read-record-value.js.map


/***/ }),

/***/ 67300:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "fastRefreshReducer", ({
    enumerable: true,
    get: function() {
        return fastRefreshReducer;
    }
}));
const _fetchserverresponse = __webpack_require__(38080);
const _createrecordfromthenable = __webpack_require__(14621);
const _readrecordvalue = __webpack_require__(22401);
const _createhreffromurl = __webpack_require__(34331);
const _applyrouterstatepatchtotree = __webpack_require__(63914);
const _isnavigatingtonewrootlayout = __webpack_require__(32615);
const _navigatereducer = __webpack_require__(9962);
const _handlemutable = __webpack_require__(7462);
const _applyflightdata = __webpack_require__(94173);
// A version of refresh reducer that keeps the cache around instead of wiping all of it.
function fastRefreshReducerImpl(state, action) {
    const { cache, mutable, origin } = action;
    const href = state.canonicalUrl;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (!cache.data) {
        // TODO-APP: verify that `href` is not an external url.
        // Fetch data from the root of the tree.
        cache.data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
            state.tree[0],
            state.tree[1],
            state.tree[2],
            "refetch"
        ], state.nextUrl, state.buildId));
    }
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(cache.data);
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    // Remove cache.data as it has been resolved at this point.
    cache.data = null;
    let currentTree = state.tree;
    let currentCache = state.cache;
    for (const flightDataPath of flightData){
        // FlightDataPath with more than two items means unexpected Flight data was returned
        if (flightDataPath.length !== 3) {
            // TODO-APP: handle this case better
            console.log("REFRESH FAILED");
            return state;
        }
        // Given the path can only have two items the items are only the router state and subTreeData for the root.
        const [treePatch] = flightDataPath;
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            ""
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
        if (canonicalUrlOverride) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        const applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
        if (applied) {
            mutable.cache = cache;
            currentCache = cache;
        }
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.canonicalUrl = href;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function fastRefreshReducerNoop(state, _action) {
    return state;
}
const fastRefreshReducer =  true ? fastRefreshReducerNoop : 0;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fast-refresh-reducer.js.map


/***/ }),

/***/ 71333:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "findHeadInCache", ({
    enumerable: true,
    get: function() {
        return findHeadInCache;
    }
}));
const _createroutercachekey = __webpack_require__(88870);
function findHeadInCache(cache, parallelRoutes) {
    const isLastItem = Object.keys(parallelRoutes).length === 0;
    if (isLastItem) {
        return cache.head;
    }
    for(const key in parallelRoutes){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        const childSegmentMap = cache.parallelRoutes.get(key);
        if (!childSegmentMap) {
            continue;
        }
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        const item = findHeadInCache(cacheNode, childParallelRoutes);
        if (item) {
            return item;
        }
    }
    return undefined;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=find-head-in-cache.js.map


/***/ }),

/***/ 97741:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSegmentValue", ({
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
}));
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-segment-value.js.map


/***/ }),

/***/ 9962:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleExternalUrl: function() {
        return handleExternalUrl;
    },
    navigateReducer: function() {
        return navigateReducer;
    }
});
const _approutercontext = __webpack_require__(57085);
const _fetchserverresponse = __webpack_require__(38080);
const _createrecordfromthenable = __webpack_require__(14621);
const _readrecordvalue = __webpack_require__(22401);
const _createhreffromurl = __webpack_require__(34331);
const _invalidatecachebelowflightsegmentpath = __webpack_require__(88457);
const _fillcachewithdataproperty = __webpack_require__(89996);
const _createoptimistictree = __webpack_require__(28503);
const _applyrouterstatepatchtotree = __webpack_require__(63914);
const _shouldhardnavigate = __webpack_require__(48072);
const _isnavigatingtonewrootlayout = __webpack_require__(32615);
const _routerreducertypes = __webpack_require__(92836);
const _handlemutable = __webpack_require__(7462);
const _applyflightdata = __webpack_require__(94173);
const _getprefetchcacheentrystatus = __webpack_require__(76489);
const _pruneprefetchcache = __webpack_require__(37025);
const _prefetchreducer = __webpack_require__(61910);
function handleExternalUrl(state, mutable, url, pendingPush) {
    mutable.previousTree = state.tree;
    mutable.mpaNavigation = true;
    mutable.canonicalUrl = url;
    mutable.pendingPush = pendingPush;
    mutable.scrollableSegments = undefined;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function generateSegmentsFromPatch(flightRouterPatch) {
    const segments = [];
    const [segment, parallelRoutes] = flightRouterPatch;
    if (Object.keys(parallelRoutes).length === 0) {
        return [
            [
                segment
            ]
        ];
    }
    for (const [parallelRouteKey, parallelRoute] of Object.entries(parallelRoutes)){
        for (const childSegment of generateSegmentsFromPatch(parallelRoute)){
            // If the segment is empty, it means we are at the root of the tree
            if (segment === "") {
                segments.push([
                    parallelRouteKey,
                    ...childSegment
                ]);
            } else {
                segments.push([
                    segment,
                    parallelRouteKey,
                    ...childSegment
                ]);
            }
        }
    }
    return segments;
}
function addRefetchToLeafSegments(newCache, currentCache, flightSegmentPath, treePatch, data) {
    let appliedPatch = false;
    newCache.status = _approutercontext.CacheStates.READY;
    newCache.subTreeData = currentCache.subTreeData;
    newCache.parallelRoutes = new Map(currentCache.parallelRoutes);
    const segmentPathsToFill = generateSegmentsFromPatch(treePatch).map((segment)=>[
            ...flightSegmentPath,
            ...segment
        ]);
    for (const segmentPaths of segmentPathsToFill){
        const res = (0, _fillcachewithdataproperty.fillCacheWithDataProperty)(newCache, currentCache, segmentPaths, data);
        if (!(res == null ? void 0 : res.bailOptimistic)) {
            appliedPatch = true;
        }
    }
    return appliedPatch;
}
function navigateReducer(state, action) {
    const { url, isExternalUrl, navigateType, cache, mutable, forceOptimisticNavigation, shouldScroll } = action;
    const { pathname, hash } = url;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    const pendingPush = navigateType === "push";
    // we want to prune the prefetch cache on every navigation to avoid it growing too large
    (0, _pruneprefetchcache.prunePrefetchCache)(state.prefetchCache);
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (isExternalUrl) {
        return handleExternalUrl(state, mutable, url.toString(), pendingPush);
    }
    let prefetchValues = state.prefetchCache.get((0, _createhreffromurl.createHrefFromUrl)(url, false));
    if (forceOptimisticNavigation && (prefetchValues == null ? void 0 : prefetchValues.kind) !== _routerreducertypes.PrefetchKind.TEMPORARY) {
        const segments = pathname.split("/");
        // TODO-APP: figure out something better for index pages
        segments.push("__PAGE__");
        // Optimistic tree case.
        // If the optimistic tree is deeper than the current state leave that deeper part out of the fetch
        const optimisticTree = (0, _createoptimistictree.createOptimisticTree)(segments, state.tree, false);
        // we need a copy of the cache in case we need to revert to it
        const temporaryCacheNode = {
            ...cache
        };
        // Copy subTreeData for the root node of the cache.
        // Note: didn't do it above because typescript doesn't like it.
        temporaryCacheNode.status = _approutercontext.CacheStates.READY;
        temporaryCacheNode.subTreeData = state.cache.subTreeData;
        temporaryCacheNode.parallelRoutes = new Map(state.cache.parallelRoutes);
        let data;
        const fetchResponse = ()=>{
            if (!data) {
                data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(url, optimisticTree, state.nextUrl, state.buildId));
            }
            return data;
        };
        // TODO-APP: segments.slice(1) strips '', we can get rid of '' altogether.
        // TODO-APP: re-evaluate if we need to strip the last segment
        const optimisticFlightSegmentPath = segments.slice(1).map((segment)=>[
                "children",
                segment
            ]).flat();
        // Copy existing cache nodes as far as possible and fill in `data` property with the started data fetch.
        // The `data` property is used to suspend in layout-router during render if it hasn't resolved yet by the time it renders.
        const res = (0, _fillcachewithdataproperty.fillCacheWithDataProperty)(temporaryCacheNode, state.cache, optimisticFlightSegmentPath, fetchResponse, true);
        // If optimistic fetch couldn't happen it falls back to the non-optimistic case.
        if (!(res == null ? void 0 : res.bailOptimistic)) {
            mutable.previousTree = state.tree;
            mutable.patchedTree = optimisticTree;
            mutable.pendingPush = pendingPush;
            mutable.hashFragment = hash;
            mutable.shouldScroll = shouldScroll;
            mutable.scrollableSegments = [];
            mutable.cache = temporaryCacheNode;
            mutable.canonicalUrl = href;
            state.prefetchCache.set((0, _createhreffromurl.createHrefFromUrl)(url, false), {
                data: Promise.resolve(data),
                // this will make sure that the entry will be discarded after 30s
                kind: _routerreducertypes.PrefetchKind.TEMPORARY,
                prefetchTime: Date.now(),
                treeAtTimeOfPrefetch: state.tree,
                lastUsedTime: Date.now()
            });
            return (0, _handlemutable.handleMutable)(state, mutable);
        }
    }
    // If we don't have a prefetch value, we need to create one
    if (!prefetchValues) {
        const data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(url, state.tree, state.nextUrl, state.buildId, // in order to simulate the behavior of the prefetch cache
         false ? 0 : undefined));
        const newPrefetchValue = {
            data: Promise.resolve(data),
            // this will make sure that the entry will be discarded after 30s
            kind:  false ? 0 : _routerreducertypes.PrefetchKind.TEMPORARY,
            prefetchTime: Date.now(),
            treeAtTimeOfPrefetch: state.tree,
            lastUsedTime: null
        };
        state.prefetchCache.set((0, _createhreffromurl.createHrefFromUrl)(url, false), newPrefetchValue);
        prefetchValues = newPrefetchValue;
    }
    const prefetchEntryCacheStatus = (0, _getprefetchcacheentrystatus.getPrefetchEntryCacheStatus)(prefetchValues);
    // The one before last item is the router state tree patch
    const { treeAtTimeOfPrefetch, data } = prefetchValues;
    _prefetchreducer.prefetchQueue.bump(data);
    // Unwrap cache data with `use` to suspend here (in the reducer) until the fetch resolves.
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(data);
    // important: we should only mark the cache node as dirty after we unsuspend from the call above
    prefetchValues.lastUsedTime = Date.now();
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return handleExternalUrl(state, mutable, flightData, pendingPush);
    }
    let currentTree = state.tree;
    let currentCache = state.cache;
    let scrollableSegments = [];
    for (const flightDataPath of flightData){
        const flightSegmentPath = flightDataPath.slice(0, -4);
        // The one before last item is the router state tree patch
        const treePatch = flightDataPath.slice(-3)[0];
        // TODO-APP: remove ''
        const flightSegmentPathWithLeadingEmpty = [
            "",
            ...flightSegmentPath
        ];
        // Create new tree based on the flightSegmentPath and router state patch
        let newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, currentTree, treePatch);
        // If the tree patch can't be applied to the current tree then we use the tree at time of prefetch
        // TODO-APP: This should instead fill in the missing pieces in `currentTree` with the data from `treeAtTimeOfPrefetch`, then apply the patch.
        if (newTree === null) {
            newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, treeAtTimeOfPrefetch, treePatch);
        }
        if (newTree !== null) {
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return handleExternalUrl(state, mutable, href, pendingPush);
            }
            let applied = (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath, prefetchValues.kind === "auto" && prefetchEntryCacheStatus === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.reusable);
            if (!applied && prefetchEntryCacheStatus === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.stale) {
                applied = addRefetchToLeafSegments(cache, currentCache, flightSegmentPath, treePatch, ()=>(0, _fetchserverresponse.fetchServerResponse)(url, currentTree, state.nextUrl, state.buildId));
            }
            const hardNavigate = (0, _shouldhardnavigate.shouldHardNavigate)(flightSegmentPathWithLeadingEmpty, currentTree);
            if (hardNavigate) {
                cache.status = _approutercontext.CacheStates.READY;
                // Copy subTreeData for the root node of the cache.
                cache.subTreeData = currentCache.subTreeData;
                (0, _invalidatecachebelowflightsegmentpath.invalidateCacheBelowFlightSegmentPath)(cache, currentCache, flightSegmentPath);
                // Ensure the existing cache value is used when the cache was not invalidated.
                mutable.cache = cache;
            } else if (applied) {
                mutable.cache = cache;
            }
            currentCache = cache;
            currentTree = newTree;
            for (const subSegment of generateSegmentsFromPatch(treePatch)){
                const scrollableSegmentPath = [
                    ...flightSegmentPath,
                    ...subSegment
                ];
                // Filter out the __DEFAULT__ paths as they shouldn't be scrolled to in this case.
                if (scrollableSegmentPath[scrollableSegmentPath.length - 1] !== "__DEFAULT__") {
                    scrollableSegments.push(scrollableSegmentPath);
                }
            }
        }
    }
    mutable.previousTree = state.tree;
    mutable.patchedTree = currentTree;
    mutable.canonicalUrl = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : href;
    mutable.pendingPush = pendingPush;
    mutable.scrollableSegments = scrollableSegments;
    mutable.hashFragment = hash;
    mutable.shouldScroll = shouldScroll;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigate-reducer.js.map


/***/ }),

/***/ 61910:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    prefetchQueue: function() {
        return prefetchQueue;
    },
    prefetchReducer: function() {
        return prefetchReducer;
    }
});
const _createhreffromurl = __webpack_require__(34331);
const _fetchserverresponse = __webpack_require__(38080);
const _routerreducertypes = __webpack_require__(92836);
const _createrecordfromthenable = __webpack_require__(14621);
const _pruneprefetchcache = __webpack_require__(37025);
const _approuterheaders = __webpack_require__(66265);
const _promisequeue = __webpack_require__(18811);
const prefetchQueue = new _promisequeue.PromiseQueue(5);
function prefetchReducer(state, action) {
    // let's prune the prefetch cache before we do anything else
    (0, _pruneprefetchcache.prunePrefetchCache)(state.prefetchCache);
    const { url } = action;
    url.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    const href = (0, _createhreffromurl.createHrefFromUrl)(url, false);
    const cacheEntry = state.prefetchCache.get(href);
    if (cacheEntry) {
        /**
     * If the cache entry present was marked as temporary, it means that we prefetched it from the navigate reducer,
     * where we didn't have the prefetch intent. We want to update it to the new, more accurate, kind here.
     */ if (cacheEntry.kind === _routerreducertypes.PrefetchKind.TEMPORARY) {
            state.prefetchCache.set(href, {
                ...cacheEntry,
                kind: action.kind
            });
        }
        /**
     * if the prefetch action was a full prefetch and that the current cache entry wasn't one, we want to re-prefetch,
     * otherwise we can re-use the current cache entry
     **/ if (!(cacheEntry.kind === _routerreducertypes.PrefetchKind.AUTO && action.kind === _routerreducertypes.PrefetchKind.FULL)) {
            return state;
        }
    }
    // fetchServerResponse is intentionally not awaited so that it can be unwrapped in the navigate-reducer
    const serverResponse = (0, _createrecordfromthenable.createRecordFromThenable)(prefetchQueue.enqueue(()=>(0, _fetchserverresponse.fetchServerResponse)(url, state.tree, state.nextUrl, state.buildId, action.kind)));
    // Create new tree based on the flightSegmentPath and router state patch
    state.prefetchCache.set(href, {
        // Create new tree based on the flightSegmentPath and router state patch
        treeAtTimeOfPrefetch: state.tree,
        data: serverResponse,
        kind: action.kind,
        prefetchTime: Date.now(),
        lastUsedTime: null
    });
    return state;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch-reducer.js.map


/***/ }),

/***/ 37025:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "prunePrefetchCache", ({
    enumerable: true,
    get: function() {
        return prunePrefetchCache;
    }
}));
const _getprefetchcacheentrystatus = __webpack_require__(76489);
function prunePrefetchCache(prefetchCache) {
    for (const [href, prefetchCacheEntry] of prefetchCache){
        if ((0, _getprefetchcacheentrystatus.getPrefetchEntryCacheStatus)(prefetchCacheEntry) === _getprefetchcacheentrystatus.PrefetchCacheEntryStatus.expired) {
            prefetchCache.delete(href);
        }
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prune-prefetch-cache.js.map


/***/ }),

/***/ 19082:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "refreshReducer", ({
    enumerable: true,
    get: function() {
        return refreshReducer;
    }
}));
const _fetchserverresponse = __webpack_require__(38080);
const _createrecordfromthenable = __webpack_require__(14621);
const _readrecordvalue = __webpack_require__(22401);
const _createhreffromurl = __webpack_require__(34331);
const _applyrouterstatepatchtotree = __webpack_require__(63914);
const _isnavigatingtonewrootlayout = __webpack_require__(32615);
const _navigatereducer = __webpack_require__(9962);
const _handlemutable = __webpack_require__(7462);
const _approutercontext = __webpack_require__(57085);
const _filllazyitemstillleafwithhead = __webpack_require__(32684);
function refreshReducer(state, action) {
    const { cache, mutable, origin } = action;
    const href = state.canonicalUrl;
    let currentTree = state.tree;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(currentTree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (!cache.data) {
        // TODO-APP: verify that `href` is not an external url.
        // Fetch data from the root of the tree.
        cache.data = (0, _createrecordfromthenable.createRecordFromThenable)((0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), [
            currentTree[0],
            currentTree[1],
            currentTree[2],
            "refetch"
        ], state.nextUrl, state.buildId));
    }
    const [flightData, canonicalUrlOverride] = (0, _readrecordvalue.readRecordValue)(cache.data);
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    // Remove cache.data as it has been resolved at this point.
    cache.data = null;
    for (const flightDataPath of flightData){
        // FlightDataPath with more than two items means unexpected Flight data was returned
        if (flightDataPath.length !== 3) {
            // TODO-APP: handle this case better
            console.log("REFRESH FAILED");
            return state;
        }
        // Given the path can only have two items the items are only the router state and subTreeData for the root.
        const [treePatch] = flightDataPath;
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            ""
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
        if (canonicalUrlOverride) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        // The one before last item is the router state tree patch
        const [subTreeData, head] = flightDataPath.slice(-2);
        // Handles case where prefetch only returns the router tree patch without rendered components.
        if (subTreeData !== null) {
            cache.status = _approutercontext.CacheStates.READY;
            cache.subTreeData = subTreeData;
            (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, treePatch, head);
            mutable.cache = cache;
            mutable.prefetchCache = new Map();
        }
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.canonicalUrl = href;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refresh-reducer.js.map


/***/ }),

/***/ 69425:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "restoreReducer", ({
    enumerable: true,
    get: function() {
        return restoreReducer;
    }
}));
const _createhreffromurl = __webpack_require__(34331);
function restoreReducer(state, action) {
    const { url, tree } = action;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    return {
        buildId: state.buildId,
        // Set canonical url
        canonicalUrl: href,
        pushRef: state.pushRef,
        focusAndScrollRef: state.focusAndScrollRef,
        cache: state.cache,
        prefetchCache: state.prefetchCache,
        // Restore provided tree
        tree: tree,
        nextUrl: url.pathname
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=restore-reducer.js.map


/***/ }),

/***/ 97238:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "serverActionReducer", ({
    enumerable: true,
    get: function() {
        return serverActionReducer;
    }
}));
const _appcallserver = __webpack_require__(56937);
const _approuterheaders = __webpack_require__(66265);
const _createrecordfromthenable = __webpack_require__(14621);
const _readrecordvalue = __webpack_require__(22401);
const _client = __webpack_require__(97897);
const _addbasepath = __webpack_require__(24578);
const _createhreffromurl = __webpack_require__(34331);
const _navigatereducer = __webpack_require__(9962);
const _applyrouterstatepatchtotree = __webpack_require__(63914);
const _isnavigatingtonewrootlayout = __webpack_require__(32615);
const _approutercontext = __webpack_require__(57085);
const _handlemutable = __webpack_require__(7462);
const _filllazyitemstillleafwithhead = __webpack_require__(32684);
async function fetchServerAction(state, param) {
    let { actionId, actionArgs } = param;
    const body = await (0, _client.encodeReply)(actionArgs);
    const res = await fetch("", {
        method: "POST",
        headers: {
            Accept: _approuterheaders.RSC_CONTENT_TYPE_HEADER,
            "Next-Action": actionId,
            [_approuterheaders.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(state.tree)),
            ... false ? 0 : {},
            ...state.nextUrl ? {
                [_approuterheaders.NEXT_URL]: state.nextUrl
            } : {}
        },
        body
    });
    const location = res.headers.get("x-action-redirect");
    let revalidatedParts;
    try {
        const revalidatedHeader = JSON.parse(res.headers.get("x-action-revalidated") || "[[],0,0]");
        revalidatedParts = {
            paths: revalidatedHeader[0] || [],
            tag: !!revalidatedHeader[1],
            cookie: revalidatedHeader[2]
        };
    } catch (e) {
        revalidatedParts = {
            paths: [],
            tag: false,
            cookie: false
        };
    }
    const redirectLocation = location ? new URL((0, _addbasepath.addBasePath)(location), window.location.origin) : undefined;
    let isFlightResponse = res.headers.get("content-type") === _approuterheaders.RSC_CONTENT_TYPE_HEADER;
    if (isFlightResponse) {
        const response = await (0, _client.createFromFetch)(Promise.resolve(res), {
            callServer: _appcallserver.callServer
        });
        if (location) {
            // if it was a redirection, then result is just a regular RSC payload
            const [, actionFlightData] = response != null ? response : [];
            return {
                actionFlightData: actionFlightData,
                redirectLocation,
                revalidatedParts
            };
        }
        // otherwise it's a tuple of [actionResult, actionFlightData]
        const [actionResult, [, actionFlightData]] = response != null ? response : [];
        return {
            actionResult,
            actionFlightData,
            redirectLocation,
            revalidatedParts
        };
    }
    return {
        redirectLocation,
        revalidatedParts
    };
}
function serverActionReducer(state, action) {
    const { mutable, cache, resolve, reject } = action;
    const href = state.canonicalUrl;
    let currentTree = state.tree;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(currentTree);
    if (isForCurrentTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    if (!action.mutable.inFlightServerAction) {
        action.mutable.inFlightServerAction = (0, _createrecordfromthenable.createRecordFromThenable)(fetchServerAction(state, action));
    }
    // TODO-APP: Make try/catch wrap only readRecordValue so that other errors bubble up through the reducer instead.
    try {
        // suspends until the server action is resolved.
        const { actionResult, actionFlightData: flightData, redirectLocation } = (0, _readrecordvalue.readRecordValue)(action.mutable.inFlightServerAction);
        mutable.previousTree = state.tree;
        if (!flightData) {
            if (!mutable.actionResultResolved) {
                resolve(actionResult);
                mutable.actionResultResolved = true;
            }
            // If there is a redirect but no flight data we need to do a mpaNavigation.
            if (redirectLocation) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, redirectLocation.href, state.pushRef.pendingPush);
            }
            return state;
        }
        if (typeof flightData === "string") {
            // Handle case when navigating to page in `pages` from `app`
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
        }
        // Remove cache.data as it has been resolved at this point.
        mutable.inFlightServerAction = null;
        for (const flightDataPath of flightData){
            // FlightDataPath with more than two items means unexpected Flight data was returned
            if (flightDataPath.length !== 3) {
                // TODO-APP: handle this case better
                console.log("SERVER ACTION APPLY FAILED");
                return state;
            }
            // Given the path can only have two items the items are only the router state and subTreeData for the root.
            const [treePatch] = flightDataPath;
            const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
                ""
            ], currentTree, treePatch);
            if (newTree === null) {
                throw new Error("SEGMENT MISMATCH");
            }
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
            }
            // The one before last item is the router state tree patch
            const [subTreeData, head] = flightDataPath.slice(-2);
            // Handles case where prefetch only returns the router tree patch without rendered components.
            if (subTreeData !== null) {
                cache.status = _approutercontext.CacheStates.READY;
                cache.subTreeData = subTreeData;
                (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(cache, undefined, treePatch, head);
                mutable.cache = cache;
                mutable.prefetchCache = new Map();
            }
            mutable.previousTree = currentTree;
            mutable.patchedTree = newTree;
            mutable.canonicalUrl = href;
            currentTree = newTree;
        }
        if (redirectLocation) {
            const newHref = (0, _createhreffromurl.createHrefFromUrl)(redirectLocation, false);
            mutable.canonicalUrl = newHref;
        }
        if (!mutable.actionResultResolved) {
            resolve(actionResult);
            mutable.actionResultResolved = true;
        }
        return (0, _handlemutable.handleMutable)(state, mutable);
    } catch (e) {
        if (e.status === "rejected") {
            if (!mutable.actionResultResolved) {
                reject(e.value);
                mutable.actionResultResolved = true;
            }
            // When the server action is rejected we don't update the state and instead call the reject handler of the promise.
            return state;
        }
        throw e;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-action-reducer.js.map


/***/ }),

/***/ 75022:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "serverPatchReducer", ({
    enumerable: true,
    get: function() {
        return serverPatchReducer;
    }
}));
const _createhreffromurl = __webpack_require__(34331);
const _applyrouterstatepatchtotree = __webpack_require__(63914);
const _isnavigatingtonewrootlayout = __webpack_require__(32615);
const _navigatereducer = __webpack_require__(9962);
const _applyflightdata = __webpack_require__(94173);
const _handlemutable = __webpack_require__(7462);
function serverPatchReducer(state, action) {
    const { flightData, previousTree, overrideCanonicalUrl, cache, mutable } = action;
    const isForCurrentTree = JSON.stringify(previousTree) === JSON.stringify(state.tree);
    // When a fetch is slow to resolve it could be that you navigated away while the request was happening or before the reducer runs.
    // In that case opt-out of applying the patch given that the data could be stale.
    if (!isForCurrentTree) {
        // TODO-APP: Handle tree mismatch
        console.log("TREE MISMATCH");
        // Keep everything as-is.
        return state;
    }
    if (mutable.previousTree) {
        return (0, _handlemutable.handleMutable)(state, mutable);
    }
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    let currentTree = state.tree;
    let currentCache = state.cache;
    for (const flightDataPath of flightData){
        // Slices off the last segment (which is at -4) as it doesn't exist in the tree yet
        const flightSegmentPath = flightDataPath.slice(0, -4);
        const [treePatch] = flightDataPath.slice(-3, -2);
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            "",
            ...flightSegmentPath
        ], currentTree, treePatch);
        if (newTree === null) {
            throw new Error("SEGMENT MISMATCH");
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, state.canonicalUrl, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = overrideCanonicalUrl ? (0, _createhreffromurl.createHrefFromUrl)(overrideCanonicalUrl) : undefined;
        if (canonicalUrlOverrideHref) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        (0, _applyflightdata.applyFlightData)(currentCache, cache, flightDataPath);
        mutable.previousTree = currentTree;
        mutable.patchedTree = newTree;
        mutable.cache = cache;
        currentCache = cache;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-patch-reducer.js.map


/***/ }),

/***/ 92836:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PrefetchKind: function() {
        return PrefetchKind;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    ACTION_PREFETCH: function() {
        return ACTION_PREFETCH;
    },
    ACTION_FAST_REFRESH: function() {
        return ACTION_FAST_REFRESH;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    }
});
const ACTION_REFRESH = "refresh";
const ACTION_NAVIGATE = "navigate";
const ACTION_RESTORE = "restore";
const ACTION_SERVER_PATCH = "server-patch";
const ACTION_PREFETCH = "prefetch";
const ACTION_FAST_REFRESH = "fast-refresh";
const ACTION_SERVER_ACTION = "server-action";
var PrefetchKind;
(function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
})(PrefetchKind || (PrefetchKind = {}));
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map


/***/ }),

/***/ 27189:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "reducer", ({
    enumerable: true,
    get: function() {
        return reducer;
    }
}));
const _routerreducertypes = __webpack_require__(92836);
const _navigatereducer = __webpack_require__(9962);
const _serverpatchreducer = __webpack_require__(75022);
const _restorereducer = __webpack_require__(69425);
const _refreshreducer = __webpack_require__(19082);
const _prefetchreducer = __webpack_require__(61910);
const _fastrefreshreducer = __webpack_require__(67300);
const _serveractionreducer = __webpack_require__(97238);
/**
 * Reducer that handles the app-router state updates.
 */ function clientReducer(state, action) {
    switch(action.type){
        case _routerreducertypes.ACTION_NAVIGATE:
            {
                return (0, _navigatereducer.navigateReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_PATCH:
            {
                return (0, _serverpatchreducer.serverPatchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_RESTORE:
            {
                return (0, _restorereducer.restoreReducer)(state, action);
            }
        case _routerreducertypes.ACTION_REFRESH:
            {
                return (0, _refreshreducer.refreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_FAST_REFRESH:
            {
                return (0, _fastrefreshreducer.fastRefreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_PREFETCH:
            {
                return (0, _prefetchreducer.prefetchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_ACTION:
            {
                return (0, _serveractionreducer.serverActionReducer)(state, action);
            }
        // This case should never be hit as dispatch is strongly typed.
        default:
            throw new Error("Unknown action");
    }
}
function serverReducer(state, _action) {
    return state;
}
const reducer =  true ? serverReducer : 0;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer.js.map


/***/ }),

/***/ 48072:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "shouldHardNavigate", ({
    enumerable: true,
    get: function() {
        return shouldHardNavigate;
    }
}));
const _matchsegments = __webpack_require__(17618);
function shouldHardNavigate(flightSegmentPath, flightRouterState) {
    const [segment, parallelRoutes] = flightRouterState;
    // TODO-APP: Check if `as` can be replaced.
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Check if current segment matches the existing segment.
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        // If dynamic parameter in tree doesn't match up with segment path a hard navigation is triggered.
        if (Array.isArray(currentSegment)) {
            return true;
        }
        // If the existing segment did not match soft navigation is triggered.
        return false;
    }
    const lastSegment = flightSegmentPath.length <= 2;
    if (lastSegment) {
        return false;
    }
    return shouldHardNavigate(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey]);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=should-hard-navigate.js.map


/***/ }),

/***/ 28437:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createSearchParamsBailoutProxy", ({
    enumerable: true,
    get: function() {
        return createSearchParamsBailoutProxy;
    }
}));
const _staticgenerationbailout = __webpack_require__(38862);
function createSearchParamsBailoutProxy() {
    return new Proxy({}, {
        get (_target, prop) {
            // React adds some properties on the object when serializing for client components
            if (typeof prop === "string") {
                (0, _staticgenerationbailout.staticGenerationBailout)("searchParams." + prop);
            }
        }
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=searchparams-bailout-proxy.js.map


/***/ }),

/***/ 38862:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "staticGenerationBailout", ({
    enumerable: true,
    get: function() {
        return staticGenerationBailout;
    }
}));
const _hooksservercontext = __webpack_require__(28047);
const _staticgenerationasyncstorage = __webpack_require__(13539);
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args);
        this.code = "NEXT_STATIC_GEN_BAILOUT";
    }
}
function formatErrorMessage(reason, opts) {
    const { dynamic, link } = opts || {};
    const suffix = link ? " See more info here: " + link : "";
    return "Page" + (dynamic ? ' with `dynamic = "' + dynamic + '"`' : "") + " couldn't be rendered statically because it used `" + reason + "`." + suffix;
}
const staticGenerationBailout = (reason, opts)=>{
    const staticGenerationStore = _staticgenerationasyncstorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.dynamicShouldError) {
        var _opts_dynamic;
        throw new StaticGenBailoutError(formatErrorMessage(reason, {
            ...opts,
            dynamic: (_opts_dynamic = opts == null ? void 0 : opts.dynamic) != null ? _opts_dynamic : "error"
        }));
    }
    if (staticGenerationStore) {
        staticGenerationStore.revalidate = 0;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        const err = new _hooksservercontext.DynamicServerError(formatErrorMessage(reason, {
            ...opts,
            // this error should be caught by Next to bail out of static generation
            // in case it's uncaught, this link provides some additional context as to why
            link: "https://nextjs.org/docs/messages/dynamic-server-error"
        }));
        staticGenerationStore.dynamicUsageDescription = reason;
        staticGenerationStore.dynamicUsageStack = err.stack;
        throw err;
    }
    return false;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map


/***/ }),

/***/ 44282:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return StaticGenerationSearchParamsBailoutProvider;
    }
}));
const _interop_require_default = __webpack_require__(82147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(18038));
const _searchparamsbailoutproxy = __webpack_require__(28437);
function StaticGenerationSearchParamsBailoutProvider(param) {
    let { Component, propsForComponent } = param;
    const searchParams = (0, _searchparamsbailoutproxy.createSearchParamsBailoutProxy)();
    return /*#__PURE__*/ _react.default.createElement(Component, {
        searchParams: searchParams,
        ...propsForComponent
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-searchparams-bailout-provider.js.map


/***/ }),

/***/ 57951:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useReducerWithReduxDevtools", ({
    enumerable: true,
    get: function() {
        return useReducerWithReduxDevtools;
    }
}));
const _react = __webpack_require__(18038);
function normalizeRouterState(val) {
    if (val instanceof Map) {
        const obj = {};
        for (const [key, value] of val.entries()){
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value._bundlerConfig) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (typeof val === "object" && val !== null) {
        const obj = {};
        for(const key in val){
            const value = val[key];
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value.hasOwnProperty("_bundlerConfig")) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (Array.isArray(val)) {
        return val.map(normalizeRouterState);
    }
    return val;
}
function devToolReducer(fn, ref) {
    return (state, action)=>{
        const res = fn(state, action);
        if (ref.current) {
            ref.current.send(action, normalizeRouterState(res));
        }
        return res;
    };
}
function useReducerWithReduxDevtoolsNoop(fn, initialState) {
    const [state, dispatch] = (0, _react.useReducer)(fn, initialState);
    return [
        state,
        dispatch,
        ()=>{}
    ];
}
function useReducerWithReduxDevtoolsImpl(fn, initialState) {
    const devtoolsConnectionRef = (0, _react.useRef)();
    const enabledRef = (0, _react.useRef)();
    (0, _react.useEffect)(()=>{
        if (devtoolsConnectionRef.current || enabledRef.current === false) {
            return;
        }
        if (enabledRef.current === undefined && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined") {
            enabledRef.current = false;
            return;
        }
        devtoolsConnectionRef.current = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
            instanceId: 8000,
            name: "next-router"
        });
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.init(normalizeRouterState(initialState));
        }
        return ()=>{
            devtoolsConnectionRef.current = undefined;
        };
    }, [
        initialState
    ]);
    const [state, dispatch] = (0, _react.useReducer)(devToolReducer(/* logReducer( */ fn /*)*/ , devtoolsConnectionRef), initialState);
    const sync = (0, _react.useCallback)(()=>{
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.send({
                type: "RENDER_SYNC"
            }, normalizeRouterState(state));
        }
    }, [
        state
    ]);
    return [
        state,
        dispatch,
        sync
    ];
}
const useReducerWithReduxDevtools =  false ? 0 : useReducerWithReduxDevtoolsNoop;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-reducer-with-devtools.js.map


/***/ }),

/***/ 94374:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "hasBasePath", ({
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
}));
const _pathhasprefix = __webpack_require__(54614);
const basePath =  false || "";
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map


/***/ }),

/***/ 73380:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "Image", ({
    enumerable: true,
    get: function() {
        return Image;
    }
}));
const _interop_require_default = __webpack_require__(82147);
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(18038));
const _reactdom = __webpack_require__(98704);
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(66864));
const _getimgprops = __webpack_require__(1830);
const _imageconfig = __webpack_require__(52210);
const _imageconfigcontext = __webpack_require__(35359);
const _warnonce = __webpack_require__(98658);
const _routercontext = __webpack_require__(17160);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(35246));
// This is replaced by webpack define plugin
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    const src = img == null ? void 0 : img.src;
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== "empty") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    const [majorStr, minorStr] = _react.version.split(".");
    const major = parseInt(majorStr, 10);
    const minor = parseInt(minorStr, 10);
    if (major > 18 || major === 18 && minor >= 3) {
        // In React 18.3.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, onLoad, onError, ...rest } = param;
    return /*#__PURE__*/ _react.default.createElement("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: (0, _react.useCallback)((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            src,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== "empty") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload(param) {
    let { isAppRouter, imgAttributes } = param;
    const opts = {
        as: "image",
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.preload) {
        // See https://github.com/facebook/react/pull/26940
        (0, _reactdom.preload)(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", {
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        // Note how we omit the `href` attribute, as it would only be relevant
        // for browsers that do not support `imagesrcset`, and in those cases
        // it would cause the incorrect image to be preloaded.
        //
        // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
        href: imgAttributes.srcSet ? undefined : imgAttributes.src,
        ...opts
    }));
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontext.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontext.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, {
        ...imgAttributes,
        unoptimized: imgMeta.unoptimized,
        placeholder: imgMeta.placeholder,
        fill: imgMeta.fill,
        onLoadRef: onLoadRef,
        onLoadingCompleteRef: onLoadingCompleteRef,
        setBlurComplete: setBlurComplete,
        setShowAltText: setShowAltText,
        ref: forwardedRef
    }), imgMeta.priority ? /*#__PURE__*/ _react.default.createElement(ImagePreload, {
        isAppRouter: isAppRouter,
        imgAttributes: imgAttributes
    }) : null);
});
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map


/***/ }),

/***/ 61094:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathTrailingSlash", ({
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
}));
const _removetrailingslash = __webpack_require__(53750);
const _parsepath = __webpack_require__(68231);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if (false) {}
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 42666:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removeBasePath", ({
    enumerable: true,
    get: function() {
        return removeBasePath;
    }
}));
const _hasbasepath = __webpack_require__(94374);
const basePath =  false || "";
function removeBasePath(path) {
    if (false) {}
    // Can't trim the basePath if it has zero length!
    if (basePath.length === 0) return path;
    path = path.slice(basePath.length);
    if (!path.startsWith("/")) path = "/" + path;
    return path;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map


/***/ }),

/***/ 80489:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    unstable_getImgProps: function() {
        return unstable_getImgProps;
    }
});
const _interop_require_default = __webpack_require__(82147);
const _getimgprops = __webpack_require__(1830);
const _warnonce = __webpack_require__(98658);
const _imagecomponent = __webpack_require__(73380);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(35246));
const unstable_getImgProps = (imgProps)=>{
    (0, _warnonce.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false}
    });
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
};
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 35246:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
function defaultLoader(param) {
    let { config, src, width, quality } = param;
    if (false) {}
    return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + ( false ? 0 : "");
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map


/***/ }),

/***/ 89708:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    suspense: function() {
        return suspense;
    },
    NoSSR: function() {
        return NoSSR;
    }
});
const _interop_require_default = __webpack_require__(82147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(18038));
const _nossrerror = __webpack_require__(30827);
function suspense() {
    const error = new Error(_nossrerror.NEXT_DYNAMIC_NO_SSR_CODE);
    error.digest = _nossrerror.NEXT_DYNAMIC_NO_SSR_CODE;
    throw error;
}
function NoSSR(param) {
    let { children } = param;
    if (true) {
        suspense();
    }
    return children;
} //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 30827:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// This has to be a shared module which is shared between client component error boundary and dynamic component

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NEXT_DYNAMIC_NO_SSR_CODE", ({
    enumerable: true,
    get: function() {
        return NEXT_DYNAMIC_NO_SSR_CODE;
    }
}));
const NEXT_DYNAMIC_NO_SSR_CODE = "NEXT_DYNAMIC_NO_SSR_CODE"; //# sourceMappingURL=no-ssr-error.js.map


/***/ }),

/***/ 61363:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* eslint-disable import/no-extraneous-dependencies */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createProxy", ({
    enumerable: true,
    get: function() {
        return createProxy;
    }
}));
const _serveredge = __webpack_require__(89642);
const createProxy = _serveredge.createClientModuleProxy; //# sourceMappingURL=module-proxy.js.map


/***/ }),

/***/ 38225:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(61363);
module.exports = createProxy("C:\\Users\\denny\\OneDrive\\Desktop\\projects\\portfolio-website\\node_modules\\next\\dist\\client\\components\\app-router.js");
 //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 31823:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(61363);
module.exports = createProxy("C:\\Users\\denny\\OneDrive\\Desktop\\projects\\portfolio-website\\node_modules\\next\\dist\\client\\components\\error-boundary.js");
 //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 97149:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(61363);
module.exports = createProxy("C:\\Users\\denny\\OneDrive\\Desktop\\projects\\portfolio-website\\node_modules\\next\\dist\\client\\components\\layout-router.js");
 //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 26966:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(61363);
module.exports = createProxy("C:\\Users\\denny\\OneDrive\\Desktop\\projects\\portfolio-website\\node_modules\\next\\dist\\client\\components\\not-found-boundary.js");
 //# sourceMappingURL=not-found-boundary.js.map


/***/ }),

/***/ 95493:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return NotFound;
    }
}));
const _interop_require_default = __webpack_require__(73297);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(62947));
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    desc: {
        display: "inline-block"
    },
    h1: {
        display: "inline-block",
        margin: "0 20px 0 0",
        padding: "0 23px 0 0",
        fontSize: 24,
        fontWeight: 500,
        verticalAlign: "top",
        lineHeight: "49px"
    },
    h2: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "49px",
        margin: 0
    }
};
function NotFound() {
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("title", null, "404: This page could not be found."), /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.error
    }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("style", {
        dangerouslySetInnerHTML: {
            /* Minified CSS from
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                @media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }
              */ __html: "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"
        }
    }), /*#__PURE__*/ _react.default.createElement("h1", {
        className: "next-error-h1",
        style: styles.h1
    }, "404"), /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.desc
    }, /*#__PURE__*/ _react.default.createElement("h2", {
        style: styles.h2
    }, "This page could not be found.")))));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found-error.js.map


/***/ }),

/***/ 79278:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(61363);
module.exports = createProxy("C:\\Users\\denny\\OneDrive\\Desktop\\projects\\portfolio-website\\node_modules\\next\\dist\\client\\components\\render-from-template-context.js");
 //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 89444:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "createSearchParamsBailoutProxy", ({
    enumerable: true,
    get: function() {
        return createSearchParamsBailoutProxy;
    }
}));
const _staticgenerationbailout = __webpack_require__(46164);
function createSearchParamsBailoutProxy() {
    return new Proxy({}, {
        get (_target, prop) {
            // React adds some properties on the object when serializing for client components
            if (typeof prop === "string") {
                (0, _staticgenerationbailout.staticGenerationBailout)("searchParams." + prop);
            }
        }
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=searchparams-bailout-proxy.js.map


/***/ }),

/***/ 26345:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(61363);
module.exports = createProxy("C:\\Users\\denny\\OneDrive\\Desktop\\projects\\portfolio-website\\node_modules\\next\\dist\\client\\components\\static-generation-searchparams-bailout-provider.js");
 //# sourceMappingURL=static-generation-searchparams-bailout-provider.js.map


/***/ }),

/***/ 16113:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
/**
 * Tokenize input string.
 */ function lexer(str) {
    var tokens = [];
    var i = 0;
    while(i < str.length){
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({
                type: "MODIFIER",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "\\") {
            tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++]
            });
            continue;
        }
        if (char === "{") {
            tokens.push({
                type: "OPEN",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "}") {
            tokens.push({
                type: "CLOSE",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while(j < str.length){
                var code = str.charCodeAt(j);
                if (// `0-9`
                code >= 48 && code <= 57 || // `A-Z`
                code >= 65 && code <= 90 || // `a-z`
                code >= 97 && code <= 122 || // `_`
                code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name) throw new TypeError("Missing parameter name at " + i);
            tokens.push({
                type: "NAME",
                index: i,
                value: name
            });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError('Pattern cannot start with "?" at ' + j);
            }
            while(j < str.length){
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                } else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count) throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern) throw new TypeError("Missing pattern at " + i);
            tokens.push({
                type: "PATTERN",
                index: i,
                value: pattern
            });
            i = j;
            continue;
        }
        tokens.push({
            type: "CHAR",
            index: i,
            value: str[i++]
        });
    }
    tokens.push({
        type: "END",
        index: i,
        value: ""
    });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */ function parse(str, options) {
    if (options === void 0) {
        options = {};
    }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function(type) {
        if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
    };
    var mustConsume = function(type) {
        var value = tryConsume(type);
        if (value !== undefined) return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function() {
        var result = "";
        var value;
        // tslint:disable-next-line
        while(value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")){
            result += value;
        }
        return result;
    };
    while(i < tokens.length){
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */ function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */ function tokensToFunction(tokens, options) {
    if (options === void 0) {
        options = {};
    }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function(x) {
        return x;
    } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function(token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function(data) {
        var path = "";
        for(var i = 0; i < tokens.length; i++){
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError('Expected "' + token.name + '" to not repeat, but got an array');
                }
                if (value.length === 0) {
                    if (optional) continue;
                    throw new TypeError('Expected "' + token.name + '" to not be empty');
                }
                for(var j = 0; j < value.length; j++){
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional) continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError('Expected "' + token.name + '" to be ' + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */ function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */ function regexpToFunction(re, keys, options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.decode, decode = _a === void 0 ? function(x) {
        return x;
    } : _a;
    return function(pathname) {
        var m = re.exec(pathname);
        if (!m) return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function(i) {
            // tslint:disable-next-line
            if (m[i] === undefined) return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function(value) {
                    return decode(value, key);
                });
            } else {
                params[key.name] = decode(m[i], key);
            }
        };
        for(var i = 1; i < m.length; i++){
            _loop_1(i);
        }
        return {
            path: path,
            index: index,
            params: params
        };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */ function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */ function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */ function regexpToRegexp(path, keys) {
    if (!keys) return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for(var i = 0; i < groups.length; i++){
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */ function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function(path) {
        return pathToRegexp(path, keys, options).source;
    });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */ function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */ function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
        return x;
    } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for(var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++){
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        } else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys) keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    } else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                } else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            } else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict) route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */ function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp) return regexpToRegexp(path, keys);
    if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp; //# sourceMappingURL=index.js.map


/***/ }),

/***/ 15153:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react-dom-server-rendering-stub.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var d = {
    usingClientEntryPoint: !1,
    Events: null,
    Dispatcher: {
        current: null
    }
};
function e(b) {
    for(var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + b, c = 1; c < arguments.length; c++)a += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + b + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var f = d.Dispatcher;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d;
exports.createPortal = function() {
    throw Error(e(448));
};
exports.experimental_useFormStatus = function() {
    throw Error(e(248));
};
exports.flushSync = function() {
    throw Error(e(449));
};
exports.preconnect = function(b, a) {
    var c = f.current;
    c && c.preconnect(b, a);
};
exports.prefetchDNS = function(b) {
    var a = f.current;
    a && a.prefetchDNS(b);
};
exports.preinit = function(b, a) {
    var c = f.current;
    c && c.preinit(b, a);
};
exports.preload = function(b, a) {
    var c = f.current;
    c && c.preload(b, a);
};
exports.unstable_batchedUpdates = function(b, a) {
    return b(a);
};
exports.version = "18.3.0-canary-1a001dac6-20230812";


/***/ }),

/***/ 52060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(15153);
} else {}


/***/ }),

/***/ 19200:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-server-dom-webpack-server.edge.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var aa = __webpack_require__(62947), ba = __webpack_require__(52060), l = null, m = 0;
function n(a, b) {
    if (0 !== b.byteLength) if (512 < b.byteLength) 0 < m && (a.enqueue(new Uint8Array(l.buffer, 0, m)), l = new Uint8Array(512), m = 0), a.enqueue(b);
    else {
        var d = l.length - m;
        d < b.byteLength && (0 === d ? a.enqueue(l) : (l.set(b.subarray(0, d), m), a.enqueue(l), b = b.subarray(d)), l = new Uint8Array(512), m = 0);
        l.set(b, m);
        m += b.byteLength;
    }
    return !0;
}
var p = new TextEncoder;
function ca(a, b) {
    "function" === typeof a.error ? a.error(b) : a.close();
}
var q = Symbol.for("react.client.reference"), t = Symbol.for("react.server.reference");
function u(a, b, d) {
    return Object.defineProperties(a, {
        $$typeof: {
            value: q
        },
        $$id: {
            value: b
        },
        $$async: {
            value: d
        }
    });
}
var da = Function.prototype.bind, ea = Array.prototype.slice;
function fa() {
    var a = da.apply(this, arguments);
    if (this.$$typeof === t) {
        var b = ea.call(arguments, 1);
        a.$$typeof = t;
        a.$$id = this.$$id;
        a.$$bound = this.$$bound ? this.$$bound.concat(b) : b;
    }
    return a;
}
var ha = Promise.prototype, ia = {
    get: function(a, b) {
        switch(b){
            case "$$typeof":
                return a.$$typeof;
            case "$$id":
                return a.$$id;
            case "$$async":
                return a.$$async;
            case "name":
                return a.name;
            case "displayName":
                return;
            case "defaultProps":
                return;
            case "toJSON":
                return;
            case Symbol.toPrimitive:
                return Object.prototype[Symbol.toPrimitive];
            case "Provider":
                throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
        }
        throw Error("Cannot access " + (String(a.name) + "." + String(b)) + " on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.");
    },
    set: function() {
        throw Error("Cannot assign to a client module from a server module.");
    }
}, ja = {
    get: function(a, b) {
        switch(b){
            case "$$typeof":
                return a.$$typeof;
            case "$$id":
                return a.$$id;
            case "$$async":
                return a.$$async;
            case "name":
                return a.name;
            case "defaultProps":
                return;
            case "toJSON":
                return;
            case Symbol.toPrimitive:
                return Object.prototype[Symbol.toPrimitive];
            case "__esModule":
                var d = a.$$id;
                a.default = u(function() {
                    throw Error("Attempted to call the default export of " + d + " from the server but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
                }, a.$$id + "#", a.$$async);
                return !0;
            case "then":
                if (a.then) return a.then;
                if (a.$$async) return;
                var c = u({}, a.$$id, !0), e = new Proxy(c, ja);
                a.status = "fulfilled";
                a.value = e;
                return a.then = u(function(f) {
                    return Promise.resolve(f(e));
                }, a.$$id + "#then", !1);
        }
        c = a[b];
        c || (c = u(function() {
            throw Error("Attempted to call " + String(b) + "() from the server but " + String(b) + " is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
        }, a.$$id + "#" + b, a.$$async), Object.defineProperty(c, "name", {
            value: b
        }), c = a[b] = new Proxy(c, ia));
        return c;
    },
    getPrototypeOf: function() {
        return ha;
    },
    set: function() {
        throw Error("Cannot assign to a client module from a server module.");
    }
}, pa = {
    prefetchDNS: ka,
    preconnect: la,
    preload: ma,
    preinit: na
};
function ka(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = "D" + a;
            c.has(e) || (c.add(e), b ? w(d, "D", [
                a,
                b
            ]) : w(d, "D", a), x(d));
        }
    }
}
function la(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = null == b || "string" !== typeof b.crossOrigin ? null : "use-credentials" === b.crossOrigin ? "use-credentials" : "";
            e = "C" + (null === e ? "null" : e) + "|" + a;
            c.has(e) || (c.add(e), b ? w(d, "C", [
                a,
                b
            ]) : w(d, "C", a), x(d));
        }
    }
}
function ma(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = "L" + a;
            c.has(e) || (c.add(e), w(d, "L", [
                a,
                b
            ]), x(d));
        }
    }
}
function na(a, b) {
    if ("string" === typeof a) {
        var d = v();
        if (d) {
            var c = d.hints, e = "I" + a;
            c.has(e) || (c.add(e), w(d, "I", [
                a,
                b
            ]), x(d));
        }
    }
}
var qa = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher, ra = "function" === typeof AsyncLocalStorage, sa = ra ? new AsyncLocalStorage : null, C = Symbol.for("react.element"), ta = Symbol.for("react.fragment"), ua = Symbol.for("react.provider"), va = Symbol.for("react.server_context"), wa = Symbol.for("react.forward_ref"), xa = Symbol.for("react.suspense"), ya = Symbol.for("react.suspense_list"), za = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), Aa = Symbol.for("react.default_value"), Ba = Symbol.for("react.memo_cache_sentinel"), Ca = Symbol.iterator, E = null;
function F(a, b) {
    if (a !== b) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var d = b.parent;
        if (null === a) {
            if (null !== d) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
            if (null === d) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
            F(a, d);
            b.context._currentValue = b.value;
        }
    }
}
function Da(a) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    null !== a && Da(a);
}
function Ea(a) {
    var b = a.parent;
    null !== b && Ea(b);
    a.context._currentValue = a.value;
}
function Fa(a, b) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === b.depth ? F(a, b) : Fa(a, b);
}
function Ga(a, b) {
    var d = b.parent;
    if (null === d) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === d.depth ? F(a, d) : Ga(a, d);
    b.context._currentValue = b.value;
}
function Ha(a) {
    var b = E;
    b !== a && (null === b ? Ea(a) : null === a ? Da(b) : b.depth === a.depth ? F(b, a) : b.depth > a.depth ? Fa(b, a) : Ga(b, a), E = a);
}
function Ia(a, b) {
    var d = a._currentValue;
    a._currentValue = b;
    var c = E;
    return E = a = {
        parent: c,
        depth: null === c ? 0 : c.depth + 1,
        context: a,
        parentValue: d,
        value: b
    };
}
var Ja = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`");
function Ka() {}
function La(a, b, d) {
    d = a[d];
    void 0 === d ? a.push(b) : d !== b && (b.then(Ka, Ka), b = d);
    switch(b.status){
        case "fulfilled":
            return b.value;
        case "rejected":
            throw b.reason;
        default:
            if ("string" !== typeof b.status) switch(a = b, a.status = "pending", a.then(function(c) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "fulfilled";
                    e.value = c;
                }
            }, function(c) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "rejected";
                    e.reason = c;
                }
            }), b.status){
                case "fulfilled":
                    return b.value;
                case "rejected":
                    throw b.reason;
            }
            G = b;
            throw Ja;
    }
}
var G = null;
function Ma() {
    if (null === G) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
    var a = G;
    G = null;
    return a;
}
var H = null, I = 0, J = null;
function Na() {
    var a = J;
    J = null;
    return a;
}
function Oa(a) {
    return a._currentValue;
}
var Sa = {
    useMemo: function(a) {
        return a();
    },
    useCallback: function(a) {
        return a;
    },
    useDebugValue: function() {},
    useDeferredValue: K,
    useTransition: K,
    readContext: Oa,
    useContext: Oa,
    useReducer: K,
    useRef: K,
    useState: K,
    useInsertionEffect: K,
    useLayoutEffect: K,
    useImperativeHandle: K,
    useEffect: K,
    useId: Pa,
    useSyncExternalStore: K,
    useCacheRefresh: function() {
        return Qa;
    },
    useMemoCache: function(a) {
        for(var b = Array(a), d = 0; d < a; d++)b[d] = Ba;
        return b;
    },
    use: Ra
};
function K() {
    throw Error("This Hook is not supported in Server Components.");
}
function Qa() {
    throw Error("Refreshing the cache is not supported in Server Components.");
}
function Pa() {
    if (null === H) throw Error("useId can only be used while React is rendering");
    var a = H.identifierCount++;
    return ":" + H.identifierPrefix + "S" + a.toString(32) + ":";
}
function Ra(a) {
    if (null !== a && "object" === typeof a || "function" === typeof a) {
        if ("function" === typeof a.then) {
            var b = I;
            I += 1;
            null === J && (J = []);
            return La(J, a, b);
        }
        if (a.$$typeof === va) return a._currentValue;
    }
    throw Error("An unsupported type was passed to use(): " + String(a));
}
function Ta() {
    return (new AbortController).signal;
}
function Ua() {
    var a = v();
    return a ? a.cache : new Map;
}
var Va = {
    getCacheSignal: function() {
        var a = Ua(), b = a.get(Ta);
        void 0 === b && (b = Ta(), a.set(Ta, b));
        return b;
    },
    getCacheForType: function(a) {
        var b = Ua(), d = b.get(a);
        void 0 === d && (d = a(), b.set(a, d));
        return d;
    }
}, Wa = Array.isArray;
function Xa(a) {
    return Object.prototype.toString.call(a).replace(/^\[object (.*)\]$/, function(b, d) {
        return d;
    });
}
function Ya(a) {
    switch(typeof a){
        case "string":
            return JSON.stringify(10 >= a.length ? a : a.slice(0, 10) + "...");
        case "object":
            if (Wa(a)) return "[...]";
            a = Xa(a);
            return "Object" === a ? "{...}" : a;
        case "function":
            return "function";
        default:
            return String(a);
    }
}
function L(a) {
    if ("string" === typeof a) return a;
    switch(a){
        case xa:
            return "Suspense";
        case ya:
            return "SuspenseList";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case wa:
            return L(a.render);
        case za:
            return L(a.type);
        case D:
            var b = a._payload;
            a = a._init;
            try {
                return L(a(b));
            } catch (d) {}
    }
    return "";
}
function M(a, b) {
    var d = Xa(a);
    if ("Object" !== d && "Array" !== d) return d;
    d = -1;
    var c = 0;
    if (Wa(a)) {
        var e = "[";
        for(var f = 0; f < a.length; f++){
            0 < f && (e += ", ");
            var g = a[f];
            g = "object" === typeof g && null !== g ? M(g) : Ya(g);
            "" + f === b ? (d = e.length, c = g.length, e += g) : e = 10 > g.length && 40 > e.length + g.length ? e + g : e + "...";
        }
        e += "]";
    } else if (a.$$typeof === C) e = "<" + L(a.type) + "/>";
    else {
        e = "{";
        f = Object.keys(a);
        for(g = 0; g < f.length; g++){
            0 < g && (e += ", ");
            var k = f[g], h = JSON.stringify(k);
            e += ('"' + k + '"' === h ? k : h) + ": ";
            h = a[k];
            h = "object" === typeof h && null !== h ? M(h) : Ya(h);
            k === b ? (d = e.length, c = h.length, e += h) : e = 10 > h.length && 40 > e.length + h.length ? e + h : e + "...";
        }
        e += "}";
    }
    return void 0 === b ? e : -1 < d && 0 < c ? (a = " ".repeat(d) + "^".repeat(c), "\n  " + e + "\n  " + a) : "\n  " + e;
}
var Za = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $a = Za.ContextRegistry, N = JSON.stringify, ab = Za.ReactCurrentDispatcher, bb = Za.ReactCurrentCache;
function cb(a) {
    console.error(a);
}
function db(a, b, d, c, e) {
    if (null !== bb.current && bb.current !== Va) throw Error("Currently React only supports one RSC renderer at a time.");
    qa.current = pa;
    bb.current = Va;
    var f = new Set, g = [], k = new Set, h = {
        status: 0,
        flushScheduled: !1,
        fatalError: null,
        destination: null,
        bundlerConfig: b,
        cache: new Map,
        nextChunkId: 0,
        pendingChunks: 0,
        hints: k,
        abortableTasks: f,
        pingedTasks: g,
        completedImportChunks: [],
        completedHintChunks: [],
        completedRegularChunks: [],
        completedErrorChunks: [],
        writtenSymbols: new Map,
        writtenClientReferences: new Map,
        writtenServerReferences: new Map,
        writtenProviders: new Map,
        identifierPrefix: e || "",
        identifierCount: 1,
        onError: void 0 === d ? cb : d,
        toJSON: function(r, y) {
            return eb(h, this, r, y);
        }
    };
    h.pendingChunks++;
    b = fb(c);
    a = gb(h, a, b, f);
    g.push(a);
    return h;
}
var O = null;
function v() {
    if (O) return O;
    if (ra) {
        var a = sa.getStore();
        if (a) return a;
    }
    return null;
}
var hb = {};
function ib(a, b) {
    a.pendingChunks++;
    var d = gb(a, null, E, a.abortableTasks);
    switch(b.status){
        case "fulfilled":
            return d.model = b.value, jb(a, d), d.id;
        case "rejected":
            var c = P(a, b.reason);
            Q(a, d.id, c);
            return d.id;
        default:
            "string" !== typeof b.status && (b.status = "pending", b.then(function(e) {
                "pending" === b.status && (b.status = "fulfilled", b.value = e);
            }, function(e) {
                "pending" === b.status && (b.status = "rejected", b.reason = e);
            }));
    }
    b.then(function(e) {
        d.model = e;
        jb(a, d);
    }, function(e) {
        d.status = 4;
        e = P(a, e);
        Q(a, d.id, e);
        null !== a.destination && R(a, a.destination);
    });
    return d.id;
}
function kb(a) {
    if ("fulfilled" === a.status) return a.value;
    if ("rejected" === a.status) throw a.reason;
    throw a;
}
function lb(a) {
    switch(a.status){
        case "fulfilled":
        case "rejected":
            break;
        default:
            "string" !== typeof a.status && (a.status = "pending", a.then(function(b) {
                "pending" === a.status && (a.status = "fulfilled", a.value = b);
            }, function(b) {
                "pending" === a.status && (a.status = "rejected", a.reason = b);
            }));
    }
    return {
        $$typeof: D,
        _payload: a,
        _init: kb
    };
}
function S(a, b, d, c, e, f) {
    if (null !== c && void 0 !== c) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
    if ("function" === typeof b) {
        if (b.$$typeof === q) return [
            C,
            b,
            d,
            e
        ];
        I = 0;
        J = f;
        e = b(e);
        return "object" === typeof e && null !== e && "function" === typeof e.then ? "fulfilled" === e.status ? e.value : lb(e) : e;
    }
    if ("string" === typeof b) return [
        C,
        b,
        d,
        e
    ];
    if ("symbol" === typeof b) return b === ta ? e.children : [
        C,
        b,
        d,
        e
    ];
    if (null != b && "object" === typeof b) {
        if (b.$$typeof === q) return [
            C,
            b,
            d,
            e
        ];
        switch(b.$$typeof){
            case D:
                var g = b._init;
                b = g(b._payload);
                return S(a, b, d, c, e, f);
            case wa:
                return a = b.render, I = 0, J = f, a(e, void 0);
            case za:
                return S(a, b.type, d, c, e, f);
            case ua:
                return Ia(b._context, e.value), [
                    C,
                    b,
                    d,
                    {
                        value: e.value,
                        children: e.children,
                        __pop: hb
                    }
                ];
        }
    }
    throw Error("Unsupported Server Component type: " + Ya(b));
}
function jb(a, b) {
    var d = a.pingedTasks;
    d.push(b);
    1 === d.length && (a.flushScheduled = null !== a.destination, setTimeout(function() {
        return mb(a);
    }, 0));
}
function gb(a, b, d, c) {
    var e = {
        id: a.nextChunkId++,
        status: 0,
        model: b,
        context: d,
        ping: function() {
            return jb(a, e);
        },
        thenableState: null
    };
    c.add(e);
    return e;
}
function T(a) {
    return "$" + a.toString(16);
}
function nb(a, b, d, c) {
    var e = c.$$async ? c.$$id + "#async" : c.$$id, f = a.writtenClientReferences, g = f.get(e);
    if (void 0 !== g) return b[0] === C && "1" === d ? "$L" + g.toString(16) : T(g);
    try {
        var k = a.bundlerConfig, h = c.$$id;
        g = "";
        var r = k[h];
        if (r) g = r.name;
        else {
            var y = h.lastIndexOf("#");
            -1 !== y && (g = h.slice(y + 1), r = k[h.slice(0, y)]);
            if (!r) throw Error('Could not find the module "' + h + '" in the React Client Manifest. This is probably a bug in the React Server Components bundler.');
        }
        var z = {
            id: r.id,
            chunks: r.chunks,
            name: g,
            async: !!c.$$async
        };
        a.pendingChunks++;
        var A = a.nextChunkId++, oa = N(z), B = A.toString(16) + ":I" + oa + "\n";
        var Fb = p.encode(B);
        a.completedImportChunks.push(Fb);
        f.set(e, A);
        return b[0] === C && "1" === d ? "$L" + A.toString(16) : T(A);
    } catch (Gb) {
        return a.pendingChunks++, b = a.nextChunkId++, d = P(a, Gb), Q(a, b, d), T(b);
    }
}
function ob(a, b) {
    a.pendingChunks++;
    var d = a.nextChunkId++;
    b = pb(a, d, b);
    a.completedRegularChunks.push(b);
    return d;
}
function eb(a, b, d, c) {
    switch(c){
        case C:
            return "$";
    }
    for(; "object" === typeof c && null !== c && (c.$$typeof === C || c.$$typeof === D);)try {
        switch(c.$$typeof){
            case C:
                var e = c;
                c = S(a, e.type, e.key, e.ref, e.props, null);
                break;
            case D:
                var f = c._init;
                c = f(c._payload);
        }
    } catch (g) {
        d = g === Ja ? Ma() : g;
        if ("object" === typeof d && null !== d && "function" === typeof d.then) return a.pendingChunks++, a = gb(a, c, E, a.abortableTasks), c = a.ping, d.then(c, c), a.thenableState = Na(), "$L" + a.id.toString(16);
        a.pendingChunks++;
        c = a.nextChunkId++;
        d = P(a, d);
        Q(a, c, d);
        return "$L" + c.toString(16);
    }
    if (null === c) return null;
    if ("object" === typeof c) {
        if (c.$$typeof === q) return nb(a, b, d, c);
        if ("function" === typeof c.then) return "$@" + ib(a, c).toString(16);
        if (c.$$typeof === ua) return c = c._context._globalName, b = a.writtenProviders, d = b.get(d), void 0 === d && (a.pendingChunks++, d = a.nextChunkId++, b.set(c, d), c = qb(a, d, "$P" + c), a.completedRegularChunks.push(c)), T(d);
        if (c === hb) {
            a = E;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            c = a.parentValue;
            a.context._currentValue = c === Aa ? a.context._defaultValue : c;
            E = a.parent;
            return;
        }
        return c instanceof Map ? "$Q" + ob(a, Array.from(c)).toString(16) : c instanceof Set ? "$W" + ob(a, Array.from(c)).toString(16) : !Wa(c) && (null === c || "object" !== typeof c ? a = null : (a = Ca && c[Ca] || c["@@iterator"], a = "function" === typeof a ? a : null), a) ? Array.from(c) : c;
    }
    if ("string" === typeof c) {
        if ("Z" === c[c.length - 1] && b[d] instanceof Date) return "$D" + c;
        if (1024 <= c.length) return a.pendingChunks += 2, d = a.nextChunkId++, c = p.encode(c), b = c.byteLength, b = d.toString(16) + ":T" + b.toString(16) + ",", b = p.encode(b), a.completedRegularChunks.push(b, c), T(d);
        a = "$" === c[0] ? "$" + c : c;
        return a;
    }
    if ("boolean" === typeof c) return c;
    if ("number" === typeof c) return a = c, Number.isFinite(a) ? 0 === a && -Infinity === 1 / a ? "$-0" : a : Infinity === a ? "$Infinity" : -Infinity === a ? "$-Infinity" : "$NaN";
    if ("undefined" === typeof c) return "$undefined";
    if ("function" === typeof c) {
        if (c.$$typeof === q) return nb(a, b, d, c);
        if (c.$$typeof === t) return d = a.writtenServerReferences, b = d.get(c), void 0 !== b ? a = "$F" + b.toString(16) : (b = c.$$bound, b = {
            id: c.$$id,
            bound: b ? Promise.resolve(b) : null
        }, a = ob(a, b), d.set(c, a), a = "$F" + a.toString(16)), a;
        if (/^on[A-Z]/.test(d)) throw Error("Event handlers cannot be passed to Client Component props." + M(b, d) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
        throw Error('Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server".' + M(b, d));
    }
    if ("symbol" === typeof c) {
        e = a.writtenSymbols;
        f = e.get(c);
        if (void 0 !== f) return T(f);
        f = c.description;
        if (Symbol.for(f) !== c) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (c.description + ") cannot be found among global symbols.") + M(b, d));
        a.pendingChunks++;
        d = a.nextChunkId++;
        b = qb(a, d, "$S" + f);
        a.completedImportChunks.push(b);
        e.set(c, d);
        return T(d);
    }
    if ("bigint" === typeof c) return "$n" + c.toString(10);
    throw Error("Type " + typeof c + " is not supported in Client Component props." + M(b, d));
}
function P(a, b) {
    a = a.onError;
    b = a(b);
    if (null != b && "string" !== typeof b) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
    return b || "";
}
function rb(a, b) {
    null !== a.destination ? (a.status = 2, ca(a.destination, b)) : (a.status = 1, a.fatalError = b);
}
function Q(a, b, d) {
    d = {
        digest: d
    };
    b = b.toString(16) + ":E" + N(d) + "\n";
    b = p.encode(b);
    a.completedErrorChunks.push(b);
}
function w(a, b, d) {
    var c = a.nextChunkId++;
    d = N(d);
    b = "H" + b;
    c = c.toString(16) + ":" + b;
    c = p.encode(c + d + "\n");
    a.completedHintChunks.push(c);
}
function mb(a) {
    var b = ab.current;
    ab.current = Sa;
    var d = O;
    H = O = a;
    try {
        var c = a.pingedTasks;
        a.pingedTasks = [];
        for(var e = 0; e < c.length; e++){
            var f = c[e];
            var g = a;
            if (0 === f.status) {
                Ha(f.context);
                try {
                    var k = f.model;
                    if ("object" === typeof k && null !== k && k.$$typeof === C) {
                        var h = k, r = f.thenableState;
                        f.model = k;
                        k = S(g, h.type, h.key, h.ref, h.props, r);
                        for(f.thenableState = null; "object" === typeof k && null !== k && k.$$typeof === C;)h = k, f.model = k, k = S(g, h.type, h.key, h.ref, h.props, null);
                    }
                    var y = pb(g, f.id, k);
                    g.completedRegularChunks.push(y);
                    g.abortableTasks.delete(f);
                    f.status = 1;
                } catch (B) {
                    var z = B === Ja ? Ma() : B;
                    if ("object" === typeof z && null !== z && "function" === typeof z.then) {
                        var A = f.ping;
                        z.then(A, A);
                        f.thenableState = Na();
                    } else {
                        g.abortableTasks.delete(f);
                        f.status = 4;
                        var oa = P(g, z);
                        Q(g, f.id, oa);
                    }
                }
            }
        }
        null !== a.destination && R(a, a.destination);
    } catch (B) {
        P(a, B), rb(a, B);
    } finally{
        ab.current = b, H = null, O = d;
    }
}
function R(a, b) {
    l = new Uint8Array(512);
    m = 0;
    try {
        for(var d = a.completedImportChunks, c = 0; c < d.length; c++)a.pendingChunks--, n(b, d[c]);
        d.splice(0, c);
        var e = a.completedHintChunks;
        for(c = 0; c < e.length; c++)n(b, e[c]);
        e.splice(0, c);
        var f = a.completedRegularChunks;
        for(c = 0; c < f.length; c++)a.pendingChunks--, n(b, f[c]);
        f.splice(0, c);
        var g = a.completedErrorChunks;
        for(c = 0; c < g.length; c++)a.pendingChunks--, n(b, g[c]);
        g.splice(0, c);
    } finally{
        a.flushScheduled = !1, l && 0 < m && (b.enqueue(new Uint8Array(l.buffer, 0, m)), l = null, m = 0);
    }
    0 === a.pendingChunks && b.close();
}
function sb(a) {
    a.flushScheduled = null !== a.destination;
    ra ? setTimeout(function() {
        return sa.run(a, mb, a);
    }, 0) : setTimeout(function() {
        return mb(a);
    }, 0);
}
function x(a) {
    if (!1 === a.flushScheduled && 0 === a.pingedTasks.length && null !== a.destination) {
        var b = a.destination;
        a.flushScheduled = !0;
        setTimeout(function() {
            return R(a, b);
        }, 0);
    }
}
function tb(a, b) {
    try {
        var d = a.abortableTasks;
        if (0 < d.size) {
            var c = P(a, void 0 === b ? Error("The render was aborted by the server without a reason.") : b);
            a.pendingChunks++;
            var e = a.nextChunkId++;
            Q(a, e, c);
            d.forEach(function(f) {
                f.status = 3;
                var g = T(e);
                f = qb(a, f.id, g);
                a.completedErrorChunks.push(f);
            });
            d.clear();
        }
        null !== a.destination && R(a, a.destination);
    } catch (f) {
        P(a, f), rb(a, f);
    }
}
function fb(a) {
    if (a) {
        var b = E;
        Ha(null);
        for(var d = 0; d < a.length; d++){
            var c = a[d], e = c[0];
            c = c[1];
            $a[e] || ($a[e] = aa.createServerContext(e, Aa));
            Ia($a[e], c);
        }
        a = E;
        Ha(b);
        return a;
    }
    return null;
}
function pb(a, b, d) {
    a = N(d, a.toJSON);
    b = b.toString(16) + ":" + a + "\n";
    return p.encode(b);
}
function qb(a, b, d) {
    a = N(d);
    b = b.toString(16) + ":" + a + "\n";
    return p.encode(b);
}
function ub(a, b) {
    var d = "", c = a[b];
    if (c) d = c.name;
    else {
        var e = b.lastIndexOf("#");
        -1 !== e && (d = b.slice(e + 1), c = a[b.slice(0, e)]);
        if (!c) throw Error('Could not find the module "' + b + '" in the React Server Manifest. This is probably a bug in the React Server Components bundler.');
    }
    return {
        id: c.id,
        chunks: c.chunks,
        name: d,
        async: !1
    };
}
var U = new Map;
function vb(a) {
    var b = globalThis.__next_require__(a);
    if ("function" !== typeof b.then || "fulfilled" === b.status) return null;
    b.then(function(d) {
        b.status = "fulfilled";
        b.value = d;
    }, function(d) {
        b.status = "rejected";
        b.reason = d;
    });
    return b;
}
function wb() {}
function xb(a) {
    for(var b = a.chunks, d = [], c = 0; c < b.length; c++){
        var e = b[c], f = U.get(e);
        if (void 0 === f) {
            f = globalThis.__next_chunk_load__(e);
            d.push(f);
            var g = U.set.bind(U, e, null);
            f.then(g, wb);
            U.set(e, f);
        } else null !== f && d.push(f);
    }
    return a.async ? 0 === d.length ? vb(a.id) : Promise.all(d).then(function() {
        return vb(a.id);
    }) : 0 < d.length ? Promise.all(d) : null;
}
function V(a) {
    var b = globalThis.__next_require__(a.id);
    if (a.async && "function" === typeof b.then) if ("fulfilled" === b.status) b = b.value;
    else throw b.reason;
    return "*" === a.name ? b : "" === a.name ? b.__esModule ? b.default : b : b[a.name];
}
function W(a, b, d, c) {
    this.status = a;
    this.value = b;
    this.reason = d;
    this._response = c;
}
W.prototype = Object.create(Promise.prototype);
W.prototype.then = function(a, b) {
    switch(this.status){
        case "resolved_model":
            yb(this);
    }
    switch(this.status){
        case "fulfilled":
            a(this.value);
            break;
        case "pending":
        case "blocked":
            a && (null === this.value && (this.value = []), this.value.push(a));
            b && (null === this.reason && (this.reason = []), this.reason.push(b));
            break;
        default:
            b(this.reason);
    }
};
function zb(a, b) {
    for(var d = 0; d < a.length; d++)(0, a[d])(b);
}
function Ab(a, b) {
    if ("pending" === a.status || "blocked" === a.status) {
        var d = a.reason;
        a.status = "rejected";
        a.reason = b;
        null !== d && zb(d, b);
    }
}
function Bb(a, b, d, c, e, f) {
    var g = ub(a._bundlerConfig, b);
    a = xb(g);
    if (d) d = Promise.all([
        d,
        a
    ]).then(function(k) {
        k = k[0];
        var h = V(g);
        return h.bind.apply(h, [
            null
        ].concat(k));
    });
    else if (a) d = Promise.resolve(a).then(function() {
        return V(g);
    });
    else return V(g);
    d.then(Cb(c, e, f), Db(c));
    return null;
}
var X = null, Y = null;
function yb(a) {
    var b = X, d = Y;
    X = a;
    Y = null;
    try {
        var c = JSON.parse(a.value, a._response._fromJSON);
        null !== Y && 0 < Y.deps ? (Y.value = c, a.status = "blocked", a.value = null, a.reason = null) : (a.status = "fulfilled", a.value = c);
    } catch (e) {
        a.status = "rejected", a.reason = e;
    } finally{
        X = b, Y = d;
    }
}
function Eb(a, b) {
    a._chunks.forEach(function(d) {
        "pending" === d.status && Ab(d, b);
    });
}
function Z(a, b) {
    var d = a._chunks, c = d.get(b);
    c || (c = a._formData.get(a._prefix + b), c = null != c ? new W("resolved_model", c, null, a) : new W("pending", null, null, a), d.set(b, c));
    return c;
}
function Cb(a, b, d) {
    if (Y) {
        var c = Y;
        c.deps++;
    } else c = Y = {
        deps: 1,
        value: null
    };
    return function(e) {
        b[d] = e;
        c.deps--;
        0 === c.deps && "blocked" === a.status && (e = a.value, a.status = "fulfilled", a.value = c.value, null !== e && zb(e, c.value));
    };
}
function Db(a) {
    return function(b) {
        return Ab(a, b);
    };
}
function Hb(a, b) {
    a = Z(a, b);
    "resolved_model" === a.status && yb(a);
    if ("fulfilled" !== a.status) throw a.reason;
    return a.value;
}
function Ib(a, b, d, c) {
    if ("$" === c[0]) switch(c[1]){
        case "$":
            return c.slice(1);
        case "@":
            return b = parseInt(c.slice(2), 16), Z(a, b);
        case "S":
            return Symbol.for(c.slice(2));
        case "F":
            return c = parseInt(c.slice(2), 16), c = Hb(a, c), Bb(a, c.id, c.bound, X, b, d);
        case "Q":
            return b = parseInt(c.slice(2), 16), a = Hb(a, b), new Map(a);
        case "W":
            return b = parseInt(c.slice(2), 16), a = Hb(a, b), new Set(a);
        case "K":
            b = c.slice(2);
            var e = a._prefix + b + "_", f = new FormData;
            a._formData.forEach(function(g, k) {
                k.startsWith(e) && f.append(k.slice(e.length), g);
            });
            return f;
        case "I":
            return Infinity;
        case "-":
            return "$-0" === c ? -0 : -Infinity;
        case "N":
            return NaN;
        case "u":
            return;
        case "D":
            return new Date(Date.parse(c.slice(2)));
        case "n":
            return BigInt(c.slice(2));
        default:
            c = parseInt(c.slice(1), 16);
            a = Z(a, c);
            switch(a.status){
                case "resolved_model":
                    yb(a);
            }
            switch(a.status){
                case "fulfilled":
                    return a.value;
                case "pending":
                case "blocked":
                    return c = X, a.then(Cb(c, b, d), Db(c)), null;
                default:
                    throw a.reason;
            }
    }
    return c;
}
function Jb(a, b) {
    var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : new FormData, c = new Map, e = {
        _bundlerConfig: a,
        _prefix: b,
        _formData: d,
        _chunks: c,
        _fromJSON: function(f, g) {
            return "string" === typeof g ? Ib(e, this, f, g) : g;
        }
    };
    return e;
}
function Kb(a) {
    Eb(a, Error("Connection closed."));
}
function Lb(a, b, d) {
    var c = ub(a, b);
    a = xb(c);
    return d ? Promise.all([
        d,
        a
    ]).then(function(e) {
        e = e[0];
        var f = V(c);
        return f.bind.apply(f, [
            null
        ].concat(e));
    }) : a ? Promise.resolve(a).then(function() {
        return V(c);
    }) : Promise.resolve(V(c));
}
exports.createClientModuleProxy = function(a) {
    a = u({}, a, !1);
    return new Proxy(a, ja);
};
exports.decodeAction = function(a, b) {
    var d = new FormData, c = null;
    a.forEach(function(e, f) {
        if (f.startsWith("$ACTION_")) if (f.startsWith("$ACTION_REF_")) {
            e = "$ACTION_" + f.slice(12) + ":";
            e = Jb(b, e, a);
            Kb(e);
            e = Z(e, 0);
            e.then(function() {});
            if ("fulfilled" !== e.status) throw e.reason;
            e = e.value;
            c = Lb(b, e.id, e.bound);
        } else f.startsWith("$ACTION_ID_") && (e = f.slice(11), c = Lb(b, e, null));
        else d.append(f, e);
    });
    return null === c ? null : c.then(function(e) {
        return e.bind(null, d);
    });
};
exports.decodeReply = function(a, b) {
    if ("string" === typeof a) {
        var d = new FormData;
        d.append("0", a);
        a = d;
    }
    a = Jb(b, "", a);
    Kb(a);
    return Z(a, 0);
};
exports.registerClientReference = function(a, b, d) {
    return u(a, b + "#" + d, !1);
};
exports.registerServerReference = function(a, b, d) {
    return Object.defineProperties(a, {
        $$typeof: {
            value: t
        },
        $$id: {
            value: null === d ? b : b + "#" + d
        },
        $$bound: {
            value: null
        },
        bind: {
            value: fa
        }
    });
};
exports.renderToReadableStream = function(a, b, d) {
    var c = db(a, b, d ? d.onError : void 0, d ? d.context : void 0, d ? d.identifierPrefix : void 0);
    if (d && d.signal) {
        var e = d.signal;
        if (e.aborted) tb(c, e.reason);
        else {
            var f = function() {
                tb(c, e.reason);
                e.removeEventListener("abort", f);
            };
            e.addEventListener("abort", f);
        }
    }
    return new ReadableStream({
        type: "bytes",
        start: function() {
            sb(c);
        },
        pull: function(g) {
            if (1 === c.status) c.status = 2, ca(g, c.fatalError);
            else if (2 !== c.status && null === c.destination) {
                c.destination = g;
                try {
                    R(c, g);
                } catch (k) {
                    P(c, k), rb(c, k);
                }
            }
        },
        cancel: function() {}
    }, {
        highWaterMark: 0
    });
};


/***/ }),

/***/ 89642:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(19200);
} else {}


/***/ }),

/***/ 29446:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.shared-subset.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var m = Object.assign, n = {
    current: null
};
function p() {
    return new Map;
}
if ("function" === typeof fetch) {
    var q = fetch, r = function(a, b) {
        var d = n.current;
        if (!d || b && b.signal && b.signal !== d.getCacheSignal()) return q(a, b);
        if ("string" !== typeof a || b) {
            var c = "string" === typeof a || a instanceof URL ? new Request(a, b) : a;
            if ("GET" !== c.method && "HEAD" !== c.method || c.keepalive) return q(a, b);
            var e = JSON.stringify([
                c.method,
                Array.from(c.headers.entries()),
                c.mode,
                c.redirect,
                c.credentials,
                c.referrer,
                c.referrerPolicy,
                c.integrity
            ]);
            c = c.url;
        } else e = '["GET",[],null,"follow",null,null,null,null]', c = a;
        var f = d.getCacheForType(p);
        d = f.get(c);
        if (void 0 === d) a = q(a, b), f.set(c, [
            e,
            a
        ]);
        else {
            c = 0;
            for(f = d.length; c < f; c += 2){
                var h = d[c + 1];
                if (d[c] === e) return a = h, a.then(function(g) {
                    return g.clone();
                });
            }
            a = q(a, b);
            d.push(e, a);
        }
        return a.then(function(g) {
            return g.clone();
        });
    };
    m(r, q);
    try {
        fetch = r;
    } catch (a) {
        try {
            globalThis.fetch = r;
        } catch (b) {
            console.warn("React was unable to patch the fetch() function in this environment. Suspensey APIs might not work correctly as a result.");
        }
    }
}
var t = Symbol.for("react.element"), u = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), z = Symbol.for("react.server_context"), A = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), aa = Symbol.for("react.lazy"), D = Symbol.for("react.default_value"), E = Symbol.iterator;
function ba(a) {
    if (null === a || "object" !== typeof a) return null;
    a = E && a[E] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
function F(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 1; d < arguments.length; d++)b += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var G = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, H = {};
function I(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
I.prototype.isReactComponent = {};
I.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(F(85));
    this.updater.enqueueSetState(this, a, b, "setState");
};
I.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function J() {}
J.prototype = I.prototype;
function K(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
var L = K.prototype = new J;
L.constructor = K;
m(L, I.prototype);
L.isPureReactComponent = !0;
var M = Array.isArray, N = Object.prototype.hasOwnProperty, O = {
    current: null
}, P = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ca(a, b) {
    return {
        $$typeof: t,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function Q(a) {
    return "object" === typeof a && null !== a && a.$$typeof === t;
}
function escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(d) {
        return b[d];
    });
}
var R = /\/+/g;
function S(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function T(a, b, d, c, e) {
    var f = typeof a;
    if ("undefined" === f || "boolean" === f) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(f){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case t:
                case u:
                    h = !0;
            }
    }
    if (h) return h = a, e = e(h), a = "" === c ? "." + S(h, 0) : c, M(e) ? (d = "", null != a && (d = a.replace(R, "$&/") + "/"), T(e, b, d, "", function(l) {
        return l;
    })) : null != e && (Q(e) && (e = ca(e, d + (!e.key || h && h.key === e.key ? "" : ("" + e.key).replace(R, "$&/") + "/") + a)), b.push(e)), 1;
    h = 0;
    c = "" === c ? "." : c + ":";
    if (M(a)) for(var g = 0; g < a.length; g++){
        f = a[g];
        var k = c + S(f, g);
        h += T(f, b, d, k, e);
    }
    else if (k = ba(a), "function" === typeof k) for(a = k.call(a), g = 0; !(f = a.next()).done;)f = f.value, k = c + S(f, g++), h += T(f, b, d, k, e);
    else if ("object" === f) throw b = String(a), Error(F(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return h;
}
function U(a, b, d) {
    if (null == a) return a;
    var c = [], e = 0;
    T(a, c, "", "", function(f) {
        return b.call(d, f, e++);
    });
    return c;
}
function da(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(d) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = d;
        }, function(d) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = d;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
function ea() {
    return new WeakMap;
}
function V() {
    return {
        s: 0,
        v: void 0,
        o: null,
        p: null
    };
}
var W = {
    current: null
}, X = {
    transition: null
}, Y = {
    ReactCurrentDispatcher: W,
    ReactCurrentCache: n,
    ReactCurrentBatchConfig: X,
    ReactCurrentOwner: O,
    ContextRegistry: {}
}, Z = Y.ContextRegistry;
exports.Children = {
    map: U,
    forEach: function(a, b, d) {
        U(a, function() {
            b.apply(this, arguments);
        }, d);
    },
    count: function(a) {
        var b = 0;
        U(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return U(a, function(b) {
            return b;
        }) || [];
    },
    only: function(a) {
        if (!Q(a)) throw Error(F(143));
        return a;
    }
};
exports.Fragment = v;
exports.Profiler = x;
exports.StrictMode = w;
exports.Suspense = B;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y;
exports.cache = function(a) {
    return function() {
        var b = n.current;
        if (!b) return a.apply(null, arguments);
        var d = b.getCacheForType(ea);
        b = d.get(a);
        void 0 === b && (b = V(), d.set(a, b));
        d = 0;
        for(var c = arguments.length; d < c; d++){
            var e = arguments[d];
            if ("function" === typeof e || "object" === typeof e && null !== e) {
                var f = b.o;
                null === f && (b.o = f = new WeakMap);
                b = f.get(e);
                void 0 === b && (b = V(), f.set(e, b));
            } else f = b.p, null === f && (b.p = f = new Map), b = f.get(e), void 0 === b && (b = V(), f.set(e, b));
        }
        if (1 === b.s) return b.v;
        if (2 === b.s) throw b.v;
        try {
            var h = a.apply(null, arguments);
            d = b;
            d.s = 1;
            return d.v = h;
        } catch (g) {
            throw h = b, h.s = 2, h.v = g, g;
        }
    };
};
exports.cloneElement = function(a, b, d) {
    if (null === a || void 0 === a) throw Error(F(267, a));
    var c = m({}, a.props), e = a.key, f = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (f = b.ref, h = O.current);
        void 0 !== b.key && (e = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(k in b)N.call(b, k) && !P.hasOwnProperty(k) && (c[k] = void 0 === b[k] && void 0 !== g ? g[k] : b[k]);
    }
    var k = arguments.length - 2;
    if (1 === k) c.children = d;
    else if (1 < k) {
        g = Array(k);
        for(var l = 0; l < k; l++)g[l] = arguments[l + 2];
        c.children = g;
    }
    return {
        $$typeof: t,
        type: a.type,
        key: e,
        ref: f,
        props: c,
        _owner: h
    };
};
exports.createElement = function(a, b, d) {
    var c, e = {}, f = null, h = null;
    if (null != b) for(c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (f = "" + b.key), b)N.call(b, c) && !P.hasOwnProperty(c) && (e[c] = b[c]);
    var g = arguments.length - 2;
    if (1 === g) e.children = d;
    else if (1 < g) {
        for(var k = Array(g), l = 0; l < g; l++)k[l] = arguments[l + 2];
        e.children = k;
    }
    if (a && a.defaultProps) for(c in g = a.defaultProps, g)void 0 === e[c] && (e[c] = g[c]);
    return {
        $$typeof: t,
        type: a,
        key: f,
        ref: h,
        props: e,
        _owner: O.current
    };
};
exports.createRef = function() {
    return {
        current: null
    };
};
exports.createServerContext = function(a, b) {
    var d = !0;
    if (!Z[a]) {
        d = !1;
        var c = {
            $$typeof: z,
            _currentValue: b,
            _currentValue2: b,
            _defaultValue: b,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _globalName: a
        };
        c.Provider = {
            $$typeof: y,
            _context: c
        };
        Z[a] = c;
    }
    c = Z[a];
    if (c._defaultValue === D) c._defaultValue = b, c._currentValue === D && (c._currentValue = b), c._currentValue2 === D && (c._currentValue2 = b);
    else if (d) throw Error(F(429, a));
    return c;
};
exports.forwardRef = function(a) {
    return {
        $$typeof: A,
        render: a
    };
};
exports.isValidElement = Q;
exports.lazy = function(a) {
    return {
        $$typeof: aa,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: da
    };
};
exports.memo = function(a, b) {
    return {
        $$typeof: C,
        type: a,
        compare: void 0 === b ? null : b
    };
};
exports.startTransition = function(a) {
    var b = X.transition;
    X.transition = {};
    try {
        a();
    } finally{
        X.transition = b;
    }
};
exports.use = function(a) {
    return W.current.use(a);
};
exports.useCallback = function(a, b) {
    return W.current.useCallback(a, b);
};
exports.useContext = function(a) {
    return W.current.useContext(a);
};
exports.useDebugValue = function() {};
exports.useId = function() {
    return W.current.useId();
};
exports.useMemo = function(a, b) {
    return W.current.useMemo(a, b);
};
exports.version = "18.3.0-canary-1a001dac6-20230812";


/***/ }),

/***/ 62947:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(29446);
} else {}


/***/ }),

/***/ 80085:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fillMetadataSegment: function() {
        return fillMetadataSegment;
    },
    normalizeMetadataRoute: function() {
        return normalizeMetadataRoute;
    }
});
const _ismetadataroute = __webpack_require__(14982);
const _path = /*#__PURE__*/ _interop_require_default(__webpack_require__(52490));
const _serverutils = __webpack_require__(79179);
const _routeregex = __webpack_require__(38630);
const _hash = __webpack_require__(376);
const _apppaths = __webpack_require__(57879);
const _normalizepathsep = __webpack_require__(22883);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/*
 * If there's special convention like (...) or @ in the page path,
 * Give it a unique hash suffix to avoid conflicts
 *
 * e.g.
 * /app/open-graph.tsx -> /open-graph/route
 * /app/(post)/open-graph.tsx -> /open-graph/route-[0-9a-z]{6}
 */ function getMetadataRouteSuffix(page) {
    let suffix = "";
    if (page.includes("(") && page.includes(")") || page.includes("@")) {
        suffix = (0, _hash.djb2Hash)(page).toString(36).slice(0, 6);
    }
    return suffix;
}
function fillMetadataSegment(segment, params, imageSegment) {
    const pathname = (0, _apppaths.normalizeAppPath)(segment);
    const routeRegex = (0, _routeregex.getNamedRouteRegex)(pathname, false);
    const route = (0, _serverutils.interpolateDynamicPath)(pathname, params, routeRegex);
    const suffix = getMetadataRouteSuffix(segment);
    const routeSuffix = suffix ? `-${suffix}` : "";
    const { name, ext } = _path.default.parse(imageSegment);
    return (0, _normalizepathsep.normalizePathSep)(_path.default.join(route, `${name}${routeSuffix}${ext}`));
}
function normalizeMetadataRoute(page) {
    if (!(0, _ismetadataroute.isMetadataRoute)(page)) {
        return page;
    }
    let route = page;
    let suffix = "";
    if (route === "/robots") {
        route += ".txt";
    } else if (route === "/manifest") {
        route += ".webmanifest";
    } else if (route.endsWith("/sitemap")) {
        route += ".xml";
    } else {
        // Remove the file extension, e.g. /route-path/robots.txt -> /route-path
        const pathnamePrefix = page.slice(0, -(_path.default.basename(page).length + 1));
        suffix = getMetadataRouteSuffix(pathnamePrefix);
    }
    // Support both /<metadata-route.ext> and custom routes /<metadata-route>/route.ts.
    // If it's a metadata file route, we need to append /[id]/route to the page.
    if (!route.endsWith("/route")) {
        const isStaticMetadataFile = (0, _ismetadataroute.isStaticMetadataRouteFile)(page);
        const { dir, name: baseName, ext } = _path.default.parse(route);
        const isStaticRoute = page.startsWith("/robots") || page.startsWith("/manifest") || isStaticMetadataFile;
        route = _path.default.posix.join(dir, `${baseName}${suffix ? `-${suffix}` : ""}${ext}`, isStaticRoute ? "" : "[[...__metadata_id__]]", "route");
    }
    return route;
} //# sourceMappingURL=get-metadata-route.js.map


/***/ }),

/***/ 14982:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    STATIC_METADATA_IMAGES: function() {
        return STATIC_METADATA_IMAGES;
    },
    isMetadataRouteFile: function() {
        return isMetadataRouteFile;
    },
    isStaticMetadataRouteFile: function() {
        return isStaticMetadataRouteFile;
    },
    isMetadataRoute: function() {
        return isMetadataRoute;
    }
});
const _normalizepathsep = __webpack_require__(22883);
const STATIC_METADATA_IMAGES = {
    icon: {
        filename: "icon",
        extensions: [
            "ico",
            "jpg",
            "jpeg",
            "png",
            "svg"
        ]
    },
    apple: {
        filename: "apple-icon",
        extensions: [
            "jpg",
            "jpeg",
            "png"
        ]
    },
    favicon: {
        filename: "favicon",
        extensions: [
            "ico"
        ]
    },
    openGraph: {
        filename: "opengraph-image",
        extensions: [
            "jpg",
            "jpeg",
            "png",
            "gif"
        ]
    },
    twitter: {
        filename: "twitter-image",
        extensions: [
            "jpg",
            "jpeg",
            "png",
            "gif"
        ]
    }
};
// Match routes that are metadata routes, e.g. /sitemap.xml, /favicon.<ext>, /<icon>.<ext>, etc.
// TODO-METADATA: support more metadata routes with more extensions
const defaultExtensions = [
    "js",
    "jsx",
    "ts",
    "tsx"
];
const getExtensionRegexString = (extensions)=>`(?:${extensions.join("|")})`;
function isMetadataRouteFile(appDirRelativePath, pageExtensions, withExtension) {
    const metadataRouteFilesRegex = [
        new RegExp(`^[\\\\/]robots${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat("txt"))}$` : ""}`),
        new RegExp(`^[\\\\/]manifest${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat("webmanifest", "json"))}$` : ""}`),
        new RegExp(`^[\\\\/]favicon\\.ico$`),
        new RegExp(`[\\\\/]sitemap${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat("xml"))}$` : ""}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.icon.filename}\\d?${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat(STATIC_METADATA_IMAGES.icon.extensions))}$` : ""}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.apple.filename}\\d?${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat(STATIC_METADATA_IMAGES.apple.extensions))}$` : ""}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.openGraph.filename}\\d?${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat(STATIC_METADATA_IMAGES.openGraph.extensions))}$` : ""}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.twitter.filename}\\d?${withExtension ? `\\.${getExtensionRegexString(pageExtensions.concat(STATIC_METADATA_IMAGES.twitter.extensions))}$` : ""}`)
    ];
    const normalizedAppDirRelativePath = (0, _normalizepathsep.normalizePathSep)(appDirRelativePath);
    return metadataRouteFilesRegex.some((r)=>r.test(normalizedAppDirRelativePath));
}
function isStaticMetadataRouteFile(appDirRelativePath) {
    return isMetadataRouteFile(appDirRelativePath, [], true);
}
function isMetadataRoute(route) {
    let page = route.replace(/^\/?app\//, "").replace(/\/route$/, "");
    if (page[0] !== "/") page = "/" + page;
    return !page.endsWith("/page") && isMetadataRouteFile(page, defaultExtensions, false);
} //# sourceMappingURL=is-metadata-route.js.map


/***/ }),

/***/ 52226:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "acceptLanguage", ({
    enumerable: true,
    get: function() {
        return acceptLanguage;
    }
}));
function parse(raw, preferences, options) {
    const lowers = new Map();
    const header = raw.replace(/[ \t]/g, "");
    if (preferences) {
        let pos = 0;
        for (const preference of preferences){
            const lower = preference.toLowerCase();
            lowers.set(lower, {
                orig: preference,
                pos: pos++
            });
            if (options.prefixMatch) {
                const parts = lower.split("-");
                while(parts.pop(), parts.length > 0){
                    const joined = parts.join("-");
                    if (!lowers.has(joined)) {
                        lowers.set(joined, {
                            orig: preference,
                            pos: pos++
                        });
                    }
                }
            }
        }
    }
    const parts = header.split(",");
    const selections = [];
    const map = new Set();
    for(let i = 0; i < parts.length; ++i){
        const part = parts[i];
        if (!part) {
            continue;
        }
        const params = part.split(";");
        if (params.length > 2) {
            throw new Error(`Invalid ${options.type} header`);
        }
        let token = params[0].toLowerCase();
        if (!token) {
            throw new Error(`Invalid ${options.type} header`);
        }
        const selection = {
            token,
            pos: i,
            q: 1
        };
        if (preferences && lowers.has(token)) {
            selection.pref = lowers.get(token).pos;
        }
        map.add(selection.token);
        if (params.length === 2) {
            const q = params[1];
            const [key, value] = q.split("=");
            if (!value || key !== "q" && key !== "Q") {
                throw new Error(`Invalid ${options.type} header`);
            }
            const score = parseFloat(value);
            if (score === 0) {
                continue;
            }
            if (Number.isFinite(score) && score <= 1 && score >= 0.001) {
                selection.q = score;
            }
        }
        selections.push(selection);
    }
    selections.sort((a, b)=>{
        if (b.q !== a.q) {
            return b.q - a.q;
        }
        if (b.pref !== a.pref) {
            if (a.pref === undefined) {
                return 1;
            }
            if (b.pref === undefined) {
                return -1;
            }
            return a.pref - b.pref;
        }
        return a.pos - b.pos;
    });
    const values = selections.map((selection)=>selection.token);
    if (!preferences || !preferences.length) {
        return values;
    }
    const preferred = [];
    for (const selection of values){
        if (selection === "*") {
            for (const [preference, value] of lowers){
                if (!map.has(preference)) {
                    preferred.push(value.orig);
                }
            }
        } else {
            const lower = selection.toLowerCase();
            if (lowers.has(lower)) {
                preferred.push(lowers.get(lower).orig);
            }
        }
    }
    return preferred;
}
function acceptLanguage(header = "", preferences) {
    return parse(header, preferences, {
        type: "accept-language",
        prefixMatch: true
    })[0] || "";
} //# sourceMappingURL=accept-header.js.map


/***/ }),

/***/ 12502:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppRouter: function() {
        return AppRouter;
    },
    LayoutRouter: function() {
        return LayoutRouter;
    },
    RenderFromTemplateContext: function() {
        return RenderFromTemplateContext;
    },
    staticGenerationAsyncStorage: function() {
        return staticGenerationAsyncStorage;
    },
    requestAsyncStorage: function() {
        return requestAsyncStorage;
    },
    actionAsyncStorage: function() {
        return actionAsyncStorage;
    },
    staticGenerationBailout: function() {
        return staticGenerationBailout;
    },
    createSearchParamsBailoutProxy: function() {
        return createSearchParamsBailoutProxy;
    },
    serverHooks: function() {
        return serverHooks;
    },
    renderToReadableStream: function() {
        return renderToReadableStream;
    },
    decodeReply: function() {
        return decodeReply;
    },
    decodeAction: function() {
        return decodeAction;
    },
    preloadStyle: function() {
        return preloadStyle;
    },
    preloadFont: function() {
        return preloadFont;
    },
    preconnect: function() {
        return preconnect;
    },
    StaticGenerationSearchParamsBailoutProvider: function() {
        return StaticGenerationSearchParamsBailoutProvider;
    },
    NotFoundBoundary: function() {
        return NotFoundBoundary;
    }
});
const { default: AppRouter } = __webpack_require__(38225);
const { default: LayoutRouter } = __webpack_require__(97149);
const { default: RenderFromTemplateContext } = __webpack_require__(79278);
const { staticGenerationAsyncStorage } = __webpack_require__(13539);
const { requestAsyncStorage } = __webpack_require__(1715);
const { actionAsyncStorage } = __webpack_require__(34876);
const { staticGenerationBailout } = __webpack_require__(46164);
const { default: StaticGenerationSearchParamsBailoutProvider } = __webpack_require__(26345);
const { createSearchParamsBailoutProxy } = __webpack_require__(89444);
const serverHooks = __webpack_require__(81651);
const { renderToReadableStream, decodeReply, decodeAction } = __webpack_require__(89642);
const { preloadStyle, preloadFont, preconnect } = __webpack_require__(6167);
const { NotFoundBoundary } = __webpack_require__(26966); //# sourceMappingURL=entry-base.js.map


/***/ }),

/***/ 6167:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*

Files in the rsc directory are meant to be packaged as part of the RSC graph using next-app-loader.

*/ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    preloadStyle: function() {
        return preloadStyle;
    },
    preloadFont: function() {
        return preloadFont;
    },
    preconnect: function() {
        return preconnect;
    }
});
const _reactdom = /*#__PURE__*/ _interop_require_default(__webpack_require__(52060));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function preloadStyle(href) {
    _reactdom.default.preload(href, {
        as: "style"
    });
}
function preloadFont(href, type) {
    _reactdom.default.preload(href, {
        as: "font",
        type
    });
}
function preconnect(href, crossOrigin) {
    if (typeof crossOrigin === "string") {
        _reactdom.default.preconnect(href, {
            crossOrigin
        });
    } else {
        _reactdom.default.preconnect(href);
    }
} //# sourceMappingURL=preloads.js.map


/***/ }),

/***/ 91499:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
    },
    extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
    }
});
const _apppaths = __webpack_require__(57879);
const INTERCEPTION_ROUTE_MARKERS = [
    "(..)(..)",
    "(.)",
    "(..)",
    "(...)"
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split("/").find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute, marker, interceptedRoute;
    for (const segment of path.split("/")){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case "(.)":
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === "/") {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + "/" + interceptedRoute;
            }
            break;
        case "(..)":
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === "/") {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`);
            }
            interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
            break;
        case "(...)":
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = "/" + interceptedRoute;
            break;
        case "(..)(..)":
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split("/");
            if (splitInterceptingRoute.length <= 2) {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`);
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
            break;
        default:
            throw new Error("Invariant: unexpected marker");
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map


/***/ }),

/***/ 7262:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppPageRouteModule: function() {
        return AppPageRouteModule;
    },
    default: function() {
        return _default;
    }
});
const _apprender = __webpack_require__(5868);
const _routemodule = __webpack_require__(75281);
class AppPageRouteModule extends _routemodule.RouteModule {
    render(req, res, context) {
        return (0, _apprender.renderToHTMLOrFlight)(req, res, context.page, context.query, context.renderOpts);
    }
}
const _default = AppPageRouteModule; //# sourceMappingURL=module.js.map


/***/ }),

/***/ 62468:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/* eslint-disable no-redeclare */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NEXT_REQUEST_META: function() {
        return NEXT_REQUEST_META;
    },
    getRequestMeta: function() {
        return getRequestMeta;
    },
    setRequestMeta: function() {
        return setRequestMeta;
    },
    addRequestMeta: function() {
        return addRequestMeta;
    },
    removeRequestMeta: function() {
        return removeRequestMeta;
    },
    getNextInternalQuery: function() {
        return getNextInternalQuery;
    }
});
const NEXT_REQUEST_META = Symbol.for("NextInternalRequestMeta");
function getRequestMeta(req, key) {
    const meta = req[NEXT_REQUEST_META] || {};
    return typeof key === "string" ? meta[key] : meta;
}
function setRequestMeta(req, meta) {
    req[NEXT_REQUEST_META] = meta;
    return meta;
}
function addRequestMeta(request, key, value) {
    const meta = getRequestMeta(request);
    meta[key] = value;
    return setRequestMeta(request, meta);
}
function removeRequestMeta(request, key) {
    const meta = getRequestMeta(request);
    delete meta[key];
    return setRequestMeta(request, meta);
}
function getNextInternalQuery(query) {
    const keysToInclude = [
        "__nextDefaultLocale",
        "__nextFallback",
        "__nextLocale",
        "__nextSsgPath",
        "_nextBubbleNoFallback",
        "__nextDataReq",
        "__nextInferredLocaleFromDefault"
    ];
    const nextInternalQuery = {};
    for (const key of keysToInclude){
        if (key in query) {
            // @ts-ignore this can't be typed correctly
            nextInternalQuery[key] = query[key];
        }
    }
    return nextInternalQuery;
} //# sourceMappingURL=request-meta.js.map


/***/ }),

/***/ 79179:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalizeVercelUrl: function() {
        return normalizeVercelUrl;
    },
    interpolateDynamicPath: function() {
        return interpolateDynamicPath;
    },
    getUtils: function() {
        return getUtils;
    }
});
const _url = __webpack_require__(57310);
const _normalizelocalepath = __webpack_require__(87415);
const _pathmatch = __webpack_require__(3906);
const _routeregex = __webpack_require__(38630);
const _routematcher = __webpack_require__(52286);
const _preparedestination = __webpack_require__(46492);
const _acceptheader = __webpack_require__(52226);
const _detectlocalecookie = __webpack_require__(83720);
const _detectdomainlocale = __webpack_require__(22080);
const _denormalizepagepath = __webpack_require__(68882);
const _cookie = /*#__PURE__*/ _interop_require_default(__webpack_require__(52184));
const _constants = __webpack_require__(80462);
const _requestmeta = __webpack_require__(62468);
const _removetrailingslash = __webpack_require__(70468);
const _apppaths = __webpack_require__(57879);
const _constants1 = __webpack_require__(62078);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function normalizeVercelUrl(req, trustQuery, paramKeys, pageIsDynamic, defaultRouteRegex) {
    // make sure to normalize req.url on Vercel to strip dynamic params
    // from the query which are added during routing
    if (pageIsDynamic && trustQuery && defaultRouteRegex) {
        const _parsedUrl = (0, _url.parse)(req.url, true);
        delete _parsedUrl.search;
        for (const key of Object.keys(_parsedUrl.query)){
            if (key !== _constants1.NEXT_QUERY_PARAM_PREFIX && key.startsWith(_constants1.NEXT_QUERY_PARAM_PREFIX) || (paramKeys || Object.keys(defaultRouteRegex.groups)).includes(key)) {
                delete _parsedUrl.query[key];
            }
        }
        req.url = (0, _url.format)(_parsedUrl);
    }
}
function interpolateDynamicPath(pathname, params, defaultRouteRegex) {
    if (!defaultRouteRegex) return pathname;
    for (const param of Object.keys(defaultRouteRegex.groups)){
        const { optional, repeat } = defaultRouteRegex.groups[param];
        let builtParam = `[${repeat ? "..." : ""}${param}]`;
        if (optional) {
            builtParam = `[${builtParam}]`;
        }
        const paramIdx = pathname.indexOf(builtParam);
        if (paramIdx > -1) {
            let paramValue;
            const value = params[param];
            if (Array.isArray(value)) {
                paramValue = value.map((v)=>v && encodeURIComponent(v)).join("/");
            } else if (value) {
                paramValue = encodeURIComponent(value);
            } else {
                paramValue = "";
            }
            pathname = pathname.slice(0, paramIdx) + paramValue + pathname.slice(paramIdx + builtParam.length);
        }
    }
    return pathname;
}
function getUtils({ page, i18n, basePath, rewrites, pageIsDynamic, trailingSlash, caseSensitive }) {
    let defaultRouteRegex;
    let dynamicRouteMatcher;
    let defaultRouteMatches;
    if (pageIsDynamic) {
        defaultRouteRegex = (0, _routeregex.getNamedRouteRegex)(page, false);
        dynamicRouteMatcher = (0, _routematcher.getRouteMatcher)(defaultRouteRegex);
        defaultRouteMatches = dynamicRouteMatcher(page);
    }
    function handleRewrites(req, parsedUrl) {
        const rewriteParams = {};
        let fsPathname = parsedUrl.pathname;
        const matchesPage = ()=>{
            const fsPathnameNoSlash = (0, _removetrailingslash.removeTrailingSlash)(fsPathname || "");
            return fsPathnameNoSlash === (0, _removetrailingslash.removeTrailingSlash)(page) || (dynamicRouteMatcher == null ? void 0 : dynamicRouteMatcher(fsPathnameNoSlash));
        };
        const checkRewrite = (rewrite)=>{
            const matcher = (0, _pathmatch.getPathMatch)(rewrite.source + (trailingSlash ? "(/)?" : ""), {
                removeUnnamedParams: true,
                strict: true,
                sensitive: !!caseSensitive
            });
            let params = matcher(parsedUrl.pathname);
            if ((rewrite.has || rewrite.missing) && params) {
                const hasParams = (0, _preparedestination.matchHas)(req, parsedUrl.query, rewrite.has, rewrite.missing);
                if (hasParams) {
                    Object.assign(params, hasParams);
                } else {
                    params = false;
                }
            }
            if (params) {
                const { parsedDestination, destQuery } = (0, _preparedestination.prepareDestination)({
                    appendParamsToQuery: true,
                    destination: rewrite.destination,
                    params: params,
                    query: parsedUrl.query
                });
                // if the rewrite destination is external break rewrite chain
                if (parsedDestination.protocol) {
                    return true;
                }
                Object.assign(rewriteParams, destQuery, params);
                Object.assign(parsedUrl.query, parsedDestination.query);
                delete parsedDestination.query;
                Object.assign(parsedUrl, parsedDestination);
                fsPathname = parsedUrl.pathname;
                if (basePath) {
                    fsPathname = fsPathname.replace(new RegExp(`^${basePath}`), "") || "/";
                }
                if (i18n) {
                    const destLocalePathResult = (0, _normalizelocalepath.normalizeLocalePath)(fsPathname, i18n.locales);
                    fsPathname = destLocalePathResult.pathname;
                    parsedUrl.query.nextInternalLocale = destLocalePathResult.detectedLocale || params.nextInternalLocale;
                }
                if (fsPathname === page) {
                    return true;
                }
                if (pageIsDynamic && dynamicRouteMatcher) {
                    const dynamicParams = dynamicRouteMatcher(fsPathname);
                    if (dynamicParams) {
                        parsedUrl.query = {
                            ...parsedUrl.query,
                            ...dynamicParams
                        };
                        return true;
                    }
                }
            }
            return false;
        };
        for (const rewrite of rewrites.beforeFiles || []){
            checkRewrite(rewrite);
        }
        if (fsPathname !== page) {
            let finished = false;
            for (const rewrite of rewrites.afterFiles || []){
                finished = checkRewrite(rewrite);
                if (finished) break;
            }
            if (!finished && !matchesPage()) {
                for (const rewrite of rewrites.fallback || []){
                    finished = checkRewrite(rewrite);
                    if (finished) break;
                }
            }
        }
        return rewriteParams;
    }
    function handleBasePath(req, parsedUrl) {
        // always strip the basePath if configured since it is required
        req.url = req.url.replace(new RegExp(`^${basePath}`), "") || "/";
        parsedUrl.pathname = parsedUrl.pathname.replace(new RegExp(`^${basePath}`), "") || "/";
    }
    function getParamsFromRouteMatches(req, renderOpts, detectedLocale) {
        return (0, _routematcher.getRouteMatcher)(function() {
            const { groups, routeKeys } = defaultRouteRegex;
            return {
                re: {
                    // Simulate a RegExp match from the \`req.url\` input
                    exec: (str)=>{
                        const obj = Object.fromEntries(new URLSearchParams(str));
                        const matchesHasLocale = i18n && detectedLocale && obj["1"] === detectedLocale;
                        for (const key of Object.keys(obj)){
                            const value = obj[key];
                            if (key !== _constants1.NEXT_QUERY_PARAM_PREFIX && key.startsWith(_constants1.NEXT_QUERY_PARAM_PREFIX)) {
                                const normalizedKey = key.substring(_constants1.NEXT_QUERY_PARAM_PREFIX.length);
                                obj[normalizedKey] = value;
                                delete obj[key];
                            }
                        }
                        // favor named matches if available
                        const routeKeyNames = Object.keys(routeKeys || {});
                        const filterLocaleItem = (val)=>{
                            if (i18n) {
                                // locale items can be included in route-matches
                                // for fallback SSG pages so ensure they are
                                // filtered
                                const isCatchAll = Array.isArray(val);
                                const _val = isCatchAll ? val[0] : val;
                                if (typeof _val === "string" && i18n.locales.some((item)=>{
                                    if (item.toLowerCase() === _val.toLowerCase()) {
                                        detectedLocale = item;
                                        renderOpts.locale = detectedLocale;
                                        return true;
                                    }
                                    return false;
                                })) {
                                    // remove the locale item from the match
                                    if (isCatchAll) {
                                        val.splice(0, 1);
                                    }
                                    // the value is only a locale item and
                                    // shouldn't be added
                                    return isCatchAll ? val.length === 0 : true;
                                }
                            }
                            return false;
                        };
                        if (routeKeyNames.every((name)=>obj[name])) {
                            return routeKeyNames.reduce((prev, keyName)=>{
                                const paramName = routeKeys == null ? void 0 : routeKeys[keyName];
                                if (paramName && !filterLocaleItem(obj[keyName])) {
                                    prev[groups[paramName].pos] = obj[keyName];
                                }
                                return prev;
                            }, {});
                        }
                        return Object.keys(obj).reduce((prev, key)=>{
                            if (!filterLocaleItem(obj[key])) {
                                let normalizedKey = key;
                                if (matchesHasLocale) {
                                    normalizedKey = parseInt(key, 10) - 1 + "";
                                }
                                return Object.assign(prev, {
                                    [normalizedKey]: obj[key]
                                });
                            }
                            return prev;
                        }, {});
                    }
                },
                groups
            };
        }())(req.headers["x-now-route-matches"]);
    }
    function normalizeDynamicRouteParams(params, ignoreOptional) {
        let hasValidParams = true;
        if (!defaultRouteRegex) return {
            params,
            hasValidParams: false
        };
        params = Object.keys(defaultRouteRegex.groups).reduce((prev, key)=>{
            let value = params[key];
            if (typeof value === "string") {
                value = (0, _apppaths.normalizeRscPath)(value, true);
            }
            if (Array.isArray(value)) {
                value = value.map((val)=>{
                    if (typeof val === "string") {
                        val = (0, _apppaths.normalizeRscPath)(val, true);
                    }
                    return val;
                });
            }
            // if the value matches the default value we can't rely
            // on the parsed params, this is used to signal if we need
            // to parse x-now-route-matches or not
            const defaultValue = defaultRouteMatches[key];
            const isOptional = defaultRouteRegex.groups[key].optional;
            const isDefaultValue = Array.isArray(defaultValue) ? defaultValue.some((defaultVal)=>{
                return Array.isArray(value) ? value.some((val)=>val.includes(defaultVal)) : value == null ? void 0 : value.includes(defaultVal);
            }) : value == null ? void 0 : value.includes(defaultValue);
            if (isDefaultValue || typeof value === "undefined" && !(isOptional && ignoreOptional)) {
                hasValidParams = false;
            }
            // non-provided optional values should be undefined so normalize
            // them to undefined
            if (isOptional && (!value || Array.isArray(value) && value.length === 1 && // fallback optional catch-all SSG pages have
            // [[...paramName]] for the root path on Vercel
            (value[0] === "index" || value[0] === `[[...${key}]]`))) {
                value = undefined;
                delete params[key];
            }
            // query values from the proxy aren't already split into arrays
            // so make sure to normalize catch-all values
            if (value && typeof value === "string" && defaultRouteRegex.groups[key].repeat) {
                value = value.split("/");
            }
            if (value) {
                prev[key] = value;
            }
            return prev;
        }, {});
        return {
            params,
            hasValidParams
        };
    }
    function handleLocale(req, res, parsedUrl, routeNoAssetPath, shouldNotRedirect) {
        if (!i18n) return;
        const pathname = parsedUrl.pathname || "/";
        let defaultLocale = i18n.defaultLocale;
        let detectedLocale = (0, _detectlocalecookie.detectLocaleCookie)(req, i18n.locales);
        let acceptPreferredLocale;
        try {
            acceptPreferredLocale = i18n.localeDetection !== false ? (0, _acceptheader.acceptLanguage)(req.headers["accept-language"], i18n.locales) : detectedLocale;
        } catch (_) {
            acceptPreferredLocale = detectedLocale;
        }
        const { host } = req.headers || {};
        // remove port from host and remove port if present
        const hostname = host && host.split(":")[0].toLowerCase();
        const detectedDomain = (0, _detectdomainlocale.detectDomainLocale)(i18n.domains, hostname);
        if (detectedDomain) {
            defaultLocale = detectedDomain.defaultLocale;
            detectedLocale = defaultLocale;
            (0, _requestmeta.addRequestMeta)(req, "__nextIsLocaleDomain", true);
        }
        // if not domain specific locale use accept-language preferred
        detectedLocale = detectedLocale || acceptPreferredLocale;
        let localeDomainRedirect;
        const localePathResult = (0, _normalizelocalepath.normalizeLocalePath)(pathname, i18n.locales);
        routeNoAssetPath = (0, _normalizelocalepath.normalizeLocalePath)(routeNoAssetPath, i18n.locales).pathname;
        if (localePathResult.detectedLocale) {
            detectedLocale = localePathResult.detectedLocale;
            req.url = (0, _url.format)({
                ...parsedUrl,
                pathname: localePathResult.pathname
            });
            (0, _requestmeta.addRequestMeta)(req, "__nextStrippedLocale", true);
            parsedUrl.pathname = localePathResult.pathname;
        }
        // If a detected locale is a domain specific locale and we aren't already
        // on that domain and path prefix redirect to it to prevent duplicate
        // content from multiple domains
        if (detectedDomain) {
            const localeToCheck = localePathResult.detectedLocale ? detectedLocale : acceptPreferredLocale;
            const matchedDomain = (0, _detectdomainlocale.detectDomainLocale)(i18n.domains, undefined, localeToCheck);
            if (matchedDomain && matchedDomain.domain !== detectedDomain.domain) {
                localeDomainRedirect = `http${matchedDomain.http ? "" : "s"}://${matchedDomain.domain}/${localeToCheck === matchedDomain.defaultLocale ? "" : localeToCheck}`;
            }
        }
        const denormalizedPagePath = (0, _denormalizepagepath.denormalizePagePath)(pathname);
        const detectedDefaultLocale = !detectedLocale || detectedLocale.toLowerCase() === defaultLocale.toLowerCase();
        const shouldStripDefaultLocale = false;
        // detectedDefaultLocale &&
        // denormalizedPagePath.toLowerCase() === \`/\${i18n.defaultLocale.toLowerCase()}\`
        const shouldAddLocalePrefix = !detectedDefaultLocale && denormalizedPagePath === "/";
        detectedLocale = detectedLocale || i18n.defaultLocale;
        if (!shouldNotRedirect && !req.headers["x-vercel-id"] && i18n.localeDetection !== false && (localeDomainRedirect || shouldAddLocalePrefix || shouldStripDefaultLocale)) {
            // set the NEXT_LOCALE cookie when a user visits the default locale
            // with the locale prefix so that they aren't redirected back to
            // their accept-language preferred locale
            if (shouldStripDefaultLocale && acceptPreferredLocale !== defaultLocale) {
                const previous = res.getHeader("set-cookie");
                res.setHeader("set-cookie", [
                    ...typeof previous === "string" ? [
                        previous
                    ] : Array.isArray(previous) ? previous : [],
                    _cookie.default.serialize("NEXT_LOCALE", defaultLocale, {
                        httpOnly: true,
                        path: "/"
                    })
                ]);
            }
            res.setHeader("Location", (0, _url.format)({
                // make sure to include any query values when redirecting
                ...parsedUrl,
                pathname: localeDomainRedirect ? localeDomainRedirect : shouldStripDefaultLocale ? basePath || "/" : `${basePath}/${detectedLocale}`
            }));
            res.statusCode = _constants.TEMPORARY_REDIRECT_STATUS;
            res.end();
            return;
        }
        detectedLocale = localePathResult.detectedLocale || detectedDomain && detectedDomain.defaultLocale || defaultLocale;
        return {
            defaultLocale,
            detectedLocale,
            routeNoAssetPath
        };
    }
    return {
        handleLocale,
        handleRewrites,
        handleBasePath,
        defaultRouteRegex,
        dynamicRouteMatcher,
        defaultRouteMatches,
        getParamsFromRouteMatches,
        normalizeDynamicRouteParams,
        normalizeVercelUrl: (req, trustQuery, paramKeys)=>normalizeVercelUrl(req, trustQuery, paramKeys, pageIsDynamic, defaultRouteRegex),
        interpolateDynamicPath: (pathname, params)=>interpolateDynamicPath(pathname, params, defaultRouteRegex)
    };
} //# sourceMappingURL=server-utils.js.map


/***/ }),

/***/ 80462:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MODERN_BROWSERSLIST_TARGET: function() {
        return _modernbrowserslisttarget.default;
    },
    COMPILER_NAMES: function() {
        return COMPILER_NAMES;
    },
    COMPILER_INDEXES: function() {
        return COMPILER_INDEXES;
    },
    PHASE_EXPORT: function() {
        return PHASE_EXPORT;
    },
    PHASE_PRODUCTION_BUILD: function() {
        return PHASE_PRODUCTION_BUILD;
    },
    PHASE_PRODUCTION_SERVER: function() {
        return PHASE_PRODUCTION_SERVER;
    },
    PHASE_DEVELOPMENT_SERVER: function() {
        return PHASE_DEVELOPMENT_SERVER;
    },
    PHASE_TEST: function() {
        return PHASE_TEST;
    },
    PHASE_INFO: function() {
        return PHASE_INFO;
    },
    PAGES_MANIFEST: function() {
        return PAGES_MANIFEST;
    },
    APP_PATHS_MANIFEST: function() {
        return APP_PATHS_MANIFEST;
    },
    APP_PATH_ROUTES_MANIFEST: function() {
        return APP_PATH_ROUTES_MANIFEST;
    },
    BUILD_MANIFEST: function() {
        return BUILD_MANIFEST;
    },
    APP_BUILD_MANIFEST: function() {
        return APP_BUILD_MANIFEST;
    },
    FUNCTIONS_CONFIG_MANIFEST: function() {
        return FUNCTIONS_CONFIG_MANIFEST;
    },
    SUBRESOURCE_INTEGRITY_MANIFEST: function() {
        return SUBRESOURCE_INTEGRITY_MANIFEST;
    },
    NEXT_FONT_MANIFEST: function() {
        return NEXT_FONT_MANIFEST;
    },
    EXPORT_MARKER: function() {
        return EXPORT_MARKER;
    },
    EXPORT_DETAIL: function() {
        return EXPORT_DETAIL;
    },
    PRERENDER_MANIFEST: function() {
        return PRERENDER_MANIFEST;
    },
    ROUTES_MANIFEST: function() {
        return ROUTES_MANIFEST;
    },
    IMAGES_MANIFEST: function() {
        return IMAGES_MANIFEST;
    },
    SERVER_FILES_MANIFEST: function() {
        return SERVER_FILES_MANIFEST;
    },
    DEV_CLIENT_PAGES_MANIFEST: function() {
        return DEV_CLIENT_PAGES_MANIFEST;
    },
    MIDDLEWARE_MANIFEST: function() {
        return MIDDLEWARE_MANIFEST;
    },
    DEV_MIDDLEWARE_MANIFEST: function() {
        return DEV_MIDDLEWARE_MANIFEST;
    },
    REACT_LOADABLE_MANIFEST: function() {
        return REACT_LOADABLE_MANIFEST;
    },
    FONT_MANIFEST: function() {
        return FONT_MANIFEST;
    },
    SERVER_DIRECTORY: function() {
        return SERVER_DIRECTORY;
    },
    CONFIG_FILES: function() {
        return CONFIG_FILES;
    },
    BUILD_ID_FILE: function() {
        return BUILD_ID_FILE;
    },
    BLOCKED_PAGES: function() {
        return BLOCKED_PAGES;
    },
    CLIENT_PUBLIC_FILES_PATH: function() {
        return CLIENT_PUBLIC_FILES_PATH;
    },
    CLIENT_STATIC_FILES_PATH: function() {
        return CLIENT_STATIC_FILES_PATH;
    },
    STRING_LITERAL_DROP_BUNDLE: function() {
        return STRING_LITERAL_DROP_BUNDLE;
    },
    NEXT_BUILTIN_DOCUMENT: function() {
        return NEXT_BUILTIN_DOCUMENT;
    },
    CLIENT_REFERENCE_MANIFEST: function() {
        return CLIENT_REFERENCE_MANIFEST;
    },
    SERVER_REFERENCE_MANIFEST: function() {
        return SERVER_REFERENCE_MANIFEST;
    },
    MIDDLEWARE_BUILD_MANIFEST: function() {
        return MIDDLEWARE_BUILD_MANIFEST;
    },
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: function() {
        return MIDDLEWARE_REACT_LOADABLE_MANIFEST;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN_APP;
    },
    APP_CLIENT_INTERNALS: function() {
        return APP_CLIENT_INTERNALS;
    },
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function() {
        return CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH;
    },
    CLIENT_STATIC_FILES_RUNTIME_AMP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_AMP;
    },
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function() {
        return CLIENT_STATIC_FILES_RUNTIME_WEBPACK;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL;
    },
    EDGE_RUNTIME_WEBPACK: function() {
        return EDGE_RUNTIME_WEBPACK;
    },
    TEMPORARY_REDIRECT_STATUS: function() {
        return TEMPORARY_REDIRECT_STATUS;
    },
    PERMANENT_REDIRECT_STATUS: function() {
        return PERMANENT_REDIRECT_STATUS;
    },
    STATIC_PROPS_ID: function() {
        return STATIC_PROPS_ID;
    },
    SERVER_PROPS_ID: function() {
        return SERVER_PROPS_ID;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    GOOGLE_FONT_PROVIDER: function() {
        return GOOGLE_FONT_PROVIDER;
    },
    OPTIMIZED_FONT_PROVIDERS: function() {
        return OPTIMIZED_FONT_PROVIDERS;
    },
    DEFAULT_SERIF_FONT: function() {
        return DEFAULT_SERIF_FONT;
    },
    DEFAULT_SANS_SERIF_FONT: function() {
        return DEFAULT_SANS_SERIF_FONT;
    },
    STATIC_STATUS_PAGES: function() {
        return STATIC_STATUS_PAGES;
    },
    TRACE_OUTPUT_VERSION: function() {
        return TRACE_OUTPUT_VERSION;
    },
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function() {
        return TURBO_TRACE_DEFAULT_MEMORY_LIMIT;
    },
    RSC_MODULE_TYPES: function() {
        return RSC_MODULE_TYPES;
    },
    EDGE_UNSUPPORTED_NODE_APIS: function() {
        return EDGE_UNSUPPORTED_NODE_APIS;
    },
    SYSTEM_ENTRYPOINTS: function() {
        return SYSTEM_ENTRYPOINTS;
    }
});
const _interop_require_default = __webpack_require__(73297);
const _modernbrowserslisttarget = /*#__PURE__*/ _interop_require_default._(__webpack_require__(57634));
const COMPILER_NAMES = {
    client: "client",
    server: "server",
    edgeServer: "edge-server"
};
const COMPILER_INDEXES = {
    [COMPILER_NAMES.client]: 0,
    [COMPILER_NAMES.server]: 1,
    [COMPILER_NAMES.edgeServer]: 2
};
const PHASE_EXPORT = "phase-export";
const PHASE_PRODUCTION_BUILD = "phase-production-build";
const PHASE_PRODUCTION_SERVER = "phase-production-server";
const PHASE_DEVELOPMENT_SERVER = "phase-development-server";
const PHASE_TEST = "phase-test";
const PHASE_INFO = "phase-info";
const PAGES_MANIFEST = "pages-manifest.json";
const APP_PATHS_MANIFEST = "app-paths-manifest.json";
const APP_PATH_ROUTES_MANIFEST = "app-path-routes-manifest.json";
const BUILD_MANIFEST = "build-manifest.json";
const APP_BUILD_MANIFEST = "app-build-manifest.json";
const FUNCTIONS_CONFIG_MANIFEST = "functions-config-manifest.json";
const SUBRESOURCE_INTEGRITY_MANIFEST = "subresource-integrity-manifest";
const NEXT_FONT_MANIFEST = "next-font-manifest";
const EXPORT_MARKER = "export-marker.json";
const EXPORT_DETAIL = "export-detail.json";
const PRERENDER_MANIFEST = "prerender-manifest.json";
const ROUTES_MANIFEST = "routes-manifest.json";
const IMAGES_MANIFEST = "images-manifest.json";
const SERVER_FILES_MANIFEST = "required-server-files.json";
const DEV_CLIENT_PAGES_MANIFEST = "_devPagesManifest.json";
const MIDDLEWARE_MANIFEST = "middleware-manifest.json";
const DEV_MIDDLEWARE_MANIFEST = "_devMiddlewareManifest.json";
const REACT_LOADABLE_MANIFEST = "react-loadable-manifest.json";
const FONT_MANIFEST = "font-manifest.json";
const SERVER_DIRECTORY = "server";
const CONFIG_FILES = [
    "next.config.js",
    "next.config.mjs"
];
const BUILD_ID_FILE = "BUILD_ID";
const BLOCKED_PAGES = [
    "/_document",
    "/_app",
    "/_error"
];
const CLIENT_PUBLIC_FILES_PATH = "public";
const CLIENT_STATIC_FILES_PATH = "static";
const STRING_LITERAL_DROP_BUNDLE = "__NEXT_DROP_CLIENT_FILE__";
const NEXT_BUILTIN_DOCUMENT = "__NEXT_BUILTIN_DOCUMENT__";
const CLIENT_REFERENCE_MANIFEST = "client-reference-manifest";
const SERVER_REFERENCE_MANIFEST = "server-reference-manifest";
const MIDDLEWARE_BUILD_MANIFEST = "middleware-build-manifest";
const MIDDLEWARE_REACT_LOADABLE_MANIFEST = "middleware-react-loadable-manifest";
const CLIENT_STATIC_FILES_RUNTIME_MAIN = "main";
const CLIENT_STATIC_FILES_RUNTIME_MAIN_APP = "" + CLIENT_STATIC_FILES_RUNTIME_MAIN + "-app";
const APP_CLIENT_INTERNALS = "app-pages-internals";
const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh";
const CLIENT_STATIC_FILES_RUNTIME_AMP = "amp";
const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = "polyfills";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = Symbol(CLIENT_STATIC_FILES_RUNTIME_POLYFILLS);
const EDGE_RUNTIME_WEBPACK = "edge-runtime-webpack";
const TEMPORARY_REDIRECT_STATUS = 307;
const PERMANENT_REDIRECT_STATUS = 308;
const STATIC_PROPS_ID = "__N_SSG";
const SERVER_PROPS_ID = "__N_SSP";
const PAGE_SEGMENT_KEY = "__PAGE__";
const GOOGLE_FONT_PROVIDER = "https://fonts.googleapis.com/";
const OPTIMIZED_FONT_PROVIDERS = [
    {
        url: GOOGLE_FONT_PROVIDER,
        preconnect: "https://fonts.gstatic.com"
    },
    {
        url: "https://use.typekit.net",
        preconnect: "https://use.typekit.net"
    }
];
const DEFAULT_SERIF_FONT = {
    name: "Times New Roman",
    xAvgCharWidth: 821,
    azAvgWidth: 854.3953488372093,
    unitsPerEm: 2048
};
const DEFAULT_SANS_SERIF_FONT = {
    name: "Arial",
    xAvgCharWidth: 904,
    azAvgWidth: 934.5116279069767,
    unitsPerEm: 2048
};
const STATIC_STATUS_PAGES = [
    "/500"
];
const TRACE_OUTPUT_VERSION = 1;
const TURBO_TRACE_DEFAULT_MEMORY_LIMIT = 6000;
const RSC_MODULE_TYPES = {
    client: "client",
    server: "server"
};
const EDGE_UNSUPPORTED_NODE_APIS = [
    "clearImmediate",
    "setImmediate",
    "BroadcastChannel",
    "ByteLengthQueuingStrategy",
    "CompressionStream",
    "CountQueuingStrategy",
    "DecompressionStream",
    "DomException",
    "MessageChannel",
    "MessageEvent",
    "MessagePort",
    "ReadableByteStreamController",
    "ReadableStreamBYOBRequest",
    "ReadableStreamDefaultController",
    "TransformStreamDefaultController",
    "WritableStreamDefaultController"
];
const SYSTEM_ENTRYPOINTS = new Set([
    CLIENT_STATIC_FILES_RUNTIME_MAIN,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH,
    CLIENT_STATIC_FILES_RUNTIME_AMP,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP
]);
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=constants.js.map


/***/ }),

/***/ 85284:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// regexp is based on https://github.com/sindresorhus/escape-string-regexp

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "escapeStringRegexp", ({
    enumerable: true,
    get: function() {
        return escapeStringRegexp;
    }
}));
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map


/***/ }),

/***/ 376:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// http://www.cse.yorku.ca/~oz/hash.html

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    djb2Hash: function() {
        return djb2Hash;
    },
    hexHash: function() {
        return hexHash;
    }
});
function djb2Hash(str) {
    let hash = 5381;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) + hash + char;
    }
    return Math.abs(hash);
}
function hexHash(str) {
    return djb2Hash(str).toString(36).slice(0, 5);
} //# sourceMappingURL=hash.js.map


/***/ }),

/***/ 83720:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "detectLocaleCookie", ({
    enumerable: true,
    get: function() {
        return detectLocaleCookie;
    }
}));
function detectLocaleCookie(req, locales) {
    const { NEXT_LOCALE } = req.cookies || {};
    return NEXT_LOCALE ? locales.find((locale)=>NEXT_LOCALE.toLowerCase() === locale.toLowerCase()) : undefined;
} //# sourceMappingURL=detect-locale-cookie.js.map


/***/ }),

/***/ 52490:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * This module is for next.js server internal usage of path module.
 * It will use native path module for nodejs runtime.
 * It will use path-browserify polyfill for edge runtime.
 */ 
let path;
if (false) {} else {
    path = __webpack_require__(71017);
}
module.exports = path; //# sourceMappingURL=path.js.map


/***/ }),

/***/ 57634:
/***/ ((module) => {

"use strict";
// Note: This file is JS because it's used by the taskfile-swc.js file, which is JS.
// Keep file changes in sync with the corresponding `.d.ts` files.
/**
 * These are the browser versions that support all of the following:
 * static import: https://caniuse.com/es6-module
 * dynamic import: https://caniuse.com/es6-module-dynamic-import
 * import.meta: https://caniuse.com/mdn-javascript_operators_import_meta
 */ 
const MODERN_BROWSERSLIST_TARGET = [
    "chrome 64",
    "edge 79",
    "firefox 67",
    "opera 51",
    "safari 12"
];
module.exports = MODERN_BROWSERSLIST_TARGET; //# sourceMappingURL=modern-browserslist-target.js.map


/***/ }),

/***/ 68882:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "denormalizePagePath", ({
    enumerable: true,
    get: function() {
        return denormalizePagePath;
    }
}));
const _utils = __webpack_require__(92100);
const _normalizepathsep = __webpack_require__(22883);
function denormalizePagePath(page) {
    let _page = (0, _normalizepathsep.normalizePathSep)(page);
    return _page.startsWith("/index/") && !(0, _utils.isDynamicRoute)(_page) ? _page.slice(6) : _page !== "/index" ? _page : "/";
} //# sourceMappingURL=denormalize-page-path.js.map


/***/ }),

/***/ 91348:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ensureLeadingSlash", ({
    enumerable: true,
    get: function() {
        return ensureLeadingSlash;
    }
}));
function ensureLeadingSlash(path) {
    return path.startsWith("/") ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map


/***/ }),

/***/ 22883:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * For a given page path, this function ensures that there is no backslash
 * escaping slashes in the path. Example:
 *  - `foo\/bar\/baz` -> `foo/bar/baz`
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathSep", ({
    enumerable: true,
    get: function() {
        return normalizePathSep;
    }
}));
function normalizePathSep(path) {
    return path.replace(/\\/g, "/");
} //# sourceMappingURL=normalize-path-sep.js.map


/***/ }),

/***/ 57879:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalizeAppPath: function() {
        return normalizeAppPath;
    },
    normalizeRscPath: function() {
        return normalizeRscPath;
    }
});
const _ensureleadingslash = __webpack_require__(91348);
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if (segment[0] === "(" && segment.endsWith(")")) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === "@") {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
function normalizeRscPath(pathname, enabled) {
    return enabled ? pathname.replace(/\.rsc($|\?)/, "$1") : pathname;
} //# sourceMappingURL=app-paths.js.map


/***/ }),

/***/ 92100:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
    },
    isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
    }
});
const _sortedroutes = __webpack_require__(36091);
const _isdynamic = __webpack_require__(21136); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 21136:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// Identify /[param]/ in route string

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isDynamicRoute", ({
    enumerable: true,
    get: function() {
        return isDynamicRoute;
    }
}));
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
    return TEST_ROUTE.test(route);
} //# sourceMappingURL=is-dynamic.js.map


/***/ }),

/***/ 83881:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parseRelativeUrl", ({
    enumerable: true,
    get: function() {
        return parseRelativeUrl;
    }
}));
const _utils = __webpack_require__(60130);
const _querystring = __webpack_require__(42027);
function parseRelativeUrl(url, base) {
    const globalBase = new URL( true ? "http://n" : 0);
    const resolvedBase = base ? new URL(base, globalBase) : url.startsWith(".") ? new URL( true ? "http://n" : 0) : globalBase;
    const { pathname, searchParams, search, hash, href, origin } = new URL(url, resolvedBase);
    if (origin !== globalBase.origin) {
        throw new Error("invariant: invalid relative URL, router received " + url);
    }
    return {
        pathname,
        query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
        search,
        hash,
        href: href.slice(globalBase.origin.length)
    };
} //# sourceMappingURL=parse-relative-url.js.map


/***/ }),

/***/ 71461:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parseUrl", ({
    enumerable: true,
    get: function() {
        return parseUrl;
    }
}));
const _querystring = __webpack_require__(42027);
const _parserelativeurl = __webpack_require__(83881);
function parseUrl(url) {
    if (url.startsWith("/")) {
        return (0, _parserelativeurl.parseRelativeUrl)(url);
    }
    const parsedURL = new URL(url);
    return {
        hash: parsedURL.hash,
        hostname: parsedURL.hostname,
        href: parsedURL.href,
        pathname: parsedURL.pathname,
        port: parsedURL.port,
        protocol: parsedURL.protocol,
        query: (0, _querystring.searchParamsToUrlQuery)(parsedURL.searchParams),
        search: parsedURL.search
    };
} //# sourceMappingURL=parse-url.js.map


/***/ }),

/***/ 3906:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getPathMatch", ({
    enumerable: true,
    get: function() {
        return getPathMatch;
    }
}));
const _pathtoregexp = __webpack_require__(16113);
function getPathMatch(path, options) {
    const keys = [];
    const regexp = (0, _pathtoregexp.pathToRegexp)(path, keys, {
        delimiter: "/",
        sensitive: typeof (options == null ? void 0 : options.sensitive) === "boolean" ? options.sensitive : false,
        strict: options == null ? void 0 : options.strict
    });
    const matcher = (0, _pathtoregexp.regexpToFunction)((options == null ? void 0 : options.regexModifier) ? new RegExp(options.regexModifier(regexp.source), regexp.flags) : regexp, keys);
    /**
   * A matcher function that will check if a given pathname matches the path
   * given in the builder function. When the path does not match it will return
   * `false` but if it does it will return an object with the matched params
   * merged with the params provided in the second argument.
   */ return (pathname, params)=>{
        const res = pathname == null ? false : matcher(pathname);
        if (!res) {
            return false;
        }
        /**
     * If unnamed params are not allowed they must be removed from
     * the matched parameters. path-to-regexp uses "string" for named and
     * "number" for unnamed parameters.
     */ if (options == null ? void 0 : options.removeUnnamedParams) {
            for (const key of keys){
                if (typeof key.name === "number") {
                    delete res.params[key.name];
                }
            }
        }
        return {
            ...params,
            ...res.params
        };
    };
} //# sourceMappingURL=path-match.js.map


/***/ }),

/***/ 46492:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    matchHas: function() {
        return matchHas;
    },
    compileNonPath: function() {
        return compileNonPath;
    },
    prepareDestination: function() {
        return prepareDestination;
    }
});
const _pathtoregexp = __webpack_require__(16113);
const _escaperegexp = __webpack_require__(85284);
const _parseurl = __webpack_require__(71461);
const _interceptionroutes = __webpack_require__(91499);
const _approuterheaders = __webpack_require__(43909);
/**
 * Ensure only a-zA-Z are used for param names for proper interpolating
 * with path-to-regexp
 */ function getSafeParamName(paramName) {
    let newParamName = "";
    for(let i = 0; i < paramName.length; i++){
        const charCode = paramName.charCodeAt(i);
        if (charCode > 64 && charCode < 91 || // A-Z
        charCode > 96 && charCode < 123 // a-z
        ) {
            newParamName += paramName[i];
        }
    }
    return newParamName;
}
function escapeSegment(str, segmentName) {
    return str.replace(new RegExp(":" + (0, _escaperegexp.escapeStringRegexp)(segmentName), "g"), "__ESC_COLON_" + segmentName);
}
function unescapeSegments(str) {
    return str.replace(/__ESC_COLON_/gi, ":");
}
function matchHas(req, query, has, missing) {
    if (has === void 0) has = [];
    if (missing === void 0) missing = [];
    const params = {};
    const hasMatch = (hasItem)=>{
        let value;
        let key = hasItem.key;
        switch(hasItem.type){
            case "header":
                {
                    key = key.toLowerCase();
                    value = req.headers[key];
                    break;
                }
            case "cookie":
                {
                    value = req.cookies[hasItem.key];
                    break;
                }
            case "query":
                {
                    value = query[key];
                    break;
                }
            case "host":
                {
                    const { host } = (req == null ? void 0 : req.headers) || {};
                    // remove port from host if present
                    const hostname = host == null ? void 0 : host.split(":")[0].toLowerCase();
                    value = hostname;
                    break;
                }
            default:
                {
                    break;
                }
        }
        if (!hasItem.value && value) {
            params[getSafeParamName(key)] = value;
            return true;
        } else if (value) {
            const matcher = new RegExp("^" + hasItem.value + "$");
            const matches = Array.isArray(value) ? value.slice(-1)[0].match(matcher) : value.match(matcher);
            if (matches) {
                if (Array.isArray(matches)) {
                    if (matches.groups) {
                        Object.keys(matches.groups).forEach((groupKey)=>{
                            params[groupKey] = matches.groups[groupKey];
                        });
                    } else if (hasItem.type === "host" && matches[0]) {
                        params.host = matches[0];
                    }
                }
                return true;
            }
        }
        return false;
    };
    const allMatch = has.every((item)=>hasMatch(item)) && !missing.some((item)=>hasMatch(item));
    if (allMatch) {
        return params;
    }
    return false;
}
function compileNonPath(value, params) {
    if (!value.includes(":")) {
        return value;
    }
    for (const key of Object.keys(params)){
        if (value.includes(":" + key)) {
            value = value.replace(new RegExp(":" + key + "\\*", "g"), ":" + key + "--ESCAPED_PARAM_ASTERISKS").replace(new RegExp(":" + key + "\\?", "g"), ":" + key + "--ESCAPED_PARAM_QUESTION").replace(new RegExp(":" + key + "\\+", "g"), ":" + key + "--ESCAPED_PARAM_PLUS").replace(new RegExp(":" + key + "(?!\\w)", "g"), "--ESCAPED_PARAM_COLON" + key);
        }
    }
    value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1").replace(/--ESCAPED_PARAM_PLUS/g, "+").replace(/--ESCAPED_PARAM_COLON/g, ":").replace(/--ESCAPED_PARAM_QUESTION/g, "?").replace(/--ESCAPED_PARAM_ASTERISKS/g, "*");
    // the value needs to start with a forward-slash to be compiled
    // correctly
    return (0, _pathtoregexp.compile)("/" + value, {
        validate: false
    })(params).slice(1);
}
function prepareDestination(args) {
    const query = Object.assign({}, args.query);
    delete query.__nextLocale;
    delete query.__nextDefaultLocale;
    delete query.__nextDataReq;
    delete query.__nextInferredLocaleFromDefault;
    delete query[_approuterheaders.NEXT_RSC_UNION_QUERY];
    let escapedDestination = args.destination;
    for (const param of Object.keys({
        ...args.params,
        ...query
    })){
        escapedDestination = escapeSegment(escapedDestination, param);
    }
    const parsedDestination = (0, _parseurl.parseUrl)(escapedDestination);
    const destQuery = parsedDestination.query;
    const destPath = unescapeSegments("" + parsedDestination.pathname + (parsedDestination.hash || ""));
    const destHostname = unescapeSegments(parsedDestination.hostname || "");
    const destPathParamKeys = [];
    const destHostnameParamKeys = [];
    (0, _pathtoregexp.pathToRegexp)(destPath, destPathParamKeys);
    (0, _pathtoregexp.pathToRegexp)(destHostname, destHostnameParamKeys);
    const destParams = [];
    destPathParamKeys.forEach((key)=>destParams.push(key.name));
    destHostnameParamKeys.forEach((key)=>destParams.push(key.name));
    const destPathCompiler = (0, _pathtoregexp.compile)(destPath, // have already validated before we got to this point and validating
    // breaks compiling destinations with named pattern params from the source
    // e.g. /something:hello(.*) -> /another/:hello is broken with validation
    // since compile validation is meant for reversing and not for inserting
    // params from a separate path-regex into another
    {
        validate: false
    });
    const destHostnameCompiler = (0, _pathtoregexp.compile)(destHostname, {
        validate: false
    });
    // update any params in query values
    for (const [key, strOrArray] of Object.entries(destQuery)){
        // the value needs to start with a forward-slash to be compiled
        // correctly
        if (Array.isArray(strOrArray)) {
            destQuery[key] = strOrArray.map((value)=>compileNonPath(unescapeSegments(value), args.params));
        } else if (typeof strOrArray === "string") {
            destQuery[key] = compileNonPath(unescapeSegments(strOrArray), args.params);
        }
    }
    // add path params to query if it's not a redirect and not
    // already defined in destination query or path
    let paramKeys = Object.keys(args.params).filter((name)=>name !== "nextInternalLocale");
    if (args.appendParamsToQuery && !paramKeys.some((key)=>destParams.includes(key))) {
        for (const key of paramKeys){
            if (!(key in destQuery)) {
                destQuery[key] = args.params[key];
            }
        }
    }
    let newUrl;
    // The compiler also that the interception route marker is an unnamed param, hence '0',
    // so we need to add it to the params object.
    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(destPath)) {
        for (const segment of destPath.split("/")){
            const marker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            if (marker) {
                args.params["0"] = marker;
                break;
            }
        }
    }
    try {
        newUrl = destPathCompiler(args.params);
        const [pathname, hash] = newUrl.split("#");
        parsedDestination.hostname = destHostnameCompiler(args.params);
        parsedDestination.pathname = pathname;
        parsedDestination.hash = "" + (hash ? "#" : "") + (hash || "");
        delete parsedDestination.search;
    } catch (err) {
        if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
            throw new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");
        }
        throw err;
    }
    // Query merge order lowest priority to highest
    // 1. initial URL query values
    // 2. path segment values
    // 3. destination specified query values
    parsedDestination.query = {
        ...query,
        ...parsedDestination.query
    };
    return {
        newUrl,
        destQuery,
        parsedDestination
    };
} //# sourceMappingURL=prepare-destination.js.map


/***/ }),

/***/ 42027:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    },
    assign: function() {
        return assign;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    searchParams.forEach((value, key)=>{
        if (typeof query[key] === "undefined") {
            query[key] = value;
        } else if (Array.isArray(query[key])) {
            query[key].push(value);
        } else {
            query[key] = [
                query[key],
                value
            ];
        }
    });
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
    } else {
        return "";
    }
}
function urlQueryToSearchParams(urlQuery) {
    const result = new URLSearchParams();
    Object.entries(urlQuery).forEach((param)=>{
        let [key, value] = param;
        if (Array.isArray(value)) {
            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
        } else {
            result.set(key, stringifyUrlQueryParam(value));
        }
    });
    return result;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    searchParamsList.forEach((searchParams)=>{
        Array.from(searchParams.keys()).forEach((key)=>target.delete(key));
        searchParams.forEach((value, key)=>target.append(key, value));
    });
    return target;
} //# sourceMappingURL=querystring.js.map


/***/ }),

/***/ 52286:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getRouteMatcher", ({
    enumerable: true,
    get: function() {
        return getRouteMatcher;
    }
}));
const _utils = __webpack_require__(60130);
function getRouteMatcher(param) {
    let { re, groups } = param;
    return (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) {
            return false;
        }
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch (_) {
                throw new _utils.DecodeError("failed to decode param");
            }
        };
        const params = {};
        Object.keys(groups).forEach((slugName)=>{
            const g = groups[slugName];
            const m = routeMatch[g.pos];
            if (m !== undefined) {
                params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry)=>decode(entry)) : g.repeat ? [
                    decode(m)
                ] : decode(m);
            }
        });
        return params;
    };
} //# sourceMappingURL=route-matcher.js.map


/***/ }),

/***/ 38630:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRouteRegex: function() {
        return getRouteRegex;
    },
    getNamedRouteRegex: function() {
        return getNamedRouteRegex;
    },
    getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
    }
});
const _interceptionroutes = __webpack_require__(91499);
const _escaperegexp = __webpack_require__(85284);
const _removetrailingslash = __webpack_require__(70468);
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
/**
 * Parses a given parameter from a route to a data structure that can be used
 * to generate the parametrized route. Examples:
 *   - `[...slug]` -> `{ key: 'slug', repeat: true, optional: true }`
 *   - `...slug` -> `{ key: 'slug', repeat: true, optional: false }`
 *   - `[foo]` -> `{ key: 'foo', repeat: false, optional: true }`
 *   - `bar` -> `{ key: 'bar', repeat: false, optional: false }`
 */ function parseParameter(param) {
    const optional = param.startsWith("[") && param.endsWith("]");
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith("...");
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
}
function getParametrizedRoute(route) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const groups = {};
    let groupIndex = 1;
    return {
        parameterizedRoute: segments.map((segment)=>{
            const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (markerMatch && paramMatches) {
                const { key, optional, repeat } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return "/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)";
            } else if (paramMatches) {
                const { key, repeat, optional } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        groups
    };
}
function getRouteRegex(normalizedRoute) {
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute);
    return {
        re: new RegExp("^" + parameterizedRoute + "(?:/)?$"),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = "";
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment(param) {
    let { getSafeRouteKey, segment, routeKeys, keyPrefix } = param;
    const { key, optional, repeat } = parseParameter(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, "");
    if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
    } else {
        routeKeys[cleanedKey] = "" + key;
    }
    return repeat ? optional ? "(?:/(?<" + cleanedKey + ">.+?))?" : "/(?<" + cleanedKey + ">.+?)" : "/(?<" + cleanedKey + ">[^/]+?)";
}
function getNamedParametrizedRoute(route, prefixRouteKeys) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    return {
        namedParameterizedRoute: segments.map((segment)=>{
            const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (hasInterceptionMarker && paramMatches) {
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_INTERCEPTION_MARKER_PREFIX : undefined
                });
            } else if (paramMatches) {
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_QUERY_PARAM_PREFIX : undefined
                });
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        routeKeys
    };
}
function getNamedRouteRegex(normalizedRoute, prefixRouteKey) {
    const result = getNamedParametrizedRoute(normalizedRoute, prefixRouteKey);
    return {
        ...getRouteRegex(normalizedRoute),
        namedRegex: "^" + result.namedParameterizedRoute + "(?:/)?$",
        routeKeys: result.routeKeys
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute);
    const { catchAll = true } = options;
    if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
            namedRegex: "^/" + catchAllRegex + "$"
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false);
    let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
    return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
    };
} //# sourceMappingURL=route-regex.js.map


/***/ }),

/***/ 36091:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSortedRoutes", ({
    enumerable: true,
    get: function() {
        return getSortedRoutes;
    }
}));
class UrlNode {
    insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
    }
    smoosh() {
        return this._smoosh();
    }
    _smoosh(prefix) {
        if (prefix === void 0) prefix = "/";
        const childrenPaths = [
            ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr)=>[
                ...prev,
                ...curr
            ], []);
        if (this.slugName !== null) {
            routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
            const r = prefix === "/" ? "/" : prefix.slice(0, -1);
            if (this.optionalRestSlugName != null) {
                throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").');
            }
            routes.unshift(r);
        }
        if (this.restSlugName !== null) {
            routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
            routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
    }
    _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
            this.placeholder = false;
            return;
        }
        if (isCatchAll) {
            throw new Error("Catch-all must be the last part of the URL.");
        }
        // The next segment in the urlPaths list
        let nextSegment = urlPaths[0];
        // Check if the segment matches `[something]`
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
            // Strip `[` and `]`, leaving only `something`
            let segmentName = nextSegment.slice(1, -1);
            let isOptional = false;
            if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
                // Strip optional `[` and `]`, leaving only `something`
                segmentName = segmentName.slice(1, -1);
                isOptional = true;
            }
            if (segmentName.startsWith("...")) {
                // Strip `...`, leaving only `something`
                segmentName = segmentName.substring(3);
                isCatchAll = true;
            }
            if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
                throw new Error("Segment names may not start or end with extra brackets ('" + segmentName + "').");
            }
            if (segmentName.startsWith(".")) {
                throw new Error("Segment names may not start with erroneous periods ('" + segmentName + "').");
            }
            function handleSlug(previousSlug, nextSlug) {
                if (previousSlug !== null) {
                    // If the specific segment already has a slug but the slug is not `something`
                    // This prevents collisions like:
                    // pages/[post]/index.js
                    // pages/[id]/index.js
                    // Because currently multiple dynamic params on the same segment level are not supported
                    if (previousSlug !== nextSlug) {
                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
                        throw new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "').");
                    }
                }
                slugNames.forEach((slug)=>{
                    if (slug === nextSlug) {
                        throw new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path');
                    }
                    if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                        throw new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path');
                    }
                });
                slugNames.push(nextSlug);
            }
            if (isCatchAll) {
                if (isOptional) {
                    if (this.restSlugName != null) {
                        throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).');
                    }
                    handleSlug(this.optionalRestSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.optionalRestSlugName = segmentName;
                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
                    nextSegment = "[[...]]";
                } else {
                    if (this.optionalRestSlugName != null) {
                        throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").');
                    }
                    handleSlug(this.restSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.restSlugName = segmentName;
                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
                    nextSegment = "[...]";
                }
            } else {
                if (isOptional) {
                    throw new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").');
                }
                handleSlug(this.slugName, segmentName);
                // slugName is kept as it can only be one particular slugName
                this.slugName = segmentName;
                // nextSegment is overwritten to [] so that it can later be sorted specifically
                nextSegment = "[]";
            }
        }
        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
        if (!this.children.has(nextSegment)) {
            this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
    }
    constructor(){
        this.placeholder = true;
        this.children = new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
    }
}
function getSortedRoutes(normalizedPages) {
    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
    // Only 1 dynamic segment per nesting level
    // So in the case that is test/integration/dynamic-routing it'll be this:
    // pages/[post]/comments.js
    // pages/blog/[post]/comment/[id].js
    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
    // So in this case `UrlNode` created here has `this.slugName === 'post'`
    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
    // Instead what has to be passed through is the upwards path's dynamic names
    const root = new UrlNode();
    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
    return root.smoosh();
} //# sourceMappingURL=sorted-routes.js.map


/***/ }),

/***/ 60130:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    isResSent: function() {
        return isResSent;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    DecodeError: function() {
        return DecodeError;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    "CLS",
    "FCP",
    "FID",
    "INP",
    "LCP",
    "TTFB"
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ":" + port : "");
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split("?");
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
}
async function loadGetInitialProps(App, ctx) {
    if (false) { var _App_prototype; }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw new Error(message);
    }
    if (false) {}
    return props;
}
const SP = typeof performance !== "undefined";
const ST = SP && [
    "mark",
    "measure",
    "getEntriesByName"
].every((method)=>typeof performance[method] === "function");
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = "ENOENT";
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 88593:
/***/ (() => {



/***/ }),

/***/ 52451:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(80489)


/***/ }),

/***/ 68853:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(18038));
const tsparticles_engine_1 = __webpack_require__(2662);
const Utils_1 = __webpack_require__(46444);
const defaultId = "tsparticles";
class Particles extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            init: false,
            library: undefined,
        };
    }
    destroy() {
        if (!this.state.library) {
            return;
        }
        this.state.library.destroy();
        this.setState({
            library: undefined,
        });
    }
    shouldComponentUpdate(nextProps) {
        const nextOptions = nextProps.options ?? nextProps.params, currentOptions = this.props.options ?? this.props.params;
        return (nextProps.url !== this.props.url ||
            nextProps.id !== this.props.id ||
            nextProps.canvasClassName !== this.props.canvasClassName ||
            nextProps.className !== this.props.className ||
            nextProps.height !== this.props.height ||
            nextProps.width !== this.props.width ||
            !(0, Utils_1.deepCompare)(nextProps.style, this.props.style) ||
            nextProps.init !== this.props.init ||
            nextProps.loaded !== this.props.loaded ||
            !(0, Utils_1.deepCompare)(nextOptions, currentOptions, key => key.startsWith("_")));
    }
    componentDidUpdate() {
        this.refresh();
    }
    forceUpdate() {
        this.refresh().then(() => {
            super.forceUpdate();
        });
    }
    componentDidMount() {
        (async () => {
            if (this.props.init) {
                await this.props.init(tsparticles_engine_1.tsParticles);
            }
            this.setState({
                init: true,
            }, async () => {
                await this.loadParticles();
            });
        })();
    }
    componentWillUnmount() {
        this.destroy();
    }
    render() {
        const { width, height, className, canvasClassName, id } = this.props;
        return (react_1.default.createElement("div", { className: className, id: id },
            react_1.default.createElement("canvas", { className: canvasClassName, style: {
                    ...this.props.style,
                    width,
                    height,
                } })));
    }
    async refresh() {
        this.destroy();
        await this.loadParticles();
    }
    async loadParticles() {
        if (!this.state.init) {
            return;
        }
        const id = this.props.id ?? Particles.defaultProps.id ?? defaultId, container = await tsparticles_engine_1.tsParticles.load({
            url: this.props.url,
            id,
            options: this.props.options ?? this.props.params,
        });
        if (this.props.container) {
            this.props.container.current = container;
        }
        this.setState({
            library: container,
        });
        if (this.props.loaded) {
            await this.props.loaded(container);
        }
    }
}
Particles.defaultProps = {
    width: "100%",
    height: "100%",
    options: {},
    style: {},
    url: undefined,
    id: defaultId,
};
exports["default"] = Particles;


/***/ }),

/***/ 46444:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deepCompare = void 0;
const isObject = (val) => typeof val === "object" && val !== null;
function deepCompare(obj1, obj2, excludeKeyFn = () => false) {
    if (!isObject(obj1) || !isObject(obj2)) {
        return obj1 === obj2;
    }
    const keys1 = Object.keys(obj1).filter(key => !excludeKeyFn(key)), keys2 = Object.keys(obj2).filter(key => !excludeKeyFn(key));
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const value1 = obj1[key], value2 = obj2[key];
        if (isObject(value1) && isObject(value2)) {
            if (value1 === obj2 && value2 === obj1) {
                continue;
            }
            if (!deepCompare(value1, value2, excludeKeyFn)) {
                return false;
            }
        }
        else if (Array.isArray(value1) && Array.isArray(value2)) {
            if (!deepCompareArrays(value1, value2, excludeKeyFn)) {
                return false;
            }
        }
        else if (value1 !== value2) {
            return false;
        }
    }
    return true;
}
exports.deepCompare = deepCompare;
function deepCompareArrays(arr1, arr2, excludeKeyFn) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        const val1 = arr1[i], val2 = arr2[i];
        if (Array.isArray(val1) && Array.isArray(val2)) {
            if (!deepCompareArrays(val1, val2, excludeKeyFn)) {
                return false;
            }
        }
        else if (isObject(val1) && isObject(val2)) {
            if (!deepCompare(val1, val2, excludeKeyFn)) {
                return false;
            }
        }
        else if (val1 !== val2) {
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ 22411:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Particles = void 0;
const Particles_1 = __importDefault(__webpack_require__(68853));
exports.Particles = Particles_1.default;
exports["default"] = Particles_1.default;


/***/ }),

/***/ 727:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadBasic = void 0;
const tsparticles_move_base_1 = __webpack_require__(20837);
const tsparticles_shape_circle_1 = __webpack_require__(3817);
const tsparticles_updater_color_1 = __webpack_require__(7668);
const tsparticles_updater_opacity_1 = __webpack_require__(43301);
const tsparticles_updater_out_modes_1 = __webpack_require__(30826);
const tsparticles_updater_size_1 = __webpack_require__(26866);
async function loadBasic(engine, refresh = true) {
    await (0, tsparticles_move_base_1.loadBaseMover)(engine, false);
    await (0, tsparticles_shape_circle_1.loadCircleShape)(engine, false);
    await (0, tsparticles_updater_color_1.loadColorUpdater)(engine, false);
    await (0, tsparticles_updater_opacity_1.loadOpacityUpdater)(engine, false);
    await (0, tsparticles_updater_out_modes_1.loadOutModesUpdater)(engine, false);
    await (0, tsparticles_updater_size_1.loadSizeUpdater)(engine, false);
    await engine.refresh(refresh);
}
exports.loadBasic = loadBasic;


/***/ }),

/***/ 30642:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Canvas = void 0;
const CanvasUtils_1 = __webpack_require__(50851);
const Utils_1 = __webpack_require__(91694);
const ColorUtils_1 = __webpack_require__(7585);
const Constants_1 = __webpack_require__(64011);
function setTransformValue(factor, newFactor, key) {
    const newValue = newFactor[key];
    if (newValue !== undefined) {
        factor[key] = (factor[key] ?? 1) * newValue;
    }
}
class Canvas {
    constructor(container) {
        this.container = container;
        this._applyPostDrawUpdaters = (particle) => {
            for (const updater of this._postDrawUpdaters) {
                updater.afterDraw && updater.afterDraw(particle);
            }
        };
        this._applyPreDrawUpdaters = (ctx, particle, radius, zOpacity, colorStyles, transform) => {
            for (const updater of this._preDrawUpdaters) {
                if (updater.getColorStyles) {
                    const { fill, stroke } = updater.getColorStyles(particle, ctx, radius, zOpacity);
                    if (fill) {
                        colorStyles.fill = fill;
                    }
                    if (stroke) {
                        colorStyles.stroke = stroke;
                    }
                }
                if (updater.getTransformValues) {
                    const updaterTransform = updater.getTransformValues(particle);
                    for (const key in updaterTransform) {
                        setTransformValue(transform, updaterTransform, key);
                    }
                }
                updater.beforeDraw && updater.beforeDraw(particle);
            }
        };
        this._applyResizePlugins = () => {
            for (const plugin of this._resizePlugins) {
                plugin.resize && plugin.resize();
            }
        };
        this._getPluginParticleColors = (particle) => {
            let fColor, sColor;
            for (const plugin of this._colorPlugins) {
                if (!fColor && plugin.particleFillColor) {
                    fColor = (0, ColorUtils_1.rangeColorToHsl)(plugin.particleFillColor(particle));
                }
                if (!sColor && plugin.particleStrokeColor) {
                    sColor = (0, ColorUtils_1.rangeColorToHsl)(plugin.particleStrokeColor(particle));
                }
                if (fColor && sColor) {
                    break;
                }
            }
            return [fColor, sColor];
        };
        this._initCover = () => {
            const options = this.container.actualOptions, cover = options.backgroundMask.cover, color = cover.color, coverRgb = (0, ColorUtils_1.rangeColorToRgb)(color);
            if (coverRgb) {
                const coverColor = {
                    ...coverRgb,
                    a: cover.opacity,
                };
                this._coverColorStyle = (0, ColorUtils_1.getStyleFromRgb)(coverColor, coverColor.a);
            }
        };
        this._initStyle = () => {
            const element = this.element, options = this.container.actualOptions;
            if (!element) {
                return;
            }
            if (this._fullScreen) {
                this._originalStyle = (0, Utils_1.deepExtend)({}, element.style);
                this._setFullScreenStyle();
            }
            else {
                this._resetOriginalStyle();
            }
            for (const key in options.style) {
                if (!key || !options.style) {
                    continue;
                }
                const value = options.style[key];
                if (!value) {
                    continue;
                }
                element.style.setProperty(key, value, "important");
            }
        };
        this._initTrail = async () => {
            const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = trail.fill;
            if (!trail.enable) {
                return;
            }
            if (trailFill.color) {
                const fillColor = (0, ColorUtils_1.rangeColorToRgb)(trailFill.color);
                if (!fillColor) {
                    return;
                }
                const trail = options.particles.move.trail;
                this._trailFill = {
                    color: {
                        ...fillColor,
                    },
                    opacity: 1 / trail.length,
                };
            }
            else {
                await new Promise((resolve, reject) => {
                    if (!trailFill.image) {
                        return;
                    }
                    const img = document.createElement("img");
                    img.addEventListener("load", () => {
                        this._trailFill = {
                            image: img,
                            opacity: 1 / trail.length,
                        };
                        resolve();
                    });
                    img.addEventListener("error", (evt) => {
                        reject(evt.error);
                    });
                    img.src = trailFill.image;
                });
            }
        };
        this._paintBase = (baseColor) => {
            this.draw((ctx) => (0, CanvasUtils_1.paintBase)(ctx, this.size, baseColor));
        };
        this._paintImage = (image, opacity) => {
            this.draw((ctx) => (0, CanvasUtils_1.paintImage)(ctx, this.size, image, opacity));
        };
        this._repairStyle = () => {
            const element = this.element;
            if (!element) {
                return;
            }
            this._safeMutationObserver((observer) => observer.disconnect());
            this._initStyle();
            this.initBackground();
            this._safeMutationObserver((observer) => observer.observe(element, { attributes: true }));
        };
        this._resetOriginalStyle = () => {
            const element = this.element, originalStyle = this._originalStyle;
            if (!(element && originalStyle)) {
                return;
            }
            const style = element.style;
            style.position = originalStyle.position;
            style.zIndex = originalStyle.zIndex;
            style.top = originalStyle.top;
            style.left = originalStyle.left;
            style.width = originalStyle.width;
            style.height = originalStyle.height;
        };
        this._safeMutationObserver = (callback) => {
            if (!this._mutationObserver) {
                return;
            }
            callback(this._mutationObserver);
        };
        this._setFullScreenStyle = () => {
            const element = this.element;
            if (!element) {
                return;
            }
            const priority = "important", style = element.style;
            style.setProperty("position", "fixed", priority);
            style.setProperty("z-index", this.container.actualOptions.fullScreen.zIndex.toString(10), priority);
            style.setProperty("top", "0", priority);
            style.setProperty("left", "0", priority);
            style.setProperty("width", "100%", priority);
            style.setProperty("height", "100%", priority);
        };
        this.size = {
            height: 0,
            width: 0,
        };
        this._context = null;
        this._generated = false;
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        this._resizePlugins = [];
        this._colorPlugins = [];
    }
    get _fullScreen() {
        return this.container.actualOptions.fullScreen.enable;
    }
    clear() {
        const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = this._trailFill;
        if (options.backgroundMask.enable) {
            this.paint();
        }
        else if (trail.enable && trail.length > 0 && trailFill) {
            if (trailFill.color) {
                this._paintBase((0, ColorUtils_1.getStyleFromRgb)(trailFill.color, trailFill.opacity));
            }
            else if (trailFill.image) {
                this._paintImage(trailFill.image, trailFill.opacity);
            }
        }
        else {
            this.draw((ctx) => {
                (0, CanvasUtils_1.clear)(ctx, this.size);
            });
        }
    }
    destroy() {
        this.stop();
        if (this._generated) {
            const element = this.element;
            element && element.remove();
        }
        else {
            this._resetOriginalStyle();
        }
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        this._resizePlugins = [];
        this._colorPlugins = [];
    }
    draw(cb) {
        const ctx = this._context;
        if (!ctx) {
            return;
        }
        return cb(ctx);
    }
    drawParticle(particle, delta) {
        if (particle.spawning || particle.destroyed) {
            return;
        }
        const radius = particle.getRadius();
        if (radius <= 0) {
            return;
        }
        const pfColor = particle.getFillColor(), psColor = particle.getStrokeColor() ?? pfColor;
        let [fColor, sColor] = this._getPluginParticleColors(particle);
        if (!fColor) {
            fColor = pfColor;
        }
        if (!sColor) {
            sColor = psColor;
        }
        if (!fColor && !sColor) {
            return;
        }
        this.draw((ctx) => {
            const container = this.container, options = container.actualOptions, zIndexOptions = particle.options.zIndex, zOpacityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.opacityRate, opacity = particle.bubble.opacity ?? particle.opacity?.value ?? 1, strokeOpacity = particle.strokeOpacity ?? opacity, zOpacity = opacity * zOpacityFactor, zStrokeOpacity = strokeOpacity * zOpacityFactor, transform = {}, colorStyles = {
                fill: fColor ? (0, ColorUtils_1.getStyleFromHsl)(fColor, zOpacity) : undefined,
            };
            colorStyles.stroke = sColor ? (0, ColorUtils_1.getStyleFromHsl)(sColor, zStrokeOpacity) : colorStyles.fill;
            this._applyPreDrawUpdaters(ctx, particle, radius, zOpacity, colorStyles, transform);
            (0, CanvasUtils_1.drawParticle)({
                container,
                context: ctx,
                particle,
                delta,
                colorStyles,
                backgroundMask: options.backgroundMask.enable,
                composite: options.backgroundMask.composite,
                radius: radius * (1 - particle.zIndexFactor) ** zIndexOptions.sizeRate,
                opacity: zOpacity,
                shadow: particle.options.shadow,
                transform,
            });
            this._applyPostDrawUpdaters(particle);
        });
    }
    drawParticlePlugin(plugin, particle, delta) {
        this.draw((ctx) => (0, CanvasUtils_1.drawParticlePlugin)(ctx, plugin, particle, delta));
    }
    drawPlugin(plugin, delta) {
        this.draw((ctx) => (0, CanvasUtils_1.drawPlugin)(ctx, plugin, delta));
    }
    async init() {
        this._safeMutationObserver((obs) => obs.disconnect());
        this._mutationObserver = (0, Utils_1.safeMutationObserver)((records) => {
            for (const record of records) {
                if (record.type === "attributes" && record.attributeName === "style") {
                    this._repairStyle();
                }
            }
        });
        this.resize();
        this._initStyle();
        this._initCover();
        try {
            await this._initTrail();
        }
        catch (e) {
            (0, Utils_1.getLogger)().error(e);
        }
        this.initBackground();
        this._safeMutationObserver((obs) => {
            if (!this.element) {
                return;
            }
            obs.observe(this.element, { attributes: true });
        });
        this.initUpdaters();
        this.initPlugins();
        this.paint();
    }
    initBackground() {
        const options = this.container.actualOptions, background = options.background, element = this.element;
        if (!element) {
            return;
        }
        const elementStyle = element.style;
        if (!elementStyle) {
            return;
        }
        if (background.color) {
            const color = (0, ColorUtils_1.rangeColorToRgb)(background.color);
            elementStyle.backgroundColor = color ? (0, ColorUtils_1.getStyleFromRgb)(color, background.opacity) : "";
        }
        else {
            elementStyle.backgroundColor = "";
        }
        elementStyle.backgroundImage = background.image || "";
        elementStyle.backgroundPosition = background.position || "";
        elementStyle.backgroundRepeat = background.repeat || "";
        elementStyle.backgroundSize = background.size || "";
    }
    initPlugins() {
        this._resizePlugins = [];
        for (const [, plugin] of this.container.plugins) {
            if (plugin.resize) {
                this._resizePlugins.push(plugin);
            }
            if (plugin.particleFillColor || plugin.particleStrokeColor) {
                this._colorPlugins.push(plugin);
            }
        }
    }
    initUpdaters() {
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        for (const updater of this.container.particles.updaters) {
            if (updater.afterDraw) {
                this._postDrawUpdaters.push(updater);
            }
            if (updater.getColorStyles || updater.getTransformValues || updater.beforeDraw) {
                this._preDrawUpdaters.push(updater);
            }
        }
    }
    loadCanvas(canvas) {
        if (this._generated && this.element) {
            this.element.remove();
        }
        this._generated =
            canvas.dataset && Constants_1.generatedAttribute in canvas.dataset
                ? canvas.dataset[Constants_1.generatedAttribute] === "true"
                : this._generated;
        this.element = canvas;
        this.element.ariaHidden = "true";
        this._originalStyle = (0, Utils_1.deepExtend)({}, this.element.style);
        this.size.height = canvas.offsetHeight;
        this.size.width = canvas.offsetWidth;
        this._context = this.element.getContext("2d");
        this._safeMutationObserver((obs) => {
            if (!this.element) {
                return;
            }
            obs.observe(this.element, { attributes: true });
        });
        this.container.retina.init();
        this.initBackground();
    }
    paint() {
        const options = this.container.actualOptions;
        this.draw((ctx) => {
            if (options.backgroundMask.enable && options.backgroundMask.cover) {
                (0, CanvasUtils_1.clear)(ctx, this.size);
                this._paintBase(this._coverColorStyle);
            }
            else {
                this._paintBase();
            }
        });
    }
    resize() {
        if (!this.element) {
            return false;
        }
        const container = this.container, pxRatio = container.retina.pixelRatio, size = container.canvas.size, newSize = {
            width: this.element.offsetWidth * pxRatio,
            height: this.element.offsetHeight * pxRatio,
        };
        if (newSize.height === size.height &&
            newSize.width === size.width &&
            newSize.height === this.element.height &&
            newSize.width === this.element.width) {
            return false;
        }
        const oldSize = { ...size };
        this.element.width = size.width = this.element.offsetWidth * pxRatio;
        this.element.height = size.height = this.element.offsetHeight * pxRatio;
        if (this.container.started) {
            this.resizeFactor = {
                width: size.width / oldSize.width,
                height: size.height / oldSize.height,
            };
        }
        return true;
    }
    stop() {
        this._safeMutationObserver((obs) => obs.disconnect());
        this._mutationObserver = undefined;
        this.draw((ctx) => (0, CanvasUtils_1.clear)(ctx, this.size));
    }
    async windowResize() {
        if (!this.element || !this.resize()) {
            return;
        }
        const container = this.container, needsRefresh = container.updateActualOptions();
        container.particles.setDensity();
        this._applyResizePlugins();
        if (needsRefresh) {
            await container.refresh();
        }
    }
}
exports.Canvas = Canvas;


/***/ }),

/***/ 85139:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Container = void 0;
const Utils_1 = __webpack_require__(91694);
const Canvas_1 = __webpack_require__(30642);
const EventListeners_1 = __webpack_require__(77129);
const Options_1 = __webpack_require__(86720);
const Particles_1 = __webpack_require__(38154);
const Retina_1 = __webpack_require__(69710);
const Constants_1 = __webpack_require__(64011);
const NumberUtils_1 = __webpack_require__(296);
const OptionsUtils_1 = __webpack_require__(43376);
function guardCheck(container) {
    return container && !container.destroyed;
}
function initDelta(value, fpsLimit = 60, smooth = false) {
    return {
        value,
        factor: smooth ? 60 / fpsLimit : (60 * value) / 1000,
    };
}
function loadContainerOptions(engine, container, ...sourceOptionsArr) {
    const options = new Options_1.Options(engine, container);
    (0, OptionsUtils_1.loadOptions)(options, ...sourceOptionsArr);
    return options;
}
const defaultPathGeneratorKey = "default", defaultPathGenerator = {
    generate: (p) => p.velocity,
    init: () => {
    },
    update: () => {
    },
    reset: () => {
    },
};
class Container {
    constructor(engine, id, sourceOptions) {
        this.id = id;
        this._intersectionManager = (entries) => {
            if (!guardCheck(this) || !this.actualOptions.pauseOnOutsideViewport) {
                return;
            }
            for (const entry of entries) {
                if (entry.target !== this.interactivity.element) {
                    continue;
                }
                (entry.isIntersecting ? this.play : this.pause)();
            }
        };
        this._nextFrame = async (timestamp) => {
            try {
                if (!this.smooth &&
                    this.lastFrameTime !== undefined &&
                    timestamp < this.lastFrameTime + 1000 / this.fpsLimit) {
                    this.draw(false);
                    return;
                }
                this.lastFrameTime ??= timestamp;
                const delta = initDelta(timestamp - this.lastFrameTime, this.fpsLimit, this.smooth);
                this.addLifeTime(delta.value);
                this.lastFrameTime = timestamp;
                if (delta.value > 1000) {
                    this.draw(false);
                    return;
                }
                await this.particles.draw(delta);
                if (!this.alive()) {
                    this.destroy();
                    return;
                }
                if (this.getAnimationStatus()) {
                    this.draw(false);
                }
            }
            catch (e) {
                (0, Utils_1.getLogger)().error(`${Constants_1.errorPrefix} in animation loop`, e);
            }
        };
        this._engine = engine;
        this.fpsLimit = 120;
        this.smooth = false;
        this._delay = 0;
        this._duration = 0;
        this._lifeTime = 0;
        this._firstStart = true;
        this.started = false;
        this.destroyed = false;
        this._paused = true;
        this.lastFrameTime = 0;
        this.zLayers = 100;
        this.pageHidden = false;
        this._sourceOptions = sourceOptions;
        this._initialSourceOptions = sourceOptions;
        this.retina = new Retina_1.Retina(this);
        this.canvas = new Canvas_1.Canvas(this);
        this.particles = new Particles_1.Particles(this._engine, this);
        this.pathGenerators = new Map();
        this.interactivity = {
            mouse: {
                clicking: false,
                inside: false,
            },
        };
        this.plugins = new Map();
        this.drawers = new Map();
        this._options = loadContainerOptions(this._engine, this);
        this.actualOptions = loadContainerOptions(this._engine, this);
        this._eventListeners = new EventListeners_1.EventListeners(this);
        if (typeof IntersectionObserver !== "undefined" && IntersectionObserver) {
            this._intersectionObserver = new IntersectionObserver((entries) => this._intersectionManager(entries));
        }
        this._engine.dispatchEvent("containerBuilt", { container: this });
    }
    get options() {
        return this._options;
    }
    get sourceOptions() {
        return this._sourceOptions;
    }
    addClickHandler(callback) {
        if (!guardCheck(this)) {
            return;
        }
        const el = this.interactivity.element;
        if (!el) {
            return;
        }
        const clickOrTouchHandler = (e, pos, radius) => {
            if (!guardCheck(this)) {
                return;
            }
            const pxRatio = this.retina.pixelRatio, posRetina = {
                x: pos.x * pxRatio,
                y: pos.y * pxRatio,
            }, particles = this.particles.quadTree.queryCircle(posRetina, radius * pxRatio);
            callback(e, particles);
        };
        const clickHandler = (e) => {
            if (!guardCheck(this)) {
                return;
            }
            const mouseEvent = e, pos = {
                x: mouseEvent.offsetX || mouseEvent.clientX,
                y: mouseEvent.offsetY || mouseEvent.clientY,
            };
            clickOrTouchHandler(e, pos, 1);
        };
        const touchStartHandler = () => {
            if (!guardCheck(this)) {
                return;
            }
            touched = true;
            touchMoved = false;
        };
        const touchMoveHandler = () => {
            if (!guardCheck(this)) {
                return;
            }
            touchMoved = true;
        };
        const touchEndHandler = (e) => {
            if (!guardCheck(this)) {
                return;
            }
            if (touched && !touchMoved) {
                const touchEvent = e;
                let lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
                if (!lastTouch) {
                    lastTouch = touchEvent.changedTouches[touchEvent.changedTouches.length - 1];
                    if (!lastTouch) {
                        return;
                    }
                }
                const element = this.canvas.element, canvasRect = element ? element.getBoundingClientRect() : undefined, pos = {
                    x: lastTouch.clientX - (canvasRect ? canvasRect.left : 0),
                    y: lastTouch.clientY - (canvasRect ? canvasRect.top : 0),
                };
                clickOrTouchHandler(e, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
            }
            touched = false;
            touchMoved = false;
        };
        const touchCancelHandler = () => {
            if (!guardCheck(this)) {
                return;
            }
            touched = false;
            touchMoved = false;
        };
        let touched = false, touchMoved = false;
        el.addEventListener("click", clickHandler);
        el.addEventListener("touchstart", touchStartHandler);
        el.addEventListener("touchmove", touchMoveHandler);
        el.addEventListener("touchend", touchEndHandler);
        el.addEventListener("touchcancel", touchCancelHandler);
    }
    addLifeTime(value) {
        this._lifeTime += value;
    }
    addPath(key, generator, override = false) {
        if (!guardCheck(this) || (!override && this.pathGenerators.has(key))) {
            return false;
        }
        this.pathGenerators.set(key, generator ?? defaultPathGenerator);
        return true;
    }
    alive() {
        return !this._duration || this._lifeTime <= this._duration;
    }
    destroy() {
        if (!guardCheck(this)) {
            return;
        }
        this.stop();
        this.particles.destroy();
        this.canvas.destroy();
        for (const [, drawer] of this.drawers) {
            drawer.destroy && drawer.destroy(this);
        }
        for (const key of this.drawers.keys()) {
            this.drawers.delete(key);
        }
        this._engine.plugins.destroy(this);
        this.destroyed = true;
        const mainArr = this._engine.dom(), idx = mainArr.findIndex((t) => t === this);
        if (idx >= 0) {
            mainArr.splice(idx, 1);
        }
        this._engine.dispatchEvent("containerDestroyed", { container: this });
    }
    draw(force) {
        if (!guardCheck(this)) {
            return;
        }
        let refreshTime = force;
        this._drawAnimationFrame = requestAnimationFrame(async (timestamp) => {
            if (refreshTime) {
                this.lastFrameTime = undefined;
                refreshTime = false;
            }
            await this._nextFrame(timestamp);
        });
    }
    async export(type, options = {}) {
        for (const [, plugin] of this.plugins) {
            if (!plugin.export) {
                continue;
            }
            const res = await plugin.export(type, options);
            if (!res.supported) {
                continue;
            }
            return res.blob;
        }
        (0, Utils_1.getLogger)().error(`${Constants_1.errorPrefix} - Export plugin with type ${type} not found`);
    }
    getAnimationStatus() {
        return !this._paused && !this.pageHidden && guardCheck(this);
    }
    handleClickMode(mode) {
        if (!guardCheck(this)) {
            return;
        }
        this.particles.handleClickMode(mode);
        for (const [, plugin] of this.plugins) {
            plugin.handleClickMode && plugin.handleClickMode(mode);
        }
    }
    async init() {
        if (!guardCheck(this)) {
            return;
        }
        const shapes = this._engine.plugins.getSupportedShapes();
        for (const type of shapes) {
            const drawer = this._engine.plugins.getShapeDrawer(type);
            if (drawer) {
                this.drawers.set(type, drawer);
            }
        }
        this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
        this.actualOptions = loadContainerOptions(this._engine, this, this._options);
        const availablePlugins = this._engine.plugins.getAvailablePlugins(this);
        for (const [id, plugin] of availablePlugins) {
            this.plugins.set(id, plugin);
        }
        this.retina.init();
        await this.canvas.init();
        this.updateActualOptions();
        this.canvas.initBackground();
        this.canvas.resize();
        this.zLayers = this.actualOptions.zLayers;
        this._duration = (0, NumberUtils_1.getRangeValue)(this.actualOptions.duration) * 1000;
        this._delay = (0, NumberUtils_1.getRangeValue)(this.actualOptions.delay) * 1000;
        this._lifeTime = 0;
        this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120;
        this.smooth = this.actualOptions.smooth;
        for (const [, drawer] of this.drawers) {
            drawer.init && (await drawer.init(this));
        }
        for (const [, plugin] of this.plugins) {
            plugin.init && (await plugin.init());
        }
        this._engine.dispatchEvent("containerInit", { container: this });
        this.particles.init();
        this.particles.setDensity();
        for (const [, plugin] of this.plugins) {
            plugin.particlesSetup && plugin.particlesSetup();
        }
        this._engine.dispatchEvent("particlesSetup", { container: this });
    }
    async loadTheme(name) {
        if (!guardCheck(this)) {
            return;
        }
        this._currentTheme = name;
        await this.refresh();
    }
    pause() {
        if (!guardCheck(this)) {
            return;
        }
        if (this._drawAnimationFrame !== undefined) {
            cancelAnimationFrame(this._drawAnimationFrame);
            delete this._drawAnimationFrame;
        }
        if (this._paused) {
            return;
        }
        for (const [, plugin] of this.plugins) {
            plugin.pause && plugin.pause();
        }
        if (!this.pageHidden) {
            this._paused = true;
        }
        this._engine.dispatchEvent("containerPaused", { container: this });
    }
    play(force) {
        if (!guardCheck(this)) {
            return;
        }
        const needsUpdate = this._paused || force;
        if (this._firstStart && !this.actualOptions.autoPlay) {
            this._firstStart = false;
            return;
        }
        if (this._paused) {
            this._paused = false;
        }
        if (needsUpdate) {
            for (const [, plugin] of this.plugins) {
                if (plugin.play) {
                    plugin.play();
                }
            }
        }
        this._engine.dispatchEvent("containerPlay", { container: this });
        this.draw(needsUpdate || false);
    }
    async refresh() {
        if (!guardCheck(this)) {
            return;
        }
        this.stop();
        return this.start();
    }
    async reset() {
        if (!guardCheck(this)) {
            return;
        }
        this._initialSourceOptions = undefined;
        this._options = loadContainerOptions(this._engine, this);
        this.actualOptions = loadContainerOptions(this._engine, this, this._options);
        return this.refresh();
    }
    setNoise(noiseOrGenerator, init, update) {
        if (!guardCheck(this)) {
            return;
        }
        this.setPath(noiseOrGenerator, init, update);
    }
    setPath(pathOrGenerator, init, update) {
        if (!pathOrGenerator || !guardCheck(this)) {
            return;
        }
        const pathGenerator = { ...defaultPathGenerator };
        if ((0, Utils_1.isFunction)(pathOrGenerator)) {
            pathGenerator.generate = pathOrGenerator;
            if (init) {
                pathGenerator.init = init;
            }
            if (update) {
                pathGenerator.update = update;
            }
        }
        else {
            const oldGenerator = pathGenerator;
            pathGenerator.generate = pathOrGenerator.generate || oldGenerator.generate;
            pathGenerator.init = pathOrGenerator.init || oldGenerator.init;
            pathGenerator.update = pathOrGenerator.update || oldGenerator.update;
        }
        this.addPath(defaultPathGeneratorKey, pathGenerator, true);
    }
    async start() {
        if (!guardCheck(this) || this.started) {
            return;
        }
        await this.init();
        this.started = true;
        await new Promise((resolve) => {
            this._delayTimeout = setTimeout(async () => {
                this._eventListeners.addListeners();
                if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
                    this._intersectionObserver.observe(this.interactivity.element);
                }
                for (const [, plugin] of this.plugins) {
                    plugin.start && (await plugin.start());
                }
                this._engine.dispatchEvent("containerStarted", { container: this });
                this.play();
                resolve();
            }, this._delay);
        });
    }
    stop() {
        if (!guardCheck(this) || !this.started) {
            return;
        }
        if (this._delayTimeout) {
            clearTimeout(this._delayTimeout);
            delete this._delayTimeout;
        }
        this._firstStart = true;
        this.started = false;
        this._eventListeners.removeListeners();
        this.pause();
        this.particles.clear();
        this.canvas.stop();
        if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) {
            this._intersectionObserver.unobserve(this.interactivity.element);
        }
        for (const [, plugin] of this.plugins) {
            plugin.stop && plugin.stop();
        }
        for (const key of this.plugins.keys()) {
            this.plugins.delete(key);
        }
        this._sourceOptions = this._options;
        this._engine.dispatchEvent("containerStopped", { container: this });
    }
    updateActualOptions() {
        this.actualOptions.responsive = [];
        const newMaxWidth = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
        this.actualOptions.setTheme(this._currentTheme);
        if (this.responsiveMaxWidth === newMaxWidth) {
            return false;
        }
        this.responsiveMaxWidth = newMaxWidth;
        return true;
    }
}
exports.Container = Container;


/***/ }),

/***/ 97895:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Engine = void 0;
const Constants_1 = __webpack_require__(64011);
const Utils_1 = __webpack_require__(91694);
const Container_1 = __webpack_require__(85139);
const EventDispatcher_1 = __webpack_require__(38566);
const Plugins_1 = __webpack_require__(81906);
const NumberUtils_1 = __webpack_require__(296);
async function getDataFromUrl(data) {
    const url = (0, Utils_1.itemFromSingleOrMultiple)(data.url, data.index);
    if (!url) {
        return data.fallback;
    }
    const response = await fetch(url);
    if (response.ok) {
        return response.json();
    }
    (0, Utils_1.getLogger)().error(`${Constants_1.errorPrefix} ${response.status} while retrieving config file`);
    return data.fallback;
}
function isParamsEmpty(params) {
    return !params.id && !params.element && !params.url && !params.options;
}
function isParams(obj) {
    return !isParamsEmpty(obj);
}
class Engine {
    constructor() {
        this._configs = new Map();
        this._domArray = [];
        this._eventDispatcher = new EventDispatcher_1.EventDispatcher();
        this._initialized = false;
        this.plugins = new Plugins_1.Plugins(this);
    }
    get configs() {
        const res = {};
        for (const [name, config] of this._configs) {
            res[name] = config;
        }
        return res;
    }
    get version() {
        return "2.12.0";
    }
    addConfig(nameOrConfig, config) {
        if ((0, Utils_1.isString)(nameOrConfig)) {
            if (config) {
                config.name = nameOrConfig;
                this._configs.set(nameOrConfig, config);
            }
        }
        else {
            this._configs.set(nameOrConfig.name ?? "default", nameOrConfig);
        }
    }
    addEventListener(type, listener) {
        this._eventDispatcher.addEventListener(type, listener);
    }
    async addInteractor(name, interactorInitializer, refresh = true) {
        this.plugins.addInteractor(name, interactorInitializer);
        await this.refresh(refresh);
    }
    async addMover(name, moverInitializer, refresh = true) {
        this.plugins.addParticleMover(name, moverInitializer);
        await this.refresh(refresh);
    }
    async addParticleUpdater(name, updaterInitializer, refresh = true) {
        this.plugins.addParticleUpdater(name, updaterInitializer);
        await this.refresh(refresh);
    }
    async addPathGenerator(name, generator, refresh = true) {
        this.plugins.addPathGenerator(name, generator);
        await this.refresh(refresh);
    }
    async addPlugin(plugin, refresh = true) {
        this.plugins.addPlugin(plugin);
        await this.refresh(refresh);
    }
    async addPreset(preset, options, override = false, refresh = true) {
        this.plugins.addPreset(preset, options, override);
        await this.refresh(refresh);
    }
    async addShape(shape, drawer, initOrRefresh, afterEffectOrRefresh, destroyOrRefresh, refresh = true) {
        let customDrawer;
        let realRefresh = refresh, realInit, realAfterEffect, realDestroy;
        if ((0, Utils_1.isBoolean)(initOrRefresh)) {
            realRefresh = initOrRefresh;
            realInit = undefined;
        }
        else {
            realInit = initOrRefresh;
        }
        if ((0, Utils_1.isBoolean)(afterEffectOrRefresh)) {
            realRefresh = afterEffectOrRefresh;
            realAfterEffect = undefined;
        }
        else {
            realAfterEffect = afterEffectOrRefresh;
        }
        if ((0, Utils_1.isBoolean)(destroyOrRefresh)) {
            realRefresh = destroyOrRefresh;
            realDestroy = undefined;
        }
        else {
            realDestroy = destroyOrRefresh;
        }
        if ((0, Utils_1.isFunction)(drawer)) {
            customDrawer = {
                afterEffect: realAfterEffect,
                destroy: realDestroy,
                draw: drawer,
                init: realInit,
            };
        }
        else {
            customDrawer = drawer;
        }
        this.plugins.addShapeDrawer(shape, customDrawer);
        await this.refresh(realRefresh);
    }
    dispatchEvent(type, args) {
        this._eventDispatcher.dispatchEvent(type, args);
    }
    dom() {
        return this._domArray;
    }
    domItem(index) {
        const dom = this.dom(), item = dom[index];
        if (!item || item.destroyed) {
            dom.splice(index, 1);
            return;
        }
        return item;
    }
    init() {
        if (this._initialized) {
            return;
        }
        this._initialized = true;
    }
    async load(tagIdOrOptionsOrParams, options) {
        return this.loadFromArray(tagIdOrOptionsOrParams, options);
    }
    async loadFromArray(tagIdOrOptionsOrParams, optionsOrIndex, index) {
        let params;
        if (!isParams(tagIdOrOptionsOrParams)) {
            params = {};
            if ((0, Utils_1.isString)(tagIdOrOptionsOrParams)) {
                params.id = tagIdOrOptionsOrParams;
            }
            else {
                params.options = tagIdOrOptionsOrParams;
            }
            if ((0, Utils_1.isNumber)(optionsOrIndex)) {
                params.index = optionsOrIndex;
            }
            else {
                params.options = optionsOrIndex ?? params.options;
            }
            params.index = index ?? params.index;
        }
        else {
            params = tagIdOrOptionsOrParams;
        }
        return this._loadParams(params);
    }
    async loadJSON(tagId, pathConfigJson, index) {
        let url, id;
        if ((0, Utils_1.isNumber)(pathConfigJson) || pathConfigJson === undefined) {
            url = tagId;
        }
        else {
            id = tagId;
            url = pathConfigJson;
        }
        return this._loadParams({ id: id, url, index });
    }
    async refresh(refresh = true) {
        if (!refresh) {
            return;
        }
        this.dom().forEach((t) => t.refresh());
    }
    removeEventListener(type, listener) {
        this._eventDispatcher.removeEventListener(type, listener);
    }
    async set(id, element, options, index) {
        const params = { index };
        if ((0, Utils_1.isString)(id)) {
            params.id = id;
        }
        else {
            params.element = id;
        }
        if (element instanceof HTMLElement) {
            params.element = element;
        }
        else {
            params.options = element;
        }
        if ((0, Utils_1.isNumber)(options)) {
            params.index = options;
        }
        else {
            params.options = options ?? params.options;
        }
        return this._loadParams(params);
    }
    async setJSON(id, element, pathConfigJson, index) {
        const params = {};
        if (id instanceof HTMLElement) {
            params.element = id;
            params.url = element;
            params.index = pathConfigJson;
        }
        else {
            params.id = id;
            params.element = element;
            params.url = pathConfigJson;
            params.index = index;
        }
        return this._loadParams(params);
    }
    setOnClickHandler(callback) {
        const dom = this.dom();
        if (!dom.length) {
            throw new Error(`${Constants_1.errorPrefix} can only set click handlers after calling tsParticles.load()`);
        }
        for (const domItem of dom) {
            domItem.addClickHandler(callback);
        }
    }
    async _loadParams(params) {
        const id = params.id ?? `tsparticles${Math.floor((0, NumberUtils_1.getRandom)() * 10000)}`, { index, url } = params, options = url ? await getDataFromUrl({ fallback: params.options, url, index }) : params.options;
        let domContainer = params.element ?? document.getElementById(id);
        if (!domContainer) {
            domContainer = document.createElement("div");
            domContainer.id = id;
            document.body.append(domContainer);
        }
        const currentOptions = (0, Utils_1.itemFromSingleOrMultiple)(options, index), dom = this.dom(), oldIndex = dom.findIndex((v) => v.id === id);
        if (oldIndex >= 0) {
            const old = this.domItem(oldIndex);
            if (old && !old.destroyed) {
                old.destroy();
                dom.splice(oldIndex, 1);
            }
        }
        let canvasEl;
        if (domContainer.tagName.toLowerCase() === "canvas") {
            canvasEl = domContainer;
            canvasEl.dataset[Constants_1.generatedAttribute] = "false";
        }
        else {
            const existingCanvases = domContainer.getElementsByTagName("canvas");
            if (existingCanvases.length) {
                canvasEl = existingCanvases[0];
                canvasEl.dataset[Constants_1.generatedAttribute] = "false";
            }
            else {
                canvasEl = document.createElement("canvas");
                canvasEl.dataset[Constants_1.generatedAttribute] = "true";
                domContainer.appendChild(canvasEl);
            }
        }
        if (!canvasEl.style.width) {
            canvasEl.style.width = "100%";
        }
        if (!canvasEl.style.height) {
            canvasEl.style.height = "100%";
        }
        const newItem = new Container_1.Container(this, id, currentOptions);
        if (oldIndex >= 0) {
            dom.splice(oldIndex, 0, newItem);
        }
        else {
            dom.push(newItem);
        }
        newItem.canvas.loadCanvas(canvasEl);
        await newItem.start();
        return newItem;
    }
}
exports.Engine = Engine;


/***/ }),

/***/ 13854:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 54364:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 6575:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 18277:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 39613:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 25843:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 74941:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 63584:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 38078:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 98081:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 64600:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 16259:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 31697:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 55166:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 18025:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 47313:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 93427:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 9903:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 77023:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 2319:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 35344:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 28126:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 68706:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 82154:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 73962:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 25968:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 70971:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 65303:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 2781:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 51325:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 23477:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 30832:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 96095:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 69171:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 78493:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 86937:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 30511:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Particle = void 0;
const NumberUtils_1 = __webpack_require__(296);
const Utils_1 = __webpack_require__(91694);
const ColorUtils_1 = __webpack_require__(7585);
const Interactivity_1 = __webpack_require__(91097);
const Vector_1 = __webpack_require__(84967);
const Vector3d_1 = __webpack_require__(36685);
const CanvasUtils_1 = __webpack_require__(50851);
const Constants_1 = __webpack_require__(64011);
const OptionsUtils_1 = __webpack_require__(43376);
const fixOutMode = (data) => {
    if (!(0, Utils_1.isInArray)(data.outMode, data.checkModes)) {
        return;
    }
    const diameter = data.radius * 2;
    if (data.coord > data.maxCoord - diameter) {
        data.setCb(-data.radius);
    }
    else if (data.coord < diameter) {
        data.setCb(data.radius);
    }
};
class Particle {
    constructor(engine, id, container, position, overrideOptions, group) {
        this.container = container;
        this._calcPosition = (container, position, zIndex, tryCount = 0) => {
            for (const [, plugin] of container.plugins) {
                const pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position, this) : undefined;
                if (pluginPos) {
                    return Vector3d_1.Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
                }
            }
            const canvasSize = container.canvas.size, exactPosition = (0, NumberUtils_1.calcExactPositionOrRandomFromSize)({
                size: canvasSize,
                position: position,
            }), pos = Vector3d_1.Vector3d.create(exactPosition.x, exactPosition.y, zIndex), radius = this.getRadius(), outModes = this.options.move.outModes, fixHorizontal = (outMode) => {
                fixOutMode({
                    outMode,
                    checkModes: ["bounce", "bounce-horizontal"],
                    coord: pos.x,
                    maxCoord: container.canvas.size.width,
                    setCb: (value) => (pos.x += value),
                    radius,
                });
            }, fixVertical = (outMode) => {
                fixOutMode({
                    outMode,
                    checkModes: ["bounce", "bounce-vertical"],
                    coord: pos.y,
                    maxCoord: container.canvas.size.height,
                    setCb: (value) => (pos.y += value),
                    radius,
                });
            };
            fixHorizontal(outModes.left ?? outModes.default);
            fixHorizontal(outModes.right ?? outModes.default);
            fixVertical(outModes.top ?? outModes.default);
            fixVertical(outModes.bottom ?? outModes.default);
            if (this._checkOverlap(pos, tryCount)) {
                return this._calcPosition(container, undefined, zIndex, tryCount + 1);
            }
            return pos;
        };
        this._calculateVelocity = () => {
            const baseVelocity = (0, NumberUtils_1.getParticleBaseVelocity)(this.direction), res = baseVelocity.copy(), moveOptions = this.options.move;
            if (moveOptions.direction === "inside" || moveOptions.direction === "outside") {
                return res;
            }
            const rad = (Math.PI / 180) * (0, NumberUtils_1.getRangeValue)(moveOptions.angle.value), radOffset = (Math.PI / 180) * (0, NumberUtils_1.getRangeValue)(moveOptions.angle.offset), range = {
                left: radOffset - rad / 2,
                right: radOffset + rad / 2,
            };
            if (!moveOptions.straight) {
                res.angle += (0, NumberUtils_1.randomInRange)((0, NumberUtils_1.setRangeValue)(range.left, range.right));
            }
            if (moveOptions.random && typeof moveOptions.speed === "number") {
                res.length *= (0, NumberUtils_1.getRandom)();
            }
            return res;
        };
        this._checkOverlap = (pos, tryCount = 0) => {
            const collisionsOptions = this.options.collisions, radius = this.getRadius();
            if (!collisionsOptions.enable) {
                return false;
            }
            const overlapOptions = collisionsOptions.overlap;
            if (overlapOptions.enable) {
                return false;
            }
            const retries = overlapOptions.retries;
            if (retries >= 0 && tryCount > retries) {
                throw new Error(`${Constants_1.errorPrefix} particle is overlapping and can't be placed`);
            }
            return !!this.container.particles.find((particle) => (0, NumberUtils_1.getDistance)(pos, particle.position) < radius + particle.getRadius());
        };
        this._getRollColor = (color) => {
            if (!color || !this.roll || (!this.backColor && !this.roll.alter)) {
                return color;
            }
            const backFactor = this.roll.horizontal && this.roll.vertical ? 2 : 1, backSum = this.roll.horizontal ? Math.PI / 2 : 0, rolled = Math.floor(((this.roll.angle ?? 0) + backSum) / (Math.PI / backFactor)) % 2;
            if (!rolled) {
                return color;
            }
            if (this.backColor) {
                return this.backColor;
            }
            if (this.roll.alter) {
                return (0, CanvasUtils_1.alterHsl)(color, this.roll.alter.type, this.roll.alter.value);
            }
            return color;
        };
        this._initPosition = (position) => {
            const container = this.container, zIndexValue = (0, NumberUtils_1.getRangeValue)(this.options.zIndex.value);
            this.position = this._calcPosition(container, position, (0, NumberUtils_1.clamp)(zIndexValue, 0, container.zLayers));
            this.initialPosition = this.position.copy();
            const canvasSize = container.canvas.size;
            this.moveCenter = {
                ...(0, Utils_1.getPosition)(this.options.move.center, canvasSize),
                radius: this.options.move.center.radius ?? 0,
                mode: this.options.move.center.mode ?? "percent",
            };
            this.direction = (0, NumberUtils_1.getParticleDirectionAngle)(this.options.move.direction, this.position, this.moveCenter);
            switch (this.options.move.direction) {
                case "inside":
                    this.outType = "inside";
                    break;
                case "outside":
                    this.outType = "outside";
                    break;
            }
            this.offset = Vector_1.Vector.origin;
        };
        this._loadShapeData = (shapeOptions, reduceDuplicates) => {
            const shapeData = shapeOptions.options[this.shape];
            if (!shapeData) {
                return;
            }
            return (0, Utils_1.deepExtend)({
                close: shapeOptions.close,
                fill: shapeOptions.fill,
            }, (0, Utils_1.itemFromSingleOrMultiple)(shapeData, this.id, reduceDuplicates));
        };
        this._engine = engine;
        this.init(id, position, overrideOptions, group);
    }
    destroy(override) {
        if (this.unbreakable || this.destroyed) {
            return;
        }
        this.destroyed = true;
        this.bubble.inRange = false;
        this.slow.inRange = false;
        const container = this.container, pathGenerator = this.pathGenerator;
        for (const [, plugin] of container.plugins) {
            if (plugin.particleDestroyed) {
                plugin.particleDestroyed(this, override);
            }
        }
        for (const updater of container.particles.updaters) {
            if (updater.particleDestroyed) {
                updater.particleDestroyed(this, override);
            }
        }
        if (pathGenerator) {
            pathGenerator.reset(this);
        }
    }
    draw(delta) {
        const container = this.container;
        for (const [, plugin] of container.plugins) {
            container.canvas.drawParticlePlugin(plugin, this, delta);
        }
        container.canvas.drawParticle(this, delta);
    }
    getFillColor() {
        return this._getRollColor(this.bubble.color ?? (0, ColorUtils_1.getHslFromAnimation)(this.color));
    }
    getMass() {
        return (this.getRadius() ** 2 * Math.PI) / 2;
    }
    getPosition() {
        return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
            z: this.position.z,
        };
    }
    getRadius() {
        return this.bubble.radius ?? this.size.value;
    }
    getStrokeColor() {
        return this._getRollColor(this.bubble.color ?? (0, ColorUtils_1.getHslFromAnimation)(this.strokeColor));
    }
    init(id, position, overrideOptions, group) {
        const container = this.container, engine = this._engine;
        this.id = id;
        this.group = group;
        this.fill = true;
        this.pathRotation = false;
        this.close = true;
        this.lastPathTime = 0;
        this.destroyed = false;
        this.unbreakable = false;
        this.rotation = 0;
        this.misplaced = false;
        this.retina = {
            maxDistance: {},
        };
        this.outType = "normal";
        this.ignoresResizeRatio = true;
        const pxRatio = container.retina.pixelRatio, mainOptions = container.actualOptions, particlesOptions = (0, OptionsUtils_1.loadParticlesOptions)(this._engine, container, mainOptions.particles), shapeType = particlesOptions.shape.type, { reduceDuplicates } = particlesOptions;
        this.shape = (0, Utils_1.itemFromSingleOrMultiple)(shapeType, this.id, reduceDuplicates);
        const shapeOptions = particlesOptions.shape;
        if (overrideOptions && overrideOptions.shape && overrideOptions.shape.type) {
            const overrideShapeType = overrideOptions.shape.type, shape = (0, Utils_1.itemFromSingleOrMultiple)(overrideShapeType, this.id, reduceDuplicates);
            if (shape) {
                this.shape = shape;
                shapeOptions.load(overrideOptions.shape);
            }
        }
        this.shapeData = this._loadShapeData(shapeOptions, reduceDuplicates);
        particlesOptions.load(overrideOptions);
        const shapeData = this.shapeData;
        if (shapeData) {
            particlesOptions.load(shapeData.particles);
        }
        const interactivity = new Interactivity_1.Interactivity(engine, container);
        interactivity.load(container.actualOptions.interactivity);
        interactivity.load(particlesOptions.interactivity);
        this.interactivity = interactivity;
        this.fill = shapeData?.fill ?? particlesOptions.shape.fill;
        this.close = shapeData?.close ?? particlesOptions.shape.close;
        this.options = particlesOptions;
        const pathOptions = this.options.move.path;
        this.pathDelay = (0, NumberUtils_1.getValue)(pathOptions.delay) * 1000;
        if (pathOptions.generator) {
            this.pathGenerator = this._engine.plugins.getPathGenerator(pathOptions.generator);
            if (this.pathGenerator && container.addPath(pathOptions.generator, this.pathGenerator)) {
                this.pathGenerator.init(container);
            }
        }
        container.retina.initParticle(this);
        this.size = (0, Utils_1.initParticleNumericAnimationValue)(this.options.size, pxRatio);
        this.bubble = {
            inRange: false,
        };
        this.slow = {
            inRange: false,
            factor: 1,
        };
        this._initPosition(position);
        this.initialVelocity = this._calculateVelocity();
        this.velocity = this.initialVelocity.copy();
        this.moveDecay = 1 - (0, NumberUtils_1.getRangeValue)(this.options.move.decay);
        const particles = container.particles;
        particles.needsSort = particles.needsSort || particles.lastZIndex < this.position.z;
        particles.lastZIndex = this.position.z;
        this.zIndexFactor = this.position.z / container.zLayers;
        this.sides = 24;
        let drawer = container.drawers.get(this.shape);
        if (!drawer) {
            drawer = this._engine.plugins.getShapeDrawer(this.shape);
            if (drawer) {
                container.drawers.set(this.shape, drawer);
            }
        }
        if (drawer && drawer.loadShape) {
            drawer.loadShape(this);
        }
        const sideCountFunc = drawer?.getSidesCount;
        if (sideCountFunc) {
            this.sides = sideCountFunc(this);
        }
        this.spawning = false;
        this.shadowColor = (0, ColorUtils_1.rangeColorToRgb)(this.options.shadow.color);
        for (const updater of container.particles.updaters) {
            updater.init(this);
        }
        for (const mover of container.particles.movers) {
            mover.init && mover.init(this);
        }
        if (drawer && drawer.particleInit) {
            drawer.particleInit(container, this);
        }
        for (const [, plugin] of container.plugins) {
            plugin.particleCreated && plugin.particleCreated(this);
        }
    }
    isInsideCanvas() {
        const radius = this.getRadius(), canvasSize = this.container.canvas.size, position = this.position;
        return (position.x >= -radius &&
            position.y >= -radius &&
            position.y <= canvasSize.height + radius &&
            position.x <= canvasSize.width + radius);
    }
    isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas();
    }
    reset() {
        for (const updater of this.container.particles.updaters) {
            updater.reset && updater.reset(this);
        }
    }
}
exports.Particle = Particle;


/***/ }),

/***/ 38154:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Particles = void 0;
const Utils_1 = __webpack_require__(91694);
const InteractionManager_1 = __webpack_require__(21412);
const Particle_1 = __webpack_require__(30511);
const Point_1 = __webpack_require__(93894);
const QuadTree_1 = __webpack_require__(78550);
const Rectangle_1 = __webpack_require__(40018);
const Constants_1 = __webpack_require__(64011);
const qTreeCapacity = 4;
const qTreeRectangle = (canvasSize) => {
    return new Rectangle_1.Rectangle(-canvasSize.width / 4, -canvasSize.height / 4, (canvasSize.width * 3) / 2, (canvasSize.height * 3) / 2);
};
class Particles {
    constructor(engine, container) {
        this._applyDensity = (options, manualCount, group) => {
            if (!options.number.density?.enable) {
                return;
            }
            const numberOptions = options.number, densityFactor = this._initDensityFactor(numberOptions.density), optParticlesNumber = numberOptions.value, optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber, particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + manualCount, particlesCount = Math.min(this.count, this.filter((t) => t.group === group).length);
            this.limit = numberOptions.limit * densityFactor;
            if (particlesCount < particlesNumber) {
                this.push(Math.abs(particlesNumber - particlesCount), undefined, options, group);
            }
            else if (particlesCount > particlesNumber) {
                this.removeQuantity(particlesCount - particlesNumber, group);
            }
        };
        this._initDensityFactor = (densityOptions) => {
            const container = this._container;
            if (!container.canvas.element || !densityOptions.enable) {
                return 1;
            }
            const canvas = container.canvas.element, pxRatio = container.retina.pixelRatio;
            return (canvas.width * canvas.height) / (densityOptions.factor * pxRatio ** 2 * densityOptions.area);
        };
        this._pushParticle = (position, overrideOptions, group, initializer) => {
            try {
                let particle = this.pool.pop();
                if (particle) {
                    particle.init(this._nextId, position, overrideOptions, group);
                }
                else {
                    particle = new Particle_1.Particle(this._engine, this._nextId, this._container, position, overrideOptions, group);
                }
                let canAdd = true;
                if (initializer) {
                    canAdd = initializer(particle);
                }
                if (!canAdd) {
                    return;
                }
                this._array.push(particle);
                this._zArray.push(particle);
                this._nextId++;
                this._engine.dispatchEvent("particleAdded", {
                    container: this._container,
                    data: {
                        particle,
                    },
                });
                return particle;
            }
            catch (e) {
                (0, Utils_1.getLogger)().warning(`${Constants_1.errorPrefix} adding particle: ${e}`);
                return;
            }
        };
        this._removeParticle = (index, group, override) => {
            const particle = this._array[index];
            if (!particle || particle.group !== group) {
                return false;
            }
            particle.destroy(override);
            const zIdx = this._zArray.indexOf(particle);
            this._array.splice(index, 1);
            this._zArray.splice(zIdx, 1);
            this.pool.push(particle);
            this._engine.dispatchEvent("particleRemoved", {
                container: this._container,
                data: {
                    particle,
                },
            });
            return true;
        };
        this._engine = engine;
        this._container = container;
        this._nextId = 0;
        this._array = [];
        this._zArray = [];
        this.pool = [];
        this.limit = 0;
        this.needsSort = false;
        this.lastZIndex = 0;
        this._interactionManager = new InteractionManager_1.InteractionManager(engine, container);
        const canvasSize = container.canvas.size;
        this.quadTree = new QuadTree_1.QuadTree(qTreeRectangle(canvasSize), qTreeCapacity);
        this.movers = this._engine.plugins.getMovers(container, true);
        this.updaters = this._engine.plugins.getUpdaters(container, true);
    }
    get count() {
        return this._array.length;
    }
    addManualParticles() {
        const container = this._container, options = container.actualOptions;
        for (const particle of options.manualParticles) {
            this.addParticle(particle.position ? (0, Utils_1.getPosition)(particle.position, container.canvas.size) : undefined, particle.options);
        }
    }
    addParticle(position, overrideOptions, group, initializer) {
        const container = this._container, options = container.actualOptions, limit = options.particles.number.limit;
        if (limit > 0) {
            const countToRemove = this.count + 1 - limit;
            if (countToRemove > 0) {
                this.removeQuantity(countToRemove);
            }
        }
        return this._pushParticle(position, overrideOptions, group, initializer);
    }
    clear() {
        this._array = [];
        this._zArray = [];
    }
    destroy() {
        this._array = [];
        this._zArray = [];
        this.movers = [];
        this.updaters = [];
    }
    async draw(delta) {
        const container = this._container;
        container.canvas.clear();
        await this.update(delta);
        for (const [, plugin] of container.plugins) {
            container.canvas.drawPlugin(plugin, delta);
        }
        for (const p of this._zArray) {
            p.draw(delta);
        }
    }
    filter(condition) {
        return this._array.filter(condition);
    }
    find(condition) {
        return this._array.find(condition);
    }
    handleClickMode(mode) {
        this._interactionManager.handleClickMode(mode);
    }
    init() {
        const container = this._container, options = container.actualOptions;
        this.lastZIndex = 0;
        this.needsSort = false;
        let handled = false;
        this.updaters = this._engine.plugins.getUpdaters(container, true);
        this._interactionManager.init();
        for (const [, plugin] of container.plugins) {
            if (plugin.particlesInitialization !== undefined) {
                handled = plugin.particlesInitialization();
            }
            if (handled) {
                break;
            }
        }
        this._interactionManager.init();
        for (const [, pathGenerator] of container.pathGenerators) {
            pathGenerator.init(container);
        }
        this.addManualParticles();
        if (!handled) {
            for (const group in options.particles.groups) {
                const groupOptions = options.particles.groups[group];
                for (let i = this.count, j = 0; j < groupOptions.number?.value && i < options.particles.number.value; i++, j++) {
                    this.addParticle(undefined, groupOptions, group);
                }
            }
            for (let i = this.count; i < options.particles.number.value; i++) {
                this.addParticle();
            }
        }
    }
    push(nb, mouse, overrideOptions, group) {
        this.pushing = true;
        for (let i = 0; i < nb; i++) {
            this.addParticle(mouse?.position, overrideOptions, group);
        }
        this.pushing = false;
    }
    async redraw() {
        this.clear();
        this.init();
        await this.draw({ value: 0, factor: 0 });
    }
    remove(particle, group, override) {
        this.removeAt(this._array.indexOf(particle), undefined, group, override);
    }
    removeAt(index, quantity = 1, group, override) {
        if (index < 0 || index > this.count) {
            return;
        }
        let deleted = 0;
        for (let i = index; deleted < quantity && i < this.count; i++) {
            this._removeParticle(i--, group, override) && deleted++;
        }
    }
    removeQuantity(quantity, group) {
        this.removeAt(0, quantity, group);
    }
    setDensity() {
        const options = this._container.actualOptions, groups = options.particles.groups;
        for (const group in groups) {
            this._applyDensity(groups[group], 0, group);
        }
        this._applyDensity(options.particles, options.manualParticles.length);
    }
    async update(delta) {
        const container = this._container, particlesToDelete = new Set();
        this.quadTree = new QuadTree_1.QuadTree(qTreeRectangle(container.canvas.size), qTreeCapacity);
        for (const [, pathGenerator] of container.pathGenerators) {
            pathGenerator.update();
        }
        for (const [, plugin] of container.plugins) {
            plugin.update && plugin.update(delta);
        }
        for (const particle of this._array) {
            const resizeFactor = container.canvas.resizeFactor;
            if (resizeFactor && !particle.ignoresResizeRatio) {
                particle.position.x *= resizeFactor.width;
                particle.position.y *= resizeFactor.height;
                particle.initialPosition.x *= resizeFactor.width;
                particle.initialPosition.y *= resizeFactor.height;
            }
            particle.ignoresResizeRatio = false;
            await this._interactionManager.reset(particle);
            for (const [, plugin] of this._container.plugins) {
                if (particle.destroyed) {
                    break;
                }
                if (plugin.particleUpdate) {
                    plugin.particleUpdate(particle, delta);
                }
            }
            for (const mover of this.movers) {
                mover.isEnabled(particle) && mover.move(particle, delta);
            }
            if (particle.destroyed) {
                particlesToDelete.add(particle);
                continue;
            }
            this.quadTree.insert(new Point_1.Point(particle.getPosition(), particle));
        }
        if (particlesToDelete.size) {
            const checkDelete = (p) => !particlesToDelete.has(p);
            this._array = this.filter(checkDelete);
            this._zArray = this._zArray.filter(checkDelete);
            this.pool.push(...particlesToDelete);
        }
        await this._interactionManager.externalInteract(delta);
        for (const particle of this._array) {
            for (const updater of this.updaters) {
                updater.update(particle, delta);
            }
            if (!particle.destroyed && !particle.spawning) {
                await this._interactionManager.particlesInteract(particle, delta);
            }
        }
        delete container.canvas.resizeFactor;
        if (this.needsSort) {
            const zArray = this._zArray;
            zArray.sort((a, b) => b.position.z - a.position.z || a.id - b.id);
            this.lastZIndex = zArray[zArray.length - 1].position.z;
            this.needsSort = false;
        }
    }
}
exports.Particles = Particles;


/***/ }),

/***/ 69710:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Retina = void 0;
const NumberUtils_1 = __webpack_require__(296);
const Utils_1 = __webpack_require__(91694);
class Retina {
    constructor(container) {
        this.container = container;
        this.pixelRatio = 1;
        this.reduceFactor = 1;
    }
    init() {
        const container = this.container, options = container.actualOptions;
        this.pixelRatio = !options.detectRetina || (0, Utils_1.isSsr)() ? 1 : window.devicePixelRatio;
        this.reduceFactor = 1;
        const ratio = this.pixelRatio;
        if (container.canvas.element) {
            const element = container.canvas.element;
            container.canvas.size.width = element.offsetWidth * ratio;
            container.canvas.size.height = element.offsetHeight * ratio;
        }
        const particles = options.particles, moveOptions = particles.move;
        this.attractDistance = (0, NumberUtils_1.getRangeValue)(moveOptions.attract.distance) * ratio;
        this.maxSpeed = (0, NumberUtils_1.getRangeValue)(moveOptions.gravity.maxSpeed) * ratio;
        this.sizeAnimationSpeed = (0, NumberUtils_1.getRangeValue)(particles.size.animation.speed) * ratio;
    }
    initParticle(particle) {
        const options = particle.options, ratio = this.pixelRatio, moveOptions = options.move, moveDistance = moveOptions.distance, props = particle.retina;
        props.attractDistance = (0, NumberUtils_1.getRangeValue)(moveOptions.attract.distance) * ratio;
        props.moveDrift = (0, NumberUtils_1.getRangeValue)(moveOptions.drift) * ratio;
        props.moveSpeed = (0, NumberUtils_1.getRangeValue)(moveOptions.speed) * ratio;
        props.sizeAnimationSpeed = (0, NumberUtils_1.getRangeValue)(options.size.animation.speed) * ratio;
        const maxDistance = props.maxDistance;
        maxDistance.horizontal = moveDistance.horizontal !== undefined ? moveDistance.horizontal * ratio : undefined;
        maxDistance.vertical = moveDistance.vertical !== undefined ? moveDistance.vertical * ratio : undefined;
        props.maxSpeed = (0, NumberUtils_1.getRangeValue)(moveOptions.gravity.maxSpeed) * ratio;
    }
}
exports.Retina = Retina;


/***/ }),

/***/ 95241:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Circle = void 0;
const Range_1 = __webpack_require__(79287);
const Rectangle_1 = __webpack_require__(40018);
const NumberUtils_1 = __webpack_require__(296);
class Circle extends Range_1.Range {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    contains(point) {
        return (0, NumberUtils_1.getDistance)(point, this.position) <= this.radius;
    }
    intersects(range) {
        const pos1 = this.position, pos2 = range.position, distPos = { x: Math.abs(pos2.x - pos1.x), y: Math.abs(pos2.y - pos1.y) }, r = this.radius;
        if (range instanceof Circle) {
            const rSum = r + range.radius, dist = Math.sqrt(distPos.x ** 2 + distPos.y ** 2);
            return rSum > dist;
        }
        else if (range instanceof Rectangle_1.Rectangle) {
            const { width, height } = range.size, edges = Math.pow(distPos.x - width, 2) + Math.pow(distPos.y - height, 2);
            return (edges <= r ** 2 ||
                (distPos.x <= r + width && distPos.y <= r + height) ||
                distPos.x <= width ||
                distPos.y <= height);
        }
        return false;
    }
}
exports.Circle = Circle;


/***/ }),

/***/ 64011:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.errorPrefix = exports.visibilityChangeEvent = exports.resizeEvent = exports.touchCancelEvent = exports.touchMoveEvent = exports.touchEndEvent = exports.touchStartEvent = exports.mouseMoveEvent = exports.mouseOutEvent = exports.mouseLeaveEvent = exports.mouseUpEvent = exports.mouseDownEvent = exports.generatedAttribute = void 0;
exports.generatedAttribute = "generated";
exports.mouseDownEvent = "pointerdown";
exports.mouseUpEvent = "pointerup";
exports.mouseLeaveEvent = "pointerleave";
exports.mouseOutEvent = "pointerout";
exports.mouseMoveEvent = "pointermove";
exports.touchStartEvent = "touchstart";
exports.touchEndEvent = "touchend";
exports.touchMoveEvent = "touchmove";
exports.touchCancelEvent = "touchcancel";
exports.resizeEvent = "resize";
exports.visibilityChangeEvent = "visibilitychange";
exports.errorPrefix = "tsParticles - Error";


/***/ }),

/***/ 77129:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventListeners = void 0;
const Utils_1 = __webpack_require__(91694);
const Constants_1 = __webpack_require__(64011);
function manageListener(element, event, handler, add, options) {
    if (add) {
        let addOptions = { passive: true };
        if ((0, Utils_1.isBoolean)(options)) {
            addOptions.capture = options;
        }
        else if (options !== undefined) {
            addOptions = options;
        }
        element.addEventListener(event, handler, addOptions);
    }
    else {
        const removeOptions = options;
        element.removeEventListener(event, handler, removeOptions);
    }
}
class EventListeners {
    constructor(container) {
        this.container = container;
        this._doMouseTouchClick = (e) => {
            const container = this.container, options = container.actualOptions;
            if (this._canPush) {
                const mouseInteractivity = container.interactivity.mouse, mousePos = mouseInteractivity.position;
                if (!mousePos) {
                    return;
                }
                mouseInteractivity.clickPosition = { ...mousePos };
                mouseInteractivity.clickTime = new Date().getTime();
                const onClick = options.interactivity.events.onClick;
                (0, Utils_1.executeOnSingleOrMultiple)(onClick.mode, (mode) => this.container.handleClickMode(mode));
            }
            if (e.type === "touchend") {
                setTimeout(() => this._mouseTouchFinish(), 500);
            }
        };
        this._handleThemeChange = (e) => {
            const mediaEvent = e, container = this.container, options = container.options, defaultThemes = options.defaultThemes, themeName = mediaEvent.matches ? defaultThemes.dark : defaultThemes.light, theme = options.themes.find((theme) => theme.name === themeName);
            if (theme && theme.default.auto) {
                container.loadTheme(themeName);
            }
        };
        this._handleVisibilityChange = () => {
            const container = this.container, options = container.actualOptions;
            this._mouseTouchFinish();
            if (!options.pauseOnBlur) {
                return;
            }
            if (document && document.hidden) {
                container.pageHidden = true;
                container.pause();
            }
            else {
                container.pageHidden = false;
                if (container.getAnimationStatus()) {
                    container.play(true);
                }
                else {
                    container.draw(true);
                }
            }
        };
        this._handleWindowResize = async () => {
            if (this._resizeTimeout) {
                clearTimeout(this._resizeTimeout);
                delete this._resizeTimeout;
            }
            this._resizeTimeout = setTimeout(async () => {
                const canvas = this.container.canvas;
                canvas && (await canvas.windowResize());
            }, this.container.actualOptions.interactivity.events.resize.delay * 1000);
        };
        this._manageInteractivityListeners = (mouseLeaveTmpEvent, add) => {
            const handlers = this._handlers, container = this.container, options = container.actualOptions;
            const interactivityEl = container.interactivity.element;
            if (!interactivityEl) {
                return;
            }
            const html = interactivityEl, canvasEl = container.canvas.element;
            if (canvasEl) {
                canvasEl.style.pointerEvents = html === canvasEl ? "initial" : "none";
            }
            if (!(options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable)) {
                return;
            }
            manageListener(interactivityEl, Constants_1.mouseMoveEvent, handlers.mouseMove, add);
            manageListener(interactivityEl, Constants_1.touchStartEvent, handlers.touchStart, add);
            manageListener(interactivityEl, Constants_1.touchMoveEvent, handlers.touchMove, add);
            if (!options.interactivity.events.onClick.enable) {
                manageListener(interactivityEl, Constants_1.touchEndEvent, handlers.touchEnd, add);
            }
            else {
                manageListener(interactivityEl, Constants_1.touchEndEvent, handlers.touchEndClick, add);
                manageListener(interactivityEl, Constants_1.mouseUpEvent, handlers.mouseUp, add);
                manageListener(interactivityEl, Constants_1.mouseDownEvent, handlers.mouseDown, add);
            }
            manageListener(interactivityEl, mouseLeaveTmpEvent, handlers.mouseLeave, add);
            manageListener(interactivityEl, Constants_1.touchCancelEvent, handlers.touchCancel, add);
        };
        this._manageListeners = (add) => {
            const handlers = this._handlers, container = this.container, options = container.actualOptions, detectType = options.interactivity.detectsOn, canvasEl = container.canvas.element;
            let mouseLeaveTmpEvent = Constants_1.mouseLeaveEvent;
            if (detectType === "window") {
                container.interactivity.element = window;
                mouseLeaveTmpEvent = Constants_1.mouseOutEvent;
            }
            else if (detectType === "parent" && canvasEl) {
                container.interactivity.element = canvasEl.parentElement ?? canvasEl.parentNode;
            }
            else {
                container.interactivity.element = canvasEl;
            }
            this._manageMediaMatch(add);
            this._manageResize(add);
            this._manageInteractivityListeners(mouseLeaveTmpEvent, add);
            if (document) {
                manageListener(document, Constants_1.visibilityChangeEvent, handlers.visibilityChange, add, false);
            }
        };
        this._manageMediaMatch = (add) => {
            const handlers = this._handlers, mediaMatch = (0, Utils_1.safeMatchMedia)("(prefers-color-scheme: dark)");
            if (!mediaMatch) {
                return;
            }
            if (mediaMatch.addEventListener !== undefined) {
                manageListener(mediaMatch, "change", handlers.themeChange, add);
                return;
            }
            if (mediaMatch.addListener === undefined) {
                return;
            }
            if (add) {
                mediaMatch.addListener(handlers.oldThemeChange);
            }
            else {
                mediaMatch.removeListener(handlers.oldThemeChange);
            }
        };
        this._manageResize = (add) => {
            const handlers = this._handlers, container = this.container, options = container.actualOptions;
            if (!options.interactivity.events.resize) {
                return;
            }
            if (typeof ResizeObserver === "undefined") {
                manageListener(window, Constants_1.resizeEvent, handlers.resize, add);
                return;
            }
            const canvasEl = container.canvas.element;
            if (this._resizeObserver && !add) {
                if (canvasEl) {
                    this._resizeObserver.unobserve(canvasEl);
                }
                this._resizeObserver.disconnect();
                delete this._resizeObserver;
            }
            else if (!this._resizeObserver && add && canvasEl) {
                this._resizeObserver = new ResizeObserver(async (entries) => {
                    const entry = entries.find((e) => e.target === canvasEl);
                    if (!entry) {
                        return;
                    }
                    await this._handleWindowResize();
                });
                this._resizeObserver.observe(canvasEl);
            }
        };
        this._mouseDown = () => {
            const { interactivity } = this.container;
            if (!interactivity) {
                return;
            }
            const { mouse } = interactivity;
            mouse.clicking = true;
            mouse.downPosition = mouse.position;
        };
        this._mouseTouchClick = (e) => {
            const container = this.container, options = container.actualOptions, { mouse } = container.interactivity;
            mouse.inside = true;
            let handled = false;
            const mousePosition = mouse.position;
            if (!mousePosition || !options.interactivity.events.onClick.enable) {
                return;
            }
            for (const [, plugin] of container.plugins) {
                if (!plugin.clickPositionValid) {
                    continue;
                }
                handled = plugin.clickPositionValid(mousePosition);
                if (handled) {
                    break;
                }
            }
            if (!handled) {
                this._doMouseTouchClick(e);
            }
            mouse.clicking = false;
        };
        this._mouseTouchFinish = () => {
            const interactivity = this.container.interactivity;
            if (!interactivity) {
                return;
            }
            const mouse = interactivity.mouse;
            delete mouse.position;
            delete mouse.clickPosition;
            delete mouse.downPosition;
            interactivity.status = Constants_1.mouseLeaveEvent;
            mouse.inside = false;
            mouse.clicking = false;
        };
        this._mouseTouchMove = (e) => {
            const container = this.container, options = container.actualOptions, interactivity = container.interactivity, canvasEl = container.canvas.element;
            if (!interactivity || !interactivity.element) {
                return;
            }
            interactivity.mouse.inside = true;
            let pos;
            if (e.type.startsWith("pointer")) {
                this._canPush = true;
                const mouseEvent = e;
                if (interactivity.element === window) {
                    if (canvasEl) {
                        const clientRect = canvasEl.getBoundingClientRect();
                        pos = {
                            x: mouseEvent.clientX - clientRect.left,
                            y: mouseEvent.clientY - clientRect.top,
                        };
                    }
                }
                else if (options.interactivity.detectsOn === "parent") {
                    const source = mouseEvent.target, target = mouseEvent.currentTarget;
                    if (source && target && canvasEl) {
                        const sourceRect = source.getBoundingClientRect(), targetRect = target.getBoundingClientRect(), canvasRect = canvasEl.getBoundingClientRect();
                        pos = {
                            x: mouseEvent.offsetX + 2 * sourceRect.left - (targetRect.left + canvasRect.left),
                            y: mouseEvent.offsetY + 2 * sourceRect.top - (targetRect.top + canvasRect.top),
                        };
                    }
                    else {
                        pos = {
                            x: mouseEvent.offsetX ?? mouseEvent.clientX,
                            y: mouseEvent.offsetY ?? mouseEvent.clientY,
                        };
                    }
                }
                else if (mouseEvent.target === canvasEl) {
                    pos = {
                        x: mouseEvent.offsetX ?? mouseEvent.clientX,
                        y: mouseEvent.offsetY ?? mouseEvent.clientY,
                    };
                }
            }
            else {
                this._canPush = e.type !== "touchmove";
                if (canvasEl) {
                    const touchEvent = e, lastTouch = touchEvent.touches[touchEvent.touches.length - 1], canvasRect = canvasEl.getBoundingClientRect();
                    pos = {
                        x: lastTouch.clientX - (canvasRect.left ?? 0),
                        y: lastTouch.clientY - (canvasRect.top ?? 0),
                    };
                }
            }
            const pxRatio = container.retina.pixelRatio;
            if (pos) {
                pos.x *= pxRatio;
                pos.y *= pxRatio;
            }
            interactivity.mouse.position = pos;
            interactivity.status = Constants_1.mouseMoveEvent;
        };
        this._touchEnd = (e) => {
            const evt = e, touches = Array.from(evt.changedTouches);
            for (const touch of touches) {
                this._touches.delete(touch.identifier);
            }
            this._mouseTouchFinish();
        };
        this._touchEndClick = (e) => {
            const evt = e, touches = Array.from(evt.changedTouches);
            for (const touch of touches) {
                this._touches.delete(touch.identifier);
            }
            this._mouseTouchClick(e);
        };
        this._touchStart = (e) => {
            const evt = e, touches = Array.from(evt.changedTouches);
            for (const touch of touches) {
                this._touches.set(touch.identifier, performance.now());
            }
            this._mouseTouchMove(e);
        };
        this._canPush = true;
        this._touches = new Map();
        this._handlers = {
            mouseDown: () => this._mouseDown(),
            mouseLeave: () => this._mouseTouchFinish(),
            mouseMove: (e) => this._mouseTouchMove(e),
            mouseUp: (e) => this._mouseTouchClick(e),
            touchStart: (e) => this._touchStart(e),
            touchMove: (e) => this._mouseTouchMove(e),
            touchEnd: (e) => this._touchEnd(e),
            touchCancel: (e) => this._touchEnd(e),
            touchEndClick: (e) => this._touchEndClick(e),
            visibilityChange: () => this._handleVisibilityChange(),
            themeChange: (e) => this._handleThemeChange(e),
            oldThemeChange: (e) => this._handleThemeChange(e),
            resize: () => {
                this._handleWindowResize();
            },
        };
    }
    addListeners() {
        this._manageListeners(true);
    }
    removeListeners() {
        this._manageListeners(false);
    }
}
exports.EventListeners = EventListeners;


/***/ }),

/***/ 86880:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExternalInteractorBase = void 0;
class ExternalInteractorBase {
    constructor(container) {
        this.container = container;
        this.type = "external";
    }
}
exports.ExternalInteractorBase = ExternalInteractorBase;


/***/ }),

/***/ 21412:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InteractionManager = void 0;
class InteractionManager {
    constructor(engine, container) {
        this.container = container;
        this._engine = engine;
        this._interactors = engine.plugins.getInteractors(this.container, true);
        this._externalInteractors = [];
        this._particleInteractors = [];
    }
    async externalInteract(delta) {
        for (const interactor of this._externalInteractors) {
            interactor.isEnabled() && (await interactor.interact(delta));
        }
    }
    handleClickMode(mode) {
        for (const interactor of this._externalInteractors) {
            interactor.handleClickMode && interactor.handleClickMode(mode);
        }
    }
    init() {
        this._externalInteractors = [];
        this._particleInteractors = [];
        for (const interactor of this._interactors) {
            switch (interactor.type) {
                case "external":
                    this._externalInteractors.push(interactor);
                    break;
                case "particles":
                    this._particleInteractors.push(interactor);
                    break;
            }
            interactor.init();
        }
    }
    async particlesInteract(particle, delta) {
        for (const interactor of this._externalInteractors) {
            interactor.clear(particle, delta);
        }
        for (const interactor of this._particleInteractors) {
            interactor.isEnabled(particle) && (await interactor.interact(particle, delta));
        }
    }
    async reset(particle) {
        for (const interactor of this._externalInteractors) {
            interactor.isEnabled() && interactor.reset(particle);
        }
        for (const interactor of this._particleInteractors) {
            interactor.isEnabled(particle) && interactor.reset(particle);
        }
    }
}
exports.InteractionManager = InteractionManager;


/***/ }),

/***/ 22430:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParticlesInteractorBase = void 0;
class ParticlesInteractorBase {
    constructor(container) {
        this.container = container;
        this.type = "particles";
    }
}
exports.ParticlesInteractorBase = ParticlesInteractorBase;


/***/ }),

/***/ 81906:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Plugins = void 0;
const Utils_1 = __webpack_require__(91694);
function getItemsFromInitializer(container, map, initializers, force = false) {
    let res = map.get(container);
    if (!res || force) {
        res = [...initializers.values()].map((t) => t(container));
        map.set(container, res);
    }
    return res;
}
class Plugins {
    constructor(engine) {
        this._engine = engine;
        this.plugins = [];
        this._initializers = {
            interactors: new Map(),
            movers: new Map(),
            updaters: new Map(),
        };
        this.interactors = new Map();
        this.movers = new Map();
        this.updaters = new Map();
        this.presets = new Map();
        this.drawers = new Map();
        this.pathGenerators = new Map();
    }
    addInteractor(name, initInteractor) {
        this._initializers.interactors.set(name, initInteractor);
    }
    addParticleMover(name, initMover) {
        this._initializers.movers.set(name, initMover);
    }
    addParticleUpdater(name, initUpdater) {
        this._initializers.updaters.set(name, initUpdater);
    }
    addPathGenerator(type, pathGenerator) {
        !this.getPathGenerator(type) && this.pathGenerators.set(type, pathGenerator);
    }
    addPlugin(plugin) {
        !this.getPlugin(plugin.id) && this.plugins.push(plugin);
    }
    addPreset(presetKey, options, override = false) {
        (override || !this.getPreset(presetKey)) && this.presets.set(presetKey, options);
    }
    addShapeDrawer(types, drawer) {
        (0, Utils_1.executeOnSingleOrMultiple)(types, (type) => {
            !this.getShapeDrawer(type) && this.drawers.set(type, drawer);
        });
    }
    destroy(container) {
        this.updaters.delete(container);
        this.movers.delete(container);
        this.interactors.delete(container);
    }
    getAvailablePlugins(container) {
        const res = new Map();
        for (const plugin of this.plugins) {
            plugin.needsPlugin(container.actualOptions) && res.set(plugin.id, plugin.getPlugin(container));
        }
        return res;
    }
    getInteractors(container, force = false) {
        return getItemsFromInitializer(container, this.interactors, this._initializers.interactors, force);
    }
    getMovers(container, force = false) {
        return getItemsFromInitializer(container, this.movers, this._initializers.movers, force);
    }
    getPathGenerator(type) {
        return this.pathGenerators.get(type);
    }
    getPlugin(plugin) {
        return this.plugins.find((t) => t.id === plugin);
    }
    getPreset(preset) {
        return this.presets.get(preset);
    }
    getShapeDrawer(type) {
        return this.drawers.get(type);
    }
    getSupportedShapes() {
        return this.drawers.keys();
    }
    getUpdaters(container, force = false) {
        return getItemsFromInitializer(container, this.updaters, this._initializers.updaters, force);
    }
    loadOptions(options, sourceOptions) {
        for (const plugin of this.plugins) {
            plugin.loadOptions(options, sourceOptions);
        }
    }
    loadParticlesOptions(container, options, ...sourceOptions) {
        const updaters = this.updaters.get(container);
        if (!updaters) {
            return;
        }
        for (const updater of updaters) {
            updater.loadOptions && updater.loadOptions(options, ...sourceOptions);
        }
    }
}
exports.Plugins = Plugins;


/***/ }),

/***/ 93894:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Point = void 0;
class Point {
    constructor(position, particle) {
        this.position = position;
        this.particle = particle;
    }
}
exports.Point = Point;


/***/ }),

/***/ 78550:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuadTree = void 0;
const Circle_1 = __webpack_require__(95241);
const Rectangle_1 = __webpack_require__(40018);
const NumberUtils_1 = __webpack_require__(296);
class QuadTree {
    constructor(rectangle, capacity) {
        this.rectangle = rectangle;
        this.capacity = capacity;
        this._subdivide = () => {
            const { x, y } = this.rectangle.position, { width, height } = this.rectangle.size, { capacity } = this;
            for (let i = 0; i < 4; i++) {
                this._subs.push(new QuadTree(new Rectangle_1.Rectangle(x + (width / 2) * (i % 2), y + (height / 2) * (Math.round(i / 2) - (i % 2)), width / 2, height / 2), capacity));
            }
            this._divided = true;
        };
        this._points = [];
        this._divided = false;
        this._subs = [];
    }
    insert(point) {
        if (!this.rectangle.contains(point.position)) {
            return false;
        }
        if (this._points.length < this.capacity) {
            this._points.push(point);
            return true;
        }
        if (!this._divided) {
            this._subdivide();
        }
        return this._subs.some((sub) => sub.insert(point));
    }
    query(range, check, found) {
        const res = found || [];
        if (!range.intersects(this.rectangle)) {
            return [];
        }
        for (const p of this._points) {
            if (!range.contains(p.position) &&
                (0, NumberUtils_1.getDistance)(range.position, p.position) > p.particle.getRadius() &&
                (!check || check(p.particle))) {
                continue;
            }
            res.push(p.particle);
        }
        if (this._divided) {
            for (const sub of this._subs) {
                sub.query(range, check, res);
            }
        }
        return res;
    }
    queryCircle(position, radius, check) {
        return this.query(new Circle_1.Circle(position.x, position.y, radius), check);
    }
    queryRectangle(position, size, check) {
        return this.query(new Rectangle_1.Rectangle(position.x, position.y, size.width, size.height), check);
    }
}
exports.QuadTree = QuadTree;


/***/ }),

/***/ 79287:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Range = void 0;
class Range {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y,
        };
    }
}
exports.Range = Range;


/***/ }),

/***/ 40018:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rectangle = void 0;
const Circle_1 = __webpack_require__(95241);
const Range_1 = __webpack_require__(79287);
class Rectangle extends Range_1.Range {
    constructor(x, y, width, height) {
        super(x, y);
        this.size = {
            height: height,
            width: width,
        };
    }
    contains(point) {
        const w = this.size.width, h = this.size.height, pos = this.position;
        return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
    }
    intersects(range) {
        if (range instanceof Circle_1.Circle) {
            range.intersects(this);
        }
        const w = this.size.width, h = this.size.height, pos1 = this.position, pos2 = range.position, size2 = range instanceof Rectangle ? range.size : { width: 0, height: 0 }, w2 = size2.width, h2 = size2.height;
        return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
    }
}
exports.Rectangle = Rectangle;


/***/ }),

/***/ 84967:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector = void 0;
const Vector3d_1 = __webpack_require__(36685);
class Vector extends Vector3d_1.Vector3d {
    constructor(xOrCoords, y) {
        super(xOrCoords, y, 0);
    }
    static get origin() {
        return Vector.create(0, 0);
    }
    static clone(source) {
        return Vector.create(source.x, source.y);
    }
    static create(x, y) {
        return new Vector(x, y);
    }
}
exports.Vector = Vector;


/***/ }),

/***/ 36685:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector3d = void 0;
const Constants_1 = __webpack_require__(64011);
const Utils_1 = __webpack_require__(91694);
class Vector3d {
    constructor(xOrCoords, y, z) {
        this._updateFromAngle = (angle, length) => {
            this.x = Math.cos(angle) * length;
            this.y = Math.sin(angle) * length;
        };
        if (!(0, Utils_1.isNumber)(xOrCoords) && xOrCoords) {
            this.x = xOrCoords.x;
            this.y = xOrCoords.y;
            const coords3d = xOrCoords;
            this.z = coords3d.z ? coords3d.z : 0;
        }
        else if (xOrCoords !== undefined && y !== undefined) {
            this.x = xOrCoords;
            this.y = y;
            this.z = z ?? 0;
        }
        else {
            throw new Error(`${Constants_1.errorPrefix} Vector3d not initialized correctly`);
        }
    }
    static get origin() {
        return Vector3d.create(0, 0, 0);
    }
    get angle() {
        return Math.atan2(this.y, this.x);
    }
    set angle(angle) {
        this._updateFromAngle(angle, this.length);
    }
    get length() {
        return Math.sqrt(this.getLengthSq());
    }
    set length(length) {
        this._updateFromAngle(this.angle, length);
    }
    static clone(source) {
        return Vector3d.create(source.x, source.y, source.z);
    }
    static create(x, y, z) {
        return new Vector3d(x, y, z);
    }
    add(v) {
        return Vector3d.create(this.x + v.x, this.y + v.y, this.z + v.z);
    }
    addTo(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }
    copy() {
        return Vector3d.clone(this);
    }
    distanceTo(v) {
        return this.sub(v).length;
    }
    distanceToSq(v) {
        return this.sub(v).getLengthSq();
    }
    div(n) {
        return Vector3d.create(this.x / n, this.y / n, this.z / n);
    }
    divTo(n) {
        this.x /= n;
        this.y /= n;
        this.z /= n;
    }
    getLengthSq() {
        return this.x ** 2 + this.y ** 2;
    }
    mult(n) {
        return Vector3d.create(this.x * n, this.y * n, this.z * n);
    }
    multTo(n) {
        this.x *= n;
        this.y *= n;
        this.z *= n;
    }
    normalize() {
        const length = this.length;
        if (length != 0) {
            this.multTo(1.0 / length);
        }
    }
    rotate(angle) {
        return Vector3d.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle), 0);
    }
    setTo(c) {
        this.x = c.x;
        this.y = c.y;
        const v3d = c;
        this.z = v3d.z ? v3d.z : 0;
    }
    sub(v) {
        return Vector3d.create(this.x - v.x, this.y - v.y, this.z - v.z);
    }
    subFrom(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
    }
}
exports.Vector3d = Vector3d;


/***/ }),

/***/ 4960:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 17686:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 75494:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 84780:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 90078:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 40626:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 80380:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 73770:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 58590:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 43772:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 28166:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 79084:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 54113:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 51852:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 28069:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 20035:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 83078:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 79411:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 26782:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 66656:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 28266:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 14648:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 97732:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 18232:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimatableColor = void 0;
const Utils_1 = __webpack_require__(91694);
const HslAnimation_1 = __webpack_require__(28896);
const OptionsColor_1 = __webpack_require__(87517);
class AnimatableColor extends OptionsColor_1.OptionsColor {
    constructor() {
        super();
        this.animation = new HslAnimation_1.HslAnimation();
    }
    static create(source, data) {
        const color = new AnimatableColor();
        color.load(source);
        if (data !== undefined) {
            if ((0, Utils_1.isString)(data) || (0, Utils_1.isArray)(data)) {
                color.load({ value: data });
            }
            else {
                color.load(data);
            }
        }
        return color;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        const colorAnimation = data.animation;
        if (colorAnimation !== undefined) {
            if (colorAnimation.enable !== undefined) {
                this.animation.h.load(colorAnimation);
            }
            else {
                this.animation.load(data.animation);
            }
        }
    }
}
exports.AnimatableColor = AnimatableColor;


/***/ }),

/***/ 2933:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RangedAnimationOptions = exports.AnimationOptions = void 0;
const NumberUtils_1 = __webpack_require__(296);
class AnimationOptions {
    constructor() {
        this.count = 0;
        this.enable = false;
        this.speed = 1;
        this.decay = 0;
        this.delay = 0;
        this.sync = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.count !== undefined) {
            this.count = (0, NumberUtils_1.setRangeValue)(data.count);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.speed !== undefined) {
            this.speed = (0, NumberUtils_1.setRangeValue)(data.speed);
        }
        if (data.decay !== undefined) {
            this.decay = (0, NumberUtils_1.setRangeValue)(data.decay);
        }
        if (data.delay !== undefined) {
            this.delay = (0, NumberUtils_1.setRangeValue)(data.delay);
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
exports.AnimationOptions = AnimationOptions;
class RangedAnimationOptions extends AnimationOptions {
    constructor() {
        super();
        this.mode = "auto";
        this.startValue = "random";
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        if (data.minimumValue !== undefined) {
            this.minimumValue = data.minimumValue;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.startValue !== undefined) {
            this.startValue = data.startValue;
        }
    }
}
exports.RangedAnimationOptions = RangedAnimationOptions;


/***/ }),

/***/ 27248:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackgroundMask = void 0;
const BackgroundMaskCover_1 = __webpack_require__(87322);
const Utils_1 = __webpack_require__(91694);
class BackgroundMask {
    constructor() {
        this.composite = "destination-out";
        this.cover = new BackgroundMaskCover_1.BackgroundMaskCover();
        this.enable = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.composite !== undefined) {
            this.composite = data.composite;
        }
        if (data.cover !== undefined) {
            const cover = data.cover;
            const color = ((0, Utils_1.isString)(data.cover) ? { color: data.cover } : data.cover);
            this.cover.load(cover.color !== undefined ? cover : { color: color });
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}
exports.BackgroundMask = BackgroundMask;


/***/ }),

/***/ 87322:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackgroundMaskCover = void 0;
const OptionsColor_1 = __webpack_require__(87517);
class BackgroundMaskCover {
    constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#fff";
        this.opacity = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
exports.BackgroundMaskCover = BackgroundMaskCover;


/***/ }),

/***/ 92662:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Background = void 0;
const OptionsColor_1 = __webpack_require__(87517);
class Background {
    constructor() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "";
        this.image = "";
        this.position = "";
        this.repeat = "";
        this.size = "";
        this.opacity = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.image !== undefined) {
            this.image = data.image;
        }
        if (data.position !== undefined) {
            this.position = data.position;
        }
        if (data.repeat !== undefined) {
            this.repeat = data.repeat;
        }
        if (data.size !== undefined) {
            this.size = data.size;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
exports.Background = Background;


/***/ }),

/***/ 2865:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColorAnimation = void 0;
const NumberUtils_1 = __webpack_require__(296);
class ColorAnimation {
    constructor() {
        this.count = 0;
        this.enable = false;
        this.offset = 0;
        this.speed = 1;
        this.delay = 0;
        this.decay = 0;
        this.sync = true;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.count !== undefined) {
            this.count = (0, NumberUtils_1.setRangeValue)(data.count);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.offset !== undefined) {
            this.offset = (0, NumberUtils_1.setRangeValue)(data.offset);
        }
        if (data.speed !== undefined) {
            this.speed = (0, NumberUtils_1.setRangeValue)(data.speed);
        }
        if (data.decay !== undefined) {
            this.decay = (0, NumberUtils_1.setRangeValue)(data.decay);
        }
        if (data.delay !== undefined) {
            this.delay = (0, NumberUtils_1.setRangeValue)(data.delay);
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
exports.ColorAnimation = ColorAnimation;


/***/ }),

/***/ 72576:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FullScreen = void 0;
class FullScreen {
    constructor() {
        this.enable = true;
        this.zIndex = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.zIndex !== undefined) {
            this.zIndex = data.zIndex;
        }
    }
}
exports.FullScreen = FullScreen;


/***/ }),

/***/ 28896:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HslAnimation = void 0;
const ColorAnimation_1 = __webpack_require__(2865);
class HslAnimation {
    constructor() {
        this.h = new ColorAnimation_1.ColorAnimation();
        this.s = new ColorAnimation_1.ColorAnimation();
        this.l = new ColorAnimation_1.ColorAnimation();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.h.load(data.h);
        this.s.load(data.s);
        this.l.load(data.l);
    }
}
exports.HslAnimation = HslAnimation;


/***/ }),

/***/ 94310:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClickEvent = void 0;
class ClickEvent {
    constructor() {
        this.enable = false;
        this.mode = [];
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
    }
}
exports.ClickEvent = ClickEvent;


/***/ }),

/***/ 20541:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DivEvent = void 0;
const Utils_1 = __webpack_require__(91694);
class DivEvent {
    constructor() {
        this.selectors = [];
        this.enable = false;
        this.mode = [];
        this.type = "circle";
    }
    get el() {
        return this.elementId;
    }
    set el(value) {
        this.elementId = value;
    }
    get elementId() {
        return this.ids;
    }
    set elementId(value) {
        this.ids = value;
    }
    get ids() {
        return (0, Utils_1.executeOnSingleOrMultiple)(this.selectors, (t) => t.replace("#", ""));
    }
    set ids(value) {
        this.selectors = (0, Utils_1.executeOnSingleOrMultiple)(value, (t) => `#${t}`);
    }
    load(data) {
        if (!data) {
            return;
        }
        const ids = data.ids ?? data.elementId ?? data.el;
        if (ids !== undefined) {
            this.ids = ids;
        }
        if (data.selectors !== undefined) {
            this.selectors = data.selectors;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.type !== undefined) {
            this.type = data.type;
        }
    }
}
exports.DivEvent = DivEvent;


/***/ }),

/***/ 95802:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Events = void 0;
const Utils_1 = __webpack_require__(91694);
const ClickEvent_1 = __webpack_require__(94310);
const DivEvent_1 = __webpack_require__(20541);
const HoverEvent_1 = __webpack_require__(51174);
const ResizeEvent_1 = __webpack_require__(24295);
class Events {
    constructor() {
        this.onClick = new ClickEvent_1.ClickEvent();
        this.onDiv = new DivEvent_1.DivEvent();
        this.onHover = new HoverEvent_1.HoverEvent();
        this.resize = new ResizeEvent_1.ResizeEvent();
    }
    get onclick() {
        return this.onClick;
    }
    set onclick(value) {
        this.onClick = value;
    }
    get ondiv() {
        return this.onDiv;
    }
    set ondiv(value) {
        this.onDiv = value;
    }
    get onhover() {
        return this.onHover;
    }
    set onhover(value) {
        this.onHover = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        this.onClick.load(data.onClick ?? data.onclick);
        const onDiv = data.onDiv ?? data.ondiv;
        if (onDiv !== undefined) {
            this.onDiv = (0, Utils_1.executeOnSingleOrMultiple)(onDiv, (t) => {
                const tmp = new DivEvent_1.DivEvent();
                tmp.load(t);
                return tmp;
            });
        }
        this.onHover.load(data.onHover ?? data.onhover);
        if ((0, Utils_1.isBoolean)(data.resize)) {
            this.resize.enable = data.resize;
        }
        else {
            this.resize.load(data.resize);
        }
    }
}
exports.Events = Events;


/***/ }),

/***/ 51174:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HoverEvent = void 0;
const Parallax_1 = __webpack_require__(38917);
class HoverEvent {
    constructor() {
        this.enable = false;
        this.mode = [];
        this.parallax = new Parallax_1.Parallax();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        this.parallax.load(data.parallax);
    }
}
exports.HoverEvent = HoverEvent;


/***/ }),

/***/ 38917:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Parallax = void 0;
class Parallax {
    constructor() {
        this.enable = false;
        this.force = 2;
        this.smooth = 10;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.force !== undefined) {
            this.force = data.force;
        }
        if (data.smooth !== undefined) {
            this.smooth = data.smooth;
        }
    }
}
exports.Parallax = Parallax;


/***/ }),

/***/ 24295:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResizeEvent = void 0;
class ResizeEvent {
    constructor() {
        this.delay = 0.5;
        this.enable = true;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.delay !== undefined) {
            this.delay = data.delay;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}
exports.ResizeEvent = ResizeEvent;


/***/ }),

/***/ 91097:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Interactivity = void 0;
const Events_1 = __webpack_require__(95802);
const Modes_1 = __webpack_require__(71616);
class Interactivity {
    constructor(engine, container) {
        this.detectsOn = "window";
        this.events = new Events_1.Events();
        this.modes = new Modes_1.Modes(engine, container);
    }
    get detect_on() {
        return this.detectsOn;
    }
    set detect_on(value) {
        this.detectsOn = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        const detectsOn = data.detectsOn ?? data.detect_on;
        if (detectsOn !== undefined) {
            this.detectsOn = detectsOn;
        }
        this.events.load(data.events);
        this.modes.load(data.modes);
    }
}
exports.Interactivity = Interactivity;


/***/ }),

/***/ 71616:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Modes = void 0;
class Modes {
    constructor(engine, container) {
        this._engine = engine;
        this._container = container;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (!this._container) {
            return;
        }
        const interactors = this._engine.plugins.interactors.get(this._container);
        if (!interactors) {
            return;
        }
        for (const interactor of interactors) {
            if (!interactor.loadModeOptions) {
                continue;
            }
            interactor.loadModeOptions(this, data);
        }
    }
}
exports.Modes = Modes;


/***/ }),

/***/ 9910:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ManualParticle = void 0;
const Utils_1 = __webpack_require__(91694);
class ManualParticle {
    load(data) {
        if (!data) {
            return;
        }
        if (data.position) {
            this.position = {
                x: data.position.x ?? 50,
                y: data.position.y ?? 50,
                mode: data.position.mode ?? "percent",
            };
        }
        if (data.options) {
            this.options = (0, Utils_1.deepExtend)({}, data.options);
        }
    }
}
exports.ManualParticle = ManualParticle;


/***/ }),

/***/ 86720:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Options = void 0;
const Utils_1 = __webpack_require__(91694);
const Background_1 = __webpack_require__(92662);
const BackgroundMask_1 = __webpack_require__(27248);
const FullScreen_1 = __webpack_require__(72576);
const Interactivity_1 = __webpack_require__(91097);
const ManualParticle_1 = __webpack_require__(9910);
const Responsive_1 = __webpack_require__(20372);
const Theme_1 = __webpack_require__(14957);
const OptionsUtils_1 = __webpack_require__(43376);
const NumberUtils_1 = __webpack_require__(296);
class Options {
    constructor(engine, container) {
        this._findDefaultTheme = (mode) => {
            return (this.themes.find((theme) => theme.default.value && theme.default.mode === mode) ??
                this.themes.find((theme) => theme.default.value && theme.default.mode === "any"));
        };
        this._importPreset = (preset) => {
            this.load(this._engine.plugins.getPreset(preset));
        };
        this._engine = engine;
        this._container = container;
        this.autoPlay = true;
        this.background = new Background_1.Background();
        this.backgroundMask = new BackgroundMask_1.BackgroundMask();
        this.defaultThemes = {};
        this.delay = 0;
        this.fullScreen = new FullScreen_1.FullScreen();
        this.detectRetina = true;
        this.duration = 0;
        this.fpsLimit = 120;
        this.interactivity = new Interactivity_1.Interactivity(engine, container);
        this.manualParticles = [];
        this.particles = (0, OptionsUtils_1.loadParticlesOptions)(this._engine, this._container);
        this.pauseOnBlur = true;
        this.pauseOnOutsideViewport = true;
        this.responsive = [];
        this.smooth = false;
        this.style = {};
        this.themes = [];
        this.zLayers = 100;
    }
    get backgroundMode() {
        return this.fullScreen;
    }
    set backgroundMode(value) {
        this.fullScreen.load(value);
    }
    get fps_limit() {
        return this.fpsLimit;
    }
    set fps_limit(value) {
        this.fpsLimit = value;
    }
    get retina_detect() {
        return this.detectRetina;
    }
    set retina_detect(value) {
        this.detectRetina = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.preset !== undefined) {
            (0, Utils_1.executeOnSingleOrMultiple)(data.preset, (preset) => this._importPreset(preset));
        }
        if (data.autoPlay !== undefined) {
            this.autoPlay = data.autoPlay;
        }
        if (data.delay !== undefined) {
            this.delay = (0, NumberUtils_1.setRangeValue)(data.delay);
        }
        const detectRetina = data.detectRetina ?? data.retina_detect;
        if (detectRetina !== undefined) {
            this.detectRetina = detectRetina;
        }
        if (data.duration !== undefined) {
            this.duration = (0, NumberUtils_1.setRangeValue)(data.duration);
        }
        const fpsLimit = data.fpsLimit ?? data.fps_limit;
        if (fpsLimit !== undefined) {
            this.fpsLimit = fpsLimit;
        }
        if (data.pauseOnBlur !== undefined) {
            this.pauseOnBlur = data.pauseOnBlur;
        }
        if (data.pauseOnOutsideViewport !== undefined) {
            this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
        }
        if (data.zLayers !== undefined) {
            this.zLayers = data.zLayers;
        }
        this.background.load(data.background);
        const fullScreen = data.fullScreen ?? data.backgroundMode;
        if ((0, Utils_1.isBoolean)(fullScreen)) {
            this.fullScreen.enable = fullScreen;
        }
        else {
            this.fullScreen.load(fullScreen);
        }
        this.backgroundMask.load(data.backgroundMask);
        this.interactivity.load(data.interactivity);
        if (data.manualParticles) {
            this.manualParticles = data.manualParticles.map((t) => {
                const tmp = new ManualParticle_1.ManualParticle();
                tmp.load(t);
                return tmp;
            });
        }
        this.particles.load(data.particles);
        this.style = (0, Utils_1.deepExtend)(this.style, data.style);
        this._engine.plugins.loadOptions(this, data);
        if (data.smooth !== undefined) {
            this.smooth = data.smooth;
        }
        const interactors = this._engine.plugins.interactors.get(this._container);
        if (interactors) {
            for (const interactor of interactors) {
                if (interactor.loadOptions) {
                    interactor.loadOptions(this, data);
                }
            }
        }
        if (data.responsive !== undefined) {
            for (const responsive of data.responsive) {
                const optResponsive = new Responsive_1.Responsive();
                optResponsive.load(responsive);
                this.responsive.push(optResponsive);
            }
        }
        this.responsive.sort((a, b) => a.maxWidth - b.maxWidth);
        if (data.themes !== undefined) {
            for (const theme of data.themes) {
                const existingTheme = this.themes.find((t) => t.name === theme.name);
                if (!existingTheme) {
                    const optTheme = new Theme_1.Theme();
                    optTheme.load(theme);
                    this.themes.push(optTheme);
                }
                else {
                    existingTheme.load(theme);
                }
            }
        }
        this.defaultThemes.dark = this._findDefaultTheme("dark")?.name;
        this.defaultThemes.light = this._findDefaultTheme("light")?.name;
    }
    setResponsive(width, pxRatio, defaultOptions) {
        this.load(defaultOptions);
        const responsiveOptions = this.responsive.find((t) => t.mode === "screen" && screen ? t.maxWidth > screen.availWidth : t.maxWidth * pxRatio > width);
        this.load(responsiveOptions?.options);
        return responsiveOptions?.maxWidth;
    }
    setTheme(name) {
        if (name) {
            const chosenTheme = this.themes.find((theme) => theme.name === name);
            if (chosenTheme) {
                this.load(chosenTheme.options);
            }
        }
        else {
            const mediaMatch = (0, Utils_1.safeMatchMedia)("(prefers-color-scheme: dark)"), clientDarkMode = mediaMatch && mediaMatch.matches, defaultTheme = this._findDefaultTheme(clientDarkMode ? "dark" : "light");
            if (defaultTheme) {
                this.load(defaultTheme.options);
            }
        }
    }
}
exports.Options = Options;


/***/ }),

/***/ 87517:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OptionsColor = void 0;
const Utils_1 = __webpack_require__(91694);
class OptionsColor {
    constructor() {
        this.value = "";
    }
    static create(source, data) {
        const color = new OptionsColor();
        color.load(source);
        if (data !== undefined) {
            if ((0, Utils_1.isString)(data) || (0, Utils_1.isArray)(data)) {
                color.load({ value: data });
            }
            else {
                color.load(data);
            }
        }
        return color;
    }
    load(data) {
        if (data?.value === undefined) {
            return;
        }
        this.value = data.value;
    }
}
exports.OptionsColor = OptionsColor;


/***/ }),

/***/ 12960:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParticlesBounce = void 0;
const ParticlesBounceFactor_1 = __webpack_require__(84653);
class ParticlesBounce {
    constructor() {
        this.horizontal = new ParticlesBounceFactor_1.ParticlesBounceFactor();
        this.vertical = new ParticlesBounceFactor_1.ParticlesBounceFactor();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.horizontal.load(data.horizontal);
        this.vertical.load(data.vertical);
    }
}
exports.ParticlesBounce = ParticlesBounce;


/***/ }),

/***/ 84653:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParticlesBounceFactor = void 0;
const ValueWithRandom_1 = __webpack_require__(26270);
class ParticlesBounceFactor extends ValueWithRandom_1.ValueWithRandom {
    constructor() {
        super();
        this.random.minimumValue = 0.1;
        this.value = 1;
    }
}
exports.ParticlesBounceFactor = ParticlesBounceFactor;


/***/ }),

/***/ 56279:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Collisions = void 0;
const CollisionsAbsorb_1 = __webpack_require__(21331);
const CollisionsOverlap_1 = __webpack_require__(27660);
const ParticlesBounce_1 = __webpack_require__(12960);
const NumberUtils_1 = __webpack_require__(296);
class Collisions {
    constructor() {
        this.absorb = new CollisionsAbsorb_1.CollisionsAbsorb();
        this.bounce = new ParticlesBounce_1.ParticlesBounce();
        this.enable = false;
        this.maxSpeed = 50;
        this.mode = "bounce";
        this.overlap = new CollisionsOverlap_1.CollisionsOverlap();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.absorb.load(data.absorb);
        this.bounce.load(data.bounce);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.maxSpeed !== undefined) {
            this.maxSpeed = (0, NumberUtils_1.setRangeValue)(data.maxSpeed);
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        this.overlap.load(data.overlap);
    }
}
exports.Collisions = Collisions;


/***/ }),

/***/ 21331:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CollisionsAbsorb = void 0;
class CollisionsAbsorb {
    constructor() {
        this.speed = 2;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
    }
}
exports.CollisionsAbsorb = CollisionsAbsorb;


/***/ }),

/***/ 27660:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CollisionsOverlap = void 0;
class CollisionsOverlap {
    constructor() {
        this.enable = true;
        this.retries = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.retries !== undefined) {
            this.retries = data.retries;
        }
    }
}
exports.CollisionsOverlap = CollisionsOverlap;


/***/ }),

/***/ 44304:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Move = void 0;
const Utils_1 = __webpack_require__(91694);
const MoveAngle_1 = __webpack_require__(68143);
const MoveAttract_1 = __webpack_require__(1914);
const MoveCenter_1 = __webpack_require__(64117);
const MoveGravity_1 = __webpack_require__(50430);
const MovePath_1 = __webpack_require__(29914);
const MoveTrail_1 = __webpack_require__(98518);
const OutModes_1 = __webpack_require__(3318);
const Spin_1 = __webpack_require__(63707);
const NumberUtils_1 = __webpack_require__(296);
class Move {
    constructor() {
        this.angle = new MoveAngle_1.MoveAngle();
        this.attract = new MoveAttract_1.MoveAttract();
        this.center = new MoveCenter_1.MoveCenter();
        this.decay = 0;
        this.distance = {};
        this.direction = "none";
        this.drift = 0;
        this.enable = false;
        this.gravity = new MoveGravity_1.MoveGravity();
        this.path = new MovePath_1.MovePath();
        this.outModes = new OutModes_1.OutModes();
        this.random = false;
        this.size = false;
        this.speed = 2;
        this.spin = new Spin_1.Spin();
        this.straight = false;
        this.trail = new MoveTrail_1.MoveTrail();
        this.vibrate = false;
        this.warp = false;
    }
    get bounce() {
        return this.collisions;
    }
    set bounce(value) {
        this.collisions = value;
    }
    get collisions() {
        return false;
    }
    set collisions(_) {
    }
    get noise() {
        return this.path;
    }
    set noise(value) {
        this.path = value;
    }
    get outMode() {
        return this.outModes.default;
    }
    set outMode(value) {
        this.outModes.default = value;
    }
    get out_mode() {
        return this.outMode;
    }
    set out_mode(value) {
        this.outMode = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        this.angle.load((0, Utils_1.isNumber)(data.angle) ? { value: data.angle } : data.angle);
        this.attract.load(data.attract);
        this.center.load(data.center);
        if (data.decay !== undefined) {
            this.decay = (0, NumberUtils_1.setRangeValue)(data.decay);
        }
        if (data.direction !== undefined) {
            this.direction = data.direction;
        }
        if (data.distance !== undefined) {
            this.distance = (0, Utils_1.isNumber)(data.distance)
                ? {
                    horizontal: data.distance,
                    vertical: data.distance,
                }
                : { ...data.distance };
        }
        if (data.drift !== undefined) {
            this.drift = (0, NumberUtils_1.setRangeValue)(data.drift);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.gravity.load(data.gravity);
        const outModes = data.outModes ?? data.outMode ?? data.out_mode;
        if (outModes !== undefined) {
            if ((0, Utils_1.isObject)(outModes)) {
                this.outModes.load(outModes);
            }
            else {
                this.outModes.load({
                    default: outModes,
                });
            }
        }
        this.path.load(data.path ?? data.noise);
        if (data.random !== undefined) {
            this.random = data.random;
        }
        if (data.size !== undefined) {
            this.size = data.size;
        }
        if (data.speed !== undefined) {
            this.speed = (0, NumberUtils_1.setRangeValue)(data.speed);
        }
        this.spin.load(data.spin);
        if (data.straight !== undefined) {
            this.straight = data.straight;
        }
        this.trail.load(data.trail);
        if (data.vibrate !== undefined) {
            this.vibrate = data.vibrate;
        }
        if (data.warp !== undefined) {
            this.warp = data.warp;
        }
    }
}
exports.Move = Move;


/***/ }),

/***/ 68143:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveAngle = void 0;
const NumberUtils_1 = __webpack_require__(296);
class MoveAngle {
    constructor() {
        this.offset = 0;
        this.value = 90;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.offset !== undefined) {
            this.offset = (0, NumberUtils_1.setRangeValue)(data.offset);
        }
        if (data.value !== undefined) {
            this.value = (0, NumberUtils_1.setRangeValue)(data.value);
        }
    }
}
exports.MoveAngle = MoveAngle;


/***/ }),

/***/ 1914:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveAttract = void 0;
const NumberUtils_1 = __webpack_require__(296);
class MoveAttract {
    constructor() {
        this.distance = 200;
        this.enable = false;
        this.rotate = {
            x: 3000,
            y: 3000,
        };
    }
    get rotateX() {
        return this.rotate.x;
    }
    set rotateX(value) {
        this.rotate.x = value;
    }
    get rotateY() {
        return this.rotate.y;
    }
    set rotateY(value) {
        this.rotate.y = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = (0, NumberUtils_1.setRangeValue)(data.distance);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        const rotateX = data.rotate?.x ?? data.rotateX;
        if (rotateX !== undefined) {
            this.rotate.x = rotateX;
        }
        const rotateY = data.rotate?.y ?? data.rotateY;
        if (rotateY !== undefined) {
            this.rotate.y = rotateY;
        }
    }
}
exports.MoveAttract = MoveAttract;


/***/ }),

/***/ 64117:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveCenter = void 0;
class MoveCenter {
    constructor() {
        this.x = 50;
        this.y = 50;
        this.mode = "percent";
        this.radius = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.x !== undefined) {
            this.x = data.x;
        }
        if (data.y !== undefined) {
            this.y = data.y;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}
exports.MoveCenter = MoveCenter;


/***/ }),

/***/ 50430:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveGravity = void 0;
const NumberUtils_1 = __webpack_require__(296);
class MoveGravity {
    constructor() {
        this.acceleration = 9.81;
        this.enable = false;
        this.inverse = false;
        this.maxSpeed = 50;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.acceleration !== undefined) {
            this.acceleration = (0, NumberUtils_1.setRangeValue)(data.acceleration);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.inverse !== undefined) {
            this.inverse = data.inverse;
        }
        if (data.maxSpeed !== undefined) {
            this.maxSpeed = (0, NumberUtils_1.setRangeValue)(data.maxSpeed);
        }
    }
}
exports.MoveGravity = MoveGravity;


/***/ }),

/***/ 98518:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveTrail = void 0;
const MoveTrailFill_1 = __webpack_require__(38815);
class MoveTrail {
    constructor() {
        this.enable = false;
        this.length = 10;
        this.fill = new MoveTrailFill_1.MoveTrailFill();
    }
    get fillColor() {
        return this.fill.color;
    }
    set fillColor(value) {
        this.fill.load({ color: value });
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.fill !== undefined || data.fillColor !== undefined) {
            this.fill.load(data.fill || { color: data.fillColor });
        }
        if (data.length !== undefined) {
            this.length = data.length;
        }
    }
}
exports.MoveTrail = MoveTrail;


/***/ }),

/***/ 38815:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveTrailFill = void 0;
const OptionsColor_1 = __webpack_require__(87517);
class MoveTrailFill {
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.image !== undefined) {
            this.image = data.image;
        }
    }
}
exports.MoveTrailFill = MoveTrailFill;


/***/ }),

/***/ 3318:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OutModes = void 0;
class OutModes {
    constructor() {
        this.default = "out";
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.default !== undefined) {
            this.default = data.default;
        }
        this.bottom = data.bottom ?? data.default;
        this.left = data.left ?? data.default;
        this.right = data.right ?? data.default;
        this.top = data.top ?? data.default;
    }
}
exports.OutModes = OutModes;


/***/ }),

/***/ 29914:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MovePath = void 0;
const ValueWithRandom_1 = __webpack_require__(26270);
const Utils_1 = __webpack_require__(91694);
class MovePath {
    constructor() {
        this.clamp = true;
        this.delay = new ValueWithRandom_1.ValueWithRandom();
        this.enable = false;
        this.options = {};
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.clamp !== undefined) {
            this.clamp = data.clamp;
        }
        this.delay.load(data.delay);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.generator = data.generator;
        if (data.options) {
            this.options = (0, Utils_1.deepExtend)(this.options, data.options);
        }
    }
}
exports.MovePath = MovePath;


/***/ }),

/***/ 63707:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Spin = void 0;
const Utils_1 = __webpack_require__(91694);
const NumberUtils_1 = __webpack_require__(296);
class Spin {
    constructor() {
        this.acceleration = 0;
        this.enable = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.acceleration !== undefined) {
            this.acceleration = (0, NumberUtils_1.setRangeValue)(data.acceleration);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.position) {
            this.position = (0, Utils_1.deepExtend)({}, data.position);
        }
    }
}
exports.Spin = Spin;


/***/ }),

/***/ 71601:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParticlesDensity = void 0;
class ParticlesDensity {
    constructor() {
        this.enable = false;
        this.width = 1920;
        this.height = 1080;
    }
    get area() {
        return this.width;
    }
    set area(value) {
        this.width = value;
    }
    get factor() {
        return this.height;
    }
    set factor(value) {
        this.height = value;
    }
    get value_area() {
        return this.area;
    }
    set value_area(value) {
        this.area = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        const width = data.width ?? data.area ?? data.value_area;
        if (width !== undefined) {
            this.width = width;
        }
        const height = data.height ?? data.factor;
        if (height !== undefined) {
            this.height = height;
        }
    }
}
exports.ParticlesDensity = ParticlesDensity;


/***/ }),

/***/ 96314:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParticlesNumber = void 0;
const ParticlesDensity_1 = __webpack_require__(71601);
class ParticlesNumber {
    constructor() {
        this.density = new ParticlesDensity_1.ParticlesDensity();
        this.limit = 0;
        this.value = 0;
    }
    get max() {
        return this.limit;
    }
    set max(value) {
        this.limit = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        this.density.load(data.density);
        const limit = data.limit ?? data.max;
        if (limit !== undefined) {
            this.limit = limit;
        }
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}
exports.ParticlesNumber = ParticlesNumber;


/***/ }),

/***/ 76498:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Opacity = void 0;
const OpacityAnimation_1 = __webpack_require__(86610);
const ValueWithRandom_1 = __webpack_require__(26270);
const NumberUtils_1 = __webpack_require__(296);
class Opacity extends ValueWithRandom_1.ValueWithRandom {
    constructor() {
        super();
        this.animation = new OpacityAnimation_1.OpacityAnimation();
        this.random.minimumValue = 0.1;
        this.value = 1;
    }
    get anim() {
        return this.animation;
    }
    set anim(value) {
        this.animation = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        super.load(data);
        const animation = data.animation ?? data.anim;
        if (animation !== undefined) {
            this.animation.load(animation);
            this.value = (0, NumberUtils_1.setRangeValue)(this.value, this.animation.enable ? this.animation.minimumValue : undefined);
        }
    }
}
exports.Opacity = Opacity;


/***/ }),

/***/ 86610:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpacityAnimation = void 0;
const AnimationOptions_1 = __webpack_require__(2933);
class OpacityAnimation extends AnimationOptions_1.RangedAnimationOptions {
    constructor() {
        super();
        this.destroy = "none";
        this.speed = 2;
    }
    get opacity_min() {
        return this.minimumValue;
    }
    set opacity_min(value) {
        this.minimumValue = value;
    }
    load(data) {
        if (data?.opacity_min !== undefined && data.minimumValue === undefined) {
            data.minimumValue = data.opacity_min;
        }
        super.load(data);
        if (!data) {
            return;
        }
        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }
    }
}
exports.OpacityAnimation = OpacityAnimation;


/***/ }),

/***/ 4532:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParticlesOptions = void 0;
const Utils_1 = __webpack_require__(91694);
const AnimatableColor_1 = __webpack_require__(18232);
const Collisions_1 = __webpack_require__(56279);
const Move_1 = __webpack_require__(44304);
const Opacity_1 = __webpack_require__(76498);
const ParticlesBounce_1 = __webpack_require__(12960);
const ParticlesNumber_1 = __webpack_require__(96314);
const Shadow_1 = __webpack_require__(29816);
const Shape_1 = __webpack_require__(81649);
const Size_1 = __webpack_require__(41534);
const Stroke_1 = __webpack_require__(67652);
const ZIndex_1 = __webpack_require__(63124);
class ParticlesOptions {
    constructor(engine, container) {
        this._engine = engine;
        this._container = container;
        this.bounce = new ParticlesBounce_1.ParticlesBounce();
        this.collisions = new Collisions_1.Collisions();
        this.color = new AnimatableColor_1.AnimatableColor();
        this.color.value = "#fff";
        this.groups = {};
        this.move = new Move_1.Move();
        this.number = new ParticlesNumber_1.ParticlesNumber();
        this.opacity = new Opacity_1.Opacity();
        this.reduceDuplicates = false;
        this.shadow = new Shadow_1.Shadow();
        this.shape = new Shape_1.Shape();
        this.size = new Size_1.Size();
        this.stroke = new Stroke_1.Stroke();
        this.zIndex = new ZIndex_1.ZIndex();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.bounce.load(data.bounce);
        this.color.load(AnimatableColor_1.AnimatableColor.create(this.color, data.color));
        if (data.groups !== undefined) {
            for (const group in data.groups) {
                const item = data.groups[group];
                if (item !== undefined) {
                    this.groups[group] = (0, Utils_1.deepExtend)(this.groups[group] ?? {}, item);
                }
            }
        }
        this.move.load(data.move);
        this.number.load(data.number);
        this.opacity.load(data.opacity);
        if (data.reduceDuplicates !== undefined) {
            this.reduceDuplicates = data.reduceDuplicates;
        }
        this.shape.load(data.shape);
        this.size.load(data.size);
        this.shadow.load(data.shadow);
        this.zIndex.load(data.zIndex);
        const collisions = data.move?.collisions ?? data.move?.bounce;
        if (collisions !== undefined) {
            this.collisions.enable = collisions;
        }
        this.collisions.load(data.collisions);
        if (data.interactivity !== undefined) {
            this.interactivity = (0, Utils_1.deepExtend)({}, data.interactivity);
        }
        const strokeToLoad = data.stroke ?? data.shape?.stroke;
        if (strokeToLoad) {
            this.stroke = (0, Utils_1.executeOnSingleOrMultiple)(strokeToLoad, (t) => {
                const tmp = new Stroke_1.Stroke();
                tmp.load(t);
                return tmp;
            });
        }
        if (this._container) {
            const updaters = this._engine.plugins.updaters.get(this._container);
            if (updaters) {
                for (const updater of updaters) {
                    if (updater.loadOptions) {
                        updater.loadOptions(this, data);
                    }
                }
            }
            const interactors = this._engine.plugins.interactors.get(this._container);
            if (interactors) {
                for (const interactor of interactors) {
                    if (interactor.loadParticlesOptions) {
                        interactor.loadParticlesOptions(this, data);
                    }
                }
            }
        }
    }
}
exports.ParticlesOptions = ParticlesOptions;


/***/ }),

/***/ 29816:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Shadow = void 0;
const OptionsColor_1 = __webpack_require__(87517);
class Shadow {
    constructor() {
        this.blur = 0;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.offset = {
            x: 0,
            y: 0,
        };
        this.color.value = "#000";
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.blur !== undefined) {
            this.blur = data.blur;
        }
        this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.offset === undefined) {
            return;
        }
        if (data.offset.x !== undefined) {
            this.offset.x = data.offset.x;
        }
        if (data.offset.y !== undefined) {
            this.offset.y = data.offset.y;
        }
    }
}
exports.Shadow = Shadow;


/***/ }),

/***/ 81649:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Shape = void 0;
const Utils_1 = __webpack_require__(91694);
const charKey = "character", charAltKey = "char", imageKey = "image", imageAltKey = "images", polygonKey = "polygon", polygonAltKey = "star";
class Shape {
    constructor() {
        this.loadShape = (item, mainKey, altKey, altOverride) => {
            if (!item) {
                return;
            }
            const itemIsArray = (0, Utils_1.isArray)(item), emptyValue = itemIsArray ? [] : {}, mainDifferentValues = itemIsArray !== (0, Utils_1.isArray)(this.options[mainKey]), altDifferentValues = itemIsArray !== (0, Utils_1.isArray)(this.options[altKey]);
            if (mainDifferentValues) {
                this.options[mainKey] = emptyValue;
            }
            if (altDifferentValues && altOverride) {
                this.options[altKey] = emptyValue;
            }
            this.options[mainKey] = (0, Utils_1.deepExtend)(this.options[mainKey] ?? emptyValue, item);
            if (!this.options[altKey] || altOverride) {
                this.options[altKey] = (0, Utils_1.deepExtend)(this.options[altKey] ?? emptyValue, item);
            }
        };
        this.close = true;
        this.fill = true;
        this.options = {};
        this.type = "circle";
    }
    get character() {
        return (this.options[charKey] ?? this.options[charAltKey]);
    }
    set character(value) {
        this.options[charAltKey] = this.options[charKey] = value;
    }
    get custom() {
        return this.options;
    }
    set custom(value) {
        this.options = value;
    }
    get image() {
        return (this.options[imageKey] ?? this.options[imageAltKey]);
    }
    set image(value) {
        this.options[imageAltKey] = this.options[imageKey] = value;
    }
    get images() {
        return this.image;
    }
    set images(value) {
        this.image = value;
    }
    get polygon() {
        return (this.options[polygonKey] ?? this.options[polygonAltKey]);
    }
    set polygon(value) {
        this.options[polygonAltKey] = this.options[polygonKey] = value;
    }
    get stroke() {
        return [];
    }
    set stroke(_value) {
    }
    load(data) {
        if (!data) {
            return;
        }
        const options = data.options ?? data.custom;
        if (options !== undefined) {
            for (const shape in options) {
                const item = options[shape];
                if (item) {
                    this.options[shape] = (0, Utils_1.deepExtend)(this.options[shape] ?? {}, item);
                }
            }
        }
        this.loadShape(data.character, charKey, charAltKey, true);
        this.loadShape(data.polygon, polygonKey, polygonAltKey, false);
        this.loadShape(data.image ?? data.images, imageKey, imageAltKey, true);
        if (data.close !== undefined) {
            this.close = data.close;
        }
        if (data.fill !== undefined) {
            this.fill = data.fill;
        }
        if (data.type !== undefined) {
            this.type = data.type;
        }
    }
}
exports.Shape = Shape;


/***/ }),

/***/ 41534:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Size = void 0;
const SizeAnimation_1 = __webpack_require__(11197);
const ValueWithRandom_1 = __webpack_require__(26270);
const NumberUtils_1 = __webpack_require__(296);
class Size extends ValueWithRandom_1.ValueWithRandom {
    constructor() {
        super();
        this.animation = new SizeAnimation_1.SizeAnimation();
        this.random.minimumValue = 1;
        this.value = 3;
    }
    get anim() {
        return this.animation;
    }
    set anim(value) {
        this.animation = value;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        const animation = data.animation ?? data.anim;
        if (animation !== undefined) {
            this.animation.load(animation);
            this.value = (0, NumberUtils_1.setRangeValue)(this.value, this.animation.enable ? this.animation.minimumValue : undefined);
        }
    }
}
exports.Size = Size;


/***/ }),

/***/ 11197:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SizeAnimation = void 0;
const AnimationOptions_1 = __webpack_require__(2933);
class SizeAnimation extends AnimationOptions_1.RangedAnimationOptions {
    constructor() {
        super();
        this.destroy = "none";
        this.speed = 5;
    }
    get size_min() {
        return this.minimumValue;
    }
    set size_min(value) {
        this.minimumValue = value;
    }
    load(data) {
        if (data?.size_min !== undefined && data.minimumValue === undefined) {
            data.minimumValue = data.size_min;
        }
        super.load(data);
        if (!data) {
            return;
        }
        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }
    }
}
exports.SizeAnimation = SizeAnimation;


/***/ }),

/***/ 67652:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Stroke = void 0;
const AnimatableColor_1 = __webpack_require__(18232);
const NumberUtils_1 = __webpack_require__(296);
class Stroke {
    constructor() {
        this.width = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = AnimatableColor_1.AnimatableColor.create(this.color, data.color);
        }
        if (data.width !== undefined) {
            this.width = (0, NumberUtils_1.setRangeValue)(data.width);
        }
        if (data.opacity !== undefined) {
            this.opacity = (0, NumberUtils_1.setRangeValue)(data.opacity);
        }
    }
}
exports.Stroke = Stroke;


/***/ }),

/***/ 63124:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZIndex = void 0;
const ValueWithRandom_1 = __webpack_require__(26270);
class ZIndex extends ValueWithRandom_1.ValueWithRandom {
    constructor() {
        super();
        this.opacityRate = 1;
        this.sizeRate = 1;
        this.velocityRate = 1;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        if (data.opacityRate !== undefined) {
            this.opacityRate = data.opacityRate;
        }
        if (data.sizeRate !== undefined) {
            this.sizeRate = data.sizeRate;
        }
        if (data.velocityRate !== undefined) {
            this.velocityRate = data.velocityRate;
        }
    }
}
exports.ZIndex = ZIndex;


/***/ }),

/***/ 40471:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Random = void 0;
class Random {
    constructor() {
        this.enable = false;
        this.minimumValue = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.minimumValue !== undefined) {
            this.minimumValue = data.minimumValue;
        }
    }
}
exports.Random = Random;


/***/ }),

/***/ 20372:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Responsive = void 0;
const Utils_1 = __webpack_require__(91694);
class Responsive {
    constructor() {
        this.maxWidth = Infinity;
        this.options = {};
        this.mode = "canvas";
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.maxWidth !== undefined) {
            this.maxWidth = data.maxWidth;
        }
        if (data.mode !== undefined) {
            if (data.mode === "screen") {
                this.mode = "screen";
            }
            else {
                this.mode = "canvas";
            }
        }
        if (data.options !== undefined) {
            this.options = (0, Utils_1.deepExtend)({}, data.options);
        }
    }
}
exports.Responsive = Responsive;


/***/ }),

/***/ 14957:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Theme = void 0;
const ThemeDefault_1 = __webpack_require__(64621);
const Utils_1 = __webpack_require__(91694);
class Theme {
    constructor() {
        this.name = "";
        this.default = new ThemeDefault_1.ThemeDefault();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.name !== undefined) {
            this.name = data.name;
        }
        this.default.load(data.default);
        if (data.options !== undefined) {
            this.options = (0, Utils_1.deepExtend)({}, data.options);
        }
    }
}
exports.Theme = Theme;


/***/ }),

/***/ 64621:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThemeDefault = void 0;
class ThemeDefault {
    constructor() {
        this.auto = false;
        this.mode = "any";
        this.value = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.auto !== undefined) {
            this.auto = data.auto;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}
exports.ThemeDefault = ThemeDefault;


/***/ }),

/***/ 26270:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RangedAnimationValueWithRandom = exports.AnimationValueWithRandom = exports.ValueWithRandom = void 0;
const AnimationOptions_1 = __webpack_require__(2933);
const Random_1 = __webpack_require__(40471);
const Utils_1 = __webpack_require__(91694);
const NumberUtils_1 = __webpack_require__(296);
class ValueWithRandom {
    constructor() {
        this.random = new Random_1.Random();
        this.value = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if ((0, Utils_1.isBoolean)(data.random)) {
            this.random.enable = data.random;
        }
        else {
            this.random.load(data.random);
        }
        if (data.value !== undefined) {
            this.value = (0, NumberUtils_1.setRangeValue)(data.value, this.random.enable ? this.random.minimumValue : undefined);
        }
    }
}
exports.ValueWithRandom = ValueWithRandom;
class AnimationValueWithRandom extends ValueWithRandom {
    constructor() {
        super();
        this.animation = new AnimationOptions_1.AnimationOptions();
    }
    get anim() {
        return this.animation;
    }
    set anim(value) {
        this.animation = value;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        const animation = data.animation ?? data.anim;
        if (animation !== undefined) {
            this.animation.load(animation);
        }
    }
}
exports.AnimationValueWithRandom = AnimationValueWithRandom;
class RangedAnimationValueWithRandom extends AnimationValueWithRandom {
    constructor() {
        super();
        this.animation = new AnimationOptions_1.RangedAnimationOptions();
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        const animation = data.animation ?? data.anim;
        if (animation !== undefined) {
            this.value = (0, NumberUtils_1.setRangeValue)(this.value, this.animation.enable ? this.animation.minimumValue : undefined);
        }
    }
}
exports.RangedAnimationValueWithRandom = RangedAnimationValueWithRandom;


/***/ }),

/***/ 87811:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 77196:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 26008:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 69566:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 50404:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 29614:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 81588:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 86209:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 44458:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 57730:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 54827:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 36869:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 28293:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 458:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 93741:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 96205:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 4873:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 69250:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 34823:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 36387:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 99784:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 54001:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 45013:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 18219:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 8291:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 31640:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 2355:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 45516:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 14605:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 58513:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 46466:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 20489:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 39630:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 95464:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 2867:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 13377:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 77784:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 42445:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 89717:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 36484:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 75641:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 92573:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 80786:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 37973:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 44127:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 86795:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 47258:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 30443:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 25485:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(69171), exports);


/***/ }),

/***/ 42317:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 79162:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 61996:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 66862:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 48266:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 11401:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 39191:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 26583:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 48263:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 22052:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 3607:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 86462:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 91513:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 82887:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 78465:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 77920:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 25633:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 50851:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.alterHsl = exports.drawParticlePlugin = exports.drawPlugin = exports.drawShapeAfterEffect = exports.drawShape = exports.drawParticle = exports.clear = exports.paintImage = exports.paintBase = exports.drawTriangle = exports.drawLine = void 0;
const ColorUtils_1 = __webpack_require__(7585);
function drawLine(context, begin, end) {
    context.beginPath();
    context.moveTo(begin.x, begin.y);
    context.lineTo(end.x, end.y);
    context.closePath();
}
exports.drawLine = drawLine;
function drawTriangle(context, p1, p2, p3) {
    context.beginPath();
    context.moveTo(p1.x, p1.y);
    context.lineTo(p2.x, p2.y);
    context.lineTo(p3.x, p3.y);
    context.closePath();
}
exports.drawTriangle = drawTriangle;
function paintBase(context, dimension, baseColor) {
    context.fillStyle = baseColor ?? "rgba(0,0,0,0)";
    context.fillRect(0, 0, dimension.width, dimension.height);
}
exports.paintBase = paintBase;
function paintImage(context, dimension, image, opacity) {
    if (!image) {
        return;
    }
    context.globalAlpha = opacity;
    context.drawImage(image, 0, 0, dimension.width, dimension.height);
    context.globalAlpha = 1;
}
exports.paintImage = paintImage;
function clear(context, dimension) {
    context.clearRect(0, 0, dimension.width, dimension.height);
}
exports.clear = clear;
function drawParticle(data) {
    const { container, context, particle, delta, colorStyles, backgroundMask, composite, radius, opacity, shadow, transform, } = data;
    const pos = particle.getPosition(), angle = particle.rotation + (particle.pathRotation ? particle.velocity.angle : 0), rotateData = {
        sin: Math.sin(angle),
        cos: Math.cos(angle),
    }, transformData = {
        a: rotateData.cos * (transform.a ?? 1),
        b: rotateData.sin * (transform.b ?? 1),
        c: -rotateData.sin * (transform.c ?? 1),
        d: rotateData.cos * (transform.d ?? 1),
    };
    context.setTransform(transformData.a, transformData.b, transformData.c, transformData.d, pos.x, pos.y);
    context.beginPath();
    if (backgroundMask) {
        context.globalCompositeOperation = composite;
    }
    const shadowColor = particle.shadowColor;
    if (shadow.enable && shadowColor) {
        context.shadowBlur = shadow.blur;
        context.shadowColor = (0, ColorUtils_1.getStyleFromRgb)(shadowColor);
        context.shadowOffsetX = shadow.offset.x;
        context.shadowOffsetY = shadow.offset.y;
    }
    if (colorStyles.fill) {
        context.fillStyle = colorStyles.fill;
    }
    const strokeWidth = particle.strokeWidth ?? 0;
    context.lineWidth = strokeWidth;
    if (colorStyles.stroke) {
        context.strokeStyle = colorStyles.stroke;
    }
    drawShape(container, context, particle, radius, opacity, delta);
    if (strokeWidth > 0) {
        context.stroke();
    }
    if (particle.close) {
        context.closePath();
    }
    if (particle.fill) {
        context.fill();
    }
    drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
    context.globalCompositeOperation = "source-over";
    context.setTransform(1, 0, 0, 1, 0, 0);
}
exports.drawParticle = drawParticle;
function drawShape(container, context, particle, radius, opacity, delta) {
    if (!particle.shape) {
        return;
    }
    const drawer = container.drawers.get(particle.shape);
    if (!drawer) {
        return;
    }
    drawer.draw(context, particle, radius, opacity, delta, container.retina.pixelRatio);
}
exports.drawShape = drawShape;
function drawShapeAfterEffect(container, context, particle, radius, opacity, delta) {
    if (!particle.shape) {
        return;
    }
    const drawer = container.drawers.get(particle.shape);
    if (!drawer || !drawer.afterEffect) {
        return;
    }
    drawer.afterEffect(context, particle, radius, opacity, delta, container.retina.pixelRatio);
}
exports.drawShapeAfterEffect = drawShapeAfterEffect;
function drawPlugin(context, plugin, delta) {
    if (!plugin.draw) {
        return;
    }
    plugin.draw(context, delta);
}
exports.drawPlugin = drawPlugin;
function drawParticlePlugin(context, plugin, particle, delta) {
    if (!plugin.drawParticle) {
        return;
    }
    plugin.drawParticle(context, particle, delta);
}
exports.drawParticlePlugin = drawParticlePlugin;
function alterHsl(color, type, value) {
    return {
        h: color.h,
        s: color.s,
        l: color.l + (type === "darken" ? -1 : 1) * value,
    };
}
exports.alterHsl = alterHsl;


/***/ }),

/***/ 7585:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getHslAnimationFromHsl = exports.getHslFromAnimation = exports.getLinkRandomColor = exports.getLinkColor = exports.colorMix = exports.getStyleFromHsl = exports.getStyleFromRgb = exports.getRandomRgbColor = exports.hslaToRgba = exports.hslToRgb = exports.stringToRgb = exports.stringToAlpha = exports.rgbToHsl = exports.rangeColorToHsl = exports.colorToHsl = exports.colorToRgb = exports.rangeColorToRgb = exports.addColorManager = void 0;
const NumberUtils_1 = __webpack_require__(296);
const Utils_1 = __webpack_require__(91694);
const randomColorValue = "random", midColorValue = "mid", colorManagers = new Map();
function addColorManager(manager) {
    colorManagers.set(manager.key, manager);
}
exports.addColorManager = addColorManager;
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
function stringToRgba(input) {
    for (const [, manager] of colorManagers) {
        if (input.startsWith(manager.stringPrefix)) {
            return manager.parseString(input);
        }
    }
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, hexFixed = input.replace(shorthandRegex, (_, r, g, b, a) => {
        return r + r + g + g + b + b + (a !== undefined ? a + a : "");
    }), regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, result = regex.exec(hexFixed);
    return result
        ? {
            a: result[4] !== undefined ? parseInt(result[4], 16) / 0xff : 1,
            b: parseInt(result[3], 16),
            g: parseInt(result[2], 16),
            r: parseInt(result[1], 16),
        }
        : undefined;
}
function rangeColorToRgb(input, index, useIndex = true) {
    if (!input) {
        return;
    }
    const color = (0, Utils_1.isString)(input) ? { value: input } : input;
    if ((0, Utils_1.isString)(color.value)) {
        return colorToRgb(color.value, index, useIndex);
    }
    if ((0, Utils_1.isArray)(color.value)) {
        return rangeColorToRgb({
            value: (0, Utils_1.itemFromArray)(color.value, index, useIndex),
        });
    }
    for (const [, manager] of colorManagers) {
        const res = manager.handleRangeColor(color);
        if (res) {
            return res;
        }
    }
}
exports.rangeColorToRgb = rangeColorToRgb;
function colorToRgb(input, index, useIndex = true) {
    if (!input) {
        return;
    }
    const color = (0, Utils_1.isString)(input) ? { value: input } : input;
    if ((0, Utils_1.isString)(color.value)) {
        return color.value === randomColorValue ? getRandomRgbColor() : stringToRgb(color.value);
    }
    if ((0, Utils_1.isArray)(color.value)) {
        return colorToRgb({
            value: (0, Utils_1.itemFromArray)(color.value, index, useIndex),
        });
    }
    for (const [, manager] of colorManagers) {
        const res = manager.handleColor(color);
        if (res) {
            return res;
        }
    }
}
exports.colorToRgb = colorToRgb;
function colorToHsl(color, index, useIndex = true) {
    const rgb = colorToRgb(color, index, useIndex);
    return rgb ? rgbToHsl(rgb) : undefined;
}
exports.colorToHsl = colorToHsl;
function rangeColorToHsl(color, index, useIndex = true) {
    const rgb = rangeColorToRgb(color, index, useIndex);
    return rgb ? rgbToHsl(rgb) : undefined;
}
exports.rangeColorToHsl = rangeColorToHsl;
function rgbToHsl(color) {
    const r1 = color.r / 255, g1 = color.g / 255, b1 = color.b / 255, max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1), res = {
        h: 0,
        l: (max + min) / 2,
        s: 0,
    };
    if (max !== min) {
        res.s = res.l < 0.5 ? (max - min) / (max + min) : (max - min) / (2.0 - max - min);
        res.h =
            r1 === max
                ? (g1 - b1) / (max - min)
                : (res.h = g1 === max ? 2.0 + (b1 - r1) / (max - min) : 4.0 + (r1 - g1) / (max - min));
    }
    res.l *= 100;
    res.s *= 100;
    res.h *= 60;
    if (res.h < 0) {
        res.h += 360;
    }
    if (res.h >= 360) {
        res.h -= 360;
    }
    return res;
}
exports.rgbToHsl = rgbToHsl;
function stringToAlpha(input) {
    return stringToRgba(input)?.a;
}
exports.stringToAlpha = stringToAlpha;
function stringToRgb(input) {
    return stringToRgba(input);
}
exports.stringToRgb = stringToRgb;
function hslToRgb(hsl) {
    const result = { b: 0, g: 0, r: 0 }, hslPercent = {
        h: hsl.h / 360,
        l: hsl.l / 100,
        s: hsl.s / 100,
    };
    if (!hslPercent.s) {
        result.r = result.g = result.b = hslPercent.l;
    }
    else {
        const q = hslPercent.l < 0.5
            ? hslPercent.l * (1 + hslPercent.s)
            : hslPercent.l + hslPercent.s - hslPercent.l * hslPercent.s, p = 2 * hslPercent.l - q;
        result.r = hue2rgb(p, q, hslPercent.h + 1 / 3);
        result.g = hue2rgb(p, q, hslPercent.h);
        result.b = hue2rgb(p, q, hslPercent.h - 1 / 3);
    }
    result.r = Math.floor(result.r * 255);
    result.g = Math.floor(result.g * 255);
    result.b = Math.floor(result.b * 255);
    return result;
}
exports.hslToRgb = hslToRgb;
function hslaToRgba(hsla) {
    const rgbResult = hslToRgb(hsla);
    return {
        a: hsla.a,
        b: rgbResult.b,
        g: rgbResult.g,
        r: rgbResult.r,
    };
}
exports.hslaToRgba = hslaToRgba;
function getRandomRgbColor(min) {
    const fixedMin = min ?? 0;
    return {
        b: Math.floor((0, NumberUtils_1.randomInRange)((0, NumberUtils_1.setRangeValue)(fixedMin, 256))),
        g: Math.floor((0, NumberUtils_1.randomInRange)((0, NumberUtils_1.setRangeValue)(fixedMin, 256))),
        r: Math.floor((0, NumberUtils_1.randomInRange)((0, NumberUtils_1.setRangeValue)(fixedMin, 256))),
    };
}
exports.getRandomRgbColor = getRandomRgbColor;
function getStyleFromRgb(color, opacity) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity ?? 1})`;
}
exports.getStyleFromRgb = getStyleFromRgb;
function getStyleFromHsl(color, opacity) {
    return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity ?? 1})`;
}
exports.getStyleFromHsl = getStyleFromHsl;
function colorMix(color1, color2, size1, size2) {
    let rgb1 = color1, rgb2 = color2;
    if (rgb1.r === undefined) {
        rgb1 = hslToRgb(color1);
    }
    if (rgb2.r === undefined) {
        rgb2 = hslToRgb(color2);
    }
    return {
        b: (0, NumberUtils_1.mix)(rgb1.b, rgb2.b, size1, size2),
        g: (0, NumberUtils_1.mix)(rgb1.g, rgb2.g, size1, size2),
        r: (0, NumberUtils_1.mix)(rgb1.r, rgb2.r, size1, size2),
    };
}
exports.colorMix = colorMix;
function getLinkColor(p1, p2, linkColor) {
    if (linkColor === randomColorValue) {
        return getRandomRgbColor();
    }
    else if (linkColor === midColorValue) {
        const sourceColor = p1.getFillColor() ?? p1.getStrokeColor(), destColor = p2?.getFillColor() ?? p2?.getStrokeColor();
        if (sourceColor && destColor && p2) {
            return colorMix(sourceColor, destColor, p1.getRadius(), p2.getRadius());
        }
        else {
            const hslColor = sourceColor ?? destColor;
            if (hslColor) {
                return hslToRgb(hslColor);
            }
        }
    }
    else {
        return linkColor;
    }
}
exports.getLinkColor = getLinkColor;
function getLinkRandomColor(optColor, blink, consent) {
    const color = (0, Utils_1.isString)(optColor) ? optColor : optColor.value;
    if (color === randomColorValue) {
        if (consent) {
            return rangeColorToRgb({
                value: color,
            });
        }
        if (blink) {
            return randomColorValue;
        }
        return midColorValue;
    }
    else if (color === midColorValue) {
        return midColorValue;
    }
    else {
        return rangeColorToRgb({
            value: color,
        });
    }
}
exports.getLinkRandomColor = getLinkRandomColor;
function getHslFromAnimation(animation) {
    return animation !== undefined
        ? {
            h: animation.h.value,
            s: animation.s.value,
            l: animation.l.value,
        }
        : undefined;
}
exports.getHslFromAnimation = getHslFromAnimation;
function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
    const resColor = {
        h: {
            enable: false,
            value: hsl.h,
        },
        s: {
            enable: false,
            value: hsl.s,
        },
        l: {
            enable: false,
            value: hsl.l,
        },
    };
    if (animationOptions) {
        setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
        setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
        setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
    }
    return resColor;
}
exports.getHslAnimationFromHsl = getHslAnimationFromHsl;
function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
    colorValue.enable = colorAnimation.enable;
    if (colorValue.enable) {
        colorValue.velocity = ((0, NumberUtils_1.getRangeValue)(colorAnimation.speed) / 100) * reduceFactor;
        colorValue.decay = 1 - (0, NumberUtils_1.getRangeValue)(colorAnimation.decay);
        colorValue.status = "increasing";
        colorValue.loops = 0;
        colorValue.maxLoops = (0, NumberUtils_1.getRangeValue)(colorAnimation.count);
        colorValue.time = 0;
        colorValue.delayTime = (0, NumberUtils_1.getRangeValue)(colorAnimation.delay) * 1000;
        if (!colorAnimation.sync) {
            colorValue.velocity *= (0, NumberUtils_1.getRandom)();
            colorValue.value *= (0, NumberUtils_1.getRandom)();
        }
        colorValue.initialValue = colorValue.value;
    }
    else {
        colorValue.velocity = 0;
    }
}


/***/ }),

/***/ 38566:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventDispatcher = void 0;
class EventDispatcher {
    constructor() {
        this._listeners = new Map();
    }
    addEventListener(type, listener) {
        this.removeEventListener(type, listener);
        let arr = this._listeners.get(type);
        if (!arr) {
            arr = [];
            this._listeners.set(type, arr);
        }
        arr.push(listener);
    }
    dispatchEvent(type, args) {
        const listeners = this._listeners.get(type);
        listeners && listeners.forEach((handler) => handler(args));
    }
    hasEventListener(type) {
        return !!this._listeners.get(type);
    }
    removeAllEventListeners(type) {
        if (!type) {
            this._listeners = new Map();
        }
        else {
            this._listeners.delete(type);
        }
    }
    removeEventListener(type, listener) {
        const arr = this._listeners.get(type);
        if (!arr) {
            return;
        }
        const length = arr.length, idx = arr.indexOf(listener);
        if (idx < 0) {
            return;
        }
        if (length === 1) {
            this._listeners.delete(type);
        }
        else {
            arr.splice(idx, 1);
        }
    }
}
exports.EventDispatcher = EventDispatcher;


/***/ }),

/***/ 36686:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HslColorManager = void 0;
const NumberUtils_1 = __webpack_require__(296);
const ColorUtils_1 = __webpack_require__(7585);
class HslColorManager {
    constructor() {
        this.key = "hsl";
        this.stringPrefix = "hsl";
    }
    handleColor(color) {
        const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
        if (hslColor.h !== undefined && hslColor.s !== undefined && hslColor.l !== undefined) {
            return (0, ColorUtils_1.hslToRgb)(hslColor);
        }
    }
    handleRangeColor(color) {
        const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
        if (hslColor.h !== undefined && hslColor.l !== undefined) {
            return (0, ColorUtils_1.hslToRgb)({
                h: (0, NumberUtils_1.getRangeValue)(hslColor.h),
                l: (0, NumberUtils_1.getRangeValue)(hslColor.l),
                s: (0, NumberUtils_1.getRangeValue)(hslColor.s),
            });
        }
    }
    parseString(input) {
        if (!input.startsWith("hsl")) {
            return;
        }
        const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input);
        return result
            ? (0, ColorUtils_1.hslaToRgba)({
                a: result.length > 4 ? (0, NumberUtils_1.parseAlpha)(result[5]) : 1,
                h: parseInt(result[1], 10),
                l: parseInt(result[3], 10),
                s: parseInt(result[2], 10),
            })
            : undefined;
    }
}
exports.HslColorManager = HslColorManager;


/***/ }),

/***/ 296:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseAlpha = exports.calcExactPositionOrRandomFromSizeRanged = exports.calcExactPositionOrRandomFromSize = exports.calcPositionOrRandomFromSizeRanged = exports.calcPositionOrRandomFromSize = exports.calcPositionFromSize = exports.collisionVelocity = exports.getParticleBaseVelocity = exports.getParticleDirectionAngle = exports.getDistance = exports.getDistances = exports.getValue = exports.setRangeValue = exports.getRangeMax = exports.getRangeMin = exports.getRangeValue = exports.randomInRange = exports.mix = exports.clamp = exports.getRandom = exports.setRandom = exports.getEasing = exports.addEasing = void 0;
const Utils_1 = __webpack_require__(91694);
const Vector_1 = __webpack_require__(84967);
let _random = Math.random;
const easings = new Map();
function addEasing(name, easing) {
    if (easings.get(name)) {
        return;
    }
    easings.set(name, easing);
}
exports.addEasing = addEasing;
function getEasing(name) {
    return easings.get(name) || ((value) => value);
}
exports.getEasing = getEasing;
function setRandom(rnd = Math.random) {
    _random = rnd;
}
exports.setRandom = setRandom;
function getRandom() {
    return clamp(_random(), 0, 1 - 1e-16);
}
exports.getRandom = getRandom;
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
exports.clamp = clamp;
function mix(comp1, comp2, weight1, weight2) {
    return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
}
exports.mix = mix;
function randomInRange(r) {
    const max = getRangeMax(r);
    let min = getRangeMin(r);
    if (max === min) {
        min = 0;
    }
    return getRandom() * (max - min) + min;
}
exports.randomInRange = randomInRange;
function getRangeValue(value) {
    return (0, Utils_1.isNumber)(value) ? value : randomInRange(value);
}
exports.getRangeValue = getRangeValue;
function getRangeMin(value) {
    return (0, Utils_1.isNumber)(value) ? value : value.min;
}
exports.getRangeMin = getRangeMin;
function getRangeMax(value) {
    return (0, Utils_1.isNumber)(value) ? value : value.max;
}
exports.getRangeMax = getRangeMax;
function setRangeValue(source, value) {
    if (source === value || (value === undefined && (0, Utils_1.isNumber)(source))) {
        return source;
    }
    const min = getRangeMin(source), max = getRangeMax(source);
    return value !== undefined
        ? {
            min: Math.min(min, value),
            max: Math.max(max, value),
        }
        : setRangeValue(min, max);
}
exports.setRangeValue = setRangeValue;
function getValue(options) {
    const random = options.random, { enable, minimumValue } = (0, Utils_1.isBoolean)(random)
        ? {
            enable: random,
            minimumValue: 0,
        }
        : random;
    return enable ? getRangeValue(setRangeValue(options.value, minimumValue)) : getRangeValue(options.value);
}
exports.getValue = getValue;
function getDistances(pointA, pointB) {
    const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y;
    return { dx: dx, dy: dy, distance: Math.sqrt(dx ** 2 + dy ** 2) };
}
exports.getDistances = getDistances;
function getDistance(pointA, pointB) {
    return getDistances(pointA, pointB).distance;
}
exports.getDistance = getDistance;
function getParticleDirectionAngle(direction, position, center) {
    if ((0, Utils_1.isNumber)(direction)) {
        return (direction * Math.PI) / 180;
    }
    switch (direction) {
        case "top":
            return -Math.PI / 2;
        case "top-right":
            return -Math.PI / 4;
        case "right":
            return 0;
        case "bottom-right":
            return Math.PI / 4;
        case "bottom":
            return Math.PI / 2;
        case "bottom-left":
            return (3 * Math.PI) / 4;
        case "left":
            return Math.PI;
        case "top-left":
            return (-3 * Math.PI) / 4;
        case "inside":
            return Math.atan2(center.y - position.y, center.x - position.x);
        case "outside":
            return Math.atan2(position.y - center.y, position.x - center.x);
        default:
            return getRandom() * Math.PI * 2;
    }
}
exports.getParticleDirectionAngle = getParticleDirectionAngle;
function getParticleBaseVelocity(direction) {
    const baseVelocity = Vector_1.Vector.origin;
    baseVelocity.length = 1;
    baseVelocity.angle = direction;
    return baseVelocity;
}
exports.getParticleBaseVelocity = getParticleBaseVelocity;
function collisionVelocity(v1, v2, m1, m2) {
    return Vector_1.Vector.create((v1.x * (m1 - m2)) / (m1 + m2) + (v2.x * 2 * m2) / (m1 + m2), v1.y);
}
exports.collisionVelocity = collisionVelocity;
function calcPositionFromSize(data) {
    return data.position && data.position.x !== undefined && data.position.y !== undefined
        ? {
            x: (data.position.x * data.size.width) / 100,
            y: (data.position.y * data.size.height) / 100,
        }
        : undefined;
}
exports.calcPositionFromSize = calcPositionFromSize;
function calcPositionOrRandomFromSize(data) {
    return {
        x: ((data.position?.x ?? getRandom() * 100) * data.size.width) / 100,
        y: ((data.position?.y ?? getRandom() * 100) * data.size.height) / 100,
    };
}
exports.calcPositionOrRandomFromSize = calcPositionOrRandomFromSize;
function calcPositionOrRandomFromSizeRanged(data) {
    const position = {
        x: data.position?.x !== undefined ? getRangeValue(data.position.x) : undefined,
        y: data.position?.y !== undefined ? getRangeValue(data.position.y) : undefined,
    };
    return calcPositionOrRandomFromSize({ size: data.size, position });
}
exports.calcPositionOrRandomFromSizeRanged = calcPositionOrRandomFromSizeRanged;
function calcExactPositionOrRandomFromSize(data) {
    return {
        x: data.position?.x ?? getRandom() * data.size.width,
        y: data.position?.y ?? getRandom() * data.size.height,
    };
}
exports.calcExactPositionOrRandomFromSize = calcExactPositionOrRandomFromSize;
function calcExactPositionOrRandomFromSizeRanged(data) {
    const position = {
        x: data.position?.x !== undefined ? getRangeValue(data.position.x) : undefined,
        y: data.position?.y !== undefined ? getRangeValue(data.position.y) : undefined,
    };
    return calcExactPositionOrRandomFromSize({ size: data.size, position });
}
exports.calcExactPositionOrRandomFromSizeRanged = calcExactPositionOrRandomFromSizeRanged;
function parseAlpha(input) {
    return input ? (input.endsWith("%") ? parseFloat(input) / 100 : parseFloat(input)) : 1;
}
exports.parseAlpha = parseAlpha;


/***/ }),

/***/ 43376:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadParticlesOptions = exports.loadOptions = void 0;
const ParticlesOptions_1 = __webpack_require__(4532);
function loadOptions(options, ...sourceOptionsArr) {
    for (const sourceOptions of sourceOptionsArr) {
        options.load(sourceOptions);
    }
}
exports.loadOptions = loadOptions;
function loadParticlesOptions(engine, container, ...sourceOptionsArr) {
    const options = new ParticlesOptions_1.ParticlesOptions(engine, container);
    loadOptions(options, ...sourceOptionsArr);
    return options;
}
exports.loadParticlesOptions = loadParticlesOptions;


/***/ }),

/***/ 66910:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RgbColorManager = void 0;
const NumberUtils_1 = __webpack_require__(296);
class RgbColorManager {
    constructor() {
        this.key = "rgb";
        this.stringPrefix = "rgb";
    }
    handleColor(color) {
        const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
        if (rgbColor.r !== undefined) {
            return rgbColor;
        }
    }
    handleRangeColor(color) {
        const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
        if (rgbColor.r !== undefined) {
            return {
                r: (0, NumberUtils_1.getRangeValue)(rgbColor.r),
                g: (0, NumberUtils_1.getRangeValue)(rgbColor.g),
                b: (0, NumberUtils_1.getRangeValue)(rgbColor.b),
            };
        }
    }
    parseString(input) {
        if (!input.startsWith(this.stringPrefix)) {
            return;
        }
        const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i, result = regex.exec(input);
        return result
            ? {
                a: result.length > 4 ? (0, NumberUtils_1.parseAlpha)(result[5]) : 1,
                b: parseInt(result[3], 10),
                g: parseInt(result[2], 10),
                r: parseInt(result[1], 10),
            }
            : undefined;
    }
}
exports.RgbColorManager = RgbColorManager;


/***/ }),

/***/ 91694:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isArray = exports.isObject = exports.isFunction = exports.isNumber = exports.isString = exports.isBoolean = exports.getSize = exports.getPosition = exports.initParticleNumericAnimationValue = exports.findItemFromSingleOrMultiple = exports.itemFromSingleOrMultiple = exports.executeOnSingleOrMultiple = exports.rectBounce = exports.circleBounce = exports.circleBounceDataFromParticle = exports.divMode = exports.singleDivModeExecute = exports.divModeExecute = exports.isDivModeEnabled = exports.deepExtend = exports.calculateBounds = exports.areBoundsInside = exports.isPointInside = exports.itemFromArray = exports.arrayRandomIndex = exports.loadFont = exports.isInArray = exports.safeMutationObserver = exports.safeMatchMedia = exports.hasMatchMedia = exports.isSsr = exports.getLogger = exports.setLogger = void 0;
const NumberUtils_1 = __webpack_require__(296);
const Vector_1 = __webpack_require__(84967);
const _logger = {
    debug: console.debug,
    error: console.error,
    info: console.info,
    log: console.log,
    verbose: console.log,
    warning: console.warn,
};
function setLogger(logger) {
    _logger.debug = logger.debug || _logger.debug;
    _logger.error = logger.error || _logger.error;
    _logger.info = logger.info || _logger.info;
    _logger.log = logger.log || _logger.log;
    _logger.verbose = logger.verbose || _logger.verbose;
    _logger.warning = logger.warning || _logger.warning;
}
exports.setLogger = setLogger;
function getLogger() {
    return _logger;
}
exports.getLogger = getLogger;
function rectSideBounce(data) {
    const res = { bounced: false }, { pSide, pOtherSide, rectSide, rectOtherSide, velocity, factor } = data;
    if (pOtherSide.min < rectOtherSide.min ||
        pOtherSide.min > rectOtherSide.max ||
        pOtherSide.max < rectOtherSide.min ||
        pOtherSide.max > rectOtherSide.max) {
        return res;
    }
    if ((pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) / 2 && velocity > 0) ||
        (pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) / 2 && velocity < 0)) {
        res.velocity = velocity * -factor;
        res.bounced = true;
    }
    return res;
}
function checkSelector(element, selectors) {
    const res = executeOnSingleOrMultiple(selectors, (selector) => {
        return element.matches(selector);
    });
    return isArray(res) ? res.some((t) => t) : res;
}
function isSsr() {
    return typeof window === "undefined" || !window || typeof window.document === "undefined" || !window.document;
}
exports.isSsr = isSsr;
function hasMatchMedia() {
    return !isSsr() && typeof matchMedia !== "undefined";
}
exports.hasMatchMedia = hasMatchMedia;
function safeMatchMedia(query) {
    if (!hasMatchMedia()) {
        return;
    }
    return matchMedia(query);
}
exports.safeMatchMedia = safeMatchMedia;
function safeMutationObserver(callback) {
    if (isSsr() || typeof MutationObserver === "undefined") {
        return;
    }
    return new MutationObserver(callback);
}
exports.safeMutationObserver = safeMutationObserver;
function isInArray(value, array) {
    return value === array || (isArray(array) && array.indexOf(value) > -1);
}
exports.isInArray = isInArray;
async function loadFont(font, weight) {
    try {
        await document.fonts.load(`${weight ?? "400"} 36px '${font ?? "Verdana"}'`);
    }
    catch {
    }
}
exports.loadFont = loadFont;
function arrayRandomIndex(array) {
    return Math.floor((0, NumberUtils_1.getRandom)() * array.length);
}
exports.arrayRandomIndex = arrayRandomIndex;
function itemFromArray(array, index, useIndex = true) {
    return array[index !== undefined && useIndex ? index % array.length : arrayRandomIndex(array)];
}
exports.itemFromArray = itemFromArray;
function isPointInside(point, size, offset, radius, direction) {
    return areBoundsInside(calculateBounds(point, radius ?? 0), size, offset, direction);
}
exports.isPointInside = isPointInside;
function areBoundsInside(bounds, size, offset, direction) {
    let inside = true;
    if (!direction || direction === "bottom") {
        inside = bounds.top < size.height + offset.x;
    }
    if (inside && (!direction || direction === "left")) {
        inside = bounds.right > offset.x;
    }
    if (inside && (!direction || direction === "right")) {
        inside = bounds.left < size.width + offset.y;
    }
    if (inside && (!direction || direction === "top")) {
        inside = bounds.bottom > offset.y;
    }
    return inside;
}
exports.areBoundsInside = areBoundsInside;
function calculateBounds(point, radius) {
    return {
        bottom: point.y + radius,
        left: point.x - radius,
        right: point.x + radius,
        top: point.y - radius,
    };
}
exports.calculateBounds = calculateBounds;
function deepExtend(destination, ...sources) {
    for (const source of sources) {
        if (source === undefined || source === null) {
            continue;
        }
        if (!isObject(source)) {
            destination = source;
            continue;
        }
        const sourceIsArray = Array.isArray(source);
        if (sourceIsArray && (isObject(destination) || !destination || !Array.isArray(destination))) {
            destination = [];
        }
        else if (!sourceIsArray && (isObject(destination) || !destination || Array.isArray(destination))) {
            destination = {};
        }
        for (const key in source) {
            if (key === "__proto__") {
                continue;
            }
            const sourceDict = source, value = sourceDict[key], destDict = destination;
            destDict[key] =
                isObject(value) && Array.isArray(value)
                    ? value.map((v) => deepExtend(destDict[key], v))
                    : deepExtend(destDict[key], value);
        }
    }
    return destination;
}
exports.deepExtend = deepExtend;
function isDivModeEnabled(mode, divs) {
    return !!findItemFromSingleOrMultiple(divs, (t) => t.enable && isInArray(mode, t.mode));
}
exports.isDivModeEnabled = isDivModeEnabled;
function divModeExecute(mode, divs, callback) {
    executeOnSingleOrMultiple(divs, (div) => {
        const divMode = div.mode, divEnabled = div.enable;
        if (divEnabled && isInArray(mode, divMode)) {
            singleDivModeExecute(div, callback);
        }
    });
}
exports.divModeExecute = divModeExecute;
function singleDivModeExecute(div, callback) {
    const selectors = div.selectors;
    executeOnSingleOrMultiple(selectors, (selector) => {
        callback(selector, div);
    });
}
exports.singleDivModeExecute = singleDivModeExecute;
function divMode(divs, element) {
    if (!element || !divs) {
        return;
    }
    return findItemFromSingleOrMultiple(divs, (div) => {
        return checkSelector(element, div.selectors);
    });
}
exports.divMode = divMode;
function circleBounceDataFromParticle(p) {
    return {
        position: p.getPosition(),
        radius: p.getRadius(),
        mass: p.getMass(),
        velocity: p.velocity,
        factor: Vector_1.Vector.create((0, NumberUtils_1.getValue)(p.options.bounce.horizontal), (0, NumberUtils_1.getValue)(p.options.bounce.vertical)),
    };
}
exports.circleBounceDataFromParticle = circleBounceDataFromParticle;
function circleBounce(p1, p2) {
    const { x: xVelocityDiff, y: yVelocityDiff } = p1.velocity.sub(p2.velocity), [pos1, pos2] = [p1.position, p2.position], { dx: xDist, dy: yDist } = (0, NumberUtils_1.getDistances)(pos2, pos1);
    if (xVelocityDiff * xDist + yVelocityDiff * yDist < 0) {
        return;
    }
    const angle = -Math.atan2(yDist, xDist), m1 = p1.mass, m2 = p2.mass, u1 = p1.velocity.rotate(angle), u2 = p2.velocity.rotate(angle), v1 = (0, NumberUtils_1.collisionVelocity)(u1, u2, m1, m2), v2 = (0, NumberUtils_1.collisionVelocity)(u2, u1, m1, m2), vFinal1 = v1.rotate(-angle), vFinal2 = v2.rotate(-angle);
    p1.velocity.x = vFinal1.x * p1.factor.x;
    p1.velocity.y = vFinal1.y * p1.factor.y;
    p2.velocity.x = vFinal2.x * p2.factor.x;
    p2.velocity.y = vFinal2.y * p2.factor.y;
}
exports.circleBounce = circleBounce;
function rectBounce(particle, divBounds) {
    const pPos = particle.getPosition(), size = particle.getRadius(), bounds = calculateBounds(pPos, size), resH = rectSideBounce({
        pSide: {
            min: bounds.left,
            max: bounds.right,
        },
        pOtherSide: {
            min: bounds.top,
            max: bounds.bottom,
        },
        rectSide: {
            min: divBounds.left,
            max: divBounds.right,
        },
        rectOtherSide: {
            min: divBounds.top,
            max: divBounds.bottom,
        },
        velocity: particle.velocity.x,
        factor: (0, NumberUtils_1.getValue)(particle.options.bounce.horizontal),
    });
    if (resH.bounced) {
        if (resH.velocity !== undefined) {
            particle.velocity.x = resH.velocity;
        }
        if (resH.position !== undefined) {
            particle.position.x = resH.position;
        }
    }
    const resV = rectSideBounce({
        pSide: {
            min: bounds.top,
            max: bounds.bottom,
        },
        pOtherSide: {
            min: bounds.left,
            max: bounds.right,
        },
        rectSide: {
            min: divBounds.top,
            max: divBounds.bottom,
        },
        rectOtherSide: {
            min: divBounds.left,
            max: divBounds.right,
        },
        velocity: particle.velocity.y,
        factor: (0, NumberUtils_1.getValue)(particle.options.bounce.vertical),
    });
    if (resV.bounced) {
        if (resV.velocity !== undefined) {
            particle.velocity.y = resV.velocity;
        }
        if (resV.position !== undefined) {
            particle.position.y = resV.position;
        }
    }
}
exports.rectBounce = rectBounce;
function executeOnSingleOrMultiple(obj, callback) {
    return isArray(obj) ? obj.map((item, index) => callback(item, index)) : callback(obj, 0);
}
exports.executeOnSingleOrMultiple = executeOnSingleOrMultiple;
function itemFromSingleOrMultiple(obj, index, useIndex) {
    return isArray(obj) ? itemFromArray(obj, index, useIndex) : obj;
}
exports.itemFromSingleOrMultiple = itemFromSingleOrMultiple;
function findItemFromSingleOrMultiple(obj, callback) {
    return isArray(obj) ? obj.find((t, index) => callback(t, index)) : callback(obj, 0) ? obj : undefined;
}
exports.findItemFromSingleOrMultiple = findItemFromSingleOrMultiple;
function initParticleNumericAnimationValue(options, pxRatio) {
    const valueRange = options.value, animationOptions = options.animation, res = {
        delayTime: (0, NumberUtils_1.getRangeValue)(animationOptions.delay) * 1000,
        enable: animationOptions.enable,
        value: (0, NumberUtils_1.getRangeValue)(options.value) * pxRatio,
        max: (0, NumberUtils_1.getRangeMax)(valueRange) * pxRatio,
        min: (0, NumberUtils_1.getRangeMin)(valueRange) * pxRatio,
        loops: 0,
        maxLoops: (0, NumberUtils_1.getRangeValue)(animationOptions.count),
        time: 0,
    };
    if (animationOptions.enable) {
        res.decay = 1 - (0, NumberUtils_1.getRangeValue)(animationOptions.decay);
        switch (animationOptions.mode) {
            case "increase":
                res.status = "increasing";
                break;
            case "decrease":
                res.status = "decreasing";
                break;
            case "random":
                res.status = (0, NumberUtils_1.getRandom)() >= 0.5 ? "increasing" : "decreasing";
                break;
        }
        const autoStatus = animationOptions.mode === "auto";
        switch (animationOptions.startValue) {
            case "min":
                res.value = res.min;
                if (autoStatus) {
                    res.status = "increasing";
                }
                break;
            case "max":
                res.value = res.max;
                if (autoStatus) {
                    res.status = "decreasing";
                }
                break;
            case "random":
            default:
                res.value = (0, NumberUtils_1.randomInRange)(res);
                if (autoStatus) {
                    res.status = (0, NumberUtils_1.getRandom)() >= 0.5 ? "increasing" : "decreasing";
                }
                break;
        }
    }
    res.initialValue = res.value;
    return res;
}
exports.initParticleNumericAnimationValue = initParticleNumericAnimationValue;
function getPositionOrSize(positionOrSize, canvasSize) {
    const isPercent = positionOrSize.mode === "percent";
    if (!isPercent) {
        const { mode: _, ...rest } = positionOrSize;
        return rest;
    }
    const isPosition = "x" in positionOrSize;
    if (isPosition) {
        return {
            x: (positionOrSize.x / 100) * canvasSize.width,
            y: (positionOrSize.y / 100) * canvasSize.height,
        };
    }
    else {
        return {
            width: (positionOrSize.width / 100) * canvasSize.width,
            height: (positionOrSize.height / 100) * canvasSize.height,
        };
    }
}
function getPosition(position, canvasSize) {
    return getPositionOrSize(position, canvasSize);
}
exports.getPosition = getPosition;
function getSize(size, canvasSize) {
    return getPositionOrSize(size, canvasSize);
}
exports.getSize = getSize;
function isBoolean(arg) {
    return typeof arg === "boolean";
}
exports.isBoolean = isBoolean;
function isString(arg) {
    return typeof arg === "string";
}
exports.isString = isString;
function isNumber(arg) {
    return typeof arg === "number";
}
exports.isNumber = isNumber;
function isFunction(arg) {
    return typeof arg === "function";
}
exports.isFunction = isFunction;
function isObject(arg) {
    return typeof arg === "object" && arg !== null;
}
exports.isObject = isObject;
function isArray(arg) {
    return Array.isArray(arg);
}
exports.isArray = isArray;


/***/ }),

/***/ 36475:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(13854), exports);
__exportStar(__webpack_require__(54364), exports);
__exportStar(__webpack_require__(6575), exports);
__exportStar(__webpack_require__(18277), exports);
__exportStar(__webpack_require__(39613), exports);
__exportStar(__webpack_require__(25843), exports);
__exportStar(__webpack_require__(74941), exports);
__exportStar(__webpack_require__(63584), exports);
__exportStar(__webpack_require__(38078), exports);
__exportStar(__webpack_require__(98081), exports);
__exportStar(__webpack_require__(64600), exports);
__exportStar(__webpack_require__(16259), exports);
__exportStar(__webpack_require__(31697), exports);
__exportStar(__webpack_require__(55166), exports);
__exportStar(__webpack_require__(18025), exports);
__exportStar(__webpack_require__(47313), exports);
__exportStar(__webpack_require__(93427), exports);
__exportStar(__webpack_require__(9903), exports);
__exportStar(__webpack_require__(77023), exports);
__exportStar(__webpack_require__(2319), exports);
__exportStar(__webpack_require__(35344), exports);
__exportStar(__webpack_require__(28126), exports);
__exportStar(__webpack_require__(68706), exports);
__exportStar(__webpack_require__(82154), exports);
__exportStar(__webpack_require__(73962), exports);
__exportStar(__webpack_require__(25968), exports);
__exportStar(__webpack_require__(70971), exports);
__exportStar(__webpack_require__(65303), exports);
__exportStar(__webpack_require__(2781), exports);
__exportStar(__webpack_require__(51325), exports);
__exportStar(__webpack_require__(23477), exports);
__exportStar(__webpack_require__(30832), exports);
__exportStar(__webpack_require__(96095), exports);
__exportStar(__webpack_require__(69171), exports);
__exportStar(__webpack_require__(78493), exports);
__exportStar(__webpack_require__(86937), exports);
__exportStar(__webpack_require__(26008), exports);
__exportStar(__webpack_require__(87811), exports);
__exportStar(__webpack_require__(77196), exports);
__exportStar(__webpack_require__(69566), exports);
__exportStar(__webpack_require__(50404), exports);
__exportStar(__webpack_require__(29614), exports);
__exportStar(__webpack_require__(81588), exports);
__exportStar(__webpack_require__(86209), exports);
__exportStar(__webpack_require__(44458), exports);
__exportStar(__webpack_require__(57730), exports);
__exportStar(__webpack_require__(54827), exports);
__exportStar(__webpack_require__(36869), exports);
__exportStar(__webpack_require__(28293), exports);
__exportStar(__webpack_require__(458), exports);
__exportStar(__webpack_require__(93741), exports);
__exportStar(__webpack_require__(96205), exports);
__exportStar(__webpack_require__(4873), exports);
__exportStar(__webpack_require__(69250), exports);
__exportStar(__webpack_require__(34823), exports);
__exportStar(__webpack_require__(36387), exports);
__exportStar(__webpack_require__(99784), exports);
__exportStar(__webpack_require__(45013), exports);
__exportStar(__webpack_require__(18219), exports);
__exportStar(__webpack_require__(54001), exports);
__exportStar(__webpack_require__(8291), exports);
__exportStar(__webpack_require__(31640), exports);
__exportStar(__webpack_require__(2355), exports);
__exportStar(__webpack_require__(45516), exports);
__exportStar(__webpack_require__(14605), exports);
__exportStar(__webpack_require__(58513), exports);
__exportStar(__webpack_require__(46466), exports);
__exportStar(__webpack_require__(95464), exports);
__exportStar(__webpack_require__(20489), exports);
__exportStar(__webpack_require__(39630), exports);
__exportStar(__webpack_require__(2867), exports);
__exportStar(__webpack_require__(13377), exports);
__exportStar(__webpack_require__(36484), exports);
__exportStar(__webpack_require__(42445), exports);
__exportStar(__webpack_require__(89717), exports);
__exportStar(__webpack_require__(77784), exports);
__exportStar(__webpack_require__(75641), exports);
__exportStar(__webpack_require__(92573), exports);
__exportStar(__webpack_require__(80786), exports);
__exportStar(__webpack_require__(37973), exports);
__exportStar(__webpack_require__(44127), exports);
__exportStar(__webpack_require__(86795), exports);
__exportStar(__webpack_require__(47258), exports);
__exportStar(__webpack_require__(30443), exports);
__exportStar(__webpack_require__(25485), exports);
__exportStar(__webpack_require__(42317), exports);
__exportStar(__webpack_require__(79162), exports);
__exportStar(__webpack_require__(61996), exports);
__exportStar(__webpack_require__(66862), exports);
__exportStar(__webpack_require__(48266), exports);
__exportStar(__webpack_require__(11401), exports);
__exportStar(__webpack_require__(39191), exports);
__exportStar(__webpack_require__(26583), exports);
__exportStar(__webpack_require__(48263), exports);
__exportStar(__webpack_require__(22052), exports);
__exportStar(__webpack_require__(3607), exports);
__exportStar(__webpack_require__(86462), exports);
__exportStar(__webpack_require__(91513), exports);
__exportStar(__webpack_require__(82887), exports);
__exportStar(__webpack_require__(78465), exports);
__exportStar(__webpack_require__(77920), exports);
__exportStar(__webpack_require__(25633), exports);


/***/ }),

/***/ 66408:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(95241), exports);
__exportStar(__webpack_require__(64011), exports);
__exportStar(__webpack_require__(86880), exports);
__exportStar(__webpack_require__(22430), exports);
__exportStar(__webpack_require__(93894), exports);
__exportStar(__webpack_require__(79287), exports);
__exportStar(__webpack_require__(40018), exports);
__exportStar(__webpack_require__(84967), exports);
__exportStar(__webpack_require__(36685), exports);
__exportStar(__webpack_require__(17686), exports);
__exportStar(__webpack_require__(84780), exports);
__exportStar(__webpack_require__(75494), exports);
__exportStar(__webpack_require__(40626), exports);
__exportStar(__webpack_require__(80380), exports);
__exportStar(__webpack_require__(58590), exports);
__exportStar(__webpack_require__(43772), exports);
__exportStar(__webpack_require__(73770), exports);
__exportStar(__webpack_require__(28166), exports);
__exportStar(__webpack_require__(79084), exports);
__exportStar(__webpack_require__(51852), exports);
__exportStar(__webpack_require__(54113), exports);
__exportStar(__webpack_require__(28069), exports);
__exportStar(__webpack_require__(20035), exports);
__exportStar(__webpack_require__(66656), exports);
__exportStar(__webpack_require__(28266), exports);
__exportStar(__webpack_require__(14648), exports);
__exportStar(__webpack_require__(97732), exports);
__exportStar(__webpack_require__(83078), exports);
__exportStar(__webpack_require__(79411), exports);
__exportStar(__webpack_require__(26782), exports);
__exportStar(__webpack_require__(4960), exports);
__exportStar(__webpack_require__(90078), exports);
__exportStar(__webpack_require__(18232), exports);
__exportStar(__webpack_require__(2933), exports);
__exportStar(__webpack_require__(92662), exports);
__exportStar(__webpack_require__(27248), exports);
__exportStar(__webpack_require__(87322), exports);
__exportStar(__webpack_require__(2865), exports);
__exportStar(__webpack_require__(72576), exports);
__exportStar(__webpack_require__(28896), exports);
__exportStar(__webpack_require__(94310), exports);
__exportStar(__webpack_require__(20541), exports);
__exportStar(__webpack_require__(94310), exports);
__exportStar(__webpack_require__(20541), exports);
__exportStar(__webpack_require__(95802), exports);
__exportStar(__webpack_require__(51174), exports);
__exportStar(__webpack_require__(38917), exports);
__exportStar(__webpack_require__(24295), exports);
__exportStar(__webpack_require__(91097), exports);
__exportStar(__webpack_require__(71616), exports);
__exportStar(__webpack_require__(9910), exports);
__exportStar(__webpack_require__(86720), exports);
__exportStar(__webpack_require__(87517), exports);
__exportStar(__webpack_require__(12960), exports);
__exportStar(__webpack_require__(84653), exports);
__exportStar(__webpack_require__(56279), exports);
__exportStar(__webpack_require__(21331), exports);
__exportStar(__webpack_require__(27660), exports);
__exportStar(__webpack_require__(4532), exports);
__exportStar(__webpack_require__(29816), exports);
__exportStar(__webpack_require__(67652), exports);
__exportStar(__webpack_require__(1914), exports);
__exportStar(__webpack_require__(44304), exports);
__exportStar(__webpack_require__(68143), exports);
__exportStar(__webpack_require__(64117), exports);
__exportStar(__webpack_require__(50430), exports);
__exportStar(__webpack_require__(3318), exports);
__exportStar(__webpack_require__(29914), exports);
__exportStar(__webpack_require__(63707), exports);
__exportStar(__webpack_require__(98518), exports);
__exportStar(__webpack_require__(96314), exports);
__exportStar(__webpack_require__(71601), exports);
__exportStar(__webpack_require__(76498), exports);
__exportStar(__webpack_require__(86610), exports);
__exportStar(__webpack_require__(81649), exports);
__exportStar(__webpack_require__(41534), exports);
__exportStar(__webpack_require__(11197), exports);
__exportStar(__webpack_require__(63124), exports);
__exportStar(__webpack_require__(20372), exports);
__exportStar(__webpack_require__(14957), exports);
__exportStar(__webpack_require__(64621), exports);
__exportStar(__webpack_require__(26270), exports);
__exportStar(__webpack_require__(50851), exports);
__exportStar(__webpack_require__(7585), exports);
__exportStar(__webpack_require__(36686), exports);
__exportStar(__webpack_require__(296), exports);
__exportStar(__webpack_require__(43376), exports);
__exportStar(__webpack_require__(66910), exports);
__exportStar(__webpack_require__(91694), exports);


/***/ }),

/***/ 2662:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tsParticles = void 0;
const init_1 = __webpack_require__(62879);
const Utils_1 = __webpack_require__(91694);
const tsParticles = (0, init_1.init)();
exports.tsParticles = tsParticles;
if (!(0, Utils_1.isSsr)()) {
    window.tsParticles = tsParticles;
}
__exportStar(__webpack_require__(66408), exports);
__exportStar(__webpack_require__(36475), exports);


/***/ }),

/***/ 62879:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init = void 0;
const Engine_1 = __webpack_require__(97895);
const HslColorManager_1 = __webpack_require__(36686);
const RgbColorManager_1 = __webpack_require__(66910);
const ColorUtils_1 = __webpack_require__(7585);
function init() {
    const rgbColorManager = new RgbColorManager_1.RgbColorManager(), hslColorManager = new HslColorManager_1.HslColorManager();
    (0, ColorUtils_1.addColorManager)(rgbColorManager);
    (0, ColorUtils_1.addColorManager)(hslColorManager);
    const engine = new Engine_1.Engine();
    engine.init();
    return engine;
}
exports.init = init;


/***/ }),

/***/ 52546:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Attractor = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Attract_1 = __webpack_require__(32070);
class Attractor extends tsparticles_engine_1.ExternalInteractorBase {
    constructor(engine, container) {
        super(container);
        this._clickAttract = () => {
            const container = this.container;
            if (!container.attract) {
                container.attract = { particles: [] };
            }
            const { attract } = container;
            if (!attract.finish) {
                if (!attract.count) {
                    attract.count = 0;
                }
                attract.count++;
                if (attract.count === container.particles.count) {
                    attract.finish = true;
                }
            }
            if (attract.clicking) {
                const mousePos = container.interactivity.mouse.clickPosition, attractRadius = container.retina.attractModeDistance;
                if (!attractRadius || attractRadius < 0 || !mousePos) {
                    return;
                }
                this._processAttract(mousePos, attractRadius, new tsparticles_engine_1.Circle(mousePos.x, mousePos.y, attractRadius));
            }
            else if (attract.clicking === false) {
                attract.particles = [];
            }
            return;
        };
        this._hoverAttract = () => {
            const container = this.container, mousePos = container.interactivity.mouse.position, attractRadius = container.retina.attractModeDistance;
            if (!attractRadius || attractRadius < 0 || !mousePos) {
                return;
            }
            this._processAttract(mousePos, attractRadius, new tsparticles_engine_1.Circle(mousePos.x, mousePos.y, attractRadius));
        };
        this._processAttract = (position, attractRadius, area) => {
            const container = this.container, attractOptions = container.actualOptions.interactivity.modes.attract;
            if (!attractOptions) {
                return;
            }
            const query = container.particles.quadTree.query(area, (p) => this.isEnabled(p));
            for (const particle of query) {
                const { dx, dy, distance } = (0, tsparticles_engine_1.getDistances)(particle.position, position);
                const velocity = attractOptions.speed * attractOptions.factor;
                const attractFactor = (0, tsparticles_engine_1.clamp)((0, tsparticles_engine_1.getEasing)(attractOptions.easing)(1 - distance / attractRadius) * velocity, 0, attractOptions.maxSpeed);
                const normVec = tsparticles_engine_1.Vector.create(distance === 0 ? velocity : (dx / distance) * attractFactor, distance === 0 ? velocity : (dy / distance) * attractFactor);
                particle.position.subFrom(normVec);
            }
        };
        this._engine = engine;
        if (!container.attract) {
            container.attract = { particles: [] };
        }
        this.handleClickMode = (mode) => {
            const options = this.container.actualOptions, attract = options.interactivity.modes.attract;
            if (!attract || mode !== "attract") {
                return;
            }
            if (!container.attract) {
                container.attract = { particles: [] };
            }
            container.attract.clicking = true;
            container.attract.count = 0;
            for (const particle of container.attract.particles) {
                if (!this.isEnabled(particle)) {
                    continue;
                }
                particle.velocity.setTo(particle.initialVelocity);
            }
            container.attract.particles = [];
            container.attract.finish = false;
            setTimeout(() => {
                if (container.destroyed) {
                    return;
                }
                if (!container.attract) {
                    container.attract = { particles: [] };
                }
                container.attract.clicking = false;
            }, attract.duration * 1000);
        };
    }
    clear() {
    }
    init() {
        const container = this.container, attract = container.actualOptions.interactivity.modes.attract;
        if (!attract) {
            return;
        }
        container.retina.attractModeDistance = attract.distance * container.retina.pixelRatio;
    }
    async interact() {
        const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === tsparticles_engine_1.mouseMoveEvent, events = options.interactivity.events, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, clickEnabled = events.onClick.enable, clickMode = events.onClick.mode;
        if (mouseMoveStatus && hoverEnabled && (0, tsparticles_engine_1.isInArray)("attract", hoverMode)) {
            this._hoverAttract();
        }
        else if (clickEnabled && (0, tsparticles_engine_1.isInArray)("attract", clickMode)) {
            this._clickAttract();
        }
    }
    isEnabled(particle) {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? options.interactivity).events;
        if ((!mouse.position || !events.onHover.enable) && (!mouse.clickPosition || !events.onClick.enable)) {
            return false;
        }
        const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;
        return (0, tsparticles_engine_1.isInArray)("attract", hoverMode) || (0, tsparticles_engine_1.isInArray)("attract", clickMode);
    }
    loadModeOptions(options, ...sources) {
        if (!options.attract) {
            options.attract = new Attract_1.Attract();
        }
        for (const source of sources) {
            options.attract.load(source?.attract);
        }
    }
    reset() {
    }
}
exports.Attractor = Attractor;


/***/ }),

/***/ 32070:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Attract = void 0;
class Attract {
    constructor() {
        this.distance = 200;
        this.duration = 0.4;
        this.easing = "ease-out-quad";
        this.factor = 1;
        this.maxSpeed = 50;
        this.speed = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.duration !== undefined) {
            this.duration = data.duration;
        }
        if (data.easing !== undefined) {
            this.easing = data.easing;
        }
        if (data.factor !== undefined) {
            this.factor = data.factor;
        }
        if (data.maxSpeed !== undefined) {
            this.maxSpeed = data.maxSpeed;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
    }
}
exports.Attract = Attract;


/***/ }),

/***/ 15982:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 28414:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadExternalAttractInteraction = void 0;
const Attractor_1 = __webpack_require__(52546);
async function loadExternalAttractInteraction(engine, refresh = true) {
    await engine.addInteractor("externalAttract", (container) => new Attractor_1.Attractor(engine, container), refresh);
}
exports.loadExternalAttractInteraction = loadExternalAttractInteraction;
__exportStar(__webpack_require__(32070), exports);
__exportStar(__webpack_require__(15982), exports);


/***/ }),

/***/ 61066:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bouncer = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Bounce_1 = __webpack_require__(44774);
class Bouncer extends tsparticles_engine_1.ExternalInteractorBase {
    constructor(container) {
        super(container);
        this._processBounce = (position, radius, area) => {
            const query = this.container.particles.quadTree.query(area, (p) => this.isEnabled(p));
            for (const particle of query) {
                if (area instanceof tsparticles_engine_1.Circle) {
                    (0, tsparticles_engine_1.circleBounce)((0, tsparticles_engine_1.circleBounceDataFromParticle)(particle), {
                        position,
                        radius,
                        mass: (radius ** 2 * Math.PI) / 2,
                        velocity: tsparticles_engine_1.Vector.origin,
                        factor: tsparticles_engine_1.Vector.origin,
                    });
                }
                else if (area instanceof tsparticles_engine_1.Rectangle) {
                    (0, tsparticles_engine_1.rectBounce)(particle, (0, tsparticles_engine_1.calculateBounds)(position, radius));
                }
            }
        };
        this._processMouseBounce = () => {
            const container = this.container, pxRatio = container.retina.pixelRatio, tolerance = 10 * pxRatio, mousePos = container.interactivity.mouse.position, radius = container.retina.bounceModeDistance;
            if (!radius || radius < 0 || !mousePos) {
                return;
            }
            this._processBounce(mousePos, radius, new tsparticles_engine_1.Circle(mousePos.x, mousePos.y, radius + tolerance));
        };
        this._singleSelectorBounce = (selector, div) => {
            const container = this.container, query = document.querySelectorAll(selector);
            if (!query.length) {
                return;
            }
            query.forEach((item) => {
                const elem = item, pxRatio = container.retina.pixelRatio, pos = {
                    x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
                    y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio,
                }, radius = (elem.offsetWidth / 2) * pxRatio, tolerance = 10 * pxRatio, area = div.type === "circle"
                    ? new tsparticles_engine_1.Circle(pos.x, pos.y, radius + tolerance)
                    : new tsparticles_engine_1.Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * 2, elem.offsetHeight * pxRatio + tolerance * 2);
                this._processBounce(pos, radius, area);
            });
        };
    }
    clear() {
    }
    init() {
        const container = this.container, bounce = container.actualOptions.interactivity.modes.bounce;
        if (!bounce) {
            return;
        }
        container.retina.bounceModeDistance = bounce.distance * container.retina.pixelRatio;
    }
    async interact() {
        const container = this.container, options = container.actualOptions, events = options.interactivity.events, mouseMoveStatus = container.interactivity.status === tsparticles_engine_1.mouseMoveEvent, hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;
        if (mouseMoveStatus && hoverEnabled && (0, tsparticles_engine_1.isInArray)("bounce", hoverMode)) {
            this._processMouseBounce();
        }
        else {
            (0, tsparticles_engine_1.divModeExecute)("bounce", divs, (selector, div) => this._singleSelectorBounce(selector, div));
        }
    }
    isEnabled(particle) {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? options.interactivity).events, divs = events.onDiv;
        return ((mouse.position && events.onHover.enable && (0, tsparticles_engine_1.isInArray)("bounce", events.onHover.mode)) ||
            (0, tsparticles_engine_1.isDivModeEnabled)("bounce", divs));
    }
    loadModeOptions(options, ...sources) {
        if (!options.bounce) {
            options.bounce = new Bounce_1.Bounce();
        }
        for (const source of sources) {
            options.bounce.load(source?.bounce);
        }
    }
    reset() {
    }
}
exports.Bouncer = Bouncer;


/***/ }),

/***/ 44774:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bounce = void 0;
class Bounce {
    constructor() {
        this.distance = 200;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
    }
}
exports.Bounce = Bounce;


/***/ }),

/***/ 37449:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 49284:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadExternalBounceInteraction = void 0;
const Bouncer_1 = __webpack_require__(61066);
async function loadExternalBounceInteraction(engine, refresh = true) {
    await engine.addInteractor("externalBounce", (container) => new Bouncer_1.Bouncer(container), refresh);
}
exports.loadExternalBounceInteraction = loadExternalBounceInteraction;
__exportStar(__webpack_require__(44774), exports);
__exportStar(__webpack_require__(37449), exports);


/***/ }),

/***/ 47538:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bubbler = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Bubble_1 = __webpack_require__(2639);
const Utils_1 = __webpack_require__(41833);
class Bubbler extends tsparticles_engine_1.ExternalInteractorBase {
    constructor(container) {
        super(container);
        this._clickBubble = () => {
            const container = this.container, options = container.actualOptions, mouseClickPos = container.interactivity.mouse.clickPosition, bubbleOptions = options.interactivity.modes.bubble;
            if (!bubbleOptions || !mouseClickPos) {
                return;
            }
            if (!container.bubble) {
                container.bubble = {};
            }
            const distance = container.retina.bubbleModeDistance;
            if (!distance || distance < 0) {
                return;
            }
            const query = container.particles.quadTree.queryCircle(mouseClickPos, distance, (p) => this.isEnabled(p)), { bubble } = container;
            for (const particle of query) {
                if (!bubble.clicking) {
                    continue;
                }
                particle.bubble.inRange = !bubble.durationEnd;
                const pos = particle.getPosition(), distMouse = (0, tsparticles_engine_1.getDistance)(pos, mouseClickPos), timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;
                if (timeSpent > bubbleOptions.duration) {
                    bubble.durationEnd = true;
                }
                if (timeSpent > bubbleOptions.duration * 2) {
                    bubble.clicking = false;
                    bubble.durationEnd = false;
                }
                const sizeData = {
                    bubbleObj: {
                        optValue: container.retina.bubbleModeSize,
                        value: particle.bubble.radius,
                    },
                    particlesObj: {
                        optValue: (0, tsparticles_engine_1.getRangeMax)(particle.options.size.value) * container.retina.pixelRatio,
                        value: particle.size.value,
                    },
                    type: "size",
                };
                this._process(particle, distMouse, timeSpent, sizeData);
                const opacityData = {
                    bubbleObj: {
                        optValue: bubbleOptions.opacity,
                        value: particle.bubble.opacity,
                    },
                    particlesObj: {
                        optValue: (0, tsparticles_engine_1.getRangeMax)(particle.options.opacity.value),
                        value: particle.opacity?.value ?? 1,
                    },
                    type: "opacity",
                };
                this._process(particle, distMouse, timeSpent, opacityData);
                if (!bubble.durationEnd && distMouse <= distance) {
                    this._hoverBubbleColor(particle, distMouse);
                }
                else {
                    delete particle.bubble.color;
                }
            }
        };
        this._hoverBubble = () => {
            const container = this.container, mousePos = container.interactivity.mouse.position, distance = container.retina.bubbleModeDistance;
            if (!distance || distance < 0 || mousePos === undefined) {
                return;
            }
            const query = container.particles.quadTree.queryCircle(mousePos, distance, (p) => this.isEnabled(p));
            for (const particle of query) {
                particle.bubble.inRange = true;
                const pos = particle.getPosition(), pointDistance = (0, tsparticles_engine_1.getDistance)(pos, mousePos), ratio = 1 - pointDistance / distance;
                if (pointDistance <= distance) {
                    if (ratio >= 0 && container.interactivity.status === tsparticles_engine_1.mouseMoveEvent) {
                        this._hoverBubbleSize(particle, ratio);
                        this._hoverBubbleOpacity(particle, ratio);
                        this._hoverBubbleColor(particle, ratio);
                    }
                }
                else {
                    this.reset(particle);
                }
                if (container.interactivity.status === tsparticles_engine_1.mouseLeaveEvent) {
                    this.reset(particle);
                }
            }
        };
        this._hoverBubbleColor = (particle, ratio, divBubble) => {
            const options = this.container.actualOptions, bubbleOptions = divBubble ?? options.interactivity.modes.bubble;
            if (!bubbleOptions) {
                return;
            }
            if (!particle.bubble.finalColor) {
                const modeColor = bubbleOptions.color;
                if (!modeColor) {
                    return;
                }
                const bubbleColor = (0, tsparticles_engine_1.itemFromSingleOrMultiple)(modeColor);
                particle.bubble.finalColor = (0, tsparticles_engine_1.rangeColorToHsl)(bubbleColor);
            }
            if (!particle.bubble.finalColor) {
                return;
            }
            if (bubbleOptions.mix) {
                particle.bubble.color = undefined;
                const pColor = particle.getFillColor();
                particle.bubble.color = pColor
                    ? (0, tsparticles_engine_1.rgbToHsl)((0, tsparticles_engine_1.colorMix)(pColor, particle.bubble.finalColor, 1 - ratio, ratio))
                    : particle.bubble.finalColor;
            }
            else {
                particle.bubble.color = particle.bubble.finalColor;
            }
        };
        this._hoverBubbleOpacity = (particle, ratio, divBubble) => {
            const container = this.container, options = container.actualOptions, modeOpacity = divBubble?.opacity ?? options.interactivity.modes.bubble?.opacity;
            if (!modeOpacity) {
                return;
            }
            const optOpacity = particle.options.opacity.value, pOpacity = particle.opacity?.value ?? 1, opacity = (0, Utils_1.calculateBubbleValue)(pOpacity, modeOpacity, (0, tsparticles_engine_1.getRangeMax)(optOpacity), ratio);
            if (opacity !== undefined) {
                particle.bubble.opacity = opacity;
            }
        };
        this._hoverBubbleSize = (particle, ratio, divBubble) => {
            const container = this.container, modeSize = divBubble?.size ? divBubble.size * container.retina.pixelRatio : container.retina.bubbleModeSize;
            if (modeSize === undefined) {
                return;
            }
            const optSize = (0, tsparticles_engine_1.getRangeMax)(particle.options.size.value) * container.retina.pixelRatio, pSize = particle.size.value, size = (0, Utils_1.calculateBubbleValue)(pSize, modeSize, optSize, ratio);
            if (size !== undefined) {
                particle.bubble.radius = size;
            }
        };
        this._process = (particle, distMouse, timeSpent, data) => {
            const container = this.container, bubbleParam = data.bubbleObj.optValue, options = container.actualOptions, bubbleOptions = options.interactivity.modes.bubble;
            if (!bubbleOptions || bubbleParam === undefined) {
                return;
            }
            const bubbleDuration = bubbleOptions.duration, bubbleDistance = container.retina.bubbleModeDistance, particlesParam = data.particlesObj.optValue, pObjBubble = data.bubbleObj.value, pObj = data.particlesObj.value || 0, type = data.type;
            if (!bubbleDistance || bubbleDistance < 0 || bubbleParam === particlesParam) {
                return;
            }
            if (!container.bubble) {
                container.bubble = {};
            }
            if (container.bubble.durationEnd) {
                if (pObjBubble) {
                    if (type === "size") {
                        delete particle.bubble.radius;
                    }
                    if (type === "opacity") {
                        delete particle.bubble.opacity;
                    }
                }
            }
            else {
                if (distMouse <= bubbleDistance) {
                    const obj = pObjBubble ?? pObj;
                    if (obj !== bubbleParam) {
                        const value = pObj - (timeSpent * (pObj - bubbleParam)) / bubbleDuration;
                        if (type === "size") {
                            particle.bubble.radius = value;
                        }
                        if (type === "opacity") {
                            particle.bubble.opacity = value;
                        }
                    }
                }
                else {
                    if (type === "size") {
                        delete particle.bubble.radius;
                    }
                    if (type === "opacity") {
                        delete particle.bubble.opacity;
                    }
                }
            }
        };
        this._singleSelectorHover = (delta, selector, div) => {
            const container = this.container, selectors = document.querySelectorAll(selector), bubble = container.actualOptions.interactivity.modes.bubble;
            if (!bubble || !selectors.length) {
                return;
            }
            selectors.forEach((item) => {
                const elem = item, pxRatio = container.retina.pixelRatio, pos = {
                    x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
                    y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio,
                }, repulseRadius = (elem.offsetWidth / 2) * pxRatio, area = div.type === "circle"
                    ? new tsparticles_engine_1.Circle(pos.x, pos.y, repulseRadius)
                    : new tsparticles_engine_1.Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), query = container.particles.quadTree.query(area, (p) => this.isEnabled(p));
                for (const particle of query) {
                    if (!area.contains(particle.getPosition())) {
                        continue;
                    }
                    particle.bubble.inRange = true;
                    const divs = bubble.divs, divBubble = (0, tsparticles_engine_1.divMode)(divs, elem);
                    if (!particle.bubble.div || particle.bubble.div !== elem) {
                        this.clear(particle, delta, true);
                        particle.bubble.div = elem;
                    }
                    this._hoverBubbleSize(particle, 1, divBubble);
                    this._hoverBubbleOpacity(particle, 1, divBubble);
                    this._hoverBubbleColor(particle, 1, divBubble);
                }
            });
        };
        if (!container.bubble) {
            container.bubble = {};
        }
        this.handleClickMode = (mode) => {
            if (mode !== "bubble") {
                return;
            }
            if (!container.bubble) {
                container.bubble = {};
            }
            container.bubble.clicking = true;
        };
    }
    clear(particle, delta, force) {
        if (particle.bubble.inRange && !force) {
            return;
        }
        delete particle.bubble.div;
        delete particle.bubble.opacity;
        delete particle.bubble.radius;
        delete particle.bubble.color;
    }
    init() {
        const container = this.container, bubble = container.actualOptions.interactivity.modes.bubble;
        if (!bubble) {
            return;
        }
        container.retina.bubbleModeDistance = bubble.distance * container.retina.pixelRatio;
        if (bubble.size !== undefined) {
            container.retina.bubbleModeSize = bubble.size * container.retina.pixelRatio;
        }
    }
    async interact(delta) {
        const options = this.container.actualOptions, events = options.interactivity.events, onHover = events.onHover, onClick = events.onClick, hoverEnabled = onHover.enable, hoverMode = onHover.mode, clickEnabled = onClick.enable, clickMode = onClick.mode, divs = events.onDiv;
        if (hoverEnabled && (0, tsparticles_engine_1.isInArray)("bubble", hoverMode)) {
            this._hoverBubble();
        }
        else if (clickEnabled && (0, tsparticles_engine_1.isInArray)("bubble", clickMode)) {
            this._clickBubble();
        }
        else {
            (0, tsparticles_engine_1.divModeExecute)("bubble", divs, (selector, div) => this._singleSelectorHover(delta, selector, div));
        }
    }
    isEnabled(particle) {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? options.interactivity).events, { onClick, onDiv, onHover } = events, divBubble = (0, tsparticles_engine_1.isDivModeEnabled)("bubble", onDiv);
        if (!(divBubble || (onHover.enable && mouse.position) || (onClick.enable && mouse.clickPosition))) {
            return false;
        }
        return (0, tsparticles_engine_1.isInArray)("bubble", onHover.mode) || (0, tsparticles_engine_1.isInArray)("bubble", onClick.mode) || divBubble;
    }
    loadModeOptions(options, ...sources) {
        if (!options.bubble) {
            options.bubble = new Bubble_1.Bubble();
        }
        for (const source of sources) {
            options.bubble.load(source?.bubble);
        }
    }
    reset(particle) {
        particle.bubble.inRange = false;
    }
}
exports.Bubbler = Bubbler;


/***/ }),

/***/ 2639:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bubble = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const BubbleBase_1 = __webpack_require__(61230);
const BubbleDiv_1 = __webpack_require__(26581);
class Bubble extends BubbleBase_1.BubbleBase {
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        this.divs = (0, tsparticles_engine_1.executeOnSingleOrMultiple)(data.divs, (div) => {
            const tmp = new BubbleDiv_1.BubbleDiv();
            tmp.load(div);
            return tmp;
        });
    }
}
exports.Bubble = Bubble;


/***/ }),

/***/ 61230:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BubbleBase = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class BubbleBase {
    constructor() {
        this.distance = 200;
        this.duration = 0.4;
        this.mix = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.duration !== undefined) {
            this.duration = data.duration;
        }
        if (data.mix !== undefined) {
            this.mix = data.mix;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
        if (data.color !== undefined) {
            const sourceColor = (0, tsparticles_engine_1.isArray)(this.color) ? undefined : this.color;
            this.color = (0, tsparticles_engine_1.executeOnSingleOrMultiple)(data.color, (color) => {
                return tsparticles_engine_1.OptionsColor.create(sourceColor, color);
            });
        }
        if (data.size !== undefined) {
            this.size = data.size;
        }
    }
}
exports.BubbleBase = BubbleBase;


/***/ }),

/***/ 26581:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BubbleDiv = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const BubbleBase_1 = __webpack_require__(61230);
class BubbleDiv extends BubbleBase_1.BubbleBase {
    constructor() {
        super();
        this.selectors = [];
    }
    get ids() {
        return (0, tsparticles_engine_1.executeOnSingleOrMultiple)(this.selectors, (t) => t.replace("#", ""));
    }
    set ids(value) {
        this.selectors = (0, tsparticles_engine_1.executeOnSingleOrMultiple)(value, (t) => `#${t}`);
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        if (data.ids !== undefined) {
            this.ids = data.ids;
        }
        if (data.selectors !== undefined) {
            this.selectors = data.selectors;
        }
    }
}
exports.BubbleDiv = BubbleDiv;


/***/ }),

/***/ 68268:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 13011:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 13928:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 41833:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.calculateBubbleValue = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
function calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
    if (modeValue >= optionsValue) {
        const value = particleValue + (modeValue - optionsValue) * ratio;
        return (0, tsparticles_engine_1.clamp)(value, particleValue, modeValue);
    }
    else if (modeValue < optionsValue) {
        const value = particleValue - (optionsValue - modeValue) * ratio;
        return (0, tsparticles_engine_1.clamp)(value, modeValue, particleValue);
    }
}
exports.calculateBubbleValue = calculateBubbleValue;


/***/ }),

/***/ 12528:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadExternalBubbleInteraction = void 0;
const Bubbler_1 = __webpack_require__(47538);
async function loadExternalBubbleInteraction(engine, refresh = true) {
    await engine.addInteractor("externalBubble", (container) => new Bubbler_1.Bubbler(container), refresh);
}
exports.loadExternalBubbleInteraction = loadExternalBubbleInteraction;
__exportStar(__webpack_require__(61230), exports);
__exportStar(__webpack_require__(26581), exports);
__exportStar(__webpack_require__(2639), exports);
__exportStar(__webpack_require__(13011), exports);
__exportStar(__webpack_require__(13928), exports);
__exportStar(__webpack_require__(68268), exports);


/***/ }),

/***/ 18136:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Connector = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Connect_1 = __webpack_require__(50117);
const Utils_1 = __webpack_require__(52932);
class Connector extends tsparticles_engine_1.ExternalInteractorBase {
    constructor(container) {
        super(container);
    }
    clear() {
    }
    init() {
        const container = this.container, connect = container.actualOptions.interactivity.modes.connect;
        if (!connect) {
            return;
        }
        container.retina.connectModeDistance = connect.distance * container.retina.pixelRatio;
        container.retina.connectModeRadius = connect.radius * container.retina.pixelRatio;
    }
    async interact() {
        const container = this.container, options = container.actualOptions;
        if (options.interactivity.events.onHover.enable && container.interactivity.status === "pointermove") {
            const mousePos = container.interactivity.mouse.position;
            if (!container.retina.connectModeDistance ||
                container.retina.connectModeDistance < 0 ||
                !container.retina.connectModeRadius ||
                container.retina.connectModeRadius < 0 ||
                !mousePos) {
                return;
            }
            const distance = Math.abs(container.retina.connectModeRadius), query = container.particles.quadTree.queryCircle(mousePos, distance, (p) => this.isEnabled(p));
            let i = 0;
            for (const p1 of query) {
                const pos1 = p1.getPosition();
                for (const p2 of query.slice(i + 1)) {
                    const pos2 = p2.getPosition(), distMax = Math.abs(container.retina.connectModeDistance), xDiff = Math.abs(pos1.x - pos2.x), yDiff = Math.abs(pos1.y - pos2.y);
                    if (xDiff < distMax && yDiff < distMax) {
                        (0, Utils_1.drawConnection)(container, p1, p2);
                    }
                }
                ++i;
            }
        }
    }
    isEnabled(particle) {
        const container = this.container, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity).events;
        if (!(events.onHover.enable && mouse.position)) {
            return false;
        }
        return (0, tsparticles_engine_1.isInArray)("connect", events.onHover.mode);
    }
    loadModeOptions(options, ...sources) {
        if (!options.connect) {
            options.connect = new Connect_1.Connect();
        }
        for (const source of sources) {
            options.connect.load(source?.connect);
        }
    }
    reset() {
    }
}
exports.Connector = Connector;


/***/ }),

/***/ 50117:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Connect = void 0;
const ConnectLinks_1 = __webpack_require__(55711);
class Connect {
    constructor() {
        this.distance = 80;
        this.links = new ConnectLinks_1.ConnectLinks();
        this.radius = 60;
    }
    get lineLinked() {
        return this.links;
    }
    set lineLinked(value) {
        this.links = value;
    }
    get line_linked() {
        return this.links;
    }
    set line_linked(value) {
        this.links = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        this.links.load(data.links ?? data.lineLinked ?? data.line_linked);
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}
exports.Connect = Connect;


/***/ }),

/***/ 55711:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectLinks = void 0;
class ConnectLinks {
    constructor() {
        this.opacity = 0.5;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
exports.ConnectLinks = ConnectLinks;


/***/ }),

/***/ 11656:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 34466:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 52932:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.drawConnection = exports.lineStyle = exports.drawConnectLine = exports.gradient = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
function gradient(context, p1, p2, opacity) {
    const gradStop = Math.floor(p2.getRadius() / p1.getRadius()), color1 = p1.getFillColor(), color2 = p2.getFillColor();
    if (!color1 || !color2) {
        return;
    }
    const sourcePos = p1.getPosition(), destPos = p2.getPosition(), midRgb = (0, tsparticles_engine_1.colorMix)(color1, color2, p1.getRadius(), p2.getRadius()), grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
    grad.addColorStop(0, (0, tsparticles_engine_1.getStyleFromHsl)(color1, opacity));
    grad.addColorStop(gradStop > 1 ? 1 : gradStop, (0, tsparticles_engine_1.getStyleFromRgb)(midRgb, opacity));
    grad.addColorStop(1, (0, tsparticles_engine_1.getStyleFromHsl)(color2, opacity));
    return grad;
}
exports.gradient = gradient;
function drawConnectLine(context, width, lineStyle, begin, end) {
    (0, tsparticles_engine_1.drawLine)(context, begin, end);
    context.lineWidth = width;
    context.strokeStyle = lineStyle;
    context.stroke();
}
exports.drawConnectLine = drawConnectLine;
function lineStyle(container, ctx, p1, p2) {
    const options = container.actualOptions, connectOptions = options.interactivity.modes.connect;
    if (!connectOptions) {
        return;
    }
    return gradient(ctx, p1, p2, connectOptions.links.opacity);
}
exports.lineStyle = lineStyle;
function drawConnection(container, p1, p2) {
    container.canvas.draw((ctx) => {
        const ls = lineStyle(container, ctx, p1, p2);
        if (!ls) {
            return;
        }
        const pos1 = p1.getPosition(), pos2 = p2.getPosition();
        drawConnectLine(ctx, p1.retina.linksWidth ?? 0, ls, pos1, pos2);
    });
}
exports.drawConnection = drawConnection;


/***/ }),

/***/ 30983:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadExternalConnectInteraction = void 0;
const Connector_1 = __webpack_require__(18136);
async function loadExternalConnectInteraction(engine, refresh = true) {
    await engine.addInteractor("externalConnect", (container) => new Connector_1.Connector(container), refresh);
}
exports.loadExternalConnectInteraction = loadExternalConnectInteraction;
__exportStar(__webpack_require__(50117), exports);
__exportStar(__webpack_require__(55711), exports);
__exportStar(__webpack_require__(11656), exports);
__exportStar(__webpack_require__(34466), exports);


/***/ }),

/***/ 75718:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Grabber = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Grab_1 = __webpack_require__(58665);
const Utils_1 = __webpack_require__(58346);
class Grabber extends tsparticles_engine_1.ExternalInteractorBase {
    constructor(container) {
        super(container);
    }
    clear() {
    }
    init() {
        const container = this.container, grab = container.actualOptions.interactivity.modes.grab;
        if (!grab) {
            return;
        }
        container.retina.grabModeDistance = grab.distance * container.retina.pixelRatio;
    }
    async interact() {
        const container = this.container, options = container.actualOptions, interactivity = options.interactivity;
        if (!interactivity.modes.grab ||
            !interactivity.events.onHover.enable ||
            container.interactivity.status !== tsparticles_engine_1.mouseMoveEvent) {
            return;
        }
        const mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        const distance = container.retina.grabModeDistance;
        if (!distance || distance < 0) {
            return;
        }
        const query = container.particles.quadTree.queryCircle(mousePos, distance, (p) => this.isEnabled(p));
        for (const particle of query) {
            const pos = particle.getPosition(), pointDistance = (0, tsparticles_engine_1.getDistance)(pos, mousePos);
            if (pointDistance > distance) {
                continue;
            }
            const grabLineOptions = interactivity.modes.grab.links, lineOpacity = grabLineOptions.opacity, opacityLine = lineOpacity - (pointDistance * lineOpacity) / distance;
            if (opacityLine <= 0) {
                continue;
            }
            const optColor = grabLineOptions.color ?? particle.options.links?.color;
            if (!container.particles.grabLineColor && optColor) {
                const linksOptions = interactivity.modes.grab.links;
                container.particles.grabLineColor = (0, tsparticles_engine_1.getLinkRandomColor)(optColor, linksOptions.blink, linksOptions.consent);
            }
            const colorLine = (0, tsparticles_engine_1.getLinkColor)(particle, undefined, container.particles.grabLineColor);
            if (!colorLine) {
                continue;
            }
            (0, Utils_1.drawGrab)(container, particle, colorLine, opacityLine, mousePos);
        }
    }
    isEnabled(particle) {
        const container = this.container, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity).events;
        return events.onHover.enable && !!mouse.position && (0, tsparticles_engine_1.isInArray)("grab", events.onHover.mode);
    }
    loadModeOptions(options, ...sources) {
        if (!options.grab) {
            options.grab = new Grab_1.Grab();
        }
        for (const source of sources) {
            options.grab.load(source?.grab);
        }
    }
    reset() {
    }
}
exports.Grabber = Grabber;


/***/ }),

/***/ 58665:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Grab = void 0;
const GrabLinks_1 = __webpack_require__(77471);
class Grab {
    constructor() {
        this.distance = 100;
        this.links = new GrabLinks_1.GrabLinks();
    }
    get lineLinked() {
        return this.links;
    }
    set lineLinked(value) {
        this.links = value;
    }
    get line_linked() {
        return this.links;
    }
    set line_linked(value) {
        this.links = value;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        this.links.load(data.links ?? data.lineLinked ?? data.line_linked);
    }
}
exports.Grab = Grab;


/***/ }),

/***/ 77471:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrabLinks = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class GrabLinks {
    constructor() {
        this.blink = false;
        this.consent = false;
        this.opacity = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.blink !== undefined) {
            this.blink = data.blink;
        }
        if (data.color !== undefined) {
            this.color = tsparticles_engine_1.OptionsColor.create(this.color, data.color);
        }
        if (data.consent !== undefined) {
            this.consent = data.consent;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
exports.GrabLinks = GrabLinks;


/***/ }),

/***/ 62578:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 72277:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 58346:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.drawGrab = exports.drawGrabLine = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
function drawGrabLine(context, width, begin, end, colorLine, opacity) {
    (0, tsparticles_engine_1.drawLine)(context, begin, end);
    context.strokeStyle = (0, tsparticles_engine_1.getStyleFromRgb)(colorLine, opacity);
    context.lineWidth = width;
    context.stroke();
}
exports.drawGrabLine = drawGrabLine;
function drawGrab(container, particle, lineColor, opacity, mousePos) {
    container.canvas.draw((ctx) => {
        const beginPos = particle.getPosition();
        drawGrabLine(ctx, particle.retina.linksWidth ?? 0, beginPos, mousePos, lineColor, opacity);
    });
}
exports.drawGrab = drawGrab;


/***/ }),

/***/ 10183:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadExternalGrabInteraction = void 0;
const Grabber_1 = __webpack_require__(75718);
async function loadExternalGrabInteraction(engine, refresh = true) {
    await engine.addInteractor("externalGrab", (container) => new Grabber_1.Grabber(container), refresh);
}
exports.loadExternalGrabInteraction = loadExternalGrabInteraction;
__exportStar(__webpack_require__(58665), exports);
__exportStar(__webpack_require__(77471), exports);
__exportStar(__webpack_require__(62578), exports);
__exportStar(__webpack_require__(72277), exports);


/***/ }),

/***/ 6772:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Pauser = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class Pauser extends tsparticles_engine_1.ExternalInteractorBase {
    constructor(container) {
        super(container);
        this.handleClickMode = (mode) => {
            if (mode !== "pause") {
                return;
            }
            const container = this.container;
            if (container.getAnimationStatus()) {
                container.pause();
            }
            else {
                container.play();
            }
        };
    }
    clear() {
    }
    init() {
    }
    async interact() {
    }
    isEnabled() {
        return true;
    }
    reset() {
    }
}
exports.Pauser = Pauser;


/***/ }),

/***/ 49391:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadExternalPauseInteraction = void 0;
const Pauser_1 = __webpack_require__(6772);
async function loadExternalPauseInteraction(engine, refresh = true) {
    await engine.addInteractor("externalPause", (container) => new Pauser_1.Pauser(container), refresh);
}
exports.loadExternalPauseInteraction = loadExternalPauseInteraction;


/***/ }),

/***/ 65110:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Push = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class Push {
    constructor() {
        this.default = true;
        this.groups = [];
        this.quantity = 4;
    }
    get particles_nb() {
        return this.quantity;
    }
    set particles_nb(value) {
        this.quantity = (0, tsparticles_engine_1.setRangeValue)(value);
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.default !== undefined) {
            this.default = data.default;
        }
        if (data.groups !== undefined) {
            this.groups = data.groups.map((t) => t);
        }
        if (!this.groups.length) {
            this.default = true;
        }
        const quantity = data.quantity ?? data.particles_nb;
        if (quantity !== undefined) {
            this.quantity = (0, tsparticles_engine_1.setRangeValue)(quantity);
        }
    }
}
exports.Push = Push;


/***/ }),

/***/ 21763:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 99057:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Pusher = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Push_1 = __webpack_require__(65110);
class Pusher extends tsparticles_engine_1.ExternalInteractorBase {
    constructor(container) {
        super(container);
        this.handleClickMode = (mode) => {
            if (mode !== "push") {
                return;
            }
            const container = this.container, options = container.actualOptions, pushOptions = options.interactivity.modes.push;
            if (!pushOptions) {
                return;
            }
            const quantity = (0, tsparticles_engine_1.getRangeValue)(pushOptions.quantity);
            if (quantity <= 0) {
                return;
            }
            const group = (0, tsparticles_engine_1.itemFromArray)([undefined, ...pushOptions.groups]), groupOptions = group !== undefined ? container.actualOptions.particles.groups[group] : undefined;
            container.particles.push(quantity, container.interactivity.mouse, groupOptions, group);
        };
    }
    clear() {
    }
    init() {
    }
    async interact() {
    }
    isEnabled() {
        return true;
    }
    loadModeOptions(options, ...sources) {
        if (!options.push) {
            options.push = new Push_1.Push();
        }
        for (const source of sources) {
            options.push.load(source?.push);
        }
    }
    reset() {
    }
}
exports.Pusher = Pusher;


/***/ }),

/***/ 49966:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadExternalPushInteraction = void 0;
const Pusher_1 = __webpack_require__(99057);
async function loadExternalPushInteraction(engine, refresh = true) {
    await engine.addInteractor("externalPush", (container) => new Pusher_1.Pusher(container), refresh);
}
exports.loadExternalPushInteraction = loadExternalPushInteraction;
__exportStar(__webpack_require__(65110), exports);
__exportStar(__webpack_require__(21763), exports);


/***/ }),

/***/ 72105:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Remove = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class Remove {
    constructor() {
        this.quantity = 2;
    }
    get particles_nb() {
        return this.quantity;
    }
    set particles_nb(value) {
        this.quantity = (0, tsparticles_engine_1.setRangeValue)(value);
    }
    load(data) {
        if (!data) {
            return;
        }
        const quantity = data.quantity ?? data.particles_nb;
        if (quantity !== undefined) {
            this.quantity = (0, tsparticles_engine_1.setRangeValue)(quantity);
        }
    }
}
exports.Remove = Remove;


/***/ }),

/***/ 91797:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 40570:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Remover = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Remove_1 = __webpack_require__(72105);
class Remover extends tsparticles_engine_1.ExternalInteractorBase {
    constructor(container) {
        super(container);
        this.handleClickMode = (mode) => {
            const container = this.container, options = container.actualOptions;
            if (!options.interactivity.modes.remove || mode !== "remove") {
                return;
            }
            const removeNb = (0, tsparticles_engine_1.getRangeValue)(options.interactivity.modes.remove.quantity);
            container.particles.removeQuantity(removeNb);
        };
    }
    clear() {
    }
    init() {
    }
    async interact() {
    }
    isEnabled() {
        return true;
    }
    loadModeOptions(options, ...sources) {
        if (!options.remove) {
            options.remove = new Remove_1.Remove();
        }
        for (const source of sources) {
            options.remove.load(source?.remove);
        }
    }
    reset() {
    }
}
exports.Remover = Remover;


/***/ }),

/***/ 38165:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadExternalRemoveInteraction = void 0;
const Remover_1 = __webpack_require__(40570);
async function loadExternalRemoveInteraction(engine, refresh = true) {
    await engine.addInteractor("externalRemove", (container) => new Remover_1.Remover(container), refresh);
}
exports.loadExternalRemoveInteraction = loadExternalRemoveInteraction;
__exportStar(__webpack_require__(72105), exports);
__exportStar(__webpack_require__(91797), exports);


/***/ }),

/***/ 10806:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Repulse = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const RepulseBase_1 = __webpack_require__(50653);
const RepulseDiv_1 = __webpack_require__(87979);
class Repulse extends RepulseBase_1.RepulseBase {
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        this.divs = (0, tsparticles_engine_1.executeOnSingleOrMultiple)(data.divs, (div) => {
            const tmp = new RepulseDiv_1.RepulseDiv();
            tmp.load(div);
            return tmp;
        });
    }
}
exports.Repulse = Repulse;


/***/ }),

/***/ 50653:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RepulseBase = void 0;
class RepulseBase {
    constructor() {
        this.distance = 200;
        this.duration = 0.4;
        this.factor = 100;
        this.speed = 1;
        this.maxSpeed = 50;
        this.easing = "ease-out-quad";
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.duration !== undefined) {
            this.duration = data.duration;
        }
        if (data.easing !== undefined) {
            this.easing = data.easing;
        }
        if (data.factor !== undefined) {
            this.factor = data.factor;
        }
        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
        if (data.maxSpeed !== undefined) {
            this.maxSpeed = data.maxSpeed;
        }
    }
}
exports.RepulseBase = RepulseBase;


/***/ }),

/***/ 87979:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RepulseDiv = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const RepulseBase_1 = __webpack_require__(50653);
class RepulseDiv extends RepulseBase_1.RepulseBase {
    constructor() {
        super();
        this.selectors = [];
    }
    get ids() {
        return (0, tsparticles_engine_1.executeOnSingleOrMultiple)(this.selectors, (t) => t.replace("#", ""));
    }
    set ids(value) {
        this.selectors = (0, tsparticles_engine_1.executeOnSingleOrMultiple)(value, (t) => `#${t}`);
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        if (data.ids !== undefined) {
            this.ids = data.ids;
        }
        if (data.selectors !== undefined) {
            this.selectors = data.selectors;
        }
    }
}
exports.RepulseDiv = RepulseDiv;


/***/ }),

/***/ 78242:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 18726:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 99594:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 41096:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Repulser = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Repulse_1 = __webpack_require__(10806);
class Repulser extends tsparticles_engine_1.ExternalInteractorBase {
    constructor(engine, container) {
        super(container);
        this._clickRepulse = () => {
            const container = this.container, repulseOptions = container.actualOptions.interactivity.modes.repulse;
            if (!repulseOptions) {
                return;
            }
            const repulse = container.repulse || { particles: [] };
            if (!repulse.finish) {
                if (!repulse.count) {
                    repulse.count = 0;
                }
                repulse.count++;
                if (repulse.count === container.particles.count) {
                    repulse.finish = true;
                }
            }
            if (repulse.clicking) {
                const repulseDistance = container.retina.repulseModeDistance;
                if (!repulseDistance || repulseDistance < 0) {
                    return;
                }
                const repulseRadius = Math.pow(repulseDistance / 6, 3), mouseClickPos = container.interactivity.mouse.clickPosition;
                if (mouseClickPos === undefined) {
                    return;
                }
                const range = new tsparticles_engine_1.Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius), query = container.particles.quadTree.query(range, (p) => this.isEnabled(p));
                for (const particle of query) {
                    const { dx, dy, distance } = (0, tsparticles_engine_1.getDistances)(mouseClickPos, particle.position), d = distance ** 2, velocity = repulseOptions.speed, force = (-repulseRadius * velocity) / d;
                    if (d <= repulseRadius) {
                        repulse.particles.push(particle);
                        const vect = tsparticles_engine_1.Vector.create(dx, dy);
                        vect.length = force;
                        particle.velocity.setTo(vect);
                    }
                }
            }
            else if (repulse.clicking === false) {
                for (const particle of repulse.particles) {
                    particle.velocity.setTo(particle.initialVelocity);
                }
                repulse.particles = [];
            }
        };
        this._hoverRepulse = () => {
            const container = this.container, mousePos = container.interactivity.mouse.position, repulseRadius = container.retina.repulseModeDistance;
            if (!repulseRadius || repulseRadius < 0 || !mousePos) {
                return;
            }
            this._processRepulse(mousePos, repulseRadius, new tsparticles_engine_1.Circle(mousePos.x, mousePos.y, repulseRadius));
        };
        this._processRepulse = (position, repulseRadius, area, divRepulse) => {
            const container = this.container, query = container.particles.quadTree.query(area, (p) => this.isEnabled(p)), repulseOptions = container.actualOptions.interactivity.modes.repulse;
            if (!repulseOptions) {
                return;
            }
            for (const particle of query) {
                const { dx, dy, distance } = (0, tsparticles_engine_1.getDistances)(particle.position, position), velocity = (divRepulse?.speed ?? repulseOptions.speed) * repulseOptions.factor, repulseFactor = (0, tsparticles_engine_1.clamp)((0, tsparticles_engine_1.getEasing)(repulseOptions.easing)(1 - distance / repulseRadius) * velocity, 0, repulseOptions.maxSpeed), normVec = tsparticles_engine_1.Vector.create(distance === 0 ? velocity : (dx / distance) * repulseFactor, distance === 0 ? velocity : (dy / distance) * repulseFactor);
                particle.position.addTo(normVec);
            }
        };
        this._singleSelectorRepulse = (selector, div) => {
            const container = this.container, repulse = container.actualOptions.interactivity.modes.repulse;
            if (!repulse) {
                return;
            }
            const query = document.querySelectorAll(selector);
            if (!query.length) {
                return;
            }
            query.forEach((item) => {
                const elem = item, pxRatio = container.retina.pixelRatio, pos = {
                    x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
                    y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio,
                }, repulseRadius = (elem.offsetWidth / 2) * pxRatio, area = div.type === "circle"
                    ? new tsparticles_engine_1.Circle(pos.x, pos.y, repulseRadius)
                    : new tsparticles_engine_1.Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), divs = repulse.divs, divRepulse = (0, tsparticles_engine_1.divMode)(divs, elem);
                this._processRepulse(pos, repulseRadius, area, divRepulse);
            });
        };
        this._engine = engine;
        if (!container.repulse) {
            container.repulse = { particles: [] };
        }
        this.handleClickMode = (mode) => {
            const options = this.container.actualOptions, repulseOpts = options.interactivity.modes.repulse;
            if (!repulseOpts || mode !== "repulse") {
                return;
            }
            if (!container.repulse) {
                container.repulse = { particles: [] };
            }
            const repulse = container.repulse;
            repulse.clicking = true;
            repulse.count = 0;
            for (const particle of container.repulse.particles) {
                if (!this.isEnabled(particle)) {
                    continue;
                }
                particle.velocity.setTo(particle.initialVelocity);
            }
            repulse.particles = [];
            repulse.finish = false;
            setTimeout(() => {
                if (container.destroyed) {
                    return;
                }
                repulse.clicking = false;
            }, repulseOpts.duration * 1000);
        };
    }
    clear() {
    }
    init() {
        const container = this.container, repulse = container.actualOptions.interactivity.modes.repulse;
        if (!repulse) {
            return;
        }
        container.retina.repulseModeDistance = repulse.distance * container.retina.pixelRatio;
    }
    async interact() {
        const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === tsparticles_engine_1.mouseMoveEvent, events = options.interactivity.events, hover = events.onHover, hoverEnabled = hover.enable, hoverMode = hover.mode, click = events.onClick, clickEnabled = click.enable, clickMode = click.mode, divs = events.onDiv;
        if (mouseMoveStatus && hoverEnabled && (0, tsparticles_engine_1.isInArray)("repulse", hoverMode)) {
            this._hoverRepulse();
        }
        else if (clickEnabled && (0, tsparticles_engine_1.isInArray)("repulse", clickMode)) {
            this._clickRepulse();
        }
        else {
            (0, tsparticles_engine_1.divModeExecute)("repulse", divs, (selector, div) => this._singleSelectorRepulse(selector, div));
        }
    }
    isEnabled(particle) {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? options.interactivity).events, divs = events.onDiv, hover = events.onHover, click = events.onClick, divRepulse = (0, tsparticles_engine_1.isDivModeEnabled)("repulse", divs);
        if (!(divRepulse || (hover.enable && mouse.position) || (click.enable && mouse.clickPosition))) {
            return false;
        }
        const hoverMode = hover.mode, clickMode = click.mode;
        return (0, tsparticles_engine_1.isInArray)("repulse", hoverMode) || (0, tsparticles_engine_1.isInArray)("repulse", clickMode) || divRepulse;
    }
    loadModeOptions(options, ...sources) {
        if (!options.repulse) {
            options.repulse = new Repulse_1.Repulse();
        }
        for (const source of sources) {
            options.repulse.load(source?.repulse);
        }
    }
    reset() {
    }
}
exports.Repulser = Repulser;


/***/ }),

/***/ 47585:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadExternalRepulseInteraction = void 0;
const Repulser_1 = __webpack_require__(41096);
async function loadExternalRepulseInteraction(engine, refresh = true) {
    await engine.addInteractor("externalRepulse", (container) => new Repulser_1.Repulser(engine, container), refresh);
}
exports.loadExternalRepulseInteraction = loadExternalRepulseInteraction;
__exportStar(__webpack_require__(50653), exports);
__exportStar(__webpack_require__(87979), exports);
__exportStar(__webpack_require__(10806), exports);
__exportStar(__webpack_require__(18726), exports);
__exportStar(__webpack_require__(99594), exports);
__exportStar(__webpack_require__(78242), exports);


/***/ }),

/***/ 80659:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Slow = void 0;
class Slow {
    constructor() {
        this.factor = 3;
        this.radius = 200;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.factor !== undefined) {
            this.factor = data.factor;
        }
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}
exports.Slow = Slow;


/***/ }),

/***/ 41673:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 26520:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Slower = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Slow_1 = __webpack_require__(80659);
class Slower extends tsparticles_engine_1.ExternalInteractorBase {
    constructor(container) {
        super(container);
    }
    clear(particle, delta, force) {
        if (particle.slow.inRange && !force) {
            return;
        }
        particle.slow.factor = 1;
    }
    init() {
        const container = this.container, slow = container.actualOptions.interactivity.modes.slow;
        if (!slow) {
            return;
        }
        container.retina.slowModeRadius = slow.radius * container.retina.pixelRatio;
    }
    async interact() {
    }
    isEnabled(particle) {
        const container = this.container, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity).events;
        return events.onHover.enable && !!mouse.position && (0, tsparticles_engine_1.isInArray)("slow", events.onHover.mode);
    }
    loadModeOptions(options, ...sources) {
        if (!options.slow) {
            options.slow = new Slow_1.Slow();
        }
        for (const source of sources) {
            options.slow.load(source?.slow);
        }
    }
    reset(particle) {
        particle.slow.inRange = false;
        const container = this.container, options = container.actualOptions, mousePos = container.interactivity.mouse.position, radius = container.retina.slowModeRadius, slowOptions = options.interactivity.modes.slow;
        if (!slowOptions || !radius || radius < 0 || !mousePos) {
            return;
        }
        const particlePos = particle.getPosition(), dist = (0, tsparticles_engine_1.getDistance)(mousePos, particlePos), proximityFactor = dist / radius, slowFactor = slowOptions.factor, { slow } = particle;
        if (dist > radius) {
            return;
        }
        slow.inRange = true;
        slow.factor = proximityFactor / slowFactor;
    }
}
exports.Slower = Slower;


/***/ }),

/***/ 56856:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadExternalSlowInteraction = void 0;
const Slower_1 = __webpack_require__(26520);
async function loadExternalSlowInteraction(engine, refresh = true) {
    await engine.addInteractor("externalSlow", (container) => new Slower_1.Slower(container), refresh);
}
exports.loadExternalSlowInteraction = loadExternalSlowInteraction;
__exportStar(__webpack_require__(80659), exports);
__exportStar(__webpack_require__(41673), exports);


/***/ }),

/***/ 24934:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Trail = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class Trail {
    constructor() {
        this.delay = 1;
        this.pauseOnStop = false;
        this.quantity = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.delay !== undefined) {
            this.delay = data.delay;
        }
        if (data.quantity !== undefined) {
            this.quantity = data.quantity;
        }
        if (data.particles !== undefined) {
            this.particles = (0, tsparticles_engine_1.deepExtend)({}, data.particles);
        }
        if (data.pauseOnStop !== undefined) {
            this.pauseOnStop = data.pauseOnStop;
        }
    }
}
exports.Trail = Trail;


/***/ }),

/***/ 86522:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 41633:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrailMaker = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Trail_1 = __webpack_require__(24934);
class TrailMaker extends tsparticles_engine_1.ExternalInteractorBase {
    constructor(container) {
        super(container);
        this._delay = 0;
    }
    clear() {
    }
    init() {
    }
    async interact(delta) {
        const container = this.container, { interactivity } = container;
        if (!container.retina.reduceFactor) {
            return;
        }
        const options = container.actualOptions, trailOptions = options.interactivity.modes.trail;
        if (!trailOptions) {
            return;
        }
        const optDelay = (trailOptions.delay * 1000) / this.container.retina.reduceFactor;
        if (this._delay < optDelay) {
            this._delay += delta.value;
        }
        if (this._delay < optDelay) {
            return;
        }
        const canEmit = !(trailOptions.pauseOnStop &&
            (interactivity.mouse.position === this._lastPosition ||
                (interactivity.mouse.position?.x === this._lastPosition?.x &&
                    interactivity.mouse.position?.y === this._lastPosition?.y)));
        const mousePos = container.interactivity.mouse.position;
        if (mousePos) {
            this._lastPosition = { ...mousePos };
        }
        else {
            delete this._lastPosition;
        }
        if (canEmit) {
            container.particles.push(trailOptions.quantity, container.interactivity.mouse, trailOptions.particles);
        }
        this._delay -= optDelay;
    }
    isEnabled(particle) {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? options.interactivity).events;
        return ((mouse.clicking && mouse.inside && !!mouse.position && (0, tsparticles_engine_1.isInArray)("trail", events.onClick.mode)) ||
            (mouse.inside && !!mouse.position && (0, tsparticles_engine_1.isInArray)("trail", events.onHover.mode)));
    }
    loadModeOptions(options, ...sources) {
        if (!options.trail) {
            options.trail = new Trail_1.Trail();
        }
        for (const source of sources) {
            options.trail.load(source?.trail);
        }
    }
    reset() {
    }
}
exports.TrailMaker = TrailMaker;


/***/ }),

/***/ 91492:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadExternalTrailInteraction = void 0;
const TrailMaker_1 = __webpack_require__(41633);
async function loadExternalTrailInteraction(engine, refresh = true) {
    await engine.addInteractor("externalTrail", (container) => new TrailMaker_1.TrailMaker(container), refresh);
}
exports.loadExternalTrailInteraction = loadExternalTrailInteraction;
__exportStar(__webpack_require__(24934), exports);
__exportStar(__webpack_require__(86522), exports);


/***/ }),

/***/ 71664:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Attractor = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class Attractor extends tsparticles_engine_1.ParticlesInteractorBase {
    constructor(container) {
        super(container);
    }
    clear() {
    }
    init() {
    }
    async interact(p1) {
        const container = this.container, distance = p1.retina.attractDistance ?? container.retina.attractDistance, pos1 = p1.getPosition(), query = container.particles.quadTree.queryCircle(pos1, distance);
        for (const p2 of query) {
            if (p1 === p2 || !p2.options.move.attract.enable || p2.destroyed || p2.spawning) {
                continue;
            }
            const pos2 = p2.getPosition(), { dx, dy } = (0, tsparticles_engine_1.getDistances)(pos1, pos2), rotate = p1.options.move.attract.rotate, ax = dx / (rotate.x * 1000), ay = dy / (rotate.y * 1000), p1Factor = p2.size.value / p1.size.value, p2Factor = 1 / p1Factor;
            p1.velocity.x -= ax * p1Factor;
            p1.velocity.y -= ay * p1Factor;
            p2.velocity.x += ax * p2Factor;
            p2.velocity.y += ay * p2Factor;
        }
    }
    isEnabled(particle) {
        return particle.options.move.attract.enable;
    }
    reset() {
    }
}
exports.Attractor = Attractor;


/***/ }),

/***/ 67011:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadParticlesAttractInteraction = void 0;
const Attractor_1 = __webpack_require__(71664);
async function loadParticlesAttractInteraction(engine, refresh = true) {
    await engine.addInteractor("particlesAttract", (container) => new Attractor_1.Attractor(container), refresh);
}
exports.loadParticlesAttractInteraction = loadParticlesAttractInteraction;


/***/ }),

/***/ 89453:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.absorb = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
function updateAbsorb(p1, r1, p2, r2, delta, pixelRatio) {
    const factor = (0, tsparticles_engine_1.clamp)((p1.options.collisions.absorb.speed * delta.factor) / 10, 0, r2);
    p1.size.value += factor / 2;
    p2.size.value -= factor;
    if (r2 <= pixelRatio) {
        p2.size.value = 0;
        p2.destroy();
    }
}
function absorb(p1, p2, delta, pixelRatio) {
    const r1 = p1.getRadius(), r2 = p2.getRadius();
    if (r1 === undefined && r2 !== undefined) {
        p1.destroy();
    }
    else if (r1 !== undefined && r2 === undefined) {
        p2.destroy();
    }
    else if (r1 !== undefined && r2 !== undefined) {
        if (r1 >= r2) {
            updateAbsorb(p1, r1, p2, r2, delta, pixelRatio);
        }
        else {
            updateAbsorb(p2, r2, p1, r1, delta, pixelRatio);
        }
    }
}
exports.absorb = absorb;


/***/ }),

/***/ 52694:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bounce = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const fixBounceSpeed = (p) => {
    if (p.collisionMaxSpeed === undefined) {
        p.collisionMaxSpeed = (0, tsparticles_engine_1.getRangeValue)(p.options.collisions.maxSpeed);
    }
    if (p.velocity.length > p.collisionMaxSpeed) {
        p.velocity.length = p.collisionMaxSpeed;
    }
};
function bounce(p1, p2) {
    (0, tsparticles_engine_1.circleBounce)((0, tsparticles_engine_1.circleBounceDataFromParticle)(p1), (0, tsparticles_engine_1.circleBounceDataFromParticle)(p2));
    fixBounceSpeed(p1);
    fixBounceSpeed(p2);
}
exports.bounce = bounce;


/***/ }),

/***/ 35045:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Collider = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const ResolveCollision_1 = __webpack_require__(30572);
class Collider extends tsparticles_engine_1.ParticlesInteractorBase {
    constructor(container) {
        super(container);
    }
    clear() {
    }
    init() {
    }
    async interact(p1, delta) {
        if (p1.destroyed || p1.spawning) {
            return;
        }
        const container = this.container, pos1 = p1.getPosition(), radius1 = p1.getRadius(), query = container.particles.quadTree.queryCircle(pos1, radius1 * 2);
        for (const p2 of query) {
            if (p1 === p2 ||
                !p2.options.collisions.enable ||
                p1.options.collisions.mode !== p2.options.collisions.mode ||
                p2.destroyed ||
                p2.spawning) {
                continue;
            }
            const pos2 = p2.getPosition(), radius2 = p2.getRadius();
            if (Math.abs(Math.round(pos1.z) - Math.round(pos2.z)) > radius1 + radius2) {
                continue;
            }
            const dist = (0, tsparticles_engine_1.getDistance)(pos1, pos2), distP = radius1 + radius2;
            if (dist > distP) {
                continue;
            }
            (0, ResolveCollision_1.resolveCollision)(p1, p2, delta, container.retina.pixelRatio);
        }
    }
    isEnabled(particle) {
        return particle.options.collisions.enable;
    }
    reset() {
    }
}
exports.Collider = Collider;


/***/ }),

/***/ 41765:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.destroy = void 0;
const Bounce_1 = __webpack_require__(52694);
function destroy(p1, p2) {
    if (!p1.unbreakable && !p2.unbreakable) {
        (0, Bounce_1.bounce)(p1, p2);
    }
    if (p1.getRadius() === undefined && p2.getRadius() !== undefined) {
        p1.destroy();
    }
    else if (p1.getRadius() !== undefined && p2.getRadius() === undefined) {
        p2.destroy();
    }
    else if (p1.getRadius() !== undefined && p2.getRadius() !== undefined) {
        const deleteP = p1.getRadius() >= p2.getRadius() ? p2 : p1;
        deleteP.destroy();
    }
}
exports.destroy = destroy;


/***/ }),

/***/ 30572:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveCollision = void 0;
const Absorb_1 = __webpack_require__(89453);
const Bounce_1 = __webpack_require__(52694);
const Destroy_1 = __webpack_require__(41765);
function resolveCollision(p1, p2, delta, pixelRatio) {
    switch (p1.options.collisions.mode) {
        case "absorb": {
            (0, Absorb_1.absorb)(p1, p2, delta, pixelRatio);
            break;
        }
        case "bounce": {
            (0, Bounce_1.bounce)(p1, p2);
            break;
        }
        case "destroy": {
            (0, Destroy_1.destroy)(p1, p2);
            break;
        }
    }
}
exports.resolveCollision = resolveCollision;


/***/ }),

/***/ 4104:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadParticlesCollisionsInteraction = void 0;
const Collider_1 = __webpack_require__(35045);
async function loadParticlesCollisionsInteraction(engine, refresh = true) {
    await engine.addInteractor("particlesCollisions", (container) => new Collider_1.Collider(container), refresh);
}
exports.loadParticlesCollisionsInteraction = loadParticlesCollisionsInteraction;


/***/ }),

/***/ 87546:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleWarp = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class CircleWarp extends tsparticles_engine_1.Circle {
    constructor(x, y, radius, canvasSize) {
        super(x, y, radius);
        this.canvasSize = canvasSize;
        this.canvasSize = { ...canvasSize };
    }
    contains(point) {
        const { width, height } = this.canvasSize;
        const { x, y } = point;
        return (super.contains(point) ||
            super.contains({ x: x - width, y }) ||
            super.contains({ x: x - width, y: y - height }) ||
            super.contains({ x, y: y - height }));
    }
    intersects(range) {
        if (super.intersects(range)) {
            return true;
        }
        const rect = range, circle = range, newPos = {
            x: range.position.x - this.canvasSize.width,
            y: range.position.y - this.canvasSize.height,
        };
        if (circle.radius !== undefined) {
            const biggerCircle = new tsparticles_engine_1.Circle(newPos.x, newPos.y, circle.radius * 2);
            return super.intersects(biggerCircle);
        }
        else if (rect.size !== undefined) {
            const rectSW = new tsparticles_engine_1.Rectangle(newPos.x, newPos.y, rect.size.width * 2, rect.size.height * 2);
            return super.intersects(rectSW);
        }
        return false;
    }
}
exports.CircleWarp = CircleWarp;


/***/ }),

/***/ 22853:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinkInstance = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Utils_1 = __webpack_require__(5243);
class LinkInstance {
    constructor(container) {
        this.container = container;
        this._drawLinkLine = (p1, link) => {
            const p1LinksOptions = p1.options.links;
            if (!p1LinksOptions?.enable) {
                return;
            }
            const container = this.container, options = container.actualOptions, p2 = link.destination, pos1 = p1.getPosition(), pos2 = p2.getPosition();
            let opacity = link.opacity;
            container.canvas.draw((ctx) => {
                let colorLine;
                const twinkle = p1.options.twinkle?.lines;
                if (twinkle?.enable) {
                    const twinkleFreq = twinkle.frequency, twinkleRgb = (0, tsparticles_engine_1.rangeColorToRgb)(twinkle.color), twinkling = (0, tsparticles_engine_1.getRandom)() < twinkleFreq;
                    if (twinkling && twinkleRgb) {
                        colorLine = twinkleRgb;
                        opacity = (0, tsparticles_engine_1.getRangeValue)(twinkle.opacity);
                    }
                }
                if (!colorLine) {
                    const linkColor = p1LinksOptions.id !== undefined
                        ? container.particles.linksColors.get(p1LinksOptions.id)
                        : container.particles.linksColor;
                    colorLine = (0, tsparticles_engine_1.getLinkColor)(p1, p2, linkColor);
                }
                if (!colorLine) {
                    return;
                }
                const width = p1.retina.linksWidth ?? 0, maxDistance = p1.retina.linksDistance ?? 0, { backgroundMask } = options;
                (0, Utils_1.drawLinkLine)({
                    context: ctx,
                    width,
                    begin: pos1,
                    end: pos2,
                    maxDistance,
                    canvasSize: container.canvas.size,
                    links: p1LinksOptions,
                    backgroundMask: backgroundMask,
                    colorLine,
                    opacity,
                });
            });
        };
        this._drawLinkTriangle = (p1, link1, link2) => {
            const linksOptions = p1.options.links;
            if (!linksOptions?.enable) {
                return;
            }
            const triangleOptions = linksOptions.triangles;
            if (!triangleOptions.enable) {
                return;
            }
            const container = this.container, options = container.actualOptions, p2 = link1.destination, p3 = link2.destination, opacityTriangle = triangleOptions.opacity ?? (link1.opacity + link2.opacity) / 2;
            if (opacityTriangle <= 0) {
                return;
            }
            container.canvas.draw((ctx) => {
                const pos1 = p1.getPosition(), pos2 = p2.getPosition(), pos3 = p3.getPosition(), linksDistance = p1.retina.linksDistance ?? 0;
                if ((0, tsparticles_engine_1.getDistance)(pos1, pos2) > linksDistance ||
                    (0, tsparticles_engine_1.getDistance)(pos3, pos2) > linksDistance ||
                    (0, tsparticles_engine_1.getDistance)(pos3, pos1) > linksDistance) {
                    return;
                }
                let colorTriangle = (0, tsparticles_engine_1.rangeColorToRgb)(triangleOptions.color);
                if (!colorTriangle) {
                    const linkColor = linksOptions.id !== undefined
                        ? container.particles.linksColors.get(linksOptions.id)
                        : container.particles.linksColor;
                    colorTriangle = (0, tsparticles_engine_1.getLinkColor)(p1, p2, linkColor);
                }
                if (!colorTriangle) {
                    return;
                }
                (0, Utils_1.drawLinkTriangle)({
                    context: ctx,
                    pos1,
                    pos2,
                    pos3,
                    backgroundMask: options.backgroundMask,
                    colorTriangle,
                    opacityTriangle,
                });
            });
        };
        this._drawTriangles = (options, p1, link, p1Links) => {
            const p2 = link.destination;
            if (!(options.links?.triangles.enable && p2.options.links?.triangles.enable)) {
                return;
            }
            const vertices = p2.links?.filter((t) => {
                const linkFreq = this._getLinkFrequency(p2, t.destination);
                return (p2.options.links &&
                    linkFreq <= p2.options.links.frequency &&
                    p1Links.findIndex((l) => l.destination === t.destination) >= 0);
            });
            if (!vertices?.length) {
                return;
            }
            for (const vertex of vertices) {
                const p3 = vertex.destination, triangleFreq = this._getTriangleFrequency(p1, p2, p3);
                if (triangleFreq > options.links.triangles.frequency) {
                    continue;
                }
                this._drawLinkTriangle(p1, link, vertex);
            }
        };
        this._getLinkFrequency = (p1, p2) => {
            return (0, Utils_1.setLinkFrequency)([p1, p2], this._freqs.links);
        };
        this._getTriangleFrequency = (p1, p2, p3) => {
            return (0, Utils_1.setLinkFrequency)([p1, p2, p3], this._freqs.triangles);
        };
        this._freqs = {
            links: new Map(),
            triangles: new Map(),
        };
    }
    drawParticle(context, particle) {
        const { links, options } = particle;
        if (!links || links.length <= 0) {
            return;
        }
        const p1Links = links.filter((l) => options.links && this._getLinkFrequency(particle, l.destination) <= options.links.frequency);
        for (const link of p1Links) {
            this._drawTriangles(options, particle, link, p1Links);
            if (link.opacity > 0 && (particle.retina.linksWidth ?? 0) > 0) {
                this._drawLinkLine(particle, link);
            }
        }
    }
    async init() {
        this._freqs.links = new Map();
        this._freqs.triangles = new Map();
    }
    particleCreated(particle) {
        particle.links = [];
        if (!particle.options.links) {
            return;
        }
        const ratio = this.container.retina.pixelRatio, { retina } = particle, { distance, width } = particle.options.links;
        retina.linksDistance = distance * ratio;
        retina.linksWidth = width * ratio;
    }
    particleDestroyed(particle) {
        particle.links = [];
    }
}
exports.LinkInstance = LinkInstance;


/***/ }),

/***/ 49251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Linker = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const CircleWarp_1 = __webpack_require__(87546);
const Links_1 = __webpack_require__(58375);
function getLinkDistance(pos1, pos2, optDistance, canvasSize, warp) {
    const { dx, dy, distance } = (0, tsparticles_engine_1.getDistances)(pos1, pos2);
    if (!warp || distance <= optDistance) {
        return distance;
    }
    const absDiffs = {
        x: Math.abs(dx),
        y: Math.abs(dy),
    }, warpDistances = {
        x: Math.min(absDiffs.x, canvasSize.width - absDiffs.x),
        y: Math.min(absDiffs.y, canvasSize.height - absDiffs.y),
    };
    return Math.sqrt(warpDistances.x ** 2 + warpDistances.y ** 2);
}
class Linker extends tsparticles_engine_1.ParticlesInteractorBase {
    constructor(container) {
        super(container);
        this._setColor = (p1) => {
            if (!p1.options.links) {
                return;
            }
            const container = this.linkContainer, linksOptions = p1.options.links;
            let linkColor = linksOptions.id === undefined
                ? container.particles.linksColor
                : container.particles.linksColors.get(linksOptions.id);
            if (linkColor) {
                return;
            }
            const optColor = linksOptions.color;
            linkColor = (0, tsparticles_engine_1.getLinkRandomColor)(optColor, linksOptions.blink, linksOptions.consent);
            if (linksOptions.id === undefined) {
                container.particles.linksColor = linkColor;
            }
            else {
                container.particles.linksColors.set(linksOptions.id, linkColor);
            }
        };
        this.linkContainer = container;
    }
    clear() {
    }
    init() {
        this.linkContainer.particles.linksColor = undefined;
        this.linkContainer.particles.linksColors = new Map();
    }
    async interact(p1) {
        if (!p1.options.links) {
            return;
        }
        p1.links = [];
        const pos1 = p1.getPosition(), container = this.container, canvasSize = container.canvas.size;
        if (pos1.x < 0 || pos1.y < 0 || pos1.x > canvasSize.width || pos1.y > canvasSize.height) {
            return;
        }
        const linkOpt1 = p1.options.links, optOpacity = linkOpt1.opacity, optDistance = p1.retina.linksDistance ?? 0, warp = linkOpt1.warp, range = warp
            ? new CircleWarp_1.CircleWarp(pos1.x, pos1.y, optDistance, canvasSize)
            : new tsparticles_engine_1.Circle(pos1.x, pos1.y, optDistance), query = container.particles.quadTree.query(range);
        for (const p2 of query) {
            const linkOpt2 = p2.options.links;
            if (p1 === p2 ||
                !linkOpt2?.enable ||
                linkOpt1.id !== linkOpt2.id ||
                p2.spawning ||
                p2.destroyed ||
                !p2.links ||
                p1.links.some((t) => t.destination === p2) ||
                p2.links.some((t) => t.destination === p1)) {
                continue;
            }
            const pos2 = p2.getPosition();
            if (pos2.x < 0 || pos2.y < 0 || pos2.x > canvasSize.width || pos2.y > canvasSize.height) {
                continue;
            }
            const distance = getLinkDistance(pos1, pos2, optDistance, canvasSize, warp && linkOpt2.warp);
            if (distance > optDistance) {
                continue;
            }
            const opacityLine = (1 - distance / optDistance) * optOpacity;
            this._setColor(p1);
            p1.links.push({
                destination: p2,
                opacity: opacityLine,
            });
        }
    }
    isEnabled(particle) {
        return !!particle.options.links?.enable;
    }
    loadParticlesOptions(options, ...sources) {
        if (!options.links) {
            options.links = new Links_1.Links();
        }
        for (const source of sources) {
            options.links.load(source?.links ?? source?.lineLinked ?? source?.line_linked);
        }
    }
    reset() {
    }
}
exports.Linker = Linker;


/***/ }),

/***/ 58375:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Links = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const LinksShadow_1 = __webpack_require__(56452);
const LinksTriangle_1 = __webpack_require__(75205);
class Links {
    constructor() {
        this.blink = false;
        this.color = new tsparticles_engine_1.OptionsColor();
        this.color.value = "#fff";
        this.consent = false;
        this.distance = 100;
        this.enable = false;
        this.frequency = 1;
        this.opacity = 1;
        this.shadow = new LinksShadow_1.LinksShadow();
        this.triangles = new LinksTriangle_1.LinksTriangle();
        this.width = 1;
        this.warp = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.id !== undefined) {
            this.id = data.id;
        }
        if (data.blink !== undefined) {
            this.blink = data.blink;
        }
        this.color = tsparticles_engine_1.OptionsColor.create(this.color, data.color);
        if (data.consent !== undefined) {
            this.consent = data.consent;
        }
        if (data.distance !== undefined) {
            this.distance = data.distance;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.frequency !== undefined) {
            this.frequency = data.frequency;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
        this.shadow.load(data.shadow);
        this.triangles.load(data.triangles);
        if (data.width !== undefined) {
            this.width = data.width;
        }
        if (data.warp !== undefined) {
            this.warp = data.warp;
        }
    }
}
exports.Links = Links;


/***/ }),

/***/ 56452:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinksShadow = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class LinksShadow {
    constructor() {
        this.blur = 5;
        this.color = new tsparticles_engine_1.OptionsColor();
        this.color.value = "#000";
        this.enable = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.blur !== undefined) {
            this.blur = data.blur;
        }
        this.color = tsparticles_engine_1.OptionsColor.create(this.color, data.color);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}
exports.LinksShadow = LinksShadow;


/***/ }),

/***/ 75205:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinksTriangle = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class LinksTriangle {
    constructor() {
        this.enable = false;
        this.frequency = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = tsparticles_engine_1.OptionsColor.create(this.color, data.color);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.frequency !== undefined) {
            this.frequency = data.frequency;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
exports.LinksTriangle = LinksTriangle;


/***/ }),

/***/ 51797:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 93717:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 37123:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 5243:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setLinkFrequency = exports.getLinkKey = exports.drawLinkTriangle = exports.drawLinkLine = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
function drawLinkLine(params) {
    let drawn = false;
    const { begin, end, maxDistance, context, canvasSize, width, backgroundMask, colorLine, opacity, links } = params;
    if ((0, tsparticles_engine_1.getDistance)(begin, end) <= maxDistance) {
        (0, tsparticles_engine_1.drawLine)(context, begin, end);
        drawn = true;
    }
    else if (links.warp) {
        let pi1;
        let pi2;
        const endNE = {
            x: end.x - canvasSize.width,
            y: end.y,
        };
        const d1 = (0, tsparticles_engine_1.getDistances)(begin, endNE);
        if (d1.distance <= maxDistance) {
            const yi = begin.y - (d1.dy / d1.dx) * begin.x;
            pi1 = { x: 0, y: yi };
            pi2 = { x: canvasSize.width, y: yi };
        }
        else {
            const endSW = {
                x: end.x,
                y: end.y - canvasSize.height,
            };
            const d2 = (0, tsparticles_engine_1.getDistances)(begin, endSW);
            if (d2.distance <= maxDistance) {
                const yi = begin.y - (d2.dy / d2.dx) * begin.x;
                const xi = -yi / (d2.dy / d2.dx);
                pi1 = { x: xi, y: 0 };
                pi2 = { x: xi, y: canvasSize.height };
            }
            else {
                const endSE = {
                    x: end.x - canvasSize.width,
                    y: end.y - canvasSize.height,
                };
                const d3 = (0, tsparticles_engine_1.getDistances)(begin, endSE);
                if (d3.distance <= maxDistance) {
                    const yi = begin.y - (d3.dy / d3.dx) * begin.x;
                    const xi = -yi / (d3.dy / d3.dx);
                    pi1 = { x: xi, y: yi };
                    pi2 = { x: pi1.x + canvasSize.width, y: pi1.y + canvasSize.height };
                }
            }
        }
        if (pi1 && pi2) {
            (0, tsparticles_engine_1.drawLine)(context, begin, pi1);
            (0, tsparticles_engine_1.drawLine)(context, end, pi2);
            drawn = true;
        }
    }
    if (!drawn) {
        return;
    }
    context.lineWidth = width;
    if (backgroundMask.enable) {
        context.globalCompositeOperation = backgroundMask.composite;
    }
    context.strokeStyle = (0, tsparticles_engine_1.getStyleFromRgb)(colorLine, opacity);
    const { shadow } = links;
    if (shadow.enable) {
        const shadowColor = (0, tsparticles_engine_1.rangeColorToRgb)(shadow.color);
        if (shadowColor) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = (0, tsparticles_engine_1.getStyleFromRgb)(shadowColor);
        }
    }
    context.stroke();
}
exports.drawLinkLine = drawLinkLine;
function drawLinkTriangle(params) {
    const { context, pos1, pos2, pos3, backgroundMask, colorTriangle, opacityTriangle } = params;
    (0, tsparticles_engine_1.drawTriangle)(context, pos1, pos2, pos3);
    if (backgroundMask.enable) {
        context.globalCompositeOperation = backgroundMask.composite;
    }
    context.fillStyle = (0, tsparticles_engine_1.getStyleFromRgb)(colorTriangle, opacityTriangle);
    context.fill();
}
exports.drawLinkTriangle = drawLinkTriangle;
function getLinkKey(ids) {
    ids.sort((a, b) => a - b);
    return ids.join("_");
}
exports.getLinkKey = getLinkKey;
function setLinkFrequency(particles, dictionary) {
    const key = getLinkKey(particles.map((t) => t.id));
    let res = dictionary.get(key);
    if (res === undefined) {
        res = (0, tsparticles_engine_1.getRandom)();
        dictionary.set(key, res);
    }
    return res;
}
exports.setLinkFrequency = setLinkFrequency;


/***/ }),

/***/ 92194:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadParticlesLinksInteraction = void 0;
const interaction_1 = __webpack_require__(62447);
const plugin_1 = __webpack_require__(18494);
async function loadParticlesLinksInteraction(engine, refresh = true) {
    await (0, interaction_1.loadLinksInteraction)(engine, refresh);
    await (0, plugin_1.loadLinksPlugin)(engine, refresh);
}
exports.loadParticlesLinksInteraction = loadParticlesLinksInteraction;
__exportStar(__webpack_require__(58375), exports);
__exportStar(__webpack_require__(56452), exports);
__exportStar(__webpack_require__(75205), exports);
__exportStar(__webpack_require__(51797), exports);
__exportStar(__webpack_require__(93717), exports);
__exportStar(__webpack_require__(37123), exports);


/***/ }),

/***/ 62447:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadLinksInteraction = void 0;
const Linker_1 = __webpack_require__(49251);
async function loadLinksInteraction(engine, refresh = true) {
    await engine.addInteractor("particlesLinks", (container) => new Linker_1.Linker(container), refresh);
}
exports.loadLinksInteraction = loadLinksInteraction;


/***/ }),

/***/ 18494:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadLinksPlugin = void 0;
const LinkInstance_1 = __webpack_require__(22853);
class LinksPlugin {
    constructor() {
        this.id = "links";
    }
    getPlugin(container) {
        return new LinkInstance_1.LinkInstance(container);
    }
    loadOptions() {
    }
    needsPlugin() {
        return true;
    }
}
async function loadLinksPlugin(engine, refresh = true) {
    const plugin = new LinksPlugin();
    await engine.addPlugin(plugin, refresh);
}
exports.loadLinksPlugin = loadLinksPlugin;


/***/ }),

/***/ 30726:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseMover = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Utils_1 = __webpack_require__(348);
const diffFactor = 2;
class BaseMover {
    constructor() {
        this._initSpin = (particle) => {
            const container = particle.container, options = particle.options, spinOptions = options.move.spin;
            if (!spinOptions.enable) {
                return;
            }
            const spinPos = spinOptions.position ?? { x: 50, y: 50 }, spinCenter = {
                x: (spinPos.x / 100) * container.canvas.size.width,
                y: (spinPos.y / 100) * container.canvas.size.height,
            }, pos = particle.getPosition(), distance = (0, tsparticles_engine_1.getDistance)(pos, spinCenter), spinAcceleration = (0, tsparticles_engine_1.getRangeValue)(spinOptions.acceleration);
            particle.retina.spinAcceleration = spinAcceleration * container.retina.pixelRatio;
            particle.spin = {
                center: spinCenter,
                direction: particle.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
                angle: particle.velocity.angle,
                radius: distance,
                acceleration: particle.retina.spinAcceleration,
            };
        };
    }
    init(particle) {
        const options = particle.options, gravityOptions = options.move.gravity;
        particle.gravity = {
            enable: gravityOptions.enable,
            acceleration: (0, tsparticles_engine_1.getRangeValue)(gravityOptions.acceleration),
            inverse: gravityOptions.inverse,
        };
        this._initSpin(particle);
    }
    isEnabled(particle) {
        return !particle.destroyed && particle.options.move.enable;
    }
    move(particle, delta) {
        const particleOptions = particle.options, moveOptions = particleOptions.move;
        if (!moveOptions.enable) {
            return;
        }
        const container = particle.container, pxRatio = container.retina.pixelRatio, slowFactor = (0, Utils_1.getProximitySpeedFactor)(particle), baseSpeed = (particle.retina.moveSpeed ??= (0, tsparticles_engine_1.getRangeValue)(moveOptions.speed) * pxRatio) *
            container.retina.reduceFactor, moveDrift = (particle.retina.moveDrift ??= (0, tsparticles_engine_1.getRangeValue)(particle.options.move.drift) * pxRatio), maxSize = (0, tsparticles_engine_1.getRangeMax)(particleOptions.size.value) * pxRatio, sizeFactor = moveOptions.size ? particle.getRadius() / maxSize : 1, moveSpeed = (baseSpeed * sizeFactor * slowFactor * (delta.factor || 1)) / diffFactor, maxSpeed = particle.retina.maxSpeed ?? container.retina.maxSpeed;
        if (moveOptions.spin.enable) {
            (0, Utils_1.spin)(particle, moveSpeed);
        }
        else {
            (0, Utils_1.move)(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta);
        }
        (0, Utils_1.applyDistance)(particle);
    }
}
exports.BaseMover = BaseMover;


/***/ }),

/***/ 348:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getProximitySpeedFactor = exports.applyPath = exports.spin = exports.move = exports.applyDistance = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
function applyDistance(particle) {
    const initialPosition = particle.initialPosition, { dx, dy } = (0, tsparticles_engine_1.getDistances)(initialPosition, particle.position), dxFixed = Math.abs(dx), dyFixed = Math.abs(dy), { maxDistance } = particle.retina, hDistance = maxDistance.horizontal, vDistance = maxDistance.vertical;
    if (!hDistance && !vDistance) {
        return;
    }
    if (((hDistance && dxFixed >= hDistance) || (vDistance && dyFixed >= vDistance)) && !particle.misplaced) {
        particle.misplaced = (!!hDistance && dxFixed > hDistance) || (!!vDistance && dyFixed > vDistance);
        if (hDistance) {
            particle.velocity.x = particle.velocity.y / 2 - particle.velocity.x;
        }
        if (vDistance) {
            particle.velocity.y = particle.velocity.x / 2 - particle.velocity.y;
        }
    }
    else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) {
        particle.misplaced = false;
    }
    else if (particle.misplaced) {
        const pos = particle.position, vel = particle.velocity;
        if (hDistance && ((pos.x < initialPosition.x && vel.x < 0) || (pos.x > initialPosition.x && vel.x > 0))) {
            vel.x *= -(0, tsparticles_engine_1.getRandom)();
        }
        if (vDistance && ((pos.y < initialPosition.y && vel.y < 0) || (pos.y > initialPosition.y && vel.y > 0))) {
            vel.y *= -(0, tsparticles_engine_1.getRandom)();
        }
    }
}
exports.applyDistance = applyDistance;
function move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta) {
    applyPath(particle, delta);
    const gravityOptions = particle.gravity, gravityFactor = gravityOptions?.enable && gravityOptions.inverse ? -1 : 1;
    if (moveDrift && moveSpeed) {
        particle.velocity.x += (moveDrift * delta.factor) / (60 * moveSpeed);
    }
    if (gravityOptions?.enable && moveSpeed) {
        particle.velocity.y += (gravityFactor * (gravityOptions.acceleration * delta.factor)) / (60 * moveSpeed);
    }
    const decay = particle.moveDecay;
    particle.velocity.multTo(decay);
    const velocity = particle.velocity.mult(moveSpeed);
    if (gravityOptions?.enable &&
        maxSpeed > 0 &&
        ((!gravityOptions.inverse && velocity.y >= 0 && velocity.y >= maxSpeed) ||
            (gravityOptions.inverse && velocity.y <= 0 && velocity.y <= -maxSpeed))) {
        velocity.y = gravityFactor * maxSpeed;
        if (moveSpeed) {
            particle.velocity.y = velocity.y / moveSpeed;
        }
    }
    const zIndexOptions = particle.options.zIndex, zVelocityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.velocityRate;
    velocity.multTo(zVelocityFactor);
    const { position } = particle;
    position.addTo(velocity);
    if (moveOptions.vibrate) {
        position.x += Math.sin(position.x * Math.cos(position.y));
        position.y += Math.cos(position.y * Math.sin(position.x));
    }
}
exports.move = move;
function spin(particle, moveSpeed) {
    const container = particle.container;
    if (!particle.spin) {
        return;
    }
    const updateFunc = {
        x: particle.spin.direction === "clockwise" ? Math.cos : Math.sin,
        y: particle.spin.direction === "clockwise" ? Math.sin : Math.cos,
    };
    particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle);
    particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle);
    particle.spin.radius += particle.spin.acceleration;
    const maxCanvasSize = Math.max(container.canvas.size.width, container.canvas.size.height);
    if (particle.spin.radius > maxCanvasSize / 2) {
        particle.spin.radius = maxCanvasSize / 2;
        particle.spin.acceleration *= -1;
    }
    else if (particle.spin.radius < 0) {
        particle.spin.radius = 0;
        particle.spin.acceleration *= -1;
    }
    particle.spin.angle += (moveSpeed / 100) * (1 - particle.spin.radius / maxCanvasSize);
}
exports.spin = spin;
function applyPath(particle, delta) {
    const particlesOptions = particle.options, pathOptions = particlesOptions.move.path, pathEnabled = pathOptions.enable;
    if (!pathEnabled) {
        return;
    }
    if (particle.lastPathTime <= particle.pathDelay) {
        particle.lastPathTime += delta.value;
        return;
    }
    const path = particle.pathGenerator?.generate(particle, delta);
    if (path) {
        particle.velocity.addTo(path);
    }
    if (pathOptions.clamp) {
        particle.velocity.x = (0, tsparticles_engine_1.clamp)(particle.velocity.x, -1, 1);
        particle.velocity.y = (0, tsparticles_engine_1.clamp)(particle.velocity.y, -1, 1);
    }
    particle.lastPathTime -= particle.pathDelay;
}
exports.applyPath = applyPath;
function getProximitySpeedFactor(particle) {
    return particle.slow.inRange ? particle.slow.factor : 1;
}
exports.getProximitySpeedFactor = getProximitySpeedFactor;


/***/ }),

/***/ 20837:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadBaseMover = void 0;
const BaseMover_1 = __webpack_require__(30726);
async function loadBaseMover(engine, refresh = true) {
    await engine.addMover("base", () => new BaseMover_1.BaseMover(), refresh);
}
exports.loadBaseMover = loadBaseMover;


/***/ }),

/***/ 45918:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParallaxMover = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class ParallaxMover {
    init() {
    }
    isEnabled(particle) {
        return (!(0, tsparticles_engine_1.isSsr)() &&
            !particle.destroyed &&
            particle.container.actualOptions.interactivity.events.onHover.parallax.enable);
    }
    move(particle) {
        const container = particle.container, options = container.actualOptions, parallaxOptions = options.interactivity.events.onHover.parallax;
        if ((0, tsparticles_engine_1.isSsr)() || !parallaxOptions.enable) {
            return;
        }
        const parallaxForce = parallaxOptions.force, mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        const canvasSize = container.canvas.size, canvasCenter = {
            x: canvasSize.width / 2,
            y: canvasSize.height / 2,
        }, parallaxSmooth = parallaxOptions.smooth, factor = particle.getRadius() / parallaxForce, centerDistance = {
            x: (mousePos.x - canvasCenter.x) * factor,
            y: (mousePos.y - canvasCenter.y) * factor,
        }, { offset } = particle;
        offset.x += (centerDistance.x - offset.x) / parallaxSmooth;
        offset.y += (centerDistance.y - offset.y) / parallaxSmooth;
    }
}
exports.ParallaxMover = ParallaxMover;


/***/ }),

/***/ 14247:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadParallaxMover = void 0;
const ParallaxMover_1 = __webpack_require__(45918);
async function loadParallaxMover(engine, refresh = true) {
    await engine.addMover("parallax", () => new ParallaxMover_1.ParallaxMover(), refresh);
}
exports.loadParallaxMover = loadParallaxMover;


/***/ }),

/***/ 6026:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initParticlesJS = void 0;
const initParticlesJS = (engine) => {
    const particlesJS = (tagId, options) => {
        return engine.load(tagId, options);
    };
    particlesJS.load = (tagId, pathConfigJson, callback) => {
        engine
            .loadJSON(tagId, pathConfigJson)
            .then((container) => {
            if (container) {
                callback(container);
            }
        })
            .catch(() => {
            callback(undefined);
        });
    };
    particlesJS.setOnClickHandler = (callback) => {
        engine.setOnClickHandler(callback);
    };
    const pJSDom = engine.dom();
    return { particlesJS, pJSDom };
};
exports.initParticlesJS = initParticlesJS;


/***/ }),

/***/ 62230:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initPjs = void 0;
const Particles_1 = __webpack_require__(39356);
const particles_1 = __webpack_require__(6026);
const initPjs = (engine) => {
    const { particlesJS, pJSDom } = (0, particles_1.initParticlesJS)(engine);
    window.particlesJS = particlesJS;
    window.pJSDom = pJSDom;
    window.Particles = Particles_1.Particles;
    return { particlesJS, pJSDom, Particles: Particles_1.Particles };
};
exports.initPjs = initPjs;


/***/ }),

/***/ 39356:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Particles = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class Particles {
    static init(options) {
        const particles = new Particles(), selector = options.selector;
        if (!selector) {
            throw new Error("No selector provided");
        }
        const el = document.querySelector(selector);
        if (!el) {
            throw new Error("No element found for selector");
        }
        tsparticles_engine_1.tsParticles
            .set(selector.replace(".", "").replace("!", ""), el, {
            fullScreen: {
                enable: false,
            },
            particles: {
                color: {
                    value: options.color ?? "!000000",
                },
                links: {
                    color: "random",
                    distance: options.minDistance ?? 120,
                    enable: options.connectParticles ?? false,
                },
                move: {
                    enable: true,
                    speed: options.speed ?? 0.5,
                },
                number: {
                    value: options.maxParticles ?? 100,
                },
                size: {
                    value: { min: 1, max: options.sizeVariations ?? 3 },
                },
            },
            responsive: options.responsive?.map((responsive) => ({
                maxWidth: responsive.breakpoint,
                options: {
                    particles: {
                        color: {
                            value: responsive.options?.color,
                        },
                        links: {
                            distance: responsive.options?.minDistance,
                            enable: responsive.options?.connectParticles,
                        },
                        number: {
                            value: options.maxParticles,
                        },
                        move: {
                            enable: true,
                            speed: responsive.options?.speed,
                        },
                        size: {
                            value: responsive.options?.sizeVariations,
                        },
                    },
                },
            })),
        })
            .then((container) => {
            particles._container = container;
        });
        return particles;
    }
    destroy() {
        const container = this._container;
        container && container.destroy();
    }
    pauseAnimation() {
        const container = this._container;
        container && container.pause();
    }
    resumeAnimation() {
        const container = this._container;
        container && container.play();
    }
}
exports.Particles = Particles;


/***/ }),

/***/ 53540:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 91029:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbsorberInstance = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Absorber_1 = __webpack_require__(56919);
class AbsorberInstance {
    constructor(absorbers, container, options, position) {
        this.absorbers = absorbers;
        this.container = container;
        this._calcPosition = () => {
            const exactPosition = (0, tsparticles_engine_1.calcPositionOrRandomFromSizeRanged)({
                size: this.container.canvas.size,
                position: this.options.position,
            });
            return tsparticles_engine_1.Vector.create(exactPosition.x, exactPosition.y);
        };
        this._updateParticlePosition = (particle, v) => {
            if (particle.destroyed) {
                return;
            }
            const container = this.container, canvasSize = container.canvas.size;
            if (particle.needsNewPosition) {
                const newPosition = (0, tsparticles_engine_1.calcPositionOrRandomFromSize)({ size: canvasSize });
                particle.position.setTo(newPosition);
                particle.velocity.setTo(particle.initialVelocity);
                particle.absorberOrbit = undefined;
                particle.needsNewPosition = false;
            }
            if (this.options.orbits) {
                if (particle.absorberOrbit === undefined) {
                    particle.absorberOrbit = tsparticles_engine_1.Vector.create(0, 0);
                    particle.absorberOrbit.length = (0, tsparticles_engine_1.getDistance)(particle.getPosition(), this.position);
                    particle.absorberOrbit.angle = (0, tsparticles_engine_1.getRandom)() * Math.PI * 2;
                }
                if (particle.absorberOrbit.length <= this.size && !this.options.destroy) {
                    const minSize = Math.min(canvasSize.width, canvasSize.height);
                    particle.absorberOrbit.length = minSize * (1 + ((0, tsparticles_engine_1.getRandom)() * 0.2 - 0.1));
                }
                if (particle.absorberOrbitDirection === undefined) {
                    particle.absorberOrbitDirection =
                        particle.velocity.x >= 0 ? "clockwise" : "counter-clockwise";
                }
                const orbitRadius = particle.absorberOrbit.length, orbitAngle = particle.absorberOrbit.angle, orbitDirection = particle.absorberOrbitDirection;
                particle.velocity.setTo(tsparticles_engine_1.Vector.origin);
                const updateFunc = {
                    x: orbitDirection === "clockwise" ? Math.cos : Math.sin,
                    y: orbitDirection === "clockwise" ? Math.sin : Math.cos,
                };
                particle.position.x = this.position.x + orbitRadius * updateFunc.x(orbitAngle);
                particle.position.y = this.position.y + orbitRadius * updateFunc.y(orbitAngle);
                particle.absorberOrbit.length -= v.length;
                particle.absorberOrbit.angle +=
                    (((particle.retina.moveSpeed ?? 0) * container.retina.pixelRatio) / 100) *
                        container.retina.reduceFactor;
            }
            else {
                const addV = tsparticles_engine_1.Vector.origin;
                addV.length = v.length;
                addV.angle = v.angle;
                particle.velocity.addTo(addV);
            }
        };
        this.initialPosition = position ? tsparticles_engine_1.Vector.create(position.x, position.y) : undefined;
        if (options instanceof Absorber_1.Absorber) {
            this.options = options;
        }
        else {
            this.options = new Absorber_1.Absorber();
            this.options.load(options);
        }
        this.dragging = false;
        this.name = this.options.name;
        this.opacity = this.options.opacity;
        this.size = (0, tsparticles_engine_1.getRangeValue)(this.options.size.value) * container.retina.pixelRatio;
        this.mass = this.size * this.options.size.density * container.retina.reduceFactor;
        const limit = this.options.size.limit;
        this.limit = {
            radius: limit.radius * container.retina.pixelRatio * container.retina.reduceFactor,
            mass: limit.mass,
        };
        this.color = (0, tsparticles_engine_1.rangeColorToRgb)(this.options.color) ?? {
            b: 0,
            g: 0,
            r: 0,
        };
        this.position = this.initialPosition?.copy() ?? this._calcPosition();
    }
    attract(particle) {
        const container = this.container, options = this.options;
        if (options.draggable) {
            const mouse = container.interactivity.mouse;
            if (mouse.clicking && mouse.downPosition) {
                const mouseDist = (0, tsparticles_engine_1.getDistance)(this.position, mouse.downPosition);
                if (mouseDist <= this.size) {
                    this.dragging = true;
                }
            }
            else {
                this.dragging = false;
            }
            if (this.dragging && mouse.position) {
                this.position.x = mouse.position.x;
                this.position.y = mouse.position.y;
            }
        }
        const pos = particle.getPosition(), { dx, dy, distance } = (0, tsparticles_engine_1.getDistances)(this.position, pos), v = tsparticles_engine_1.Vector.create(dx, dy);
        v.length = (this.mass / Math.pow(distance, 2)) * container.retina.reduceFactor;
        if (distance < this.size + particle.getRadius()) {
            const sizeFactor = particle.getRadius() * 0.033 * container.retina.pixelRatio;
            if ((this.size > particle.getRadius() && distance < this.size - particle.getRadius()) ||
                (particle.absorberOrbit !== undefined && particle.absorberOrbit.length < 0)) {
                if (options.destroy) {
                    particle.destroy();
                }
                else {
                    particle.needsNewPosition = true;
                    this._updateParticlePosition(particle, v);
                }
            }
            else {
                if (options.destroy) {
                    particle.size.value -= sizeFactor;
                }
                this._updateParticlePosition(particle, v);
            }
            if (this.limit.radius <= 0 || this.size < this.limit.radius) {
                this.size += sizeFactor;
            }
            if (this.limit.mass <= 0 || this.mass < this.limit.mass) {
                this.mass += sizeFactor * this.options.size.density * container.retina.reduceFactor;
            }
        }
        else {
            this._updateParticlePosition(particle, v);
        }
    }
    draw(context) {
        context.translate(this.position.x, this.position.y);
        context.beginPath();
        context.arc(0, 0, this.size, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = (0, tsparticles_engine_1.getStyleFromRgb)(this.color, this.opacity);
        context.fill();
    }
    resize() {
        const initialPosition = this.initialPosition;
        this.position =
            initialPosition && (0, tsparticles_engine_1.isPointInside)(initialPosition, this.container.canvas.size, tsparticles_engine_1.Vector.origin)
                ? initialPosition
                : this._calcPosition();
    }
}
exports.AbsorberInstance = AbsorberInstance;


/***/ }),

/***/ 33567:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Absorbers = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const AbsorberInstance_1 = __webpack_require__(91029);
class Absorbers {
    constructor(container) {
        this.container = container;
        this.array = [];
        this.absorbers = [];
        this.interactivityAbsorbers = [];
        container.getAbsorber = (idxOrName) => idxOrName === undefined || (0, tsparticles_engine_1.isNumber)(idxOrName)
            ? this.array[idxOrName || 0]
            : this.array.find((t) => t.name === idxOrName);
        container.addAbsorber = (options, position) => this.addAbsorber(options, position);
    }
    addAbsorber(options, position) {
        const absorber = new AbsorberInstance_1.AbsorberInstance(this, this.container, options, position);
        this.array.push(absorber);
        return absorber;
    }
    draw(context) {
        for (const absorber of this.array) {
            absorber.draw(context);
        }
    }
    handleClickMode(mode) {
        const absorberOptions = this.absorbers, modeAbsorbers = this.interactivityAbsorbers;
        if (mode === "absorber") {
            const absorbersModeOptions = (0, tsparticles_engine_1.itemFromSingleOrMultiple)(modeAbsorbers), absorbersOptions = absorbersModeOptions ?? (0, tsparticles_engine_1.itemFromSingleOrMultiple)(absorberOptions), aPosition = this.container.interactivity.mouse.clickPosition;
            this.addAbsorber(absorbersOptions, aPosition);
        }
    }
    async init() {
        this.absorbers = this.container.actualOptions.absorbers;
        this.interactivityAbsorbers = this.container.actualOptions.interactivity.modes.absorbers;
        (0, tsparticles_engine_1.executeOnSingleOrMultiple)(this.absorbers, (absorber) => {
            this.addAbsorber(absorber);
        });
    }
    particleUpdate(particle) {
        for (const absorber of this.array) {
            absorber.attract(particle);
            if (particle.destroyed) {
                break;
            }
        }
    }
    removeAbsorber(absorber) {
        const index = this.array.indexOf(absorber);
        if (index >= 0) {
            this.array.splice(index, 1);
        }
    }
    resize() {
        for (const absorber of this.array) {
            absorber.resize();
        }
    }
    stop() {
        this.array = [];
    }
}
exports.Absorbers = Absorbers;


/***/ }),

/***/ 67256:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 56919:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Absorber = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const AbsorberSize_1 = __webpack_require__(35540);
class Absorber {
    constructor() {
        this.color = new tsparticles_engine_1.OptionsColor();
        this.color.value = "#000000";
        this.draggable = false;
        this.opacity = 1;
        this.destroy = true;
        this.orbits = false;
        this.size = new AbsorberSize_1.AbsorberSize();
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.color !== undefined) {
            this.color = tsparticles_engine_1.OptionsColor.create(this.color, data.color);
        }
        if (data.draggable !== undefined) {
            this.draggable = data.draggable;
        }
        this.name = data.name;
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
        if (data.position !== undefined) {
            this.position = {};
            if (data.position.x !== undefined) {
                this.position.x = (0, tsparticles_engine_1.setRangeValue)(data.position.x);
            }
            if (data.position.y !== undefined) {
                this.position.y = (0, tsparticles_engine_1.setRangeValue)(data.position.y);
            }
        }
        if (data.size !== undefined) {
            this.size.load(data.size);
        }
        if (data.destroy !== undefined) {
            this.destroy = data.destroy;
        }
        if (data.orbits !== undefined) {
            this.orbits = data.orbits;
        }
    }
}
exports.Absorber = Absorber;


/***/ }),

/***/ 35540:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbsorberSize = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const AbsorberSizeLimit_1 = __webpack_require__(43214);
class AbsorberSize extends tsparticles_engine_1.ValueWithRandom {
    constructor() {
        super();
        this.density = 5;
        this.value = 50;
        this.limit = new AbsorberSizeLimit_1.AbsorberSizeLimit();
    }
    load(data) {
        if (!data) {
            return;
        }
        super.load(data);
        if (data.density !== undefined) {
            this.density = data.density;
        }
        if ((0, tsparticles_engine_1.isNumber)(data.limit)) {
            this.limit.radius = data.limit;
        }
        else {
            this.limit.load(data.limit);
        }
    }
}
exports.AbsorberSize = AbsorberSize;


/***/ }),

/***/ 43214:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbsorberSizeLimit = void 0;
class AbsorberSizeLimit {
    constructor() {
        this.radius = 0;
        this.mass = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.mass !== undefined) {
            this.mass = data.mass;
        }
        if (data.radius !== undefined) {
            this.radius = data.radius;
        }
    }
}
exports.AbsorberSizeLimit = AbsorberSizeLimit;


/***/ }),

/***/ 7086:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadAbsorbersPlugin = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Absorber_1 = __webpack_require__(56919);
const Absorbers_1 = __webpack_require__(33567);
class AbsorbersPlugin {
    constructor() {
        this.id = "absorbers";
    }
    getPlugin(container) {
        return new Absorbers_1.Absorbers(container);
    }
    loadOptions(options, source) {
        if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
            return;
        }
        if (source?.absorbers) {
            options.absorbers = (0, tsparticles_engine_1.executeOnSingleOrMultiple)(source.absorbers, (absorber) => {
                const tmp = new Absorber_1.Absorber();
                tmp.load(absorber);
                return tmp;
            });
        }
        options.interactivity.modes.absorbers = (0, tsparticles_engine_1.executeOnSingleOrMultiple)(source?.interactivity?.modes?.absorbers, (absorber) => {
            const tmp = new Absorber_1.Absorber();
            tmp.load(absorber);
            return tmp;
        });
    }
    needsPlugin(options) {
        if (!options) {
            return false;
        }
        const absorbers = options.absorbers;
        if ((0, tsparticles_engine_1.isArray)(absorbers)) {
            return !!absorbers.length;
        }
        else if (absorbers) {
            return true;
        }
        else if (options.interactivity?.events?.onClick?.mode &&
            (0, tsparticles_engine_1.isInArray)("absorber", options.interactivity.events.onClick.mode)) {
            return true;
        }
        return false;
    }
}
async function loadAbsorbersPlugin(engine, refresh = true) {
    await engine.addPlugin(new AbsorbersPlugin(), refresh);
}
exports.loadAbsorbersPlugin = loadAbsorbersPlugin;
__exportStar(__webpack_require__(53540), exports);
__exportStar(__webpack_require__(67256), exports);


/***/ }),

/***/ 57624:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadEasingQuadPlugin = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
async function loadEasingQuadPlugin() {
    (0, tsparticles_engine_1.addEasing)("ease-in-quad", (value) => value ** 2);
    (0, tsparticles_engine_1.addEasing)("ease-out-quad", (value) => 1 - (1 - value) ** 2);
    (0, tsparticles_engine_1.addEasing)("ease-in-out-quad", (value) => (value < 0.5 ? 2 * value ** 2 : 1 - (-2 * value + 2) ** 2 / 2));
}
exports.loadEasingQuadPlugin = loadEasingQuadPlugin;


/***/ }),

/***/ 46432:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 78264:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmitterInstance = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Emitter_1 = __webpack_require__(13484);
const EmitterSize_1 = __webpack_require__(13825);
class EmitterInstance {
    constructor(engine, emitters, container, options, position) {
        this.emitters = emitters;
        this.container = container;
        this._calcPosition = () => {
            return (0, tsparticles_engine_1.calcPositionOrRandomFromSizeRanged)({
                size: this.container.canvas.size,
                position: this.options.position,
            });
        };
        this._destroy = () => {
            this.emitters.removeEmitter(this);
            this._engine.dispatchEvent("emitterDestroyed", {
                container: this.container,
                data: {
                    emitter: this,
                },
            });
        };
        this._emit = () => {
            if (this._paused) {
                return;
            }
            const quantity = (0, tsparticles_engine_1.getRangeValue)(this.options.rate.quantity);
            this._emitParticles(quantity);
        };
        this._emitParticles = (quantity) => {
            const position = this.getPosition(), size = this.getSize(), singleParticlesOptions = (0, tsparticles_engine_1.itemFromSingleOrMultiple)(this._particlesOptions);
            for (let i = 0; i < quantity; i++) {
                const particlesOptions = (0, tsparticles_engine_1.deepExtend)({}, singleParticlesOptions);
                if (this.spawnColor) {
                    const hslAnimation = this.options.spawnColor?.animation;
                    if (hslAnimation) {
                        this.spawnColor.h = this._setColorAnimation(hslAnimation.h, this.spawnColor.h, 360);
                        this.spawnColor.s = this._setColorAnimation(hslAnimation.s, this.spawnColor.s, 100);
                        this.spawnColor.l = this._setColorAnimation(hslAnimation.l, this.spawnColor.l, 100);
                    }
                    if (!particlesOptions.color) {
                        particlesOptions.color = {
                            value: this.spawnColor,
                        };
                    }
                    else {
                        particlesOptions.color.value = this.spawnColor;
                    }
                }
                if (!position) {
                    return;
                }
                const pPosition = this._shape?.randomPosition(position, size, this.fill) ?? position;
                this.container.particles.addParticle(pPosition, particlesOptions);
            }
        };
        this._prepareToDie = () => {
            if (this._paused) {
                return;
            }
            const duration = this.options.life?.duration !== undefined ? (0, tsparticles_engine_1.getRangeValue)(this.options.life.duration) : undefined;
            if (this.container.retina.reduceFactor &&
                (this._lifeCount > 0 || this._immortal) &&
                duration !== undefined &&
                duration > 0) {
                this._duration = duration * 1000;
            }
        };
        this._setColorAnimation = (animation, initValue, maxValue) => {
            const container = this.container;
            if (!animation.enable) {
                return initValue;
            }
            const colorOffset = (0, tsparticles_engine_1.randomInRange)(animation.offset), delay = (0, tsparticles_engine_1.getRangeValue)(this.options.rate.delay), emitFactor = (1000 * delay) / container.retina.reduceFactor, colorSpeed = (0, tsparticles_engine_1.getRangeValue)(animation.speed ?? 0);
            return (initValue + (colorSpeed * container.fpsLimit) / emitFactor + colorOffset * 3.6) % maxValue;
        };
        this._engine = engine;
        this._currentDuration = 0;
        this._currentEmitDelay = 0;
        this._currentSpawnDelay = 0;
        this._initialPosition = position;
        if (options instanceof Emitter_1.Emitter) {
            this.options = options;
        }
        else {
            this.options = new Emitter_1.Emitter();
            this.options.load(options);
        }
        this._spawnDelay = ((0, tsparticles_engine_1.getRangeValue)(this.options.life.delay ?? 0) * 1000) / this.container.retina.reduceFactor;
        this.position = this._initialPosition ?? this._calcPosition();
        this.name = this.options.name;
        this._shape = this._engine.emitterShapeManager?.getShape(this.options.shape);
        this.fill = this.options.fill;
        this._firstSpawn = !this.options.life.wait;
        this._startParticlesAdded = false;
        let particlesOptions = (0, tsparticles_engine_1.deepExtend)({}, this.options.particles);
        particlesOptions ??= {};
        particlesOptions.move ??= {};
        particlesOptions.move.direction ??= this.options.direction;
        if (this.options.spawnColor) {
            this.spawnColor = (0, tsparticles_engine_1.rangeColorToHsl)(this.options.spawnColor);
        }
        this._paused = !this.options.autoPlay;
        this._particlesOptions = particlesOptions;
        this.size =
            this.options.size ??
                (() => {
                    const size = new EmitterSize_1.EmitterSize();
                    size.load({
                        height: 0,
                        mode: "percent",
                        width: 0,
                    });
                    return size;
                })();
        this._lifeCount = this.options.life.count ?? -1;
        this._immortal = this._lifeCount <= 0;
        this._engine.dispatchEvent("emitterCreated", {
            container,
            data: {
                emitter: this,
            },
        });
        this.play();
    }
    externalPause() {
        this._paused = true;
        this.pause();
    }
    externalPlay() {
        this._paused = false;
        this.play();
    }
    getPosition() {
        if (this.options.domId) {
            const container = this.container, element = document.getElementById(this.options.domId);
            if (element) {
                const elRect = element.getBoundingClientRect();
                return {
                    x: (elRect.x + elRect.width / 2) * container.retina.pixelRatio,
                    y: (elRect.y + elRect.height / 2) * container.retina.pixelRatio,
                };
            }
        }
        return this.position;
    }
    getSize() {
        const container = this.container;
        if (this.options.domId) {
            const element = document.getElementById(this.options.domId);
            if (element) {
                const elRect = element.getBoundingClientRect();
                return {
                    width: elRect.width * container.retina.pixelRatio,
                    height: elRect.height * container.retina.pixelRatio,
                };
            }
        }
        return (0, tsparticles_engine_1.getSize)(this.size, container.canvas.size);
    }
    pause() {
        if (this._paused) {
            return;
        }
        delete this._emitDelay;
    }
    play() {
        if (this._paused) {
            return;
        }
        if (!(this.container.retina.reduceFactor &&
            (this._lifeCount > 0 || this._immortal || !this.options.life.count) &&
            (this._firstSpawn || this._currentSpawnDelay >= (this._spawnDelay ?? 0)))) {
            return;
        }
        if (this._emitDelay === undefined) {
            const delay = (0, tsparticles_engine_1.getRangeValue)(this.options.rate.delay);
            this._emitDelay = (1000 * delay) / this.container.retina.reduceFactor;
        }
        if (this._lifeCount > 0 || this._immortal) {
            this._prepareToDie();
        }
    }
    resize() {
        const initialPosition = this._initialPosition;
        this.position =
            initialPosition && (0, tsparticles_engine_1.isPointInside)(initialPosition, this.container.canvas.size, tsparticles_engine_1.Vector.origin)
                ? initialPosition
                : this._calcPosition();
    }
    update(delta) {
        if (this._paused) {
            return;
        }
        if (this._firstSpawn) {
            this._firstSpawn = false;
            this._currentSpawnDelay = this._spawnDelay ?? 0;
            this._currentEmitDelay = this._emitDelay ?? 0;
        }
        if (!this._startParticlesAdded) {
            this._startParticlesAdded = true;
            this._emitParticles(this.options.startCount);
        }
        if (this._duration !== undefined) {
            this._currentDuration += delta.value;
            if (this._currentDuration >= this._duration) {
                this.pause();
                if (this._spawnDelay !== undefined) {
                    delete this._spawnDelay;
                }
                if (!this._immortal) {
                    this._lifeCount--;
                }
                if (this._lifeCount > 0 || this._immortal) {
                    this.position = this._calcPosition();
                    this._spawnDelay =
                        ((0, tsparticles_engine_1.getRangeValue)(this.options.life.delay ?? 0) * 1000) / this.container.retina.reduceFactor;
                }
                else {
                    this._destroy();
                }
                this._currentDuration -= this._duration;
                delete this._duration;
            }
        }
        if (this._spawnDelay !== undefined) {
            this._currentSpawnDelay += delta.value;
            if (this._currentSpawnDelay >= this._spawnDelay) {
                this._engine.dispatchEvent("emitterPlay", {
                    container: this.container,
                });
                this.play();
                this._currentSpawnDelay -= this._currentSpawnDelay;
                delete this._spawnDelay;
            }
        }
        if (this._emitDelay !== undefined) {
            this._currentEmitDelay += delta.value;
            if (this._currentEmitDelay >= this._emitDelay) {
                this._emit();
                this._currentEmitDelay -= this._emitDelay;
            }
        }
    }
}
exports.EmitterInstance = EmitterInstance;


/***/ }),

/***/ 24710:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Emitters = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Emitter_1 = __webpack_require__(13484);
const EmitterInstance_1 = __webpack_require__(78264);
class Emitters {
    constructor(engine, container) {
        this.container = container;
        this._engine = engine;
        this.array = [];
        this.emitters = [];
        this.interactivityEmitters = {
            random: {
                count: 1,
                enable: false,
            },
            value: [],
        };
        container.getEmitter = (idxOrName) => idxOrName === undefined || (0, tsparticles_engine_1.isNumber)(idxOrName)
            ? this.array[idxOrName || 0]
            : this.array.find((t) => t.name === idxOrName);
        container.addEmitter = (options, position) => this.addEmitter(options, position);
        container.removeEmitter = (idxOrName) => {
            const emitter = container.getEmitter(idxOrName);
            if (emitter) {
                this.removeEmitter(emitter);
            }
        };
        container.playEmitter = (idxOrName) => {
            const emitter = container.getEmitter(idxOrName);
            if (emitter) {
                emitter.externalPlay();
            }
        };
        container.pauseEmitter = (idxOrName) => {
            const emitter = container.getEmitter(idxOrName);
            if (emitter) {
                emitter.externalPause();
            }
        };
    }
    addEmitter(options, position) {
        const emitterOptions = new Emitter_1.Emitter();
        emitterOptions.load(options);
        const emitter = new EmitterInstance_1.EmitterInstance(this._engine, this, this.container, emitterOptions, position);
        this.array.push(emitter);
        return emitter;
    }
    handleClickMode(mode) {
        const emitterOptions = this.emitters, modeEmitters = this.interactivityEmitters;
        if (mode !== "emitter") {
            return;
        }
        let emittersModeOptions;
        if (modeEmitters && (0, tsparticles_engine_1.isArray)(modeEmitters.value)) {
            if (modeEmitters.value.length > 0 && modeEmitters.random.enable) {
                emittersModeOptions = [];
                const usedIndexes = [];
                for (let i = 0; i < modeEmitters.random.count; i++) {
                    const idx = (0, tsparticles_engine_1.arrayRandomIndex)(modeEmitters.value);
                    if (usedIndexes.includes(idx) && usedIndexes.length < modeEmitters.value.length) {
                        i--;
                        continue;
                    }
                    usedIndexes.push(idx);
                    emittersModeOptions.push((0, tsparticles_engine_1.itemFromArray)(modeEmitters.value, idx));
                }
            }
            else {
                emittersModeOptions = modeEmitters.value;
            }
        }
        else {
            emittersModeOptions = modeEmitters?.value;
        }
        const emittersOptions = emittersModeOptions ?? emitterOptions, ePosition = this.container.interactivity.mouse.clickPosition;
        (0, tsparticles_engine_1.executeOnSingleOrMultiple)(emittersOptions, (emitter) => {
            this.addEmitter(emitter, ePosition);
        });
    }
    async init() {
        this.emitters = this.container.actualOptions.emitters;
        this.interactivityEmitters = this.container.actualOptions.interactivity.modes.emitters;
        if (!this.emitters) {
            return;
        }
        if ((0, tsparticles_engine_1.isArray)(this.emitters)) {
            for (const emitterOptions of this.emitters) {
                this.addEmitter(emitterOptions);
            }
        }
        else {
            this.addEmitter(this.emitters);
        }
    }
    pause() {
        for (const emitter of this.array) {
            emitter.pause();
        }
    }
    play() {
        for (const emitter of this.array) {
            emitter.play();
        }
    }
    removeEmitter(emitter) {
        const index = this.array.indexOf(emitter);
        if (index >= 0) {
            this.array.splice(index, 1);
        }
    }
    resize() {
        for (const emitter of this.array) {
            emitter.resize();
        }
    }
    stop() {
        this.array = [];
    }
    update(delta) {
        for (const emitter of this.array) {
            emitter.update(delta);
        }
    }
}
exports.Emitters = Emitters;


/***/ }),

/***/ 98766:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 77868:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 72011:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 13484:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Emitter = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const EmitterLife_1 = __webpack_require__(97376);
const EmitterRate_1 = __webpack_require__(32232);
const EmitterSize_1 = __webpack_require__(13825);
class Emitter {
    constructor() {
        this.autoPlay = true;
        this.fill = true;
        this.life = new EmitterLife_1.EmitterLife();
        this.rate = new EmitterRate_1.EmitterRate();
        this.shape = "square";
        this.startCount = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.autoPlay !== undefined) {
            this.autoPlay = data.autoPlay;
        }
        if (data.size !== undefined) {
            if (!this.size) {
                this.size = new EmitterSize_1.EmitterSize();
            }
            this.size.load(data.size);
        }
        if (data.direction !== undefined) {
            this.direction = data.direction;
        }
        this.domId = data.domId;
        if (data.fill !== undefined) {
            this.fill = data.fill;
        }
        this.life.load(data.life);
        this.name = data.name;
        this.particles = (0, tsparticles_engine_1.executeOnSingleOrMultiple)(data.particles, (particles) => {
            return (0, tsparticles_engine_1.deepExtend)({}, particles);
        });
        this.rate.load(data.rate);
        if (data.shape !== undefined) {
            this.shape = data.shape;
        }
        if (data.position !== undefined) {
            this.position = {};
            if (data.position.x !== undefined) {
                this.position.x = (0, tsparticles_engine_1.setRangeValue)(data.position.x);
            }
            if (data.position.y !== undefined) {
                this.position.y = (0, tsparticles_engine_1.setRangeValue)(data.position.y);
            }
        }
        if (data.spawnColor !== undefined) {
            if (this.spawnColor === undefined) {
                this.spawnColor = new tsparticles_engine_1.AnimatableColor();
            }
            this.spawnColor.load(data.spawnColor);
        }
        if (data.startCount !== undefined) {
            this.startCount = data.startCount;
        }
    }
}
exports.Emitter = Emitter;


/***/ }),

/***/ 97376:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmitterLife = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class EmitterLife {
    constructor() {
        this.wait = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.count !== undefined) {
            this.count = data.count;
        }
        if (data.delay !== undefined) {
            this.delay = (0, tsparticles_engine_1.setRangeValue)(data.delay);
        }
        if (data.duration !== undefined) {
            this.duration = (0, tsparticles_engine_1.setRangeValue)(data.duration);
        }
        if (data.wait !== undefined) {
            this.wait = data.wait;
        }
    }
}
exports.EmitterLife = EmitterLife;


/***/ }),

/***/ 32232:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmitterRate = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class EmitterRate {
    constructor() {
        this.quantity = 1;
        this.delay = 0.1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.quantity !== undefined) {
            this.quantity = (0, tsparticles_engine_1.setRangeValue)(data.quantity);
        }
        if (data.delay !== undefined) {
            this.delay = (0, tsparticles_engine_1.setRangeValue)(data.delay);
        }
    }
}
exports.EmitterRate = EmitterRate;


/***/ }),

/***/ 13825:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmitterSize = void 0;
class EmitterSize {
    constructor() {
        this.mode = "percent";
        this.height = 0;
        this.width = 0;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.height !== undefined) {
            this.height = data.height;
        }
        if (data.width !== undefined) {
            this.width = data.width;
        }
    }
}
exports.EmitterSize = EmitterSize;


/***/ }),

/***/ 8286:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeManager = void 0;
const shapes = new Map();
class ShapeManager {
    constructor(engine) {
        this._engine = engine;
    }
    addShape(name, drawer) {
        if (!this.getShape(name)) {
            shapes.set(name, drawer);
        }
    }
    getShape(name) {
        return shapes.get(name);
    }
    getSupportedShapes() {
        return shapes.keys();
    }
}
exports.ShapeManager = ShapeManager;


/***/ }),

/***/ 44104:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleShape = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class CircleShape {
    randomPosition(position, size, fill) {
        const generateTheta = (x, y) => {
            const u = (0, tsparticles_engine_1.getRandom)() / 4.0, theta = Math.atan((y / x) * Math.tan(2 * Math.PI * u)), v = (0, tsparticles_engine_1.getRandom)();
            if (v < 0.25) {
                return theta;
            }
            else if (v < 0.5) {
                return Math.PI - theta;
            }
            else if (v < 0.75) {
                return Math.PI + theta;
            }
            else {
                return -theta;
            }
        }, radius = (x, y, theta) => (x * y) / Math.sqrt((y * Math.cos(theta)) ** 2 + (x * Math.sin(theta)) ** 2), [a, b] = [size.width / 2, size.height / 2], randomTheta = generateTheta(a, b), maxRadius = radius(a, b, randomTheta), randomRadius = fill ? maxRadius * Math.sqrt((0, tsparticles_engine_1.getRandom)()) : maxRadius;
        return {
            x: position.x + randomRadius * Math.cos(randomTheta),
            y: position.y + randomRadius * Math.sin(randomTheta),
        };
    }
}
exports.CircleShape = CircleShape;


/***/ }),

/***/ 50619:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SquareShape = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
function randomSquareCoordinate(position, offset) {
    return position + offset * ((0, tsparticles_engine_1.getRandom)() - 0.5);
}
class SquareShape {
    randomPosition(position, size, fill) {
        if (fill) {
            return {
                x: randomSquareCoordinate(position.x, size.width),
                y: randomSquareCoordinate(position.y, size.height),
            };
        }
        else {
            const halfW = size.width / 2, halfH = size.height / 2, side = Math.floor((0, tsparticles_engine_1.getRandom)() * 4), v = ((0, tsparticles_engine_1.getRandom)() - 0.5) * 2;
            switch (side) {
                case 0:
                    return {
                        x: position.x + v * halfW,
                        y: position.y - halfH,
                    };
                case 1:
                    return {
                        x: position.x - halfW,
                        y: position.y + v * halfH,
                    };
                case 2:
                    return {
                        x: position.x + v * halfW,
                        y: position.y + halfH,
                    };
                case 3:
                default:
                    return {
                        x: position.x + halfW,
                        y: position.y + v * halfH,
                    };
            }
        }
    }
}
exports.SquareShape = SquareShape;


/***/ }),

/***/ 13719:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadEmittersPlugin = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const CircleShape_1 = __webpack_require__(44104);
const Emitter_1 = __webpack_require__(13484);
const Emitters_1 = __webpack_require__(24710);
const ShapeManager_1 = __webpack_require__(8286);
const SquareShape_1 = __webpack_require__(50619);
class EmittersPlugin {
    constructor(engine) {
        this._engine = engine;
        this.id = "emitters";
    }
    getPlugin(container) {
        return new Emitters_1.Emitters(this._engine, container);
    }
    loadOptions(options, source) {
        if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
            return;
        }
        if (source?.emitters) {
            options.emitters = (0, tsparticles_engine_1.executeOnSingleOrMultiple)(source.emitters, (emitter) => {
                const tmp = new Emitter_1.Emitter();
                tmp.load(emitter);
                return tmp;
            });
        }
        const interactivityEmitters = source?.interactivity?.modes?.emitters;
        if (interactivityEmitters) {
            if ((0, tsparticles_engine_1.isArray)(interactivityEmitters)) {
                options.interactivity.modes.emitters = {
                    random: {
                        count: 1,
                        enable: true,
                    },
                    value: interactivityEmitters.map((s) => {
                        const tmp = new Emitter_1.Emitter();
                        tmp.load(s);
                        return tmp;
                    }),
                };
            }
            else {
                const emitterMode = interactivityEmitters;
                if (emitterMode.value !== undefined) {
                    if ((0, tsparticles_engine_1.isArray)(emitterMode.value)) {
                        options.interactivity.modes.emitters = {
                            random: {
                                count: emitterMode.random.count ?? 1,
                                enable: emitterMode.random.enable ?? false,
                            },
                            value: emitterMode.value.map((s) => {
                                const tmp = new Emitter_1.Emitter();
                                tmp.load(s);
                                return tmp;
                            }),
                        };
                    }
                    else {
                        const tmp = new Emitter_1.Emitter();
                        tmp.load(emitterMode.value);
                        options.interactivity.modes.emitters = {
                            random: {
                                count: emitterMode.random.count ?? 1,
                                enable: emitterMode.random.enable ?? false,
                            },
                            value: tmp,
                        };
                    }
                }
                else {
                    const emitterOptions = (options.interactivity.modes.emitters = {
                        random: {
                            count: 1,
                            enable: false,
                        },
                        value: new Emitter_1.Emitter(),
                    });
                    emitterOptions.value.load(interactivityEmitters);
                }
            }
        }
    }
    needsPlugin(options) {
        if (!options) {
            return false;
        }
        const emitters = options.emitters;
        return (((0, tsparticles_engine_1.isArray)(emitters) && !!emitters.length) ||
            emitters !== undefined ||
            (!!options.interactivity?.events?.onClick?.mode &&
                (0, tsparticles_engine_1.isInArray)("emitter", options.interactivity.events.onClick.mode)));
    }
}
async function loadEmittersPlugin(engine, refresh = true) {
    if (!engine.emitterShapeManager) {
        engine.emitterShapeManager = new ShapeManager_1.ShapeManager(engine);
    }
    if (!engine.addEmitterShape) {
        engine.addEmitterShape = (name, shape) => {
            engine.emitterShapeManager?.addShape(name, shape);
        };
    }
    const plugin = new EmittersPlugin(engine);
    await engine.addPlugin(plugin, refresh);
    engine.addEmitterShape("circle", new CircleShape_1.CircleShape());
    engine.addEmitterShape("square", new SquareShape_1.SquareShape());
}
exports.loadEmittersPlugin = loadEmittersPlugin;
__exportStar(__webpack_require__(46432), exports);
__exportStar(__webpack_require__(98766), exports);
__exportStar(__webpack_require__(77868), exports);
__exportStar(__webpack_require__(72011), exports);


/***/ }),

/***/ 81753:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleDrawer = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class CircleDrawer {
    draw(context, particle, radius) {
        if (!particle.circleRange) {
            particle.circleRange = { min: 0, max: Math.PI * 2 };
        }
        const circleRange = particle.circleRange;
        context.arc(0, 0, radius, circleRange.min, circleRange.max, false);
    }
    getSidesCount() {
        return 12;
    }
    particleInit(container, particle) {
        const shapeData = particle.shapeData, angle = shapeData?.angle ?? {
            max: 360,
            min: 0,
        };
        particle.circleRange = !(0, tsparticles_engine_1.isObject)(angle)
            ? {
                min: 0,
                max: (angle * Math.PI) / 180,
            }
            : { min: (angle.min * Math.PI) / 180, max: (angle.max * Math.PI) / 180 };
    }
}
exports.CircleDrawer = CircleDrawer;


/***/ }),

/***/ 3817:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadCircleShape = void 0;
const CircleDrawer_1 = __webpack_require__(81753);
async function loadCircleShape(engine, refresh = true) {
    await engine.addShape("circle", new CircleDrawer_1.CircleDrawer(), refresh);
}
exports.loadCircleShape = loadCircleShape;


/***/ }),

/***/ 31475:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ByteStream = void 0;
class ByteStream {
    constructor(bytes) {
        this.pos = 0;
        this.data = new Uint8ClampedArray(bytes);
    }
    getString(count) {
        const slice = this.data.slice(this.pos, this.pos + count);
        this.pos += slice.length;
        return slice.reduce((acc, curr) => acc + String.fromCharCode(curr), "");
    }
    nextByte() {
        return this.data[this.pos++];
    }
    nextTwoBytes() {
        this.pos += 2;
        return this.data[this.pos - 2] + (this.data[this.pos - 1] << 8);
    }
    readSubBlocks() {
        let blockString = "", size = 0;
        do {
            size = this.data[this.pos++];
            for (let count = size; --count >= 0; blockString += String.fromCharCode(this.data[this.pos++])) {
            }
        } while (size !== 0);
        return blockString;
    }
    readSubBlocksBin() {
        let size = 0, len = 0;
        for (let offset = 0; (size = this.data[this.pos + offset]) !== 0; offset += size + 1) {
            len += size;
        }
        const blockData = new Uint8Array(len);
        for (let i = 0; (size = this.data[this.pos++]) !== 0;) {
            for (let count = size; --count >= 0; blockData[i++] = this.data[this.pos++]) {
            }
        }
        return blockData;
    }
    skipSubBlocks() {
        for (; this.data[this.pos] !== 0; this.pos += this.data[this.pos] + 1) {
        }
        this.pos++;
    }
}
exports.ByteStream = ByteStream;


/***/ }),

/***/ 47566:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InterlaceSteps = exports.InterlaceOffsets = void 0;
exports.InterlaceOffsets = [0, 4, 2, 1];
exports.InterlaceSteps = [8, 8, 4, 2];


/***/ }),

/***/ 41312:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeGIF = exports.getGIFLoopAmount = void 0;
const Constants_1 = __webpack_require__(47566);
const ByteStream_1 = __webpack_require__(31475);
function parseColorTable(byteStream, count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        colors.push({
            r: byteStream.data[byteStream.pos],
            g: byteStream.data[byteStream.pos + 1],
            b: byteStream.data[byteStream.pos + 2],
        });
        byteStream.pos += 3;
    }
    return colors;
}
async function parseExtensionBlock(byteStream, gif, getFrameIndex, getTransparencyIndex) {
    switch (byteStream.nextByte()) {
        case 249: {
            const frame = gif.frames[getFrameIndex(false)];
            byteStream.pos++;
            const packedByte = byteStream.nextByte();
            frame.GCreserved = (packedByte & 0xe0) >>> 5;
            frame.disposalMethod = (packedByte & 0x1c) >>> 2;
            frame.userInputDelayFlag = (packedByte & 2) === 2;
            const transparencyFlag = (packedByte & 1) === 1;
            frame.delayTime = byteStream.nextTwoBytes() * 0xa;
            const transparencyIndex = byteStream.nextByte();
            if (transparencyFlag) {
                getTransparencyIndex(transparencyIndex);
            }
            byteStream.pos++;
            break;
        }
        case 255: {
            byteStream.pos++;
            const applicationExtension = {
                identifier: byteStream.getString(8),
                authenticationCode: byteStream.getString(3),
                data: byteStream.readSubBlocksBin(),
            };
            gif.applicationExtensions.push(applicationExtension);
            break;
        }
        case 254: {
            gif.comments.push([getFrameIndex(false), byteStream.readSubBlocks()]);
            break;
        }
        case 1: {
            if (gif.globalColorTable.length === 0) {
                throw new EvalError("plain text extension without global color table");
            }
            byteStream.pos++;
            gif.frames[getFrameIndex(false)].plainTextData = {
                left: byteStream.nextTwoBytes(),
                top: byteStream.nextTwoBytes(),
                width: byteStream.nextTwoBytes(),
                height: byteStream.nextTwoBytes(),
                charSize: {
                    width: byteStream.nextTwoBytes(),
                    height: byteStream.nextTwoBytes(),
                },
                foregroundColor: byteStream.nextByte(),
                backgroundColor: byteStream.nextByte(),
                text: byteStream.readSubBlocks(),
            };
            break;
        }
        default:
            byteStream.skipSubBlocks();
            break;
    }
}
async function parseImageBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback) {
    const frame = gif.frames[getFrameIndex(true)];
    frame.left = byteStream.nextTwoBytes();
    frame.top = byteStream.nextTwoBytes();
    frame.width = byteStream.nextTwoBytes();
    frame.height = byteStream.nextTwoBytes();
    const packedByte = byteStream.nextByte(), localColorTableFlag = (packedByte & 0x80) === 0x80, interlacedFlag = (packedByte & 0x40) === 0x40;
    frame.sortFlag = (packedByte & 0x20) === 0x20;
    frame.reserved = (packedByte & 0x18) >>> 3;
    const localColorCount = 1 << ((packedByte & 7) + 1);
    if (localColorTableFlag) {
        frame.localColorTable = parseColorTable(byteStream, localColorCount);
    }
    const getColor = (index) => {
        const { r, g, b } = (localColorTableFlag ? frame.localColorTable : gif.globalColorTable)[index];
        return { r, g, b, a: index === getTransparencyIndex(null) ? (avgAlpha ? ~~((r + g + b) / 3) : 0) : 255 };
    };
    const image = (() => {
        try {
            return new ImageData(frame.width, frame.height, { colorSpace: "srgb" });
        }
        catch (error) {
            if (error instanceof DOMException && error.name === "IndexSizeError") {
                return null;
            }
            throw error;
        }
    })();
    if (image == null) {
        throw new EvalError("GIF frame size is to large");
    }
    const minCodeSize = byteStream.nextByte(), imageData = byteStream.readSubBlocksBin(), clearCode = 1 << minCodeSize;
    const readBits = (pos, len) => {
        const bytePos = pos >>> 3, bitPos = pos & 7;
        return (((imageData[bytePos] + (imageData[bytePos + 1] << 8) + (imageData[bytePos + 2] << 16)) &
            (((1 << len) - 1) << bitPos)) >>>
            bitPos);
    };
    if (interlacedFlag) {
        for (let code = 0, size = minCodeSize + 1, pos = 0, dic = [[0]], pass = 0; pass < 4; pass++) {
            if (Constants_1.InterlaceOffsets[pass] < frame.height) {
                for (let pixelPos = 0, lineIndex = 0;;) {
                    const last = code;
                    code = readBits(pos, size);
                    pos += size + 1;
                    if (code === clearCode) {
                        size = minCodeSize + 1;
                        dic.length = clearCode + 2;
                        for (let i = 0; i < dic.length; i++) {
                            dic[i] = i < clearCode ? [i] : [];
                        }
                    }
                    else {
                        if (code >= dic.length) {
                            dic.push(dic[last].concat(dic[last][0]));
                        }
                        else if (last !== clearCode) {
                            dic.push(dic[last].concat(dic[code][0]));
                        }
                        for (let i = 0; i < dic[code].length; i++) {
                            const { r, g, b, a } = getColor(dic[code][i]);
                            image.data.set([r, g, b, a], Constants_1.InterlaceOffsets[pass] * frame.width +
                                Constants_1.InterlaceSteps[pass] * lineIndex +
                                (pixelPos % (frame.width * 4)));
                            pixelPos += 4;
                        }
                        if (dic.length === 1 << size && size < 0xc) {
                            size++;
                        }
                    }
                    if (pixelPos === frame.width * 4 * (lineIndex + 1)) {
                        lineIndex++;
                        if (Constants_1.InterlaceOffsets[pass] + Constants_1.InterlaceSteps[pass] * lineIndex >= frame.height) {
                            break;
                        }
                    }
                }
            }
            progressCallback?.(byteStream.pos / (byteStream.data.length - 1), getFrameIndex(false) + 1, image, { x: frame.left, y: frame.top }, { width: gif.width, height: gif.height });
        }
        frame.image = image;
        frame.bitmap = await createImageBitmap(image);
    }
    else {
        for (let code = 0, size = minCodeSize + 1, pos = 0, dic = [[0]], pixelPos = -4;;) {
            const last = code;
            code = readBits(pos, size);
            pos += size;
            if (code === clearCode) {
                size = minCodeSize + 1;
                dic.length = clearCode + 2;
                for (let i = 0; i < dic.length; i++) {
                    dic[i] = i < clearCode ? [i] : [];
                }
            }
            else {
                if (code === clearCode + 1) {
                    break;
                }
                if (code >= dic.length) {
                    dic.push(dic[last].concat(dic[last][0]));
                }
                else if (last !== clearCode) {
                    dic.push(dic[last].concat(dic[code][0]));
                }
                for (let i = 0; i < dic[code].length; i++) {
                    const { r, g, b, a } = getColor(dic[code][i]);
                    image.data.set([r, g, b, a], (pixelPos += 4));
                }
                if (dic.length >= 1 << size && size < 0xc) {
                    size++;
                }
            }
        }
        frame.image = image;
        frame.bitmap = await createImageBitmap(image);
        progressCallback?.((byteStream.pos + 1) / byteStream.data.length, getFrameIndex(false) + 1, frame.image, { x: frame.left, y: frame.top }, { width: gif.width, height: gif.height });
    }
}
async function parseBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback) {
    switch (byteStream.nextByte()) {
        case 59:
            return true;
        case 44:
            await parseImageBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback);
            break;
        case 33:
            await parseExtensionBlock(byteStream, gif, getFrameIndex, getTransparencyIndex);
            break;
        default:
            throw new EvalError("undefined block found");
    }
    return false;
}
function getGIFLoopAmount(gif) {
    for (const extension of gif.applicationExtensions) {
        if (extension.identifier + extension.authenticationCode !== "NETSCAPE2.0") {
            continue;
        }
        return extension.data[1] + (extension.data[2] << 8);
    }
    return NaN;
}
exports.getGIFLoopAmount = getGIFLoopAmount;
async function decodeGIF(gifURL, progressCallback, avgAlpha) {
    if (!avgAlpha)
        avgAlpha = false;
    const res = await fetch(gifURL);
    if (!res.ok && res.status === 404) {
        throw new EvalError("file not found");
    }
    const buffer = await res.arrayBuffer();
    const gif = {
        width: 0,
        height: 0,
        totalTime: 0,
        colorRes: 0,
        pixelAspectRatio: 0,
        frames: [],
        sortFlag: false,
        globalColorTable: [],
        backgroundImage: new ImageData(1, 1, { colorSpace: "srgb" }),
        comments: [],
        applicationExtensions: [],
    }, byteStream = new ByteStream_1.ByteStream(new Uint8ClampedArray(buffer));
    if (byteStream.getString(6) !== "GIF89a") {
        throw new Error("not a supported GIF file");
    }
    gif.width = byteStream.nextTwoBytes();
    gif.height = byteStream.nextTwoBytes();
    const packedByte = byteStream.nextByte(), globalColorTableFlag = (packedByte & 0x80) === 0x80;
    gif.colorRes = (packedByte & 0x70) >>> 4;
    gif.sortFlag = (packedByte & 8) === 8;
    const globalColorCount = 1 << ((packedByte & 7) + 1), backgroundColorIndex = byteStream.nextByte();
    gif.pixelAspectRatio = byteStream.nextByte();
    if (gif.pixelAspectRatio !== 0) {
        gif.pixelAspectRatio = (gif.pixelAspectRatio + 0xf) / 0x40;
    }
    if (globalColorTableFlag) {
        gif.globalColorTable = parseColorTable(byteStream, globalColorCount);
    }
    const backgroundImage = (() => {
        try {
            return new ImageData(gif.width, gif.height, { colorSpace: "srgb" });
        }
        catch (error) {
            if (error instanceof DOMException && error.name === "IndexSizeError") {
                return null;
            }
            throw error;
        }
    })();
    if (backgroundImage == null) {
        throw new Error("GIF frame size is to large");
    }
    const { r, g, b } = gif.globalColorTable[backgroundColorIndex];
    backgroundImage.data.set(globalColorTableFlag ? [r, g, b, 255] : [0, 0, 0, 0]);
    for (let i = 4; i < backgroundImage.data.length; i *= 2) {
        backgroundImage.data.copyWithin(i, 0, i);
    }
    gif.backgroundImage = backgroundImage;
    let frameIndex = -1, incrementFrameIndex = true, transparencyIndex = -1;
    const getframeIndex = (increment) => {
        if (increment) {
            incrementFrameIndex = true;
        }
        return frameIndex;
    };
    const getTransparencyIndex = (newValue) => {
        if (newValue != null) {
            transparencyIndex = newValue;
        }
        return transparencyIndex;
    };
    try {
        do {
            if (incrementFrameIndex) {
                gif.frames.push({
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                    disposalMethod: 0,
                    image: new ImageData(1, 1, { colorSpace: "srgb" }),
                    plainTextData: null,
                    userInputDelayFlag: false,
                    delayTime: 0,
                    sortFlag: false,
                    localColorTable: [],
                    reserved: 0,
                    GCreserved: 0,
                });
                frameIndex++;
                transparencyIndex = -1;
                incrementFrameIndex = false;
            }
        } while (!(await parseBlock(byteStream, gif, avgAlpha, getframeIndex, getTransparencyIndex, progressCallback)));
        gif.frames.length--;
        for (const frame of gif.frames) {
            if (frame.userInputDelayFlag && frame.delayTime === 0) {
                gif.totalTime = Infinity;
                break;
            }
            gif.totalTime += frame.delayTime;
        }
        return gif;
    }
    catch (error) {
        if (error instanceof EvalError) {
            throw new Error(`error while parsing frame ${frameIndex} "${error.message}"`);
        }
        throw error;
    }
}
exports.decodeGIF = decodeGIF;


/***/ }),

/***/ 81115:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageDrawer = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Utils_1 = __webpack_require__(11803);
class ImageDrawer {
    constructor(engine) {
        this.loadImageShape = async (imageShape) => {
            if (!this._engine.loadImage) {
                throw new Error(`${tsparticles_engine_1.errorPrefix} image shape not initialized`);
            }
            await this._engine.loadImage({
                gif: imageShape.gif,
                name: imageShape.name,
                replaceColor: imageShape.replaceColor ?? imageShape.replace_color ?? false,
                src: imageShape.src,
            });
        };
        this._engine = engine;
    }
    addImage(image) {
        if (!this._engine.images) {
            this._engine.images = [];
        }
        this._engine.images.push(image);
    }
    draw(context, particle, radius, opacity, delta) {
        const image = particle.image, element = image?.element;
        if (!image) {
            return;
        }
        context.globalAlpha = opacity;
        if (image.gif && image.gifData) {
            const offscreenCanvas = new OffscreenCanvas(image.gifData.width, image.gifData.height), offscreenContext = offscreenCanvas.getContext("2d");
            if (!offscreenContext) {
                throw new Error("could not create offscreen canvas context");
            }
            offscreenContext.imageSmoothingQuality = "low";
            offscreenContext.imageSmoothingEnabled = false;
            offscreenContext.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
            if (particle.gifLoopCount === undefined) {
                particle.gifLoopCount = image.gifLoopCount ?? 0;
            }
            let frameIndex = particle.gifFrame ?? 0;
            const pos = { x: -image.gifData.width * 0.5, y: -image.gifData.height * 0.5 }, frame = image.gifData.frames[frameIndex];
            if (particle.gifTime === undefined) {
                particle.gifTime = 0;
            }
            if (!frame.bitmap) {
                return;
            }
            context.scale(radius / image.gifData.width, radius / image.gifData.height);
            switch (frame.disposalMethod) {
                case 4:
                case 5:
                case 6:
                case 7:
                case 0:
                    offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
                    context.drawImage(offscreenCanvas, pos.x, pos.y);
                    offscreenContext.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
                    break;
                case 1:
                    offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
                    context.drawImage(offscreenCanvas, pos.x, pos.y);
                    break;
                case 2:
                    offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
                    context.drawImage(offscreenCanvas, pos.x, pos.y);
                    offscreenContext.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
                    if (image.gifData.globalColorTable.length === 0) {
                        offscreenContext.putImageData(image.gifData.frames[0].image, pos.x + frame.left, pos.y + frame.top);
                    }
                    else {
                        offscreenContext.putImageData(image.gifData.backgroundImage, pos.x, pos.y);
                    }
                    break;
                case 3:
                    {
                        const previousImageData = offscreenContext.getImageData(0, 0, offscreenCanvas.width, offscreenCanvas.height);
                        offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
                        context.drawImage(offscreenCanvas, pos.x, pos.y);
                        offscreenContext.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
                        offscreenContext.putImageData(previousImageData, 0, 0);
                    }
                    break;
            }
            particle.gifTime += delta.value;
            if (particle.gifTime > frame.delayTime) {
                particle.gifTime -= frame.delayTime;
                if (++frameIndex >= image.gifData.frames.length) {
                    if (--particle.gifLoopCount <= 0) {
                        return;
                    }
                    frameIndex = 0;
                    offscreenContext.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
                }
                particle.gifFrame = frameIndex;
            }
            context.scale(image.gifData.width / radius, image.gifData.height / radius);
        }
        else if (element) {
            const ratio = image.ratio, pos = {
                x: -radius,
                y: -radius,
            };
            context.drawImage(element, pos.x, pos.y, radius * 2, (radius * 2) / ratio);
        }
        context.globalAlpha = 1;
    }
    getSidesCount() {
        return 12;
    }
    async init(container) {
        const options = container.actualOptions;
        if (!options.preload || !this._engine.loadImage) {
            return;
        }
        for (const imageData of options.preload) {
            await this._engine.loadImage(imageData);
        }
    }
    loadShape(particle) {
        if (particle.shape !== "image" && particle.shape !== "images") {
            return;
        }
        if (!this._engine.images) {
            this._engine.images = [];
        }
        const imageData = particle.shapeData, image = this._engine.images.find((t) => t.name === imageData.name || t.source === imageData.src);
        if (!image) {
            this.loadImageShape(imageData).then(() => {
                this.loadShape(particle);
            });
        }
    }
    particleInit(container, particle) {
        if (particle.shape !== "image" && particle.shape !== "images") {
            return;
        }
        if (!this._engine.images) {
            this._engine.images = [];
        }
        const images = this._engine.images, imageData = particle.shapeData, color = particle.getFillColor(), image = images.find((t) => t.name === imageData.name || t.source === imageData.src);
        if (!image) {
            return;
        }
        const replaceColor = imageData.replaceColor ?? imageData.replace_color ?? image.replaceColor;
        if (image.loading) {
            setTimeout(() => {
                this.particleInit(container, particle);
            });
            return;
        }
        (async () => {
            let imageRes;
            if (image.svgData && color) {
                imageRes = await (0, Utils_1.replaceImageColor)(image, imageData, color, particle);
            }
            else {
                imageRes = {
                    color,
                    data: image,
                    element: image.element,
                    gif: image.gif,
                    gifData: image.gifData,
                    gifLoopCount: image.gifLoopCount,
                    loaded: true,
                    ratio: imageData.width && imageData.height ? imageData.width / imageData.height : image.ratio ?? 1,
                    replaceColor: replaceColor,
                    source: imageData.src,
                };
            }
            if (!imageRes.ratio) {
                imageRes.ratio = 1;
            }
            const fill = imageData.fill ?? particle.fill, close = imageData.close ?? particle.close, imageShape = {
                image: imageRes,
                fill,
                close,
            };
            particle.image = imageShape.image;
            particle.fill = imageShape.fill;
            particle.close = imageShape.close;
        })();
    }
}
exports.ImageDrawer = ImageDrawer;


/***/ }),

/***/ 79638:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImagePreloaderPlugin = void 0;
const Preload_1 = __webpack_require__(20210);
class ImagePreloaderPlugin {
    constructor(engine) {
        this.id = "imagePreloader";
        this._engine = engine;
    }
    getPlugin() {
        return {};
    }
    loadOptions(options, source) {
        if (!source || !source.preload) {
            return;
        }
        if (!options.preload) {
            options.preload = [];
        }
        const preloadOptions = options.preload;
        for (const item of source.preload) {
            const existing = preloadOptions.find((t) => t.name === item.name || t.src === item.src);
            if (existing) {
                existing.load(item);
            }
            else {
                const preload = new Preload_1.Preload();
                preload.load(item);
                preloadOptions.push(preload);
            }
        }
    }
    needsPlugin() {
        return true;
    }
}
exports.ImagePreloaderPlugin = ImagePreloaderPlugin;


/***/ }),

/***/ 20210:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Preload = void 0;
class Preload {
    constructor() {
        this.src = "";
        this.gif = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.gif !== undefined) {
            this.gif = data.gif;
        }
        if (data.height !== undefined) {
            this.height = data.height;
        }
        if (data.name !== undefined) {
            this.name = data.name;
        }
        if (data.replaceColor !== undefined) {
            this.replaceColor = data.replaceColor;
        }
        if (data.src !== undefined) {
            this.src = data.src;
        }
        if (data.width !== undefined) {
            this.width = data.width;
        }
    }
}
exports.Preload = Preload;


/***/ }),

/***/ 11803:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.replaceImageColor = exports.downloadSvgImage = exports.loadGifImage = exports.loadImage = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Utils_1 = __webpack_require__(41312);
const currentColorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
function replaceColorSvg(imageShape, color, opacity) {
    const { svgData } = imageShape;
    if (!svgData) {
        return "";
    }
    const colorStyle = (0, tsparticles_engine_1.getStyleFromHsl)(color, opacity);
    if (svgData.includes("fill")) {
        return svgData.replace(currentColorRegex, () => colorStyle);
    }
    const preFillIndex = svgData.indexOf(">");
    return `${svgData.substring(0, preFillIndex)} fill="${colorStyle}"${svgData.substring(preFillIndex)}`;
}
async function loadImage(image) {
    return new Promise((resolve) => {
        image.loading = true;
        const img = new Image();
        image.element = img;
        img.addEventListener("load", () => {
            image.loading = false;
            resolve();
        });
        img.addEventListener("error", () => {
            image.element = undefined;
            image.error = true;
            image.loading = false;
            (0, tsparticles_engine_1.getLogger)().error(`${tsparticles_engine_1.errorPrefix} loading image: ${image.source}`);
            resolve();
        });
        img.src = image.source;
    });
}
exports.loadImage = loadImage;
async function loadGifImage(image) {
    if (image.type !== "gif") {
        await loadImage(image);
        return;
    }
    image.loading = true;
    try {
        image.gifData = await (0, Utils_1.decodeGIF)(image.source);
        image.gifLoopCount = (0, Utils_1.getGIFLoopAmount)(image.gifData) ?? 0;
        if (image.gifLoopCount === 0) {
            image.gifLoopCount = Infinity;
        }
    }
    catch {
        image.error = true;
    }
    image.loading = false;
}
exports.loadGifImage = loadGifImage;
async function downloadSvgImage(image) {
    if (image.type !== "svg") {
        await loadImage(image);
        return;
    }
    image.loading = true;
    const response = await fetch(image.source);
    if (!response.ok) {
        (0, tsparticles_engine_1.getLogger)().error(`${tsparticles_engine_1.errorPrefix} Image not found`);
        image.error = true;
    }
    else {
        image.svgData = await response.text();
    }
    image.loading = false;
}
exports.downloadSvgImage = downloadSvgImage;
function replaceImageColor(image, imageData, color, particle) {
    const svgColoredData = replaceColorSvg(image, color, particle.opacity?.value ?? 1), imageRes = {
        color,
        gif: imageData.gif,
        data: {
            ...image,
            svgData: svgColoredData,
        },
        loaded: false,
        ratio: imageData.width / imageData.height,
        replaceColor: imageData.replaceColor ?? imageData.replace_color,
        source: imageData.src,
    };
    return new Promise((resolve) => {
        const svg = new Blob([svgColoredData], { type: "image/svg+xml" }), domUrl = URL || window.URL || window.webkitURL || window, url = domUrl.createObjectURL(svg), img = new Image();
        img.addEventListener("load", () => {
            imageRes.loaded = true;
            imageRes.element = img;
            resolve(imageRes);
            domUrl.revokeObjectURL(url);
        });
        img.addEventListener("error", async () => {
            domUrl.revokeObjectURL(url);
            const img2 = {
                ...image,
                error: false,
                loading: true,
            };
            await loadImage(img2);
            imageRes.loaded = true;
            imageRes.element = img2.element;
            resolve(imageRes);
        });
        img.src = url;
    });
}
exports.replaceImageColor = replaceImageColor;


/***/ }),

/***/ 62698:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadImageShape = void 0;
const Utils_1 = __webpack_require__(11803);
const ImageDrawer_1 = __webpack_require__(81115);
const ImagePreloader_1 = __webpack_require__(79638);
const tsparticles_engine_1 = __webpack_require__(2662);
function addLoadImageToEngine(engine) {
    if (engine.loadImage) {
        return;
    }
    engine.loadImage = async (data) => {
        if (!data.name && !data.src) {
            throw new Error(`${tsparticles_engine_1.errorPrefix} no image source provided`);
        }
        if (!engine.images) {
            engine.images = [];
        }
        if (engine.images.find((t) => t.name === data.name || t.source === data.src)) {
            return;
        }
        try {
            const image = {
                gif: data.gif ?? false,
                name: data.name ?? data.src,
                source: data.src,
                type: data.src.substring(data.src.length - 3),
                error: false,
                loading: true,
                replaceColor: data.replaceColor,
                ratio: data.width && data.height ? data.width / data.height : undefined,
            };
            engine.images.push(image);
            const imageFunc = data.gif ? Utils_1.loadGifImage : data.replaceColor ? Utils_1.downloadSvgImage : Utils_1.loadImage;
            await imageFunc(image);
        }
        catch {
            throw new Error(`${tsparticles_engine_1.errorPrefix} ${data.name ?? data.src} not found`);
        }
    };
}
async function loadImageShape(engine, refresh = true) {
    addLoadImageToEngine(engine);
    const preloader = new ImagePreloader_1.ImagePreloaderPlugin(engine);
    await engine.addPlugin(preloader, refresh);
    await engine.addShape(["image", "images"], new ImageDrawer_1.ImageDrawer(engine), refresh);
}
exports.loadImageShape = loadImageShape;


/***/ }),

/***/ 77172:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineDrawer = void 0;
class LineDrawer {
    draw(context, particle, radius) {
        const shapeData = particle.shapeData;
        context.moveTo(-radius / 2, 0);
        context.lineTo(radius / 2, 0);
        context.lineCap = shapeData?.cap ?? "butt";
    }
    getSidesCount() {
        return 1;
    }
}
exports.LineDrawer = LineDrawer;


/***/ }),

/***/ 61120:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadLineShape = void 0;
const LineDrawer_1 = __webpack_require__(77172);
async function loadLineShape(engine, refresh = true) {
    await engine.addShape("line", new LineDrawer_1.LineDrawer(), refresh);
}
exports.loadLineShape = loadLineShape;


/***/ }),

/***/ 37157:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PolygonDrawer = void 0;
const PolygonDrawerBase_1 = __webpack_require__(33021);
class PolygonDrawer extends PolygonDrawerBase_1.PolygonDrawerBase {
    getCenter(particle, radius) {
        return {
            x: -radius / (particle.sides / 3.5),
            y: -radius / (2.66 / 3.5),
        };
    }
    getSidesData(particle, radius) {
        const sides = particle.sides;
        return {
            count: {
                denominator: 1,
                numerator: sides,
            },
            length: (radius * 2.66) / (sides / 3),
        };
    }
}
exports.PolygonDrawer = PolygonDrawer;


/***/ }),

/***/ 33021:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PolygonDrawerBase = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class PolygonDrawerBase {
    draw(context, particle, radius) {
        const start = this.getCenter(particle, radius), side = this.getSidesData(particle, radius), sideCount = side.count.numerator * side.count.denominator, decimalSides = side.count.numerator / side.count.denominator, interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides, interiorAngle = Math.PI - (Math.PI * interiorAngleDegrees) / 180;
        if (!context) {
            return;
        }
        context.beginPath();
        context.translate(start.x, start.y);
        context.moveTo(0, 0);
        for (let i = 0; i < sideCount; i++) {
            context.lineTo(side.length, 0);
            context.translate(side.length, 0);
            context.rotate(interiorAngle);
        }
    }
    getSidesCount(particle) {
        const polygon = particle.shapeData;
        return Math.round((0, tsparticles_engine_1.getRangeValue)(polygon?.sides ?? polygon?.nb_sides ?? 5));
    }
}
exports.PolygonDrawerBase = PolygonDrawerBase;


/***/ }),

/***/ 95247:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TriangleDrawer = void 0;
const PolygonDrawerBase_1 = __webpack_require__(33021);
class TriangleDrawer extends PolygonDrawerBase_1.PolygonDrawerBase {
    getCenter(particle, radius) {
        return {
            x: -radius,
            y: radius / 1.66,
        };
    }
    getSidesCount() {
        return 3;
    }
    getSidesData(particle, radius) {
        return {
            count: {
                denominator: 2,
                numerator: 3,
            },
            length: radius * 2,
        };
    }
}
exports.TriangleDrawer = TriangleDrawer;


/***/ }),

/***/ 26501:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadPolygonShape = exports.loadTriangleShape = exports.loadGenericPolygonShape = void 0;
const PolygonDrawer_1 = __webpack_require__(37157);
const TriangleDrawer_1 = __webpack_require__(95247);
async function loadGenericPolygonShape(engine, refresh = true) {
    await engine.addShape("polygon", new PolygonDrawer_1.PolygonDrawer(), refresh);
}
exports.loadGenericPolygonShape = loadGenericPolygonShape;
async function loadTriangleShape(engine, refresh = true) {
    await engine.addShape("triangle", new TriangleDrawer_1.TriangleDrawer(), refresh);
}
exports.loadTriangleShape = loadTriangleShape;
async function loadPolygonShape(engine, refresh = true) {
    await loadGenericPolygonShape(engine, refresh);
    await loadTriangleShape(engine, refresh);
}
exports.loadPolygonShape = loadPolygonShape;


/***/ }),

/***/ 16356:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SquareDrawer = void 0;
const fixFactor = Math.sqrt(2);
class SquareDrawer {
    draw(context, particle, radius) {
        const fixedRadius = radius / fixFactor, fixedDiameter = fixedRadius * 2;
        context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);
    }
    getSidesCount() {
        return 4;
    }
}
exports.SquareDrawer = SquareDrawer;


/***/ }),

/***/ 59254:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadSquareShape = void 0;
const SquareDrawer_1 = __webpack_require__(16356);
async function loadSquareShape(engine, refresh = true) {
    await engine.addShape(["edge", "square"], new SquareDrawer_1.SquareDrawer(), refresh);
}
exports.loadSquareShape = loadSquareShape;


/***/ }),

/***/ 69450:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StarDrawer = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class StarDrawer {
    draw(context, particle, radius) {
        const sides = particle.sides, inset = particle.starInset ?? 2;
        context.moveTo(0, 0 - radius);
        for (let i = 0; i < sides; i++) {
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - radius * inset);
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - radius);
        }
    }
    getSidesCount(particle) {
        const star = particle.shapeData;
        return Math.round((0, tsparticles_engine_1.getRangeValue)(star?.sides ?? star?.nb_sides ?? 5));
    }
    particleInit(container, particle) {
        const star = particle.shapeData, inset = (0, tsparticles_engine_1.getRangeValue)(star?.inset ?? 2);
        particle.starInset = inset;
    }
}
exports.StarDrawer = StarDrawer;


/***/ }),

/***/ 33448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadStarShape = void 0;
const StarDrawer_1 = __webpack_require__(69450);
async function loadStarShape(engine, refresh = true) {
    await engine.addShape("star", new StarDrawer_1.StarDrawer(), refresh);
}
exports.loadStarShape = loadStarShape;


/***/ }),

/***/ 40239:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextDrawer = exports.validTypes = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
exports.validTypes = ["text", "character", "char"];
class TextDrawer {
    draw(context, particle, radius, opacity) {
        const character = particle.shapeData;
        if (character === undefined) {
            return;
        }
        const textData = character.value;
        if (textData === undefined) {
            return;
        }
        if (particle.text === undefined) {
            particle.text = (0, tsparticles_engine_1.itemFromSingleOrMultiple)(textData, particle.randomIndexData);
        }
        const text = particle.text, style = character.style ?? "", weight = character.weight ?? "400", size = Math.round(radius) * 2, font = character.font ?? "Verdana", fill = particle.fill, offsetX = (text.length * radius) / 2;
        context.font = `${style} ${weight} ${size}px "${font}"`;
        const pos = {
            x: -offsetX,
            y: radius / 2,
        };
        context.globalAlpha = opacity;
        if (fill) {
            context.fillText(text, pos.x, pos.y);
        }
        else {
            context.strokeText(text, pos.x, pos.y);
        }
        context.globalAlpha = 1;
    }
    getSidesCount() {
        return 12;
    }
    async init(container) {
        const options = container.actualOptions;
        if (exports.validTypes.find((t) => (0, tsparticles_engine_1.isInArray)(t, options.particles.shape.type))) {
            const shapeOptions = exports.validTypes
                .map((t) => options.particles.shape.options[t])
                .find((t) => !!t), promises = [];
            (0, tsparticles_engine_1.executeOnSingleOrMultiple)(shapeOptions, (shape) => {
                promises.push((0, tsparticles_engine_1.loadFont)(shape.font, shape.weight));
            });
            await Promise.all(promises);
        }
    }
    particleInit(container, particle) {
        if (!particle.shape || !exports.validTypes.includes(particle.shape)) {
            return;
        }
        const character = particle.shapeData;
        if (character === undefined) {
            return;
        }
        const textData = character.value;
        if (textData === undefined) {
            return;
        }
        particle.text = (0, tsparticles_engine_1.itemFromSingleOrMultiple)(textData, particle.randomIndexData);
    }
}
exports.TextDrawer = TextDrawer;


/***/ }),

/***/ 47658:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadTextShape = void 0;
const TextDrawer_1 = __webpack_require__(40239);
async function loadTextShape(engine, refresh = true) {
    await engine.addShape(TextDrawer_1.validTypes, new TextDrawer_1.TextDrawer(), refresh);
}
exports.loadTextShape = loadTextShape;


/***/ }),

/***/ 76472:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadSlim = void 0;
const tsparticles_particles_js_1 = __webpack_require__(62230);
const tsparticles_basic_1 = __webpack_require__(727);
const tsparticles_plugin_easing_quad_1 = __webpack_require__(57624);
const tsparticles_interaction_external_attract_1 = __webpack_require__(28414);
const tsparticles_interaction_external_bounce_1 = __webpack_require__(49284);
const tsparticles_interaction_external_bubble_1 = __webpack_require__(12528);
const tsparticles_interaction_external_connect_1 = __webpack_require__(30983);
const tsparticles_interaction_external_grab_1 = __webpack_require__(10183);
const tsparticles_interaction_external_pause_1 = __webpack_require__(49391);
const tsparticles_interaction_external_push_1 = __webpack_require__(49966);
const tsparticles_interaction_external_remove_1 = __webpack_require__(38165);
const tsparticles_interaction_external_repulse_1 = __webpack_require__(47585);
const tsparticles_interaction_external_slow_1 = __webpack_require__(56856);
const tsparticles_shape_image_1 = __webpack_require__(62698);
const tsparticles_updater_life_1 = __webpack_require__(93326);
const tsparticles_shape_line_1 = __webpack_require__(61120);
const tsparticles_move_parallax_1 = __webpack_require__(14247);
const tsparticles_interaction_particles_attract_1 = __webpack_require__(67011);
const tsparticles_interaction_particles_collisions_1 = __webpack_require__(4104);
const tsparticles_interaction_particles_links_1 = __webpack_require__(92194);
const tsparticles_shape_polygon_1 = __webpack_require__(26501);
const tsparticles_updater_rotate_1 = __webpack_require__(7198);
const tsparticles_shape_square_1 = __webpack_require__(59254);
const tsparticles_shape_star_1 = __webpack_require__(33448);
const tsparticles_updater_stroke_color_1 = __webpack_require__(15200);
const tsparticles_shape_text_1 = __webpack_require__(47658);
async function loadSlim(engine, refresh = true) {
    (0, tsparticles_particles_js_1.initPjs)(engine);
    await (0, tsparticles_move_parallax_1.loadParallaxMover)(engine, false);
    await (0, tsparticles_interaction_external_attract_1.loadExternalAttractInteraction)(engine, false);
    await (0, tsparticles_interaction_external_bounce_1.loadExternalBounceInteraction)(engine, false);
    await (0, tsparticles_interaction_external_bubble_1.loadExternalBubbleInteraction)(engine, false);
    await (0, tsparticles_interaction_external_connect_1.loadExternalConnectInteraction)(engine, false);
    await (0, tsparticles_interaction_external_grab_1.loadExternalGrabInteraction)(engine, false);
    await (0, tsparticles_interaction_external_pause_1.loadExternalPauseInteraction)(engine, false);
    await (0, tsparticles_interaction_external_push_1.loadExternalPushInteraction)(engine, false);
    await (0, tsparticles_interaction_external_remove_1.loadExternalRemoveInteraction)(engine, false);
    await (0, tsparticles_interaction_external_repulse_1.loadExternalRepulseInteraction)(engine, false);
    await (0, tsparticles_interaction_external_slow_1.loadExternalSlowInteraction)(engine, false);
    await (0, tsparticles_interaction_particles_attract_1.loadParticlesAttractInteraction)(engine, false);
    await (0, tsparticles_interaction_particles_collisions_1.loadParticlesCollisionsInteraction)(engine, false);
    await (0, tsparticles_interaction_particles_links_1.loadParticlesLinksInteraction)(engine, false);
    await (0, tsparticles_plugin_easing_quad_1.loadEasingQuadPlugin)();
    await (0, tsparticles_shape_image_1.loadImageShape)(engine, false);
    await (0, tsparticles_shape_line_1.loadLineShape)(engine, false);
    await (0, tsparticles_shape_polygon_1.loadPolygonShape)(engine, false);
    await (0, tsparticles_shape_square_1.loadSquareShape)(engine, false);
    await (0, tsparticles_shape_star_1.loadStarShape)(engine, false);
    await (0, tsparticles_shape_text_1.loadTextShape)(engine, false);
    await (0, tsparticles_updater_life_1.loadLifeUpdater)(engine, false);
    await (0, tsparticles_updater_rotate_1.loadRotateUpdater)(engine, false);
    await (0, tsparticles_updater_stroke_color_1.loadStrokeColorUpdater)(engine, false);
    await (0, tsparticles_basic_1.loadBasic)(engine, refresh);
}
exports.loadSlim = loadSlim;


/***/ }),

/***/ 32760:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColorUpdater = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Utils_1 = __webpack_require__(80052);
class ColorUpdater {
    constructor(container) {
        this.container = container;
    }
    init(particle) {
        const hslColor = (0, tsparticles_engine_1.rangeColorToHsl)(particle.options.color, particle.id, particle.options.reduceDuplicates);
        if (hslColor) {
            particle.color = (0, tsparticles_engine_1.getHslAnimationFromHsl)(hslColor, particle.options.color.animation, this.container.retina.reduceFactor);
        }
    }
    isEnabled(particle) {
        const { h: hAnimation, s: sAnimation, l: lAnimation } = particle.options.color.animation, { color } = particle;
        return (!particle.destroyed &&
            !particle.spawning &&
            ((color?.h.value !== undefined && hAnimation.enable) ||
                (color?.s.value !== undefined && sAnimation.enable) ||
                (color?.l.value !== undefined && lAnimation.enable)));
    }
    update(particle, delta) {
        (0, Utils_1.updateColor)(particle, delta);
    }
}
exports.ColorUpdater = ColorUpdater;


/***/ }),

/***/ 80052:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateColor = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
function updateColorValue(delta, colorValue, valueAnimation, max, decrease) {
    if (!colorValue ||
        !valueAnimation.enable ||
        ((colorValue.maxLoops ?? 0) > 0 && (colorValue.loops ?? 0) > (colorValue.maxLoops ?? 0))) {
        return;
    }
    if (!colorValue.time) {
        colorValue.time = 0;
    }
    if ((colorValue.delayTime ?? 0) > 0 && colorValue.time < (colorValue.delayTime ?? 0)) {
        colorValue.time += delta.value;
    }
    if ((colorValue.delayTime ?? 0) > 0 && colorValue.time < (colorValue.delayTime ?? 0)) {
        return;
    }
    const offset = (0, tsparticles_engine_1.randomInRange)(valueAnimation.offset), velocity = (colorValue.velocity ?? 0) * delta.factor + offset * 3.6, decay = colorValue.decay ?? 1;
    if (!decrease || colorValue.status === "increasing") {
        colorValue.value += velocity;
        if (colorValue.value > max) {
            if (!colorValue.loops) {
                colorValue.loops = 0;
            }
            colorValue.loops++;
            if (decrease) {
                colorValue.status = "decreasing";
                colorValue.value -= colorValue.value % max;
            }
        }
    }
    else {
        colorValue.value -= velocity;
        if (colorValue.value < 0) {
            if (!colorValue.loops) {
                colorValue.loops = 0;
            }
            colorValue.loops++;
            colorValue.status = "increasing";
            colorValue.value += colorValue.value;
        }
    }
    if (colorValue.velocity && decay !== 1) {
        colorValue.velocity *= decay;
    }
    if (colorValue.value > max) {
        colorValue.value %= max;
    }
}
function updateColor(particle, delta) {
    const { h: hAnimation, s: sAnimation, l: lAnimation } = particle.options.color.animation, { color } = particle;
    if (!color) {
        return;
    }
    const { h, s, l } = color;
    if (h) {
        updateColorValue(delta, h, hAnimation, 360, false);
    }
    if (s) {
        updateColorValue(delta, s, sAnimation, 100, true);
    }
    if (l) {
        updateColorValue(delta, l, lAnimation, 100, true);
    }
}
exports.updateColor = updateColor;


/***/ }),

/***/ 7668:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadColorUpdater = void 0;
const ColorUpdater_1 = __webpack_require__(32760);
async function loadColorUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("color", (container) => new ColorUpdater_1.ColorUpdater(container), refresh);
}
exports.loadColorUpdater = loadColorUpdater;


/***/ }),

/***/ 65554:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DestroyUpdater = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Destroy_1 = __webpack_require__(38935);
const Utils_1 = __webpack_require__(53207);
class DestroyUpdater {
    constructor(engine, container) {
        this.engine = engine;
        this.container = container;
    }
    init(particle) {
        const container = this.container, particlesOptions = particle.options, destroyOptions = particlesOptions.destroy;
        if (!destroyOptions) {
            return;
        }
        particle.splitCount = 0;
        const destroyBoundsOptions = destroyOptions.bounds;
        if (!particle.destroyBounds) {
            particle.destroyBounds = {};
        }
        const { bottom, left, right, top } = destroyBoundsOptions, { destroyBounds } = particle, canvasSize = container.canvas.size;
        if (bottom) {
            destroyBounds.bottom = ((0, tsparticles_engine_1.getRangeValue)(bottom) * canvasSize.height) / 100;
        }
        if (left) {
            destroyBounds.left = ((0, tsparticles_engine_1.getRangeValue)(left) * canvasSize.width) / 100;
        }
        if (right) {
            destroyBounds.right = ((0, tsparticles_engine_1.getRangeValue)(right) * canvasSize.width) / 100;
        }
        if (top) {
            destroyBounds.top = ((0, tsparticles_engine_1.getRangeValue)(top) * canvasSize.height) / 100;
        }
    }
    isEnabled(particle) {
        return !particle.destroyed;
    }
    loadOptions(options, ...sources) {
        if (!options.destroy) {
            options.destroy = new Destroy_1.Destroy();
        }
        for (const source of sources) {
            options.destroy.load(source?.destroy);
        }
    }
    particleDestroyed(particle, override) {
        if (override) {
            return;
        }
        const destroyOptions = particle.options.destroy;
        if (destroyOptions && destroyOptions.mode === "split") {
            (0, Utils_1.split)(this.engine, this.container, particle);
        }
    }
    update(particle) {
        if (!this.isEnabled(particle)) {
            return;
        }
        const position = particle.getPosition(), bounds = particle.destroyBounds;
        if (!bounds) {
            return;
        }
        if ((bounds.bottom !== undefined && position.y >= bounds.bottom) ||
            (bounds.left !== undefined && position.x <= bounds.left) ||
            (bounds.right !== undefined && position.x >= bounds.right) ||
            (bounds.top !== undefined && position.y <= bounds.top)) {
            particle.destroy();
        }
    }
}
exports.DestroyUpdater = DestroyUpdater;


/***/ }),

/***/ 38935:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Destroy = void 0;
const DestroyBounds_1 = __webpack_require__(15977);
const Split_1 = __webpack_require__(49376);
class Destroy {
    constructor() {
        this.bounds = new DestroyBounds_1.DestroyBounds();
        this.mode = "none";
        this.split = new Split_1.Split();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.mode) {
            this.mode = data.mode;
        }
        if (data.bounds) {
            this.bounds.load(data.bounds);
        }
        this.split.load(data.split);
    }
}
exports.Destroy = Destroy;


/***/ }),

/***/ 15977:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DestroyBounds = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class DestroyBounds {
    load(data) {
        if (!data) {
            return;
        }
        if (data.bottom !== undefined) {
            this.bottom = (0, tsparticles_engine_1.setRangeValue)(data.bottom);
        }
        if (data.left !== undefined) {
            this.left = (0, tsparticles_engine_1.setRangeValue)(data.left);
        }
        if (data.right !== undefined) {
            this.right = (0, tsparticles_engine_1.setRangeValue)(data.right);
        }
        if (data.top !== undefined) {
            this.top = (0, tsparticles_engine_1.setRangeValue)(data.top);
        }
    }
}
exports.DestroyBounds = DestroyBounds;


/***/ }),

/***/ 49376:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Split = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const SplitFactor_1 = __webpack_require__(80652);
const SplitRate_1 = __webpack_require__(92414);
class Split {
    constructor() {
        this.count = 1;
        this.factor = new SplitFactor_1.SplitFactor();
        this.rate = new SplitRate_1.SplitRate();
        this.sizeOffset = true;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = tsparticles_engine_1.OptionsColor.create(this.color, data.color);
        }
        if (data.count !== undefined) {
            this.count = data.count;
        }
        this.factor.load(data.factor);
        this.rate.load(data.rate);
        this.particles = (0, tsparticles_engine_1.executeOnSingleOrMultiple)(data.particles, (particles) => {
            return (0, tsparticles_engine_1.deepExtend)({}, particles);
        });
        if (data.sizeOffset !== undefined) {
            this.sizeOffset = data.sizeOffset;
        }
        if (data.colorOffset) {
            this.colorOffset = this.colorOffset ?? {};
            if (data.colorOffset.h !== undefined) {
                this.colorOffset.h = data.colorOffset.h;
            }
            if (data.colorOffset.s !== undefined) {
                this.colorOffset.s = data.colorOffset.s;
            }
            if (data.colorOffset.l !== undefined) {
                this.colorOffset.l = data.colorOffset.l;
            }
        }
    }
}
exports.Split = Split;


/***/ }),

/***/ 80652:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SplitFactor = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class SplitFactor extends tsparticles_engine_1.ValueWithRandom {
    constructor() {
        super();
        this.value = 3;
    }
}
exports.SplitFactor = SplitFactor;


/***/ }),

/***/ 92414:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SplitRate = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class SplitRate extends tsparticles_engine_1.ValueWithRandom {
    constructor() {
        super();
        this.value = { min: 4, max: 9 };
    }
}
exports.SplitRate = SplitRate;


/***/ }),

/***/ 53207:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.split = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
function addSplitParticle(engine, container, parent, splitParticlesOptions) {
    const destroyOptions = parent.options.destroy;
    if (!destroyOptions) {
        return;
    }
    const splitOptions = destroyOptions.split, options = (0, tsparticles_engine_1.loadParticlesOptions)(engine, container, parent.options), factor = (0, tsparticles_engine_1.getValue)(splitOptions.factor), parentColor = parent.getFillColor();
    if (splitOptions.color) {
        options.color.load(splitOptions.color);
    }
    else if (splitOptions.colorOffset && parentColor) {
        options.color.load({
            value: {
                hsl: {
                    h: parentColor.h + (0, tsparticles_engine_1.getRangeValue)(splitOptions.colorOffset.h ?? 0),
                    s: parentColor.s + (0, tsparticles_engine_1.getRangeValue)(splitOptions.colorOffset.s ?? 0),
                    l: parentColor.l + (0, tsparticles_engine_1.getRangeValue)(splitOptions.colorOffset.l ?? 0),
                },
            },
        });
    }
    else {
        options.color.load({
            value: {
                hsl: parent.getFillColor(),
            },
        });
    }
    options.move.load({
        center: {
            x: parent.position.x,
            y: parent.position.y,
            mode: "precise",
        },
    });
    if ((0, tsparticles_engine_1.isNumber)(options.size.value)) {
        options.size.value /= factor;
    }
    else {
        options.size.value.min /= factor;
        options.size.value.max /= factor;
    }
    options.load(splitParticlesOptions);
    const offset = splitOptions.sizeOffset ? (0, tsparticles_engine_1.setRangeValue)(-parent.size.value, parent.size.value) : 0, position = {
        x: parent.position.x + (0, tsparticles_engine_1.randomInRange)(offset),
        y: parent.position.y + (0, tsparticles_engine_1.randomInRange)(offset),
    };
    return container.particles.addParticle(position, options, parent.group, (particle) => {
        if (particle.size.value < 0.5) {
            return false;
        }
        particle.velocity.length = (0, tsparticles_engine_1.randomInRange)((0, tsparticles_engine_1.setRangeValue)(parent.velocity.length, particle.velocity.length));
        particle.splitCount = (parent.splitCount ?? 0) + 1;
        particle.unbreakable = true;
        setTimeout(() => {
            particle.unbreakable = false;
        }, 500);
        return true;
    });
}
function split(engine, container, particle) {
    const destroyOptions = particle.options.destroy;
    if (!destroyOptions) {
        return;
    }
    const splitOptions = destroyOptions.split;
    if (splitOptions.count >= 0 && (particle.splitCount === undefined || particle.splitCount++ > splitOptions.count)) {
        return;
    }
    const rate = (0, tsparticles_engine_1.getValue)(splitOptions.rate), particlesSplitOptions = (0, tsparticles_engine_1.itemFromSingleOrMultiple)(splitOptions.particles);
    for (let i = 0; i < rate; i++) {
        addSplitParticle(engine, container, particle, particlesSplitOptions);
    }
}
exports.split = split;


/***/ }),

/***/ 27186:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadDestroyUpdater = void 0;
const DestroyUpdater_1 = __webpack_require__(65554);
async function loadDestroyUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("destroy", (container) => new DestroyUpdater_1.DestroyUpdater(engine, container), refresh);
}
exports.loadDestroyUpdater = loadDestroyUpdater;


/***/ }),

/***/ 7930:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LifeUpdater = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Life_1 = __webpack_require__(46399);
class LifeUpdater {
    constructor(container) {
        this.container = container;
    }
    init(particle) {
        const container = this.container, particlesOptions = particle.options, lifeOptions = particlesOptions.life;
        if (!lifeOptions) {
            return;
        }
        particle.life = {
            delay: container.retina.reduceFactor
                ? (((0, tsparticles_engine_1.getRangeValue)(lifeOptions.delay.value) * (lifeOptions.delay.sync ? 1 : (0, tsparticles_engine_1.getRandom)())) /
                    container.retina.reduceFactor) *
                    1000
                : 0,
            delayTime: 0,
            duration: container.retina.reduceFactor
                ? (((0, tsparticles_engine_1.getRangeValue)(lifeOptions.duration.value) * (lifeOptions.duration.sync ? 1 : (0, tsparticles_engine_1.getRandom)())) /
                    container.retina.reduceFactor) *
                    1000
                : 0,
            time: 0,
            count: lifeOptions.count,
        };
        if (particle.life.duration <= 0) {
            particle.life.duration = -1;
        }
        if (particle.life.count <= 0) {
            particle.life.count = -1;
        }
        if (particle.life) {
            particle.spawning = particle.life.delay > 0;
        }
    }
    isEnabled(particle) {
        return !particle.destroyed;
    }
    loadOptions(options, ...sources) {
        if (!options.life) {
            options.life = new Life_1.Life();
        }
        for (const source of sources) {
            options.life.load(source?.life);
        }
    }
    update(particle, delta) {
        if (!this.isEnabled(particle) || !particle.life) {
            return;
        }
        const life = particle.life;
        let justSpawned = false;
        if (particle.spawning) {
            life.delayTime += delta.value;
            if (life.delayTime >= particle.life.delay) {
                justSpawned = true;
                particle.spawning = false;
                life.delayTime = 0;
                life.time = 0;
            }
            else {
                return;
            }
        }
        if (life.duration === -1) {
            return;
        }
        if (particle.spawning) {
            return;
        }
        if (justSpawned) {
            life.time = 0;
        }
        else {
            life.time += delta.value;
        }
        if (life.time < life.duration) {
            return;
        }
        life.time = 0;
        if (particle.life.count > 0) {
            particle.life.count--;
        }
        if (particle.life.count === 0) {
            particle.destroy();
            return;
        }
        const canvasSize = this.container.canvas.size, widthRange = (0, tsparticles_engine_1.setRangeValue)(0, canvasSize.width), heightRange = (0, tsparticles_engine_1.setRangeValue)(0, canvasSize.width);
        particle.position.x = (0, tsparticles_engine_1.randomInRange)(widthRange);
        particle.position.y = (0, tsparticles_engine_1.randomInRange)(heightRange);
        particle.spawning = true;
        life.delayTime = 0;
        life.time = 0;
        particle.reset();
        const lifeOptions = particle.options.life;
        if (lifeOptions) {
            life.delay = (0, tsparticles_engine_1.getRangeValue)(lifeOptions.delay.value) * 1000;
            life.duration = (0, tsparticles_engine_1.getRangeValue)(lifeOptions.duration.value) * 1000;
        }
    }
}
exports.LifeUpdater = LifeUpdater;


/***/ }),

/***/ 46399:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Life = void 0;
const LifeDelay_1 = __webpack_require__(27035);
const LifeDuration_1 = __webpack_require__(22464);
class Life {
    constructor() {
        this.count = 0;
        this.delay = new LifeDelay_1.LifeDelay();
        this.duration = new LifeDuration_1.LifeDuration();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.count !== undefined) {
            this.count = data.count;
        }
        this.delay.load(data.delay);
        this.duration.load(data.duration);
    }
}
exports.Life = Life;


/***/ }),

/***/ 27035:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LifeDelay = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class LifeDelay extends tsparticles_engine_1.ValueWithRandom {
    constructor() {
        super();
        this.sync = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        super.load(data);
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
exports.LifeDelay = LifeDelay;


/***/ }),

/***/ 22464:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LifeDuration = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class LifeDuration extends tsparticles_engine_1.ValueWithRandom {
    constructor() {
        super();
        this.random.minimumValue = 0.0001;
        this.sync = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        super.load(data);
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
exports.LifeDuration = LifeDuration;


/***/ }),

/***/ 93326:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadLifeUpdater = void 0;
const LifeUpdater_1 = __webpack_require__(7930);
async function loadLifeUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("life", (container) => new LifeUpdater_1.LifeUpdater(container), refresh);
}
exports.loadLifeUpdater = loadLifeUpdater;


/***/ }),

/***/ 39203:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpacityUpdater = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Utils_1 = __webpack_require__(82142);
class OpacityUpdater {
    constructor(container) {
        this.container = container;
    }
    init(particle) {
        const opacityOptions = particle.options.opacity;
        particle.opacity = (0, tsparticles_engine_1.initParticleNumericAnimationValue)(opacityOptions, 1);
        const opacityAnimation = opacityOptions.animation;
        if (opacityAnimation.enable) {
            particle.opacity.velocity =
                ((0, tsparticles_engine_1.getRangeValue)(opacityAnimation.speed) / 100) * this.container.retina.reduceFactor;
            if (!opacityAnimation.sync) {
                particle.opacity.velocity *= (0, tsparticles_engine_1.getRandom)();
            }
        }
    }
    isEnabled(particle) {
        return (!particle.destroyed &&
            !particle.spawning &&
            !!particle.opacity &&
            particle.opacity.enable &&
            ((particle.opacity.maxLoops ?? 0) <= 0 ||
                ((particle.opacity.maxLoops ?? 0) > 0 &&
                    (particle.opacity.loops ?? 0) < (particle.opacity.maxLoops ?? 0))));
    }
    reset(particle) {
        if (particle.opacity) {
            particle.opacity.time = 0;
            particle.opacity.loops = 0;
        }
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        (0, Utils_1.updateOpacity)(particle, delta);
    }
}
exports.OpacityUpdater = OpacityUpdater;


/***/ }),

/***/ 82142:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateOpacity = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
function checkDestroy(particle, value, minValue, maxValue) {
    switch (particle.options.opacity.animation.destroy) {
        case "max":
            if (value >= maxValue) {
                particle.destroy();
            }
            break;
        case "min":
            if (value <= minValue) {
                particle.destroy();
            }
            break;
    }
}
function updateOpacity(particle, delta) {
    const data = particle.opacity;
    if (particle.destroyed || !data?.enable || ((data.maxLoops ?? 0) > 0 && (data.loops ?? 0) > (data.maxLoops ?? 0))) {
        return;
    }
    const minValue = data.min, maxValue = data.max, decay = data.decay ?? 1;
    if (!data.time) {
        data.time = 0;
    }
    if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {
        data.time += delta.value;
    }
    if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {
        return;
    }
    switch (data.status) {
        case "increasing":
            if (data.value >= maxValue) {
                data.status = "decreasing";
                if (!data.loops) {
                    data.loops = 0;
                }
                data.loops++;
            }
            else {
                data.value += (data.velocity ?? 0) * delta.factor;
            }
            break;
        case "decreasing":
            if (data.value <= minValue) {
                data.status = "increasing";
                if (!data.loops) {
                    data.loops = 0;
                }
                data.loops++;
            }
            else {
                data.value -= (data.velocity ?? 0) * delta.factor;
            }
            break;
    }
    if (data.velocity && data.decay !== 1) {
        data.velocity *= decay;
    }
    checkDestroy(particle, data.value, minValue, maxValue);
    if (!particle.destroyed) {
        data.value = (0, tsparticles_engine_1.clamp)(data.value, minValue, maxValue);
    }
}
exports.updateOpacity = updateOpacity;


/***/ }),

/***/ 43301:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadOpacityUpdater = void 0;
const OpacityUpdater_1 = __webpack_require__(39203);
async function loadOpacityUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("opacity", (container) => new OpacityUpdater_1.OpacityUpdater(container), refresh);
}
exports.loadOpacityUpdater = loadOpacityUpdater;


/***/ }),

/***/ 1457:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BounceOutMode = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Utils_1 = __webpack_require__(71793);
class BounceOutMode {
    constructor(container) {
        this.container = container;
        this.modes = [
            "bounce",
            "bounce-vertical",
            "bounce-horizontal",
            "bounceVertical",
            "bounceHorizontal",
            "split",
        ];
    }
    update(particle, direction, delta, outMode) {
        if (!this.modes.includes(outMode)) {
            return;
        }
        const container = this.container;
        let handled = false;
        for (const [, plugin] of container.plugins) {
            if (plugin.particleBounce !== undefined) {
                handled = plugin.particleBounce(particle, delta, direction);
            }
            if (handled) {
                break;
            }
        }
        if (handled) {
            return;
        }
        const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = (0, tsparticles_engine_1.calculateBounds)(pos, size), canvasSize = container.canvas.size;
        (0, Utils_1.bounceHorizontal)({ particle, outMode, direction, bounds, canvasSize, offset, size });
        (0, Utils_1.bounceVertical)({ particle, outMode, direction, bounds, canvasSize, offset, size });
    }
}
exports.BounceOutMode = BounceOutMode;


/***/ }),

/***/ 76044:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DestroyOutMode = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class DestroyOutMode {
    constructor(container) {
        this.container = container;
        this.modes = ["destroy"];
    }
    update(particle, direction, _delta, outMode) {
        if (!this.modes.includes(outMode)) {
            return;
        }
        const container = this.container;
        switch (particle.outType) {
            case "normal":
            case "outside":
                if ((0, tsparticles_engine_1.isPointInside)(particle.position, container.canvas.size, tsparticles_engine_1.Vector.origin, particle.getRadius(), direction)) {
                    return;
                }
                break;
            case "inside": {
                const { dx, dy } = (0, tsparticles_engine_1.getDistances)(particle.position, particle.moveCenter);
                const { x: vx, y: vy } = particle.velocity;
                if ((vx < 0 && dx > particle.moveCenter.radius) ||
                    (vy < 0 && dy > particle.moveCenter.radius) ||
                    (vx >= 0 && dx < -particle.moveCenter.radius) ||
                    (vy >= 0 && dy < -particle.moveCenter.radius)) {
                    return;
                }
                break;
            }
        }
        container.particles.remove(particle, undefined, true);
    }
}
exports.DestroyOutMode = DestroyOutMode;


/***/ }),

/***/ 28406:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoneOutMode = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class NoneOutMode {
    constructor(container) {
        this.container = container;
        this.modes = ["none"];
    }
    update(particle, direction, delta, outMode) {
        if (!this.modes.includes(outMode)) {
            return;
        }
        if ((particle.options.move.distance.horizontal &&
            (direction === "left" || direction === "right")) ||
            (particle.options.move.distance.vertical &&
                (direction === "top" || direction === "bottom"))) {
            return;
        }
        const gravityOptions = particle.options.move.gravity, container = this.container;
        const canvasSize = container.canvas.size;
        const pRadius = particle.getRadius();
        if (!gravityOptions.enable) {
            if ((particle.velocity.y > 0 && particle.position.y <= canvasSize.height + pRadius) ||
                (particle.velocity.y < 0 && particle.position.y >= -pRadius) ||
                (particle.velocity.x > 0 && particle.position.x <= canvasSize.width + pRadius) ||
                (particle.velocity.x < 0 && particle.position.x >= -pRadius)) {
                return;
            }
            if (!(0, tsparticles_engine_1.isPointInside)(particle.position, container.canvas.size, tsparticles_engine_1.Vector.origin, pRadius, direction)) {
                container.particles.remove(particle);
            }
        }
        else {
            const position = particle.position;
            if ((!gravityOptions.inverse &&
                position.y > canvasSize.height + pRadius &&
                direction === "bottom") ||
                (gravityOptions.inverse && position.y < -pRadius && direction === "top")) {
                container.particles.remove(particle);
            }
        }
    }
}
exports.NoneOutMode = NoneOutMode;


/***/ }),

/***/ 9335:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OutOfCanvasUpdater = void 0;
const BounceOutMode_1 = __webpack_require__(1457);
const DestroyOutMode_1 = __webpack_require__(76044);
const NoneOutMode_1 = __webpack_require__(28406);
const OutOutMode_1 = __webpack_require__(85436);
class OutOfCanvasUpdater {
    constructor(container) {
        this.container = container;
        this._updateOutMode = (particle, delta, outMode, direction) => {
            for (const updater of this.updaters) {
                updater.update(particle, direction, delta, outMode);
            }
        };
        this.updaters = [
            new BounceOutMode_1.BounceOutMode(container),
            new DestroyOutMode_1.DestroyOutMode(container),
            new OutOutMode_1.OutOutMode(container),
            new NoneOutMode_1.NoneOutMode(container),
        ];
    }
    init() {
    }
    isEnabled(particle) {
        return !particle.destroyed && !particle.spawning;
    }
    update(particle, delta) {
        const outModes = particle.options.move.outModes;
        this._updateOutMode(particle, delta, outModes.bottom ?? outModes.default, "bottom");
        this._updateOutMode(particle, delta, outModes.left ?? outModes.default, "left");
        this._updateOutMode(particle, delta, outModes.right ?? outModes.default, "right");
        this._updateOutMode(particle, delta, outModes.top ?? outModes.default, "top");
    }
}
exports.OutOfCanvasUpdater = OutOfCanvasUpdater;


/***/ }),

/***/ 85436:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OutOutMode = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class OutOutMode {
    constructor(container) {
        this.container = container;
        this.modes = ["out"];
    }
    update(particle, direction, delta, outMode) {
        if (!this.modes.includes(outMode)) {
            return;
        }
        const container = this.container;
        switch (particle.outType) {
            case "inside": {
                const { x: vx, y: vy } = particle.velocity;
                const circVec = tsparticles_engine_1.Vector.origin;
                circVec.length = particle.moveCenter.radius;
                circVec.angle = particle.velocity.angle + Math.PI;
                circVec.addTo(tsparticles_engine_1.Vector.create(particle.moveCenter));
                const { dx, dy } = (0, tsparticles_engine_1.getDistances)(particle.position, circVec);
                if ((vx <= 0 && dx >= 0) || (vy <= 0 && dy >= 0) || (vx >= 0 && dx <= 0) || (vy >= 0 && dy <= 0)) {
                    return;
                }
                particle.position.x = Math.floor((0, tsparticles_engine_1.randomInRange)({
                    min: 0,
                    max: container.canvas.size.width,
                }));
                particle.position.y = Math.floor((0, tsparticles_engine_1.randomInRange)({
                    min: 0,
                    max: container.canvas.size.height,
                }));
                const { dx: newDx, dy: newDy } = (0, tsparticles_engine_1.getDistances)(particle.position, particle.moveCenter);
                particle.direction = Math.atan2(-newDy, -newDx);
                particle.velocity.angle = particle.direction;
                break;
            }
            default: {
                if ((0, tsparticles_engine_1.isPointInside)(particle.position, container.canvas.size, tsparticles_engine_1.Vector.origin, particle.getRadius(), direction)) {
                    return;
                }
                switch (particle.outType) {
                    case "outside": {
                        particle.position.x =
                            Math.floor((0, tsparticles_engine_1.randomInRange)({
                                min: -particle.moveCenter.radius,
                                max: particle.moveCenter.radius,
                            })) + particle.moveCenter.x;
                        particle.position.y =
                            Math.floor((0, tsparticles_engine_1.randomInRange)({
                                min: -particle.moveCenter.radius,
                                max: particle.moveCenter.radius,
                            })) + particle.moveCenter.y;
                        const { dx, dy } = (0, tsparticles_engine_1.getDistances)(particle.position, particle.moveCenter);
                        if (particle.moveCenter.radius) {
                            particle.direction = Math.atan2(dy, dx);
                            particle.velocity.angle = particle.direction;
                        }
                        break;
                    }
                    case "normal": {
                        const wrap = particle.options.move.warp, canvasSize = container.canvas.size, newPos = {
                            bottom: canvasSize.height + particle.getRadius() + particle.offset.y,
                            left: -particle.getRadius() - particle.offset.x,
                            right: canvasSize.width + particle.getRadius() + particle.offset.x,
                            top: -particle.getRadius() - particle.offset.y,
                        }, sizeValue = particle.getRadius(), nextBounds = (0, tsparticles_engine_1.calculateBounds)(particle.position, sizeValue);
                        if (direction === "right" &&
                            nextBounds.left > canvasSize.width + particle.offset.x) {
                            particle.position.x = newPos.left;
                            particle.initialPosition.x = particle.position.x;
                            if (!wrap) {
                                particle.position.y = (0, tsparticles_engine_1.getRandom)() * canvasSize.height;
                                particle.initialPosition.y = particle.position.y;
                            }
                        }
                        else if (direction === "left" && nextBounds.right < -particle.offset.x) {
                            particle.position.x = newPos.right;
                            particle.initialPosition.x = particle.position.x;
                            if (!wrap) {
                                particle.position.y = (0, tsparticles_engine_1.getRandom)() * canvasSize.height;
                                particle.initialPosition.y = particle.position.y;
                            }
                        }
                        if (direction === "bottom" &&
                            nextBounds.top > canvasSize.height + particle.offset.y) {
                            if (!wrap) {
                                particle.position.x = (0, tsparticles_engine_1.getRandom)() * canvasSize.width;
                                particle.initialPosition.x = particle.position.x;
                            }
                            particle.position.y = newPos.top;
                            particle.initialPosition.y = particle.position.y;
                        }
                        else if (direction === "top" && nextBounds.bottom < -particle.offset.y) {
                            if (!wrap) {
                                particle.position.x = (0, tsparticles_engine_1.getRandom)() * canvasSize.width;
                                particle.initialPosition.x = particle.position.x;
                            }
                            particle.position.y = newPos.bottom;
                            particle.initialPosition.y = particle.position.y;
                        }
                        break;
                    }
                }
                break;
            }
        }
    }
}
exports.OutOutMode = OutOutMode;


/***/ }),

/***/ 71793:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bounceVertical = exports.bounceHorizontal = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
function bounceHorizontal(data) {
    if ((data.outMode !== "bounce" &&
        data.outMode !== "bounce-horizontal" &&
        data.outMode !== "bounceHorizontal" &&
        data.outMode !== "split") ||
        (data.direction !== "left" && data.direction !== "right")) {
        return;
    }
    if (data.bounds.right < 0 && data.direction === "left") {
        data.particle.position.x = data.size + data.offset.x;
    }
    else if (data.bounds.left > data.canvasSize.width && data.direction === "right") {
        data.particle.position.x = data.canvasSize.width - data.size - data.offset.x;
    }
    const velocity = data.particle.velocity.x;
    let bounced = false;
    if ((data.direction === "right" && data.bounds.right >= data.canvasSize.width && velocity > 0) ||
        (data.direction === "left" && data.bounds.left <= 0 && velocity < 0)) {
        const newVelocity = (0, tsparticles_engine_1.getValue)(data.particle.options.bounce.horizontal);
        data.particle.velocity.x *= -newVelocity;
        bounced = true;
    }
    if (!bounced) {
        return;
    }
    const minPos = data.offset.x + data.size;
    if (data.bounds.right >= data.canvasSize.width && data.direction === "right") {
        data.particle.position.x = data.canvasSize.width - minPos;
    }
    else if (data.bounds.left <= 0 && data.direction === "left") {
        data.particle.position.x = minPos;
    }
    if (data.outMode === "split") {
        data.particle.destroy();
    }
}
exports.bounceHorizontal = bounceHorizontal;
function bounceVertical(data) {
    if ((data.outMode !== "bounce" &&
        data.outMode !== "bounce-vertical" &&
        data.outMode !== "bounceVertical" &&
        data.outMode !== "split") ||
        (data.direction !== "bottom" && data.direction !== "top")) {
        return;
    }
    if (data.bounds.bottom < 0 && data.direction === "top") {
        data.particle.position.y = data.size + data.offset.y;
    }
    else if (data.bounds.top > data.canvasSize.height && data.direction === "bottom") {
        data.particle.position.y = data.canvasSize.height - data.size - data.offset.y;
    }
    const velocity = data.particle.velocity.y;
    let bounced = false;
    if ((data.direction === "bottom" && data.bounds.bottom >= data.canvasSize.height && velocity > 0) ||
        (data.direction === "top" && data.bounds.top <= 0 && velocity < 0)) {
        const newVelocity = (0, tsparticles_engine_1.getValue)(data.particle.options.bounce.vertical);
        data.particle.velocity.y *= -newVelocity;
        bounced = true;
    }
    if (!bounced) {
        return;
    }
    const minPos = data.offset.y + data.size;
    if (data.bounds.bottom >= data.canvasSize.height && data.direction === "bottom") {
        data.particle.position.y = data.canvasSize.height - minPos;
    }
    else if (data.bounds.top <= 0 && data.direction === "top") {
        data.particle.position.y = minPos;
    }
    if (data.outMode === "split") {
        data.particle.destroy();
    }
}
exports.bounceVertical = bounceVertical;


/***/ }),

/***/ 30826:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadOutModesUpdater = void 0;
const OutOfCanvasUpdater_1 = __webpack_require__(9335);
async function loadOutModesUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("outModes", (container) => new OutOfCanvasUpdater_1.OutOfCanvasUpdater(container), refresh);
}
exports.loadOutModesUpdater = loadOutModesUpdater;


/***/ }),

/***/ 68185:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roll = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const RollLight_1 = __webpack_require__(28081);
class Roll {
    constructor() {
        this.darken = new RollLight_1.RollLight();
        this.enable = false;
        this.enlighten = new RollLight_1.RollLight();
        this.mode = "vertical";
        this.speed = 25;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.backColor !== undefined) {
            this.backColor = tsparticles_engine_1.OptionsColor.create(this.backColor, data.backColor);
        }
        this.darken.load(data.darken);
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        this.enlighten.load(data.enlighten);
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
        if (data.speed !== undefined) {
            this.speed = (0, tsparticles_engine_1.setRangeValue)(data.speed);
        }
    }
}
exports.Roll = Roll;


/***/ }),

/***/ 28081:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RollLight = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class RollLight {
    constructor() {
        this.enable = false;
        this.value = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.value !== undefined) {
            this.value = (0, tsparticles_engine_1.setRangeValue)(data.value);
        }
    }
}
exports.RollLight = RollLight;


/***/ }),

/***/ 9474:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RollUpdater = void 0;
const Utils_1 = __webpack_require__(89792);
const Roll_1 = __webpack_require__(68185);
class RollUpdater {
    getTransformValues(particle) {
        const roll = particle.roll?.enable && particle.roll, rollHorizontal = roll && roll.horizontal, rollVertical = roll && roll.vertical;
        return {
            a: rollHorizontal ? Math.cos(roll.angle) : undefined,
            d: rollVertical ? Math.sin(roll.angle) : undefined,
        };
    }
    init(particle) {
        (0, Utils_1.initParticle)(particle);
    }
    isEnabled(particle) {
        const roll = particle.options.roll;
        return !particle.destroyed && !particle.spawning && !!roll?.enable;
    }
    loadOptions(options, ...sources) {
        if (!options.roll) {
            options.roll = new Roll_1.Roll();
        }
        for (const source of sources) {
            options.roll.load(source?.roll);
        }
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        (0, Utils_1.updateRoll)(particle, delta);
    }
}
exports.RollUpdater = RollUpdater;


/***/ }),

/***/ 89792:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateRoll = exports.initParticle = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
function initParticle(particle) {
    const rollOpt = particle.options.roll;
    if (!rollOpt?.enable) {
        particle.roll = {
            enable: false,
            horizontal: false,
            vertical: false,
            angle: 0,
            speed: 0,
        };
        return;
    }
    particle.roll = {
        enable: rollOpt.enable,
        horizontal: rollOpt.mode === "horizontal" || rollOpt.mode === "both",
        vertical: rollOpt.mode === "vertical" || rollOpt.mode === "both",
        angle: (0, tsparticles_engine_1.getRandom)() * Math.PI * 2,
        speed: (0, tsparticles_engine_1.getRangeValue)(rollOpt.speed) / 360,
    };
    if (rollOpt.backColor) {
        particle.backColor = (0, tsparticles_engine_1.rangeColorToHsl)(rollOpt.backColor);
    }
    else if (rollOpt.darken.enable && rollOpt.enlighten.enable) {
        const alterType = (0, tsparticles_engine_1.getRandom)() >= 0.5 ? "darken" : "enlighten";
        particle.roll.alter = {
            type: alterType,
            value: (0, tsparticles_engine_1.getRangeValue)(alterType === "darken" ? rollOpt.darken.value : rollOpt.enlighten.value),
        };
    }
    else if (rollOpt.darken.enable) {
        particle.roll.alter = {
            type: "darken",
            value: (0, tsparticles_engine_1.getRangeValue)(rollOpt.darken.value),
        };
    }
    else if (rollOpt.enlighten.enable) {
        particle.roll.alter = {
            type: "enlighten",
            value: (0, tsparticles_engine_1.getRangeValue)(rollOpt.enlighten.value),
        };
    }
}
exports.initParticle = initParticle;
function updateRoll(particle, delta) {
    const roll = particle.options.roll, data = particle.roll;
    if (!data || !roll?.enable) {
        return;
    }
    const speed = data.speed * delta.factor, max = 2 * Math.PI;
    data.angle += speed;
    if (data.angle > max) {
        data.angle -= max;
    }
}
exports.updateRoll = updateRoll;


/***/ }),

/***/ 79315:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadRollUpdater = void 0;
const RollUpdater_1 = __webpack_require__(9474);
async function loadRollUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("roll", () => new RollUpdater_1.RollUpdater(), refresh);
}
exports.loadRollUpdater = loadRollUpdater;


/***/ }),

/***/ 59164:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rotate = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const RotateAnimation_1 = __webpack_require__(67806);
class Rotate extends tsparticles_engine_1.ValueWithRandom {
    constructor() {
        super();
        this.animation = new RotateAnimation_1.RotateAnimation();
        this.direction = "clockwise";
        this.path = false;
        this.value = 0;
    }
    load(data) {
        if (!data) {
            return;
        }
        super.load(data);
        if (data.direction !== undefined) {
            this.direction = data.direction;
        }
        this.animation.load(data.animation);
        if (data.path !== undefined) {
            this.path = data.path;
        }
    }
}
exports.Rotate = Rotate;


/***/ }),

/***/ 67806:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RotateAnimation = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class RotateAnimation {
    constructor() {
        this.enable = false;
        this.speed = 0;
        this.decay = 0;
        this.sync = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.speed !== undefined) {
            this.speed = (0, tsparticles_engine_1.setRangeValue)(data.speed);
        }
        if (data.decay !== undefined) {
            this.decay = (0, tsparticles_engine_1.setRangeValue)(data.decay);
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
exports.RotateAnimation = RotateAnimation;


/***/ }),

/***/ 61604:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RotateUpdater = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Rotate_1 = __webpack_require__(59164);
function updateRotate(particle, delta) {
    const rotate = particle.rotate, rotateOptions = particle.options.rotate;
    if (!rotate || !rotateOptions) {
        return;
    }
    const rotateAnimation = rotateOptions.animation, speed = (rotate.velocity ?? 0) * delta.factor, max = 2 * Math.PI, decay = rotate.decay ?? 1;
    if (!rotateAnimation.enable) {
        return;
    }
    switch (rotate.status) {
        case "increasing":
            rotate.value += speed;
            if (rotate.value > max) {
                rotate.value -= max;
            }
            break;
        case "decreasing":
        default:
            rotate.value -= speed;
            if (rotate.value < 0) {
                rotate.value += max;
            }
            break;
    }
    if (rotate.velocity && decay !== 1) {
        rotate.velocity *= decay;
    }
}
class RotateUpdater {
    constructor(container) {
        this.container = container;
    }
    init(particle) {
        const rotateOptions = particle.options.rotate;
        if (!rotateOptions) {
            return;
        }
        particle.rotate = {
            enable: rotateOptions.animation.enable,
            value: ((0, tsparticles_engine_1.getRangeValue)(rotateOptions.value) * Math.PI) / 180,
        };
        particle.pathRotation = rotateOptions.path;
        let rotateDirection = rotateOptions.direction;
        if (rotateDirection === "random") {
            const index = Math.floor((0, tsparticles_engine_1.getRandom)() * 2);
            rotateDirection = index > 0 ? "counter-clockwise" : "clockwise";
        }
        switch (rotateDirection) {
            case "counter-clockwise":
            case "counterClockwise":
                particle.rotate.status = "decreasing";
                break;
            case "clockwise":
                particle.rotate.status = "increasing";
                break;
        }
        const rotateAnimation = rotateOptions.animation;
        if (rotateAnimation.enable) {
            particle.rotate.decay = 1 - (0, tsparticles_engine_1.getRangeValue)(rotateAnimation.decay);
            particle.rotate.velocity =
                ((0, tsparticles_engine_1.getRangeValue)(rotateAnimation.speed) / 360) * this.container.retina.reduceFactor;
            if (!rotateAnimation.sync) {
                particle.rotate.velocity *= (0, tsparticles_engine_1.getRandom)();
            }
        }
        particle.rotation = particle.rotate.value;
    }
    isEnabled(particle) {
        const rotate = particle.options.rotate;
        if (!rotate) {
            return false;
        }
        return !particle.destroyed && !particle.spawning && rotate.animation.enable && !rotate.path;
    }
    loadOptions(options, ...sources) {
        if (!options.rotate) {
            options.rotate = new Rotate_1.Rotate();
        }
        for (const source of sources) {
            options.rotate.load(source?.rotate);
        }
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        updateRotate(particle, delta);
        particle.rotation = particle.rotate?.value ?? 0;
    }
}
exports.RotateUpdater = RotateUpdater;


/***/ }),

/***/ 7198:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadRotateUpdater = void 0;
const RotateUpdater_1 = __webpack_require__(61604);
async function loadRotateUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("rotate", (container) => new RotateUpdater_1.RotateUpdater(container), refresh);
}
exports.loadRotateUpdater = loadRotateUpdater;


/***/ }),

/***/ 70888:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SizeUpdater = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Utils_1 = __webpack_require__(53402);
class SizeUpdater {
    init(particle) {
        const container = particle.container, sizeOptions = particle.options.size, sizeAnimation = sizeOptions.animation;
        if (sizeAnimation.enable) {
            particle.size.velocity =
                ((particle.retina.sizeAnimationSpeed ?? container.retina.sizeAnimationSpeed) / 100) *
                    container.retina.reduceFactor;
            if (!sizeAnimation.sync) {
                particle.size.velocity *= (0, tsparticles_engine_1.getRandom)();
            }
        }
    }
    isEnabled(particle) {
        return (!particle.destroyed &&
            !particle.spawning &&
            particle.size.enable &&
            ((particle.size.maxLoops ?? 0) <= 0 ||
                ((particle.size.maxLoops ?? 0) > 0 && (particle.size.loops ?? 0) < (particle.size.maxLoops ?? 0))));
    }
    reset(particle) {
        particle.size.loops = 0;
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        (0, Utils_1.updateSize)(particle, delta);
    }
}
exports.SizeUpdater = SizeUpdater;


/***/ }),

/***/ 53402:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateSize = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
function checkDestroy(particle, value, minValue, maxValue) {
    switch (particle.options.size.animation.destroy) {
        case "max":
            if (value >= maxValue) {
                particle.destroy();
            }
            break;
        case "min":
            if (value <= minValue) {
                particle.destroy();
            }
            break;
    }
}
function updateSize(particle, delta) {
    const data = particle.size;
    if (particle.destroyed ||
        !data ||
        !data.enable ||
        ((data.maxLoops ?? 0) > 0 && (data.loops ?? 0) > (data.maxLoops ?? 0))) {
        return;
    }
    const sizeVelocity = (data.velocity ?? 0) * delta.factor, minValue = data.min, maxValue = data.max, decay = data.decay ?? 1;
    if (!data.time) {
        data.time = 0;
    }
    if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {
        data.time += delta.value;
    }
    if ((data.delayTime ?? 0) > 0 && data.time < (data.delayTime ?? 0)) {
        return;
    }
    switch (data.status) {
        case "increasing":
            if (data.value >= maxValue) {
                data.status = "decreasing";
                if (!data.loops) {
                    data.loops = 0;
                }
                data.loops++;
            }
            else {
                data.value += sizeVelocity;
            }
            break;
        case "decreasing":
            if (data.value <= minValue) {
                data.status = "increasing";
                if (!data.loops) {
                    data.loops = 0;
                }
                data.loops++;
            }
            else {
                data.value -= sizeVelocity;
            }
    }
    if (data.velocity && decay !== 1) {
        data.velocity *= decay;
    }
    checkDestroy(particle, data.value, minValue, maxValue);
    if (!particle.destroyed) {
        data.value = (0, tsparticles_engine_1.clamp)(data.value, minValue, maxValue);
    }
}
exports.updateSize = updateSize;


/***/ }),

/***/ 26866:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadSizeUpdater = void 0;
const SizeUpdater_1 = __webpack_require__(70888);
async function loadSizeUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("size", () => new SizeUpdater_1.SizeUpdater(), refresh);
}
exports.loadSizeUpdater = loadSizeUpdater;


/***/ }),

/***/ 75335:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StrokeColorUpdater = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Utils_1 = __webpack_require__(49474);
class StrokeColorUpdater {
    constructor(container) {
        this.container = container;
    }
    init(particle) {
        const container = this.container, options = particle.options;
        const stroke = (0, tsparticles_engine_1.itemFromSingleOrMultiple)(options.stroke, particle.id, options.reduceDuplicates);
        particle.strokeWidth = (0, tsparticles_engine_1.getRangeValue)(stroke.width) * container.retina.pixelRatio;
        particle.strokeOpacity = (0, tsparticles_engine_1.getRangeValue)(stroke.opacity ?? 1);
        particle.strokeAnimation = stroke.color?.animation;
        const strokeHslColor = (0, tsparticles_engine_1.rangeColorToHsl)(stroke.color) ?? particle.getFillColor();
        if (strokeHslColor) {
            particle.strokeColor = (0, tsparticles_engine_1.getHslAnimationFromHsl)(strokeHslColor, particle.strokeAnimation, container.retina.reduceFactor);
        }
    }
    isEnabled(particle) {
        const color = particle.strokeAnimation, { strokeColor } = particle;
        return (!particle.destroyed &&
            !particle.spawning &&
            !!color &&
            ((strokeColor?.h.value !== undefined && strokeColor.h.enable) ||
                (strokeColor?.s.value !== undefined && strokeColor.s.enable) ||
                (strokeColor?.l.value !== undefined && strokeColor.l.enable)));
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        (0, Utils_1.updateStrokeColor)(particle, delta);
    }
}
exports.StrokeColorUpdater = StrokeColorUpdater;


/***/ }),

/***/ 49474:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateStrokeColor = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
function updateColorValue(delta, colorValue, valueAnimation, max, decrease) {
    if (!colorValue ||
        !valueAnimation.enable ||
        ((colorValue.maxLoops ?? 0) > 0 && (colorValue.loops ?? 0) > (colorValue.maxLoops ?? 0))) {
        return;
    }
    if (!colorValue.time) {
        colorValue.time = 0;
    }
    if ((colorValue.delayTime ?? 0) > 0 && colorValue.time < (colorValue.delayTime ?? 0)) {
        colorValue.time += delta.value;
    }
    if ((colorValue.delayTime ?? 0) > 0 && colorValue.time < (colorValue.delayTime ?? 0)) {
        return;
    }
    const offset = (0, tsparticles_engine_1.randomInRange)(valueAnimation.offset), velocity = (colorValue.velocity ?? 0) * delta.factor + offset * 3.6, decay = colorValue.decay ?? 1;
    if (!decrease || colorValue.status === "increasing") {
        colorValue.value += velocity;
        if (colorValue.value > max) {
            if (!colorValue.loops) {
                colorValue.loops = 0;
            }
            colorValue.loops++;
            if (decrease) {
                colorValue.status = "decreasing";
                colorValue.value -= colorValue.value % max;
            }
        }
    }
    else {
        colorValue.value -= velocity;
        if (colorValue.value < 0) {
            if (!colorValue.loops) {
                colorValue.loops = 0;
            }
            colorValue.loops++;
            colorValue.status = "increasing";
            colorValue.value += colorValue.value;
        }
    }
    if (colorValue.velocity && decay !== 1) {
        colorValue.velocity *= decay;
    }
    if (colorValue.value > max) {
        colorValue.value %= max;
    }
}
function updateStrokeColor(particle, delta) {
    if (!particle.strokeColor || !particle.strokeAnimation) {
        return;
    }
    const { h, s, l } = particle.strokeColor, { h: hAnimation, s: sAnimation, l: lAnimation } = particle.strokeAnimation;
    if (h) {
        updateColorValue(delta, h, hAnimation, 360, false);
    }
    if (s) {
        updateColorValue(delta, s, sAnimation, 100, true);
    }
    if (l) {
        updateColorValue(delta, l, lAnimation, 100, true);
    }
}
exports.updateStrokeColor = updateStrokeColor;


/***/ }),

/***/ 15200:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadStrokeColorUpdater = void 0;
const StrokeColorUpdater_1 = __webpack_require__(75335);
async function loadStrokeColorUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("strokeColor", (container) => new StrokeColorUpdater_1.StrokeColorUpdater(container), refresh);
}
exports.loadStrokeColorUpdater = loadStrokeColorUpdater;


/***/ }),

/***/ 95948:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tilt = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const TiltAnimation_1 = __webpack_require__(86311);
class Tilt extends tsparticles_engine_1.ValueWithRandom {
    constructor() {
        super();
        this.animation = new TiltAnimation_1.TiltAnimation();
        this.direction = "clockwise";
        this.enable = false;
        this.value = 0;
    }
    load(data) {
        super.load(data);
        if (!data) {
            return;
        }
        this.animation.load(data.animation);
        if (data.direction !== undefined) {
            this.direction = data.direction;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}
exports.Tilt = Tilt;


/***/ }),

/***/ 86311:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TiltAnimation = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class TiltAnimation {
    constructor() {
        this.enable = false;
        this.speed = 0;
        this.decay = 0;
        this.sync = false;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.speed !== undefined) {
            this.speed = (0, tsparticles_engine_1.setRangeValue)(data.speed);
        }
        if (data.decay !== undefined) {
            this.decay = (0, tsparticles_engine_1.setRangeValue)(data.decay);
        }
        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
exports.TiltAnimation = TiltAnimation;


/***/ }),

/***/ 62687:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TiltUpdater = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Tilt_1 = __webpack_require__(95948);
const Utils_1 = __webpack_require__(10295);
class TiltUpdater {
    constructor(container) {
        this.container = container;
    }
    getTransformValues(particle) {
        const tilt = particle.tilt?.enable && particle.tilt;
        return {
            b: tilt ? Math.cos(tilt.value) * tilt.cosDirection : undefined,
            c: tilt ? Math.sin(tilt.value) * tilt.sinDirection : undefined,
        };
    }
    init(particle) {
        const tiltOptions = particle.options.tilt;
        if (!tiltOptions) {
            return;
        }
        particle.tilt = {
            enable: tiltOptions.enable,
            value: ((0, tsparticles_engine_1.getRangeValue)(tiltOptions.value) * Math.PI) / 180,
            sinDirection: (0, tsparticles_engine_1.getRandom)() >= 0.5 ? 1 : -1,
            cosDirection: (0, tsparticles_engine_1.getRandom)() >= 0.5 ? 1 : -1,
        };
        let tiltDirection = tiltOptions.direction;
        if (tiltDirection === "random") {
            const index = Math.floor((0, tsparticles_engine_1.getRandom)() * 2);
            tiltDirection = index > 0 ? "counter-clockwise" : "clockwise";
        }
        switch (tiltDirection) {
            case "counter-clockwise":
            case "counterClockwise":
                particle.tilt.status = "decreasing";
                break;
            case "clockwise":
                particle.tilt.status = "increasing";
                break;
        }
        const tiltAnimation = particle.options.tilt?.animation;
        if (tiltAnimation?.enable) {
            particle.tilt.decay = 1 - (0, tsparticles_engine_1.getRangeValue)(tiltAnimation.decay);
            particle.tilt.velocity = ((0, tsparticles_engine_1.getRangeValue)(tiltAnimation.speed) / 360) * this.container.retina.reduceFactor;
            if (!tiltAnimation.sync) {
                particle.tilt.velocity *= (0, tsparticles_engine_1.getRandom)();
            }
        }
    }
    isEnabled(particle) {
        const tiltAnimation = particle.options.tilt?.animation;
        return !particle.destroyed && !particle.spawning && !!tiltAnimation?.enable;
    }
    loadOptions(options, ...sources) {
        if (!options.tilt) {
            options.tilt = new Tilt_1.Tilt();
        }
        for (const source of sources) {
            options.tilt.load(source?.tilt);
        }
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        (0, Utils_1.updateTilt)(particle, delta);
    }
}
exports.TiltUpdater = TiltUpdater;


/***/ }),

/***/ 10295:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateTilt = void 0;
function updateTilt(particle, delta) {
    if (!particle.tilt || !particle.options.tilt) {
        return;
    }
    const tilt = particle.options.tilt, tiltAnimation = tilt.animation, speed = (particle.tilt.velocity ?? 0) * delta.factor, max = 2 * Math.PI, decay = particle.tilt.decay ?? 1;
    if (!tiltAnimation.enable) {
        return;
    }
    switch (particle.tilt.status) {
        case "increasing":
            particle.tilt.value += speed;
            if (particle.tilt.value > max) {
                particle.tilt.value -= max;
            }
            break;
        case "decreasing":
        default:
            particle.tilt.value -= speed;
            if (particle.tilt.value < 0) {
                particle.tilt.value += max;
            }
            break;
    }
    if (particle.tilt.velocity && decay !== 1) {
        particle.tilt.velocity *= decay;
    }
}
exports.updateTilt = updateTilt;


/***/ }),

/***/ 78614:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadTiltUpdater = void 0;
const TiltUpdater_1 = __webpack_require__(62687);
async function loadTiltUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("tilt", (container) => new TiltUpdater_1.TiltUpdater(container), refresh);
}
exports.loadTiltUpdater = loadTiltUpdater;


/***/ }),

/***/ 81106:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Twinkle = void 0;
const TwinkleValues_1 = __webpack_require__(68904);
class Twinkle {
    constructor() {
        this.lines = new TwinkleValues_1.TwinkleValues();
        this.particles = new TwinkleValues_1.TwinkleValues();
    }
    load(data) {
        if (!data) {
            return;
        }
        this.lines.load(data.lines);
        this.particles.load(data.particles);
    }
}
exports.Twinkle = Twinkle;


/***/ }),

/***/ 68904:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TwinkleValues = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class TwinkleValues {
    constructor() {
        this.enable = false;
        this.frequency = 0.05;
        this.opacity = 1;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.color !== undefined) {
            this.color = tsparticles_engine_1.OptionsColor.create(this.color, data.color);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.frequency !== undefined) {
            this.frequency = data.frequency;
        }
        if (data.opacity !== undefined) {
            this.opacity = (0, tsparticles_engine_1.setRangeValue)(data.opacity);
        }
    }
}
exports.TwinkleValues = TwinkleValues;


/***/ }),

/***/ 48592:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TwinkleUpdater = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Twinkle_1 = __webpack_require__(81106);
class TwinkleUpdater {
    getColorStyles(particle, context, radius, opacity) {
        const pOptions = particle.options, twinkleOptions = pOptions.twinkle;
        if (!twinkleOptions) {
            return {};
        }
        const twinkle = twinkleOptions.particles, twinkling = twinkle.enable && (0, tsparticles_engine_1.getRandom)() < twinkle.frequency, zIndexOptions = particle.options.zIndex, zOpacityFactor = (1 - particle.zIndexFactor) ** zIndexOptions.opacityRate, twinklingOpacity = twinkling ? (0, tsparticles_engine_1.getRangeValue)(twinkle.opacity) * zOpacityFactor : opacity, twinkleRgb = (0, tsparticles_engine_1.rangeColorToHsl)(twinkle.color), twinkleStyle = twinkleRgb ? (0, tsparticles_engine_1.getStyleFromHsl)(twinkleRgb, twinklingOpacity) : undefined, res = {}, needsTwinkle = twinkling && twinkleStyle;
        res.fill = needsTwinkle ? twinkleStyle : undefined;
        res.stroke = needsTwinkle ? twinkleStyle : undefined;
        return res;
    }
    init() {
    }
    isEnabled(particle) {
        const pOptions = particle.options, twinkleOptions = pOptions.twinkle;
        if (!twinkleOptions) {
            return false;
        }
        return twinkleOptions.particles.enable;
    }
    loadOptions(options, ...sources) {
        if (!options.twinkle) {
            options.twinkle = new Twinkle_1.Twinkle();
        }
        for (const source of sources) {
            options.twinkle.load(source?.twinkle);
        }
    }
    update() {
    }
}
exports.TwinkleUpdater = TwinkleUpdater;


/***/ }),

/***/ 1866:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadTwinkleUpdater = void 0;
const TwinkleUpdater_1 = __webpack_require__(48592);
async function loadTwinkleUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("twinkle", () => new TwinkleUpdater_1.TwinkleUpdater(), refresh);
}
exports.loadTwinkleUpdater = loadTwinkleUpdater;


/***/ }),

/***/ 50622:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Wobble = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const WobbleSpeed_1 = __webpack_require__(20688);
class Wobble {
    constructor() {
        this.distance = 5;
        this.enable = false;
        this.speed = new WobbleSpeed_1.WobbleSpeed();
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.distance !== undefined) {
            this.distance = (0, tsparticles_engine_1.setRangeValue)(data.distance);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.speed !== undefined) {
            if ((0, tsparticles_engine_1.isNumber)(data.speed)) {
                this.speed.load({ angle: data.speed });
            }
            else {
                const rangeSpeed = data.speed;
                if (rangeSpeed.min !== undefined) {
                    this.speed.load({ angle: rangeSpeed });
                }
                else {
                    this.speed.load(data.speed);
                }
            }
        }
    }
}
exports.Wobble = Wobble;


/***/ }),

/***/ 20688:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WobbleSpeed = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
class WobbleSpeed {
    constructor() {
        this.angle = 50;
        this.move = 10;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.angle !== undefined) {
            this.angle = (0, tsparticles_engine_1.setRangeValue)(data.angle);
        }
        if (data.move !== undefined) {
            this.move = (0, tsparticles_engine_1.setRangeValue)(data.move);
        }
    }
}
exports.WobbleSpeed = WobbleSpeed;


/***/ }),

/***/ 13394:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateWobble = void 0;
function updateWobble(particle, delta) {
    const { wobble: wobbleOptions } = particle.options, { wobble } = particle;
    if (!wobbleOptions?.enable || !wobble) {
        return;
    }
    const angleSpeed = wobble.angleSpeed * delta.factor, moveSpeed = wobble.moveSpeed * delta.factor, distance = (moveSpeed * ((particle.retina.wobbleDistance ?? 0) * delta.factor)) / (1000 / 60), max = 2 * Math.PI, { position } = particle;
    wobble.angle += angleSpeed;
    if (wobble.angle > max) {
        wobble.angle -= max;
    }
    position.x += distance * Math.cos(wobble.angle);
    position.y += distance * Math.abs(Math.sin(wobble.angle));
}
exports.updateWobble = updateWobble;


/***/ }),

/***/ 22217:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WobbleUpdater = void 0;
const tsparticles_engine_1 = __webpack_require__(2662);
const Wobble_1 = __webpack_require__(50622);
const Utils_1 = __webpack_require__(13394);
class WobbleUpdater {
    constructor(container) {
        this.container = container;
    }
    init(particle) {
        const wobbleOpt = particle.options.wobble;
        if (wobbleOpt?.enable) {
            particle.wobble = {
                angle: (0, tsparticles_engine_1.getRandom)() * Math.PI * 2,
                angleSpeed: (0, tsparticles_engine_1.getRangeValue)(wobbleOpt.speed.angle) / 360,
                moveSpeed: (0, tsparticles_engine_1.getRangeValue)(wobbleOpt.speed.move) / 10,
            };
        }
        else {
            particle.wobble = {
                angle: 0,
                angleSpeed: 0,
                moveSpeed: 0,
            };
        }
        particle.retina.wobbleDistance = (0, tsparticles_engine_1.getRangeValue)(wobbleOpt?.distance ?? 0) * this.container.retina.pixelRatio;
    }
    isEnabled(particle) {
        return !particle.destroyed && !particle.spawning && !!particle.options.wobble?.enable;
    }
    loadOptions(options, ...sources) {
        if (!options.wobble) {
            options.wobble = new Wobble_1.Wobble();
        }
        for (const source of sources) {
            options.wobble.load(source?.wobble);
        }
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) {
            return;
        }
        (0, Utils_1.updateWobble)(particle, delta);
    }
}
exports.WobbleUpdater = WobbleUpdater;


/***/ }),

/***/ 78011:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadWobbleUpdater = void 0;
const WobbleUpdater_1 = __webpack_require__(22217);
async function loadWobbleUpdater(engine, refresh = true) {
    await engine.addParticleUpdater("wobble", (container) => new WobbleUpdater_1.WobbleUpdater(container), refresh);
}
exports.loadWobbleUpdater = loadWobbleUpdater;


/***/ }),

/***/ 70780:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.R = void 0;
const tsparticles_plugin_absorbers_1 = __webpack_require__(7086);
const tsparticles_updater_destroy_1 = __webpack_require__(27186);
const tsparticles_plugin_emitters_1 = __webpack_require__(13719);
const tsparticles_interaction_external_trail_1 = __webpack_require__(91492);
const tsparticles_updater_roll_1 = __webpack_require__(79315);
const tsparticles_slim_1 = __webpack_require__(76472);
const tsparticles_updater_tilt_1 = __webpack_require__(78614);
const tsparticles_updater_twinkle_1 = __webpack_require__(1866);
const tsparticles_updater_wobble_1 = __webpack_require__(78011);
async function loadFull(engine, refresh = true) {
    await (0, tsparticles_updater_destroy_1.loadDestroyUpdater)(engine, false);
    await (0, tsparticles_updater_roll_1.loadRollUpdater)(engine, false);
    await (0, tsparticles_updater_tilt_1.loadTiltUpdater)(engine, false);
    await (0, tsparticles_updater_twinkle_1.loadTwinkleUpdater)(engine, false);
    await (0, tsparticles_updater_wobble_1.loadWobbleUpdater)(engine, false);
    await (0, tsparticles_interaction_external_trail_1.loadExternalTrailInteraction)(engine, false);
    await (0, tsparticles_plugin_absorbers_1.loadAbsorbersPlugin)(engine, false);
    await (0, tsparticles_plugin_emitters_1.loadEmittersPlugin)(engine, false);
    await (0, tsparticles_slim_1.loadSlim)(engine, refresh);
}
exports.R = loadFull;


/***/ }),

/***/ 88324:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._class_private_field_loose_base = _class_private_field_loose_base;
function _class_private_field_loose_base(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
        throw new TypeError("attempted to use private field on non-instance");
    }

    return receiver;
}


/***/ }),

/***/ 94567:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var id = 0;

exports._ = exports._class_private_field_loose_key = _class_private_field_loose_key;
function _class_private_field_loose_key(name) {
    return "__private_" + id++ + "_" + name;
}


/***/ }),

/***/ 82147:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ }),

/***/ 4009:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();

    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
exports._ = exports._interop_require_wildcard = _interop_require_wildcard;
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) return cache.get(obj);

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }

    newObj.default = obj;

    if (cache) cache.set(obj, newObj);

    return newObj;
}


/***/ }),

/***/ 73297:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ })

};
;