webpackHotUpdate_N_E(5,{

/***/ "./components/SectionPortfolio.js":
/*!****************************************!*\
  !*** ./components/SectionPortfolio.js ***!
  \****************************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/amp */ "./node_modules/next/amp.js");
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/Portfolio.module.scss */ "./scss/Portfolio.module.scss");
/* harmony import */ var _scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "B:\\Projekte\\WebMetropolis\\Website\\web-metropolis\\components\\SectionPortfolio.js",
    _this = undefined,
    _s = $RefreshSig$();






var config = {
  amp: 'hybrid'
};

var SectionPortfolio = function SectionPortfolio() {
  _s();

  var _jsxDEV2;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      showedModal = _useState[0],
      setShowedModal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('none'),
      showedBlock = _useState2[0],
      setShowedBlock = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      fade = _useState3[0],
      setFade = _useState3[1];

  var showModal = function showModal() {
    if (showedModal != 'show') {
      setShowedModal('show');
      setShowedBlock('block');
      setFade('fade');
    } else {
      setShowedModal('');
      setShowedBlock('none');
      setFade('');
    }
  };

  var display = showedBlock;
  var divStyle = {
    display: display,
    paddingRight: '17px'
  };
  var isAmp = Object(next_amp__WEBPACK_IMPORTED_MODULE_5__["useAmp"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "portfolio",
      className: "portfolio",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-fluid text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "small-heading",
            children: "Portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Unsere Kundenprojekte"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "".concat(_scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.item, " col-lg-3 col-md-6"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              onClick: showModal,
              children: [isAmp ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("amp-img", {
                layout: "responsive",
                width: "700",
                height: "700",
                src: "/img_webp/q-solutions.webp",
                alt: "Q-Solutions"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 41
              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
                layout: "responsive",
                src: "/img/q-solutions.jpg",
                width: 700,
                height: 700,
                alt: "Alexander Keil"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: [_scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.overlay],
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                    style: {
                      color: 'red'
                    },
                    children: "Q-Solutions GmbH"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    style: {
                      color: 'black'
                    },
                    children: "Web Projekt"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "".concat(_scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.item, " col-lg-3 col-md-6"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              onClick: showModal,
              children: [isAmp ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("amp-img", {
                layout: "responsive",
                width: "700",
                height: "700",
                src: "/img_webp/Falamex.webp",
                alt: "Falamex"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 34
              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
                layout: "responsive",
                src: "/img/Falamex.jpg",
                width: 700,
                height: 700,
                alt: "Falamex"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: [_scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.overlay],
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                    style: {
                      color: 'red'
                    },
                    children: "Falamex"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    style: {
                      color: 'black'
                    },
                    children: "Web Projekt"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "".concat(_scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.item, " col-lg-3 col-md-6"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              "data-toggle": "modal",
              "data-target": "#portfolio-item1",
              children: [isAmp ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("amp-img", {
                layout: "responsive",
                src: "/img_webp/donut-baellchen.webp",
                width: "700",
                height: "700",
                alt: "Donut B\xE4llchen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 37
              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, (_jsxDEV2 = {
                layout: "responsive",
                src: "/img/donut-baellchen.jpg",
                width: 700,
                height: 700
              }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV2, "height", "700"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV2, "alt", "Donut B\xE4llchen"), _jsxDEV2), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: [_scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.overlay],
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                    style: {
                      color: 'red'
                    },
                    children: "Donut B\xE4llchen"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    style: {
                      color: 'black'
                    },
                    children: "Web Projekt"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "".concat(_scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.item, " col-lg-3 col-md-6"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              children: [isAmp ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("amp-img", {
                layout: "responsive",
                src: "/img_webp/keil-baumaschinen.webp",
                width: "700",
                height: "700",
                alt: "Keil Baumaschinen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 37
              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
                layout: "responsive",
                src: "/img/keil-baumaschinen.jpg",
                width: 700,
                height: 700,
                alt: "Keil Baumaschinen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: [_scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.overlay],
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                    style: {
                      color: 'red'
                    },
                    children: "Keil Baumaschinen"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    style: {
                      color: 'black'
                    },
                    children: "Web Projekt"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "portfolio-item1",
        role: "dialog",
        "aria-hidden": "true",
        className: "modal ".concat(_scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.modal, " ").concat(showedModal, " ").concat(fade),
        style: divStyle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          role: "document",
          className: "modal-dialog  ".concat(_scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.modalDialog),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "modal-content ".concat(_scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.modalContent),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: showModal,
              type: "button",
              "data-bs-dismiss": "modal",
              "aria-label": "Close",
              className: "".concat(_scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.closeButton, " btn-close"),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                "aria-hidden": "true",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "close-icon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container-fluid",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row align-items-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mockup col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "device-mockup",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      "data-device": "Macbook2015",
                      "data-orientation": "portrait",
                      "data-color": "gold",
                      className: "device device",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "screen",
                        children: "Image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 150,
                        columnNumber: 45
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 41
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 33
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "text col-lg-6 text-center text-lg-left mt-5 mt-lg-0",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                    children: "Q-Solutions"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 37
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "lead",
                    children: "Re-Design Website"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 37
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "F\xFCr die Q-Solutions GmbH aus M\xFCnchen, welche Software liefert f\xFCr den W\xE4rmelieferungsmarkt, haben wir mit Hilfe des Frontend Frameworks Bootstrap das Design umgesetzt."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 37
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Um die Seite mit Funktionalit\xE4ten zu erweitern, haben wir mit JavaScript die Button-Funktion im News-Bereich des jeweiligen Produkts konfortabel f\xFCr den Benutzer die Informationen zum Produkt bereitgestellt."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 37
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    className: "btn btn-primary",
                    children: "Visit website"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 37
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 33
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "portfolio-item1",
        role: "dialog",
        "aria-hidden": "true",
        className: "modal ".concat(_scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.modal, " ").concat(showedModal, " ").concat(fade),
        style: divStyle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          role: "document",
          className: "modal-dialog  ".concat(_scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.modalDialog),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "modal-content ".concat(_scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.modalContent),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: showModal,
              type: "button",
              "data-bs-dismiss": "modal",
              "aria-label": "Close",
              className: "".concat(_scss_Portfolio_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.closeButton, " btn-close"),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                "aria-hidden": "true",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "close-icon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container-fluid",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row align-items-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mockup col-lg-6",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "device-mockup",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      "data-device": "Macbook2015",
                      "data-orientation": "portrait",
                      "data-color": "gold",
                      className: "device device",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "screen",
                        children: "Image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 194,
                        columnNumber: 45
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 193,
                      columnNumber: 41
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 33
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "text col-lg-6 text-center text-lg-left mt-5 mt-lg-0",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                    children: "Q-Solutions"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 37
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "lead",
                    children: "Re-Design Website"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                    columnNumber: 37
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "F\xFCr die Q-Solutions GmbH aus M\xFCnchen, welche Software liefert f\xFCr den W\xE4rmelieferungsmarkt, haben wir mit Hilfe des Frontend Frameworks Bootstrap das Design umgesetzt."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 37
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Um die Seite mit Funktionalit\xE4ten zu erweitern, haben wir mit JavaScript die Button-Funktion im News-Bereich des jeweiligen Produkts konfortabel f\xFCr den Benutzer die Informationen zum Produkt bereitgestellt."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 37
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    className: "btn btn-primary",
                    children: "Visit website"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 213,
                    columnNumber: 37
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 33
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(SectionPortfolio, "e9UIWtNmOgVSnu/1rE2LSBRllu4=", false, function () {
  return [next_amp__WEBPACK_IMPORTED_MODULE_5__["useAmp"]];
});

_c = SectionPortfolio;
/* harmony default export */ __webpack_exports__["default"] = (SectionPortfolio);

var _c;

$RefreshReg$(_c, "SectionPortfolio");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9uUG9ydGZvbGlvLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImFtcCIsIlNlY3Rpb25Qb3J0Zm9saW8iLCJ1c2VTdGF0ZSIsInNob3dlZE1vZGFsIiwic2V0U2hvd2VkTW9kYWwiLCJzaG93ZWRCbG9jayIsInNldFNob3dlZEJsb2NrIiwiZmFkZSIsInNldEZhZGUiLCJzaG93TW9kYWwiLCJkaXNwbGF5IiwiZGl2U3R5bGUiLCJwYWRkaW5nUmlnaHQiLCJpc0FtcCIsInVzZUFtcCIsInN0eWxlcyIsIml0ZW0iLCJvdmVybGF5IiwiY29sb3IiLCJtb2RhbCIsIm1vZGFsRGlhbG9nIiwibW9kYWxDb250ZW50IiwiY2xvc2VCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUc7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBZjs7QUFFUCxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFBQTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQyxFQUFELENBRG5CO0FBQUEsTUFDcEJDLFdBRG9CO0FBQUEsTUFDUEMsY0FETzs7QUFBQSxtQkFFV0Ysc0RBQVEsQ0FBQyxNQUFELENBRm5CO0FBQUEsTUFFcEJHLFdBRm9CO0FBQUEsTUFFUEMsY0FGTzs7QUFBQSxtQkFHSEosc0RBQVEsQ0FBQyxFQUFELENBSEw7QUFBQSxNQUdwQkssSUFIb0I7QUFBQSxNQUdkQyxPQUhjOztBQUszQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLFFBQUdOLFdBQVcsSUFBSSxNQUFsQixFQUEwQjtBQUN0QkMsb0JBQWMsQ0FBQyxNQUFELENBQWQ7QUFDQUUsb0JBQWMsQ0FBQyxPQUFELENBQWQ7QUFDQUUsYUFBTyxDQUFDLE1BQUQsQ0FBUDtBQUNILEtBSkQs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Yko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEvSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkosbUJBREo7QUFpTUgsQ0ExTkQ7O0dBQU1yQixnQjtVQXdCWWEsK0M7OztLQXhCWmIsZ0I7QUE0TlNBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzUuZDVlYmJmZGU2OTUyZGE0ODJjYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgdXNlQW1wIH0gZnJvbSAnbmV4dC9hbXAnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc2Nzcy9Qb3J0Zm9saW8ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0geyBhbXA6ICdoeWJyaWQnIH07XHJcblxyXG5jb25zdCBTZWN0aW9uUG9ydGZvbGlvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dlZE1vZGFsLCBzZXRTaG93ZWRNb2RhbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2hvd2VkQmxvY2ssIHNldFNob3dlZEJsb2NrXSA9IHVzZVN0YXRlKCdub25lJyk7XHJcbiAgICBjb25zdCBbZmFkZSwgc2V0RmFkZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHNob3dlZE1vZGFsICE9ICdzaG93Jykge1xyXG4gICAgICAgICAgICBzZXRTaG93ZWRNb2RhbCgnc2hvdycpO1xyXG4gICAgICAgICAgICBzZXRTaG93ZWRCbG9jaygnYmxvY2snKTtcclxuICAgICAgICAgICAgc2V0RmFkZSgnZmFkZScpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U2hvd2VkTW9kYWwoJycpO1xyXG4gICAgICAgICAgICBzZXRTaG93ZWRCbG9jaygnbm9uZScpO1xyXG4gICAgICAgICAgICBzZXRGYWRlKCcnKVxyXG4gICAgICAgIH0gICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRpc3BsYXkgPSBzaG93ZWRCbG9jaztcclxuXHJcbiAgICBjb25zdCBkaXZTdHlsZSA9IHtcclxuICAgICAgICBkaXNwbGF5OiBkaXNwbGF5LFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzE3cHgnLFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzQW1wID0gdXNlQW1wKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsvKiA8IS0tIFBvcnRmb2xpbyBTZWN0aW9uLS0+ICovfVxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cInBvcnRmb2xpb1wiIGNsYXNzTmFtZT1cInBvcnRmb2xpb1wiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic21hbGwtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3J0Zm9saW9cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVW5zZXJlIEt1bmRlbnByb2pla3RlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaXRlbX0gY29sLWxnLTMgY29sLW1kLTZgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3Nob3dNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0FtcCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbXAtaW1nIGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD1cIjcwMFwiIGhlaWdodD1cIjcwMFwiIHNyYz1cIi9pbWdfd2VicC9xLXNvbHV0aW9ucy53ZWJwXCIgYWx0PVwiUS1Tb2x1dGlvbnNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBsYXlvdXQ9J3Jlc3BvbnNpdmUnIHNyYz1cIi9pbWcvcS1zb2x1dGlvbnMuanBnXCIgd2lkdGg9ezcwMH0gaGVpZ2h0PXs3MDB9IGFsdD1cIkFsZXhhbmRlciBLZWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5vdmVybGF5XX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3tjb2xvcjogJ3JlZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUS1Tb2x1dGlvbnMgR21iSFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJ2JsYWNrJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWIgUHJvamVrdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBFbmQgSXRlbS0tPiAqL31cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLml0ZW19IGNvbC1sZy0zIGNvbC1tZC02YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtzaG93TW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0FtcCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8YW1wLWltZyBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9XCI3MDBcIiBoZWlnaHQ9XCI3MDBcIiBzcmM9XCIvaW1nX3dlYnAvRmFsYW1leC53ZWJwXCIgYWx0PVwiRmFsYW1leFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBsYXlvdXQ9J3Jlc3BvbnNpdmUnIHNyYz1cIi9pbWcvRmFsYW1leC5qcGdcIiB3aWR0aD17NzAwfSBoZWlnaHQ9ezcwMH0gYWx0PVwiRmFsYW1leFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tzdHlsZXMub3ZlcmxheV19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e2NvbG9yOiAncmVkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhbGFtZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnYmxhY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2ViIFByb2pla3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIEVuZCBJdGVtLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaXRlbX0gY29sLWxnLTMgY29sLW1kLTZgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3BvcnRmb2xpby1pdGVtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0FtcCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFtcC1pbWcgbGF5b3V0PSdyZXNwb25zaXZlJyBzcmM9XCIvaW1nX3dlYnAvZG9udXQtYmFlbGxjaGVuLndlYnBcIiB3aWR0aD1cIjcwMFwiIGhlaWdodD1cIjcwMFwiIGFsdD1cIkRvbnV0IELDpGxsY2hlblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGxheW91dD0ncmVzcG9uc2l2ZScgc3JjPVwiL2ltZy9kb251dC1iYWVsbGNoZW4uanBnXCIgd2lkdGg9ezcwMH0gaGVpZ2h0PXs3MDB9IGhlaWdodD1cIjcwMFwiIGFsdD1cIkRvbnV0IELDpGxsY2hlblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tzdHlsZXMub3ZlcmxheV19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e2NvbG9yOiAncmVkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbnV0IELDpGxsY2hlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICdibGFjayd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWIgUHJvamVrdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBFbmQgSXRlbS0tPiAqL30gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaXRlbX0gY29sLWxnLTMgY29sLW1kLTZgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQW1wID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW1wLWltZyBsYXlvdXQ9J3Jlc3BvbnNpdmUnIHNyYz1cIi9pbWdfd2VicC9rZWlsLWJhdW1hc2NoaW5lbi53ZWJwXCIgd2lkdGg9XCI3MDBcIiBoZWlnaHQ9XCI3MDBcIiBhbHQ9XCJLZWlsIEJhdW1hc2NoaW5lblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBsYXlvdXQ9J3Jlc3BvbnNpdmUnIHNyYz1cIi9pbWcva2VpbC1iYXVtYXNjaGluZW4uanBnXCIgd2lkdGg9ezcwMH0gaGVpZ2h0PXs3MDB9IGFsdD1cIktlaWwgQmF1bWFzY2hpbmVuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5vdmVybGF5XX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7Y29sb3I6ICdyZWQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS2VpbCBCYXVtYXNjaGluZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnYmxhY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2ViIFByb2pla3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gRW5kIEl0ZW0tLT4gKi99ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8IS0tIFBvcnRmb2xpbyBRLVNvbHV0aW9ucyAgKi99XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3J0Zm9saW8taXRlbTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPXtgbW9kYWwgJHtzdHlsZXMubW9kYWx9ICR7c2hvd2VkTW9kYWx9ICR7ZmFkZX1gfSBzdHlsZT17ZGl2U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiZG9jdW1lbnRcIiBjbGFzc05hbWU9e2Btb2RhbC1kaWFsb2cgICR7c3R5bGVzLm1vZGFsRGlhbG9nfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9kYWwtY29udGVudCAke3N0eWxlcy5tb2RhbENvbnRlbnR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dNb2RhbH0gdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2xvc2VCdXR0b259IGJ0bi1jbG9zZWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJjbG9zZS1pY29uXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vY2t1cCBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldmljZS1tb2NrdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1kZXZpY2U9XCJNYWNib29rMjAxNVwiIGRhdGEtb3JpZW50YXRpb249XCJwb3J0cmFpdFwiIGRhdGEtY29sb3I9XCJnb2xkXCIgY2xhc3NOYW1lPVwiZGV2aWNlIGRldmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0IGNvbC1sZy02IHRleHQtY2VudGVyIHRleHQtbGctbGVmdCBtdC01IG10LWxnLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUS1Tb2x1dGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmUtRGVzaWduIFdlYnNpdGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGw7xyIGRpZSBRLVNvbHV0aW9ucyBHbWJIIGF1cyBNw7xuY2hlbiwgd2VsY2hlIFNvZnR3YXJlIGxpZWZlcnQgZsO8ciBkZW4gV8Okcm1lbGllZmVydW5nc21hcmt0LCBoYWJlbiB3aXIgbWl0IEhpbGZlIGRlcyBGcm9udGVuZCBGcmFtZXdvcmtzIEJvb3RzdHJhcCBkYXMgRGVzaWduIHVtZ2VzZXR6dC4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbSBkaWUgU2VpdGUgbWl0IEZ1bmt0aW9uYWxpdMOkdGVuIHp1IGVyd2VpdGVybiwgaGFiZW4gd2lyIG1pdCBKYXZhU2NyaXB0IGRpZSBCdXR0b24tRnVua3Rpb24gaW0gTmV3cy1CZXJlaWNoIGRlcyBqZXdlaWxpZ2VuIFByb2R1a3RzIGtvbmZvcnRhYmVsIGbDvHIgZGVuIEJlbnV0emVyIGRpZSBJbmZvcm1hdGlvbmVuIHp1bSBQcm9kdWt0IGJlcmVpdGdlc3RlbGx0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXNpdCB3ZWJzaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDwhLS0gRW5kIE1vZGFsIFEtU29sdXRpb25zLS0+ICovfVxyXG4gICAgICAgICAgICB7LyogPCEtLSBQb3J0Zm9saW8gRmFsYW1leCAgKi99XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3J0Zm9saW8taXRlbTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPXtgbW9kYWwgJHtzdHlsZXMubW9kYWx9ICR7c2hvd2VkTW9kYWx9ICR7ZmFkZX1gfSBzdHlsZT17ZGl2U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiZG9jdW1lbnRcIiBjbGFzc05hbWU9e2Btb2RhbC1kaWFsb2cgICR7c3R5bGVzLm1vZGFsRGlhbG9nfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9kYWwtY29udGVudCAke3N0eWxlcy5tb2RhbENvbnRlbnR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dNb2RhbH0gdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2xvc2VCdXR0b259IGJ0bi1jbG9zZWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJjbG9zZS1pY29uXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vY2t1cCBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldmljZS1tb2NrdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1kZXZpY2U9XCJNYWNib29rMjAxNVwiIGRhdGEtb3JpZW50YXRpb249XCJwb3J0cmFpdFwiIGRhdGEtY29sb3I9XCJnb2xkXCIgY2xhc3NOYW1lPVwiZGV2aWNlIGRldmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0IGNvbC1sZy02IHRleHQtY2VudGVyIHRleHQtbGctbGVmdCBtdC01IG10LWxnLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUS1Tb2x1dGlvbnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmUtRGVzaWduIFdlYnNpdGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGw7xyIGRpZSBRLVNvbHV0aW9ucyBHbWJIIGF1cyBNw7xuY2hlbiwgd2VsY2hlIFNvZnR3YXJlIGxpZWZlcnQgZsO8ciBkZW4gV8Okcm1lbGllZmVydW5nc21hcmt0LCBoYWJlbiB3aXIgbWl0IEhpbGZlIGRlcyBGcm9udGVuZCBGcmFtZXdvcmtzIEJvb3RzdHJhcCBkYXMgRGVzaWduIHVtZ2VzZXR6dC4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbSBkaWUgU2VpdGUgbWl0IEZ1bmt0aW9uYWxpdMOkdGVuIHp1IGVyd2VpdGVybiwgaGFiZW4gd2lyIG1pdCBKYXZhU2NyaXB0IGRpZSBCdXR0b24tRnVua3Rpb24gaW0gTmV3cy1CZXJlaWNoIGRlcyBqZXdlaWxpZ2VuIFByb2R1a3RzIGtvbmZvcnRhYmVsIGbDvHIgZGVuIEJlbnV0emVyIGRpZSBJbmZvcm1hdGlvbmVuIHp1bSBQcm9kdWt0IGJlcmVpdGdlc3RlbGx0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXNpdCB3ZWJzaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDwhLS0gRW5kIE1vZGFsIEZhbGFtZXgtLT4gKi99XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgey8qIDwhLS0gRW5kIFBvcnRmb2xpbyBTZWN0aW9uLS0+ICovfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uUG9ydGZvbGlvIl0sInNvdXJjZVJvb3QiOiIifQ==