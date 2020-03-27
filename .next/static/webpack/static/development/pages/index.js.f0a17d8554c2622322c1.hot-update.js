webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/SectionTitle.js":
/*!***********************************!*\
  !*** ./component/SectionTitle.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "C:\\Users\\Abu Salleh\\documents\\github\\space-x-react\\component\\SectionTitle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SectionTitle = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SectionTitle, _React$Component);

  var _super = _createSuper(SectionTitle);

  function SectionTitle() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SectionTitle);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SectionTitle, [{
    key: "render",
    value: function render() {
      return __jsx("section", {
        className: "section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 4,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5,
          columnNumber: 5
        }
      }, __jsx("h1", {
        className: "title has-text-centered",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 6
        }
      }, "List of Rockets")));
    }
  }]);

  return SectionTitle;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (SectionTitle);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_app.js */ "./pages/_app.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./data.json", 1);
/* harmony import */ var _component_Header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Header.js */ "./component/Header.js");
/* harmony import */ var _component_Rocket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Rocket.js */ "./component/Rocket.js");
/* harmony import */ var _component_SectionTitle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/SectionTitle.js */ "./component/SectionTitle.js");
var _jsxFileName = "C:\\Users\\Abu Salleh\\documents\\github\\space-x-react\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Home() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx(_component_Header_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Space-X",
    subtitle: "An interactive test design for space-x's rockets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }), __jsx(_component_Rocket_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rockets: _data_json__WEBPACK_IMPORTED_MODULE_2__.rockets,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }));
}
;

/***/ })

})
//# sourceMappingURL=index.js.f0a17d8554c2622322c1.hot-update.js.map