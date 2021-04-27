(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "B:\\Projekte\\WebMetropolis\\Website\\web-metropolis\\components\\Layout.js";


const Menue = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "components_Menue_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Menue.js */ "./components/Menue.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Menue.js */ "./components/Menue.js")],
    modules: ['./Menue.js']
  }
});
const Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "components_Footer_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Footer */ "./components/Footer.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Footer */ "./components/Footer.js")],
    modules: ['./Footer']
  }
});

const layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Menue, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (layout);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "B:\\Projekte\\WebMetropolis\\Website\\web-metropolis\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/serviceWorker.js").then(function (registration) {
          console.log("Service Worker registration successful with scope: ", registration.scope);
        }, function (err) {
          console.log("Service Worker registration failed: ", err);
        });
      });
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, this), ";"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 8
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ (function() {



/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWItTWV0cm9wb2xpcy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL1dlYi1NZXRyb3BvbGlzLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9XZWItTWV0cm9wb2xpcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL1dlYi1NZXRyb3BvbGlzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vV2ViLU1ldHJvcG9saXMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL1dlYi1NZXRyb3BvbGlzL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vV2ViLU1ldHJvcG9saXMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL1dlYi1NZXRyb3BvbGlzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTWVudWUiLCJkeW5hbWljIiwiRm9vdGVyIiwibGF5b3V0IiwiY2hpbGRyZW4iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJ0aGVuIiwicmVnaXN0cmF0aW9uIiwiY29uc29sZSIsImxvZyIsInNjb3BlIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxNQUFNQSxLQUFLLEdBQUdDLG1EQUFPLENBQUMsTUFBTSwySkFBUDtBQUFBO0FBQUEsd0NBQWMseUNBQWQ7QUFBQSxjQUFjLFlBQWQ7QUFBQTtBQUFBLEVBQXJCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxtREFBTyxDQUFDLE1BQU0sMkpBQVA7QUFBQTtBQUFBLHdDQUFjLHdDQUFkO0FBQUEsY0FBYyxVQUFkO0FBQUE7QUFBQSxFQUF0Qjs7QUFLQSxNQUFNRSxNQUFNLEdBQUcsQ0FBRTtBQUFDQztBQUFELENBQUYsS0FBa0I7QUFDN0Isc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFS0EsUUFGTCxlQUdJLDhEQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBLGtCQURKO0FBT0gsQ0FSRDs7QUFVQSwrREFBZUQsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTRSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDckNDLGtEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUcsbUJBQW1CQyxTQUF0QixFQUFpQztBQUMvQkMsWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFZO0FBQzNDRixpQkFBUyxDQUFDRyxhQUFWLENBQXdCQyxRQUF4QixDQUFpQyxtQkFBakMsRUFBc0RDLElBQXRELENBQ0csVUFBVUMsWUFBVixFQUF3QjtBQUN0QkMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHFEQUFaLEVBQW1FRixZQUFZLENBQUNHLEtBQWhGO0FBQ0QsU0FISixFQUlHLFVBQVVDLEdBQVYsRUFBZTtBQUNiSCxpQkFBTyxDQUFDQyxHQUFSLENBQVksc0NBQVosRUFBb0RFLEdBQXBEO0FBQ0QsU0FOSjtBQVFBLE9BVEQ7QUFVRDtBQUNGLEdBYk0sRUFhSixFQWJJLENBQVQ7QUFjQSxzQkFDRyw4REFBQyx1REFBRDtBQUFBLDRCQUNJLDhEQUFDLFNBQUQsb0JBQWVaLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBTUg7O0FBRUQsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBLCtEOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbGF6eSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmNvbnN0IE1lbnVlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vTWVudWUuanMnKSlcclxuY29uc3QgRm9vdGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vRm9vdGVyJykpXHJcblxyXG4gXHJcblxyXG5cclxuY29uc3QgbGF5b3V0ID0gKCB7Y2hpbGRyZW59ICkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TWVudWUgLz4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsYXlvdXQiLCJpbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXCIvc2VydmljZVdvcmtlci5qc1wiKS50aGVuKFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChyZWdpc3RyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogXCIsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6IFwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPExheW91dD5cclxuICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xyXG4gICAgICAgPC9MYXlvdXQ+IFxyXG4gICAgKSBcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==