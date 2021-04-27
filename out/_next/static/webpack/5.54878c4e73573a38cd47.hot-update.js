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
              href: "#",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9uUG9ydGZvbGlvLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImFtcCIsIlNlY3Rpb25Qb3J0Zm9saW8iLCJ1c2VTdGF0ZSIsInNob3dlZE1vZGFsIiwic2V0U2hvd2VkTW9kYWwiLCJzaG93ZWRCbG9jayIsInNldFNob3dlZEJsb2NrIiwiZmFkZSIsInNldEZhZGUiLCJzaG93TW9kYWwiLCJkaXNwbGF5IiwiZGl2U3R5bGUiLCJwYWRkaW5nUmlnaHQiLCJpc0FtcCIsInVzZUFtcCIsInN0eWxlcyIsIml0ZW0iLCJvdmVybGF5IiwiY29sb3IiLCJtb2RhbCIsIm1vZGFsRGlhbG9nIiwibW9kYWxDb250ZW50IiwiY2xvc2VCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUc7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBZjs7QUFFUCxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFBQTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQyxFQUFELENBRG5CO0FBQUEsTUFDcEJDLFdBRG9CO0FBQUEsTUFDUEMsY0FETzs7QUFBQSxtQkFFV0Ysc0RBQVEsQ0FBQyxNQUFELENBRm5CO0FBQUEsTUFFcEJHLFdBRm9CO0FBQUEsTUFFUEMsY0FGTzs7QUFBQSxtQkFHSEosc0RBQVEsQ0FBQyxFQUFELENBSEw7QUFBQSxNQUdwQkssSUFIb0I7QUFBQSxNQUdkQyxPQUhjOztBQUszQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLFFBQUdOLFdBQVcsSUFBSSxNQUFsQixFQUEwQjtBQUN0QkMsb0JBQWMsQ0FBQyxNQUFELENBQWQ7QUFDQUUsb0JBQWMsQ0FBQyxPQUFELENBQWQ7QUFDQUUsYUFBTyxDQUFDLE1BQUQsQ0FBUDtBQUNILEtBSkQs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SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQS9JQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSixtQkFESjtBQWlNSCxDQTFORDs7R0FBTXJCLGdCO1VBd0JZYSwrQzs7O0tBeEJaYixnQjtBQTROU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svNS41NDg3OGM0ZTczNTczYTM4Y2Q0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyB1c2VBbXAgfSBmcm9tICduZXh0L2FtcCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zY3NzL1BvcnRmb2xpby5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7IGFtcDogJ2h5YnJpZCcgfTtcclxuXHJcbmNvbnN0IFNlY3Rpb25Qb3J0Zm9saW8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2hvd2VkTW9kYWwsIHNldFNob3dlZE1vZGFsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzaG93ZWRCbG9jaywgc2V0U2hvd2VkQmxvY2tdID0gdXNlU3RhdGUoJ25vbmUnKTtcclxuICAgIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc2hvd2VkTW9kYWwgIT0gJ3Nob3cnKSB7XHJcbiAgICAgICAgICAgIHNldFNob3dlZE1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIHNldFNob3dlZEJsb2NrKCdibG9jaycpO1xyXG4gICAgICAgICAgICBzZXRGYWRlKCdmYWRlJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTaG93ZWRNb2RhbCgnJyk7XHJcbiAgICAgICAgICAgIHNldFNob3dlZEJsb2NrKCdub25lJyk7XHJcbiAgICAgICAgICAgIHNldEZhZGUoJycpXHJcbiAgICAgICAgfSAgICBcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGlzcGxheSA9IHNob3dlZEJsb2NrO1xyXG5cclxuICAgIGNvbnN0IGRpdlN0eWxlID0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGRpc3BsYXksXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMTdweCcsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNBbXAgPSB1c2VBbXAoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgey8qIDwhLS0gUG9ydGZvbGlvIFNlY3Rpb24tLT4gKi99XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwicG9ydGZvbGlvXCIgY2xhc3NOYW1lPVwicG9ydGZvbGlvXCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzbWFsbC1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvcnRmb2xpb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVbnNlcmUgS3VuZGVucHJvamVrdGVcclxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pdGVtfSBjb2wtbGctMyBjb2wtbWQtNmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17c2hvd01vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQW1wID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFtcC1pbWcgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIHdpZHRoPVwiNzAwXCIgaGVpZ2h0PVwiNzAwXCIgc3JjPVwiL2ltZ193ZWJwL3Etc29sdXRpb25zLndlYnBcIiBhbHQ9XCJRLVNvbHV0aW9uc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGxheW91dD0ncmVzcG9uc2l2ZScgc3JjPVwiL2ltZy9xLXNvbHV0aW9ucy5qcGdcIiB3aWR0aD17NzAwfSBoZWlnaHQ9ezcwMH0gYWx0PVwiQWxleGFuZGVyIEtlaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbc3R5bGVzLm92ZXJsYXldfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e2NvbG9yOiAncmVkJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLVNvbHV0aW9ucyBHbWJIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiAnYmxhY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlYiBQcm9qZWt0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIEVuZCBJdGVtLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaXRlbX0gY29sLWxnLTMgY29sLW1kLTZgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQW1wID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxhbXAtaW1nIGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD1cIjcwMFwiIGhlaWdodD1cIjcwMFwiIHNyYz1cIi9pbWdfd2VicC9GYWxhbWV4LndlYnBcIiBhbHQ9XCJGYWxhbWV4XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGxheW91dD0ncmVzcG9uc2l2ZScgc3JjPVwiL2ltZy9GYWxhbWV4LmpwZ1wiIHdpZHRoPXs3MDB9IGhlaWdodD17NzAwfSBhbHQ9XCJGYWxhbWV4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5vdmVybGF5XX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7Y29sb3I6ICdyZWQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmFsYW1leFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICdibGFjayd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWIgUHJvamVrdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gRW5kIEl0ZW0tLT4gKi99XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pdGVtfSBjb2wtbGctMyBjb2wtbWQtNmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjcG9ydGZvbGlvLWl0ZW0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQW1wID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW1wLWltZyBsYXlvdXQ9J3Jlc3BvbnNpdmUnIHNyYz1cIi9pbWdfd2VicC9kb251dC1iYWVsbGNoZW4ud2VicFwiIHdpZHRoPVwiNzAwXCIgaGVpZ2h0PVwiNzAwXCIgYWx0PVwiRG9udXQgQsOkbGxjaGVuXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgbGF5b3V0PSdyZXNwb25zaXZlJyBzcmM9XCIvaW1nL2RvbnV0LWJhZWxsY2hlbi5qcGdcIiB3aWR0aD17NzAwfSBoZWlnaHQ9ezcwMH0gaGVpZ2h0PVwiNzAwXCIgYWx0PVwiRG9udXQgQsOkbGxjaGVuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5vdmVybGF5XX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7Y29sb3I6ICdyZWQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9udXQgQsOkbGxjaGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogJ2JsYWNrJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlYiBQcm9qZWt0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIEVuZCBJdGVtLS0+ICovfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pdGVtfSBjb2wtbGctMyBjb2wtbWQtNmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNBbXAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbXAtaW1nIGxheW91dD0ncmVzcG9uc2l2ZScgc3JjPVwiL2ltZ193ZWJwL2tlaWwtYmF1bWFzY2hpbmVuLndlYnBcIiB3aWR0aD1cIjcwMFwiIGhlaWdodD1cIjcwMFwiIGFsdD1cIktlaWwgQmF1bWFzY2hpbmVuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDooXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGxheW91dD0ncmVzcG9uc2l2ZScgc3JjPVwiL2ltZy9rZWlsLWJhdW1hc2NoaW5lbi5qcGdcIiB3aWR0aD17NzAwfSBoZWlnaHQ9ezcwMH0gYWx0PVwiS2VpbCBCYXVtYXNjaGluZW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbc3R5bGVzLm92ZXJsYXldfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3tjb2xvcjogJ3JlZCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLZWlsIEJhdW1hc2NoaW5lblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICdibGFjayd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWIgUHJvamVrdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBFbmQgSXRlbS0tPiAqL30gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDwhLS0gUG9ydGZvbGlvIFEtU29sdXRpb25zICAqL31cclxuICAgICAgICAgICAgPGRpdiBpZD1cInBvcnRmb2xpby1pdGVtMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9e2Btb2RhbCAke3N0eWxlcy5tb2RhbH0gJHtzaG93ZWRNb2RhbH0gJHtmYWRlfWB9IHN0eWxlPXtkaXZTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJkb2N1bWVudFwiIGNsYXNzTmFtZT17YG1vZGFsLWRpYWxvZyAgJHtzdHlsZXMubW9kYWxEaWFsb2d9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Btb2RhbC1jb250ZW50ICR7c3R5bGVzLm1vZGFsQ29udGVudH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd01vZGFsfSB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jbG9zZUJ1dHRvbn0gYnRuLWNsb3NlYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNsb3NlLWljb25cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ja3VwIGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV2aWNlLW1vY2t1cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWRldmljZT1cIk1hY2Jvb2syMDE1XCIgZGF0YS1vcmllbnRhdGlvbj1cInBvcnRyYWl0XCIgZGF0YS1jb2xvcj1cImdvbGRcIiBjbGFzc05hbWU9XCJkZXZpY2UgZGV2aWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQgY29sLWxnLTYgdGV4dC1jZW50ZXIgdGV4dC1sZy1sZWZ0IG10LTUgbXQtbGctMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLVNvbHV0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZS1EZXNpZ24gV2Vic2l0ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEbDvHIgZGllIFEtU29sdXRpb25zIEdtYkggYXVzIE3DvG5jaGVuLCB3ZWxjaGUgU29mdHdhcmUgbGllZmVydCBmw7xyIGRlbiBXw6RybWVsaWVmZXJ1bmdzbWFya3QsIGhhYmVuIHdpciBtaXQgSGlsZmUgZGVzIEZyb250ZW5kIEZyYW1ld29ya3MgQm9vdHN0cmFwIGRhcyBEZXNpZ24gdW1nZXNldHp0LiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVtIGRpZSBTZWl0ZSBtaXQgRnVua3Rpb25hbGl0w6R0ZW4genUgZXJ3ZWl0ZXJuLCBoYWJlbiB3aXIgbWl0IEphdmFTY3JpcHQgZGllIEJ1dHRvbi1GdW5rdGlvbiBpbSBOZXdzLUJlcmVpY2ggZGVzIGpld2VpbGlnZW4gUHJvZHVrdHMga29uZm9ydGFiZWwgZsO8ciBkZW4gQmVudXR6ZXIgZGllIEluZm9ybWF0aW9uZW4genVtIFByb2R1a3QgYmVyZWl0Z2VzdGVsbHQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpc2l0IHdlYnNpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPCEtLSBFbmQgTW9kYWwgUS1Tb2x1dGlvbnMtLT4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8IS0tIFBvcnRmb2xpbyBGYWxhbWV4ICAqL31cclxuICAgICAgICAgICAgPGRpdiBpZD1cInBvcnRmb2xpby1pdGVtMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9e2Btb2RhbCAke3N0eWxlcy5tb2RhbH0gJHtzaG93ZWRNb2RhbH0gJHtmYWRlfWB9IHN0eWxlPXtkaXZTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJkb2N1bWVudFwiIGNsYXNzTmFtZT17YG1vZGFsLWRpYWxvZyAgJHtzdHlsZXMubW9kYWxEaWFsb2d9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Btb2RhbC1jb250ZW50ICR7c3R5bGVzLm1vZGFsQ29udGVudH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd01vZGFsfSB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jbG9zZUJ1dHRvbn0gYnRuLWNsb3NlYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNsb3NlLWljb25cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9ja3VwIGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV2aWNlLW1vY2t1cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWRldmljZT1cIk1hY2Jvb2syMDE1XCIgZGF0YS1vcmllbnRhdGlvbj1cInBvcnRyYWl0XCIgZGF0YS1jb2xvcj1cImdvbGRcIiBjbGFzc05hbWU9XCJkZXZpY2UgZGV2aWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQgY29sLWxnLTYgdGV4dC1jZW50ZXIgdGV4dC1sZy1sZWZ0IG10LTUgbXQtbGctMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLVNvbHV0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZS1EZXNpZ24gV2Vic2l0ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEbDvHIgZGllIFEtU29sdXRpb25zIEdtYkggYXVzIE3DvG5jaGVuLCB3ZWxjaGUgU29mdHdhcmUgbGllZmVydCBmw7xyIGRlbiBXw6RybWVsaWVmZXJ1bmdzbWFya3QsIGhhYmVuIHdpciBtaXQgSGlsZmUgZGVzIEZyb250ZW5kIEZyYW1ld29ya3MgQm9vdHN0cmFwIGRhcyBEZXNpZ24gdW1nZXNldHp0LiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVtIGRpZSBTZWl0ZSBtaXQgRnVua3Rpb25hbGl0w6R0ZW4genUgZXJ3ZWl0ZXJuLCBoYWJlbiB3aXIgbWl0IEphdmFTY3JpcHQgZGllIEJ1dHRvbi1GdW5rdGlvbiBpbSBOZXdzLUJlcmVpY2ggZGVzIGpld2VpbGlnZW4gUHJvZHVrdHMga29uZm9ydGFiZWwgZsO8ciBkZW4gQmVudXR6ZXIgZGllIEluZm9ybWF0aW9uZW4genVtIFByb2R1a3QgYmVyZWl0Z2VzdGVsbHQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpc2l0IHdlYnNpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPCEtLSBFbmQgTW9kYWwgRmFsYW1leC0tPiAqL31cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICB7LyogPCEtLSBFbmQgUG9ydGZvbGlvIFNlY3Rpb24tLT4gKi99XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25Qb3J0Zm9saW8iXSwic291cmNlUm9vdCI6IiJ9