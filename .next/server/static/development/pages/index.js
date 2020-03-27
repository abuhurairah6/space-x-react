module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/Footer.js":
/*!*****************************!*\
  !*** ./component/Footer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Abu Salleh\\documents\\github\\space-x-react\\component\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Footer(props) {
  return __jsx("section", {
    className: "hero is-dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "hero-body has-text-centered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 4
    }
  }, __jsx("h1", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, props.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, props.subtitle, " ", __jsx("a", {
    href: props.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 23
    }
  }, props.link))));
}

/***/ }),

/***/ "./component/Header.js":
/*!*****************************!*\
  !*** ./component/Header.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Abu Salleh\\documents\\github\\space-x-react\\component\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Header(props) {
  return __jsx("section", {
    className: "hero is-dark is-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "hero-body has-text-centered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 4
    }
  }, __jsx("h1", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, props.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, props.subtitle)));
}

/***/ }),

/***/ "./component/Rocket.js":
/*!*****************************!*\
  !*** ./component/Rocket.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Abu Salleh\\documents\\github\\space-x-react\\component\\Rocket.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class RocketComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const rockets = this.props.rockets;
    const rocketsArr = [];

    for (let key in rockets) {
      rocketsArr.push(rockets[key]);
    }

    ;
    console.log(rocketsArr);
    return __jsx("section", {
      className: "section",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "columns is-multiline c-gap-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 6
      }
    }, rocketsArr.map(rocket => __jsx(RocketHeader, {
      rocket: rocket,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 8
      }
    })))));
  }

}

;

function RocketHeader(props) {
  return __jsx("div", {
    className: "column is-half",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "columns c-hover is-gapless",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "column is-one-fifth",
    key: props.rocket.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("figure", {
    className: "image is-square",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }, __jsx("img", {
    class: "",
    src: "https://bulma.io/images/placeholders/128x128.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }))), __jsx("div", {
    className: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "notification c-full-height",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, props.rocket.name, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 26
    }
  }), props.rocket.description, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  })))));
}

;

function RocketDetails(props) {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 3
    }
  });
}

;
/* harmony default export */ __webpack_exports__["default"] = (RocketComponent);

/***/ }),

/***/ "./component/SectionTitle.js":
/*!***********************************!*\
  !*** ./component/SectionTitle.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Abu Salleh\\documents\\github\\space-x-react\\component\\SectionTitle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function SectionTitle(props) {
  return __jsx("section", {
    className: "section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 4
    }
  }, __jsx("h1", {
    className: "title has-text-centered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, props.title)));
}

/***/ }),

/***/ "./css/custom-styles.css":
/*!*******************************!*\
  !*** ./css/custom-styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/*! exports provided: rockets, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"rockets\":{\"Apollo\":{\"id\":1,\"name\":\"Apollo\",\"description\":\"Mock rocket information Apollo\"},\"Mars\":{\"id\":2,\"name\":\"Mars\",\"description\":\"Mock rocket information Mars\"},\"Pluto\":{\"id\":3,\"name\":\"Pluto\",\"description\":\"Mock rocket information Pluto\"},\"ISS\":{\"id\":4,\"name\":\"ISS\",\"description\":\"Mock rocket information ISS\"},\"Rover\":{\"id\":5,\"name\":\"Rover\",\"description\":\"Mock rocket information ISS\"}}}");

/***/ }),

/***/ "./node_modules/bulma/css/bulma.css":
/*!******************************************!*\
  !*** ./node_modules/bulma/css/bulma.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/bulma/css/bulma.css */ "./node_modules/bulma/css/bulma.css");
/* harmony import */ var _node_modules_bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_custom_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/custom-styles.css */ "./css/custom-styles.css");
/* harmony import */ var _css_custom_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_custom_styles_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Abu Salleh\\documents\\github\\space-x-react\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function MyApp({
  Component,
  pageProps
}) {
  return __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }));
}
;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_app.js */ "./pages/_app.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./data.json", 1);
/* harmony import */ var _component_Header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Header.js */ "./component/Header.js");
/* harmony import */ var _component_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Footer.js */ "./component/Footer.js");
/* harmony import */ var _component_Rocket_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/Rocket.js */ "./component/Rocket.js");
/* harmony import */ var _component_SectionTitle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/SectionTitle.js */ "./component/SectionTitle.js");
var _jsxFileName = "C:\\Users\\Abu Salleh\\documents\\github\\space-x-react\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Home() {
  return __jsx("body", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx(_component_Header_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Space-X",
    subtitle: "An interactive test design for space-x's rockets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }), __jsx(_component_SectionTitle_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "List of Rockets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }), __jsx(_component_Rocket_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    rockets: _data_json__WEBPACK_IMPORTED_MODULE_2__.rockets,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }
  }), __jsx(_component_Footer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    subtitle: "View source code here:",
    link: "https://github.com/abuhurairah6/space-x-react",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }));
}
;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Abu Salleh\documents\github\space-x-react\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map