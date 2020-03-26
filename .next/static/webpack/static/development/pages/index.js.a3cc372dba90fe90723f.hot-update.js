webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_app.js */ "./pages/_app.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./data.json", 1);
/* harmony import */ var _component_Header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Header.js */ "./component/Header.js");
/* harmony import */ var _component_Rocket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Rocket.js */ "./component/Rocket.js");
var _jsxFileName = "C:\\Users\\Abu Salleh\\documents\\github\\space-x-react\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Home() {
  var item;

  for (item in _data_json__WEBPACK_IMPORTED_MODULE_2__.rockets) {
    console.log(_data_json__WEBPACK_IMPORTED_MODULE_2__.rockets[item]);
  }

  return __jsx("div", {
    className: "hero is-primary ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }, __jsx(_component_Header_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }), __jsx(_component_Rocket_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }
  }));
}
;

/***/ })

})
//# sourceMappingURL=index.js.a3cc372dba90fe90723f.hot-update.js.map