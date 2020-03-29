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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ "./data.json", 1);
/* harmony import */ var _component_Layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Layout.js */ "./component/Layout.js");
/* harmony import */ var _component_Rocket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Rocket.js */ "./component/Rocket.js");
/* harmony import */ var _component_SectionTitle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/SectionTitle.js */ "./component/SectionTitle.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "C:\\Users\\Abu Salleh\\documents\\GitHub\\space-x-react\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["{\n\t    rates(currency: \"USD\") {\n\t      currency\n\t    }\n\t}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_7__["InMemoryCache"]();
var link = new apollo_link_http__WEBPACK_IMPORTED_MODULE_8__["createHttpLink"]({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  fetch: node_fetch__WEBPACK_IMPORTED_MODULE_9___default.a
});
var client = new apollo_client__WEBPACK_IMPORTED_MODULE_6__["ApolloClient"]({
  cache: cache,
  link: link
});
client.query({
  query: graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject())
}).then(function (result) {
  return console.log(result);
});
function Home() {
  return __jsx("body", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }
  }, __jsx(_component_Layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }, __jsx(_component_SectionTitle_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "List of Rockets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), __jsx(_component_Rocket_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rockets: _data_json__WEBPACK_IMPORTED_MODULE_2__.rockets,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  })));
}
;

/***/ })

})
//# sourceMappingURL=index.js.e0987897e6bf4d4ac9d1.hot-update.js.map