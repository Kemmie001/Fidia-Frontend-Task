exports.ids = [4,1];
exports.modules = {

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("b2ee0b7c", content, true, context)
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailCard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.card{\n  background:#fff;\n  border:1px solid #eaecf0;\n  box-shadow:0 1px 3px rgba(16,24,40,.1),0 1px 2px rgba(16,24,40,.06);\n  border-radius:8px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("bad8e090", content, true, context)
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detailCard.vue?vue&type=template&id=d97e4828&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card px-4 py-6"},[_vm._ssrNode("<div class=\"flex justify-between pb-6\"><h1 class=\"text-base font-medium\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h1> <svg width=\"4\" height=\"16\" viewBox=\"0 0 4 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.00002 8.83331C2.46026 8.83331 2.83335 8.46022 2.83335 7.99998C2.83335 7.53974 2.46026 7.16665 2.00002 7.16665C1.53978 7.16665 1.16669 7.53974 1.16669 7.99998C1.16669 8.46022 1.53978 8.83331 2.00002 8.83331Z\" stroke=\"#98A2B3\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M2.00002 2.99998C2.46026 2.99998 2.83335 2.62688 2.83335 2.16665C2.83335 1.70641 2.46026 1.33331 2.00002 1.33331C1.53978 1.33331 1.16669 1.70641 1.16669 2.16665C1.16669 2.62688 1.53978 2.99998 2.00002 2.99998Z\" stroke=\"#98A2B3\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M2.00002 14.6666C2.46026 14.6666 2.83335 14.2935 2.83335 13.8333C2.83335 13.3731 2.46026 13 2.00002 13C1.53978 13 1.16669 13.3731 1.16669 13.8333C1.16669 14.2935 1.53978 14.6666 2.00002 14.6666Z\" stroke=\"#98A2B3\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div> <h1 class=\"text-3xl font-bold\">"+_vm._ssrEscape(_vm._s(_vm.figure))+"</h1> <div class=\"flex justify-between\"><div class=\"flex self-center pt-2\"><div class=\"self-center\"><img"+(_vm._ssrAttr("src",_vm.arrowImage))+" alt></div> <p"+(_vm._ssrClass("text-sm font-semibold px-1",_vm.textColor))+">"+_vm._ssrEscape("\n        "+_vm._s(_vm.percent)+"%\n      ")+"</p> <p class=\"text-light\">vs last month</p></div> <div><img"+(_vm._ssrAttr("src",_vm.graphImage))+" alt></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/detailCard.vue?vue&type=template&id=d97e4828&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detailCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var detailCardvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      required: true
    },
    percent: {
      type: Number,
      required: true
    },
    figure: {
      type: Number,
      required: true
    },
    graphImage: {
      type: String,
      required: true
    },
    arrowImage: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/detailCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_detailCardvue_type_script_lang_js_ = (detailCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/detailCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(29)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_detailCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6c391994"
  
)

/* harmony default export */ var detailCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\ndiv{\n  font-family:\"Inter\",sans-serif\n}\n.gray-text{\n  color:#344054\n}\n.grey-text{\n  color:#101828\n}\n.ash-text{\n  color:#667085\n}\n.btn-primary{\n  border:1px solid #d0d5dd;\n  border-radius:8px\n}\n.btn-primary,.btn-secondary{\n  box-sizing:border-box;\n  box-shadow:0 1px 2px rgba(16,24,40,.05);\n  display:flex\n}\n.btn-secondary{\n  color:#6941c6;\n  background:#f9f5ff;\n  border:1px solid #f9f5ff;\n  border-radius:8px\n}\n.table-container{\n  background:#fff;\n  box-shadow:0 4px 8px -2px rgba(16,24,40,.1),0 2px 4px -2px rgba(16,24,40,.06);\n  border-radius:8px;\n  border:1px solid #eaecf0\n}\n.talent-table{\n  border-collapse:collapse;\n  margin-top:12px;\n  width:100%;\n  border-radius:6px\n}\ntr:nth-child(odd){\n  background:#f9fafb\n}\n@media screen and (max-width:640px){\n.talent-table{\n    width:200%\n}\n.table-container{\n    max-width:100%;\n    overflow-x:auto\n}\n.table-container::-webkit-scrollbar{\n    width:5px\n}\n.table-container::-webkit-scrollbar-track{\n    background:#f1f1f1\n}\n.table-container::-webkit-scrollbar-thumb{\n    background:#888\n}\n.table-container::-webkit-scrollbar-thumb:hover{\n    background:#555\n}\n}\n@media screen and (max-width:540px){\n.talent-table{\n    width:320%\n}\n.table-container{\n    max-width:100%;\n    overflow-x:auto\n}\n}\n.container{\n  display:block;\n  position:relative;\n  cursor:pointer;\n  margin-left:20px;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none\n}\n.container input{\n  position:absolute;\n  opacity:0;\n  cursor:pointer;\n  height:0;\n  width:0\n}\n.checkmark{\n  position:absolute;\n  top:0;\n  left:0;\n  width:20px;\n  height:20px;\n  background:#fff;\n  border-radius:6px;\n  border:1px solid #d0d5dd\n}\n.container input:checked~.checkmark{\n  background-color:#f9f5ff;\n  border:1px solid #7f56d9\n}\n.checkmark:after{\n  content:\"\";\n  position:absolute;\n  display:none\n}\n.container input:checked~.checkmark:after{\n  display:block\n}\n.container .checkmark:after{\n  left:7px;\n  top:4px;\n  width:4px;\n  height:8px;\n  border:solid #7f56d9;\n  border-width:0 2px 2px 0;\n  transform:rotate(45deg)\n}\nprogress{\n  color:#7f56d9;\n  width:100px\n}\nprogress[value]::-webkit-progress-value{\n  background-image:#7f56d9;\n  border-radius:4px;\n  height:8px\n}\nprogress::-webkit-progress-value{\n  background:#7f56d9\n}\nprogress::-moz-progress-bar{\n  background:#7f56d9\n}\nprogress[value]::-webkit-progress-bar{\n  background-color:#f9f5ff;\n  border-radius:4px;\n  height:8px\n}\n.status-btn{\n  background:#ecfdf3;\n  color:#027a48\n}\n.status-btn,.status-btn2{\n  font-family:Inter;\n  font-style:normal;\n  font-weight:500;\n  font-size:12px;\n  line-height:18px;\n  text-align:center;\n  border-radius:16px\n}\n.status-btn2{\n  background:#f2f4f7;\n  color:#344054\n}\n.page{\n  border-top:1px solid #eaecf0\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=51200857&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Layout',[_c('div',{staticClass:"lg:px-20 px-5 text-left "},[_c('div',{staticClass:"lg:flex pt-8 lg:justify-between"},[_c('div',{staticClass:"pb-4 "},[_c('h1',{staticClass:"text-dark text-2xl font-semibold text-left"},[_vm._v("\n          Welcome back, Olivia\n        ")]),_vm._v(" "),_c('p',{staticClass:"text-light text-base"},[_vm._v("\n          Track, manage and forecast your customers and orders.\n        ")])]),_vm._v(" "),_c('div',{staticClass:"flex mb-8 lg:self-center"},[_c('button',{staticClass:"btn-primary gray-text bg-white flex p-2"},[_c('svg',{attrs:{"width":"20","height":"20","viewBox":"0 0 20 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('g',{attrs:{"clip-path":"url(#clip0_669_2994)"}},[_c('path',{attrs:{"d":"M13.3334 13.3334L10 10M10 10L6.6667 13.3334M10 10V17.5M16.9917 15.325C17.8045 14.8819 18.4466 14.1808 18.8166 13.3322C19.1866 12.4837 19.2635 11.5361 19.0352 10.6389C18.8069 9.74182 18.2863 8.94629 17.5556 8.3779C16.8249 7.80951 15.9258 7.50064 15 7.50003H13.95C13.6978 6.52439 13.2277 5.61864 12.575 4.85085C11.9223 4.08307 11.1041 3.47324 10.1818 3.0672C9.25949 2.66116 8.25715 2.46949 7.25013 2.5066C6.2431 2.5437 5.25758 2.80861 4.36768 3.28142C3.47777 3.75422 2.70662 4.42261 2.11221 5.23635C1.51781 6.05008 1.1156 6.98797 0.935844 7.97952C0.756086 8.97107 0.803449 9.99047 1.07437 10.9611C1.3453 11.9317 1.83273 12.8282 2.50003 13.5834","stroke":"#344054","stroke-width":"1.67","stroke-linecap":"round","stroke-linejoin":"round"}})]),_vm._v(" "),_c('defs',[_c('clipPath',{attrs:{"id":"clip0_669_2994"}},[_c('rect',{attrs:{"width":"20","height":"20","fill":"white"}})])])]),_vm._v(" "),_c('a',{staticClass:"px-2 gray-text",attrs:{"href":"#"}},[_vm._v("Import")])]),_vm._v(" "),_c('button',{staticClass:"btn-primary bg-primary text-white flex py-2 px-5 ml-4"},[_c('svg',{staticClass:"self-center",attrs:{"width":"14","height":"14","viewBox":"0 0 14 14","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M7.00002 1.16669V12.8334M1.16669 7.00002H12.8334","stroke":"white","stroke-width":"1.67","stroke-linecap":"round","stroke-linejoin":"round"}})]),_vm._v(" "),_c('a',{staticClass:"px-2",attrs:{"href":"#"}},[_vm._v("Add")])])])]),_vm._v(" "),_c('div',{staticClass:"lg:flex w-full gap-x-8 "},_vm._l((_vm.cards),function(card){return _c('div',{key:card.index,staticClass:"lg:w-1/3"},[_c('detailCard',{staticClass:"my-8",attrs:{"textColor":card.textColor,"title":card.title,"percent":card.percent,"figure":card.figure,"graphImage":card.graphImage,"arrowImage":card.arrowImage}})],1)}),0),_vm._v(" "),_c('div',{staticClass:"my-5 lg:flex justify-between lg:flex-row-reverse"},[_c('div',{staticClass:"search-bar z-0 relative w-full lg:w-4/12"},[_c('div',{staticClass:"absolute top-3 z-10 left-2 lg:left-10 bottom-0"},[_c('svg',{attrs:{"width":"20","height":"20","viewBox":"0 0 20 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z","stroke":"#667085","stroke-width":"1.66667","stroke-linecap":"round","stroke-linejoin":"round"}})])]),_vm._v(" "),_c('div',{staticClass:"flex justify-end"},[_c('input',{staticClass:"pl-8 py-2 relative w-full lg:w-11/12",attrs:{"placeholder":"Search","type":"search","name":"","id":""}})])]),_vm._v(" "),_c('div',{staticClass:"flex flex-col flex-col-reverse lg:flex-row  gap-x-4 w-full"},[_c('div',{staticClass:"flex gap-x-4"},[_c('button',{staticClass:"btn-secondary flex py-2 px-5"},[_c('a',{staticClass:"px-2",attrs:{"href":"#"}},[_vm._v("All time")]),_vm._v(" "),_c('svg',{attrs:{"width":"20","height":"20","viewBox":"0 0 20 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M15 5L5 15M5 5L15 15","stroke":"#6941C6","stroke-width":"1.67","stroke-linecap":"round","stroke-linejoin":"round"}})])]),_vm._v(" "),_c('button',{staticClass:"btn-secondary flex py-2 px-5"},[_c('a',{staticClass:"px-2",attrs:{"href":"#"}},[_vm._v("US, AU, +4")]),_vm._v(" "),_c('svg',{attrs:{"width":"20","height":"20","viewBox":"0 0 20 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M15 5L5 15M5 5L15 15","stroke":"#6941C6","stroke-width":"1.67","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),_vm._v(" "),_c('button',{staticClass:"btn-primary my-5 lg:my-0 gray-text bg-white w-full lg:w-40 flex justify-center p-2"},[_c('svg',{attrs:{"width":"21","height":"20","viewBox":"0 0 21 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M5.5 10H15.5M3 5H18M8 15H13","stroke":"#344054","stroke-width":"1.67","stroke-linecap":"round","stroke-linejoin":"round"}})]),_vm._v(" "),_c('a',{staticClass:"px-2 lg:hidden",attrs:{"href":"#"}},[_vm._v("Edit filters")]),_vm._v(" "),_c('a',{staticClass:"px-2 lg:flex hidden",attrs:{"href":"#"}},[_vm._v("More filters")])])])]),_vm._v(" "),_c('div',{staticClass:"\n        table-container\n        flex flex-col\n        my-10\n      "},[_c('table',{staticClass:"\n          cursor-pointer\n          talent-table\n        "},[_c('thead',{},[_c('tr',{staticClass:"text-left px-10 h-10 ash-text bg-white"},[_c('th',{staticClass:"w-3/12 text-sm font-thin"},[_c('div',{staticClass:"flex"},[_c('span',{staticClass:"pr-3 pl-5"},[_c('svg',{attrs:{"width":"20","height":"20","viewBox":"0 0 20 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M0 6C0 2.68629 2.68629 0 6 0H14C17.3137 0 20 2.68629 20 6V14C20 17.3137 17.3137 20 14 20H6C2.68629 20 0 17.3137 0 14V6Z","fill":"#F9F5FF"}}),_vm._v(" "),_c('path',{attrs:{"d":"M5.91669 10H14.0834","stroke":"#7F56D9","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),_vm._v(" "),_c('path',{attrs:{"d":"M6 1H14V-1H6V1ZM19 6V14H21V6H19ZM14 19H6V21H14V19ZM1 14V6H-1V14H1ZM6 19C3.23858 19 1 16.7614 1 14H-1C-1 17.866 2.13401 21 6 21V19ZM19 14C19 16.7614 16.7614 19 14 19V21C17.866 21 21 17.866 21 14H19ZM14 1C16.7614 1 19 3.23858 19 6H21C21 2.13401 17.866 -1 14 -1V1ZM6 -1C2.13401 -1 -1 2.13401 -1 6H1C1 3.23858 3.23858 1 6 1V-1Z","fill":"#7F56D9"}})])]),_vm._v("\n              Company ↓\n              ")])]),_vm._v(" "),_c('th',{staticClass:"w-2/12 text-sm font-thin"},[_vm._v("\n              License use\n            ")]),_vm._v(" "),_c('th',{staticClass:"w-1/12 text-sm font-thin"},[_vm._v("Status")]),_vm._v(" "),_c('th',{staticClass:"w-2/12 text-sm font-thin"},[_vm._v("Users")]),_vm._v(" "),_c('th',{staticClass:"w-3/12 text-sm font-thin"},[_vm._v("About")]),_vm._v(" "),_c('th',{staticClass:"w-1/12 text-sm font-thin"})])]),_vm._v(" "),_c('tbody',{staticClass:"mt-10"},_vm._l((_vm.tableRows),function(row){return _c('tr',{key:row.index,staticClass:"h-20"},[_c('td',{staticClass:"font-bold"},[_c('label',{staticClass:"container pt-3"},[_c('div',{staticClass:"ml-8 flex w-full gap-x-4"},[_c('span',{},[_c('img',{attrs:{"src":row.companyImage,"alt":""}})]),_vm._v(" "),_c('span',[_c('h1',{staticClass:"font-medium grey-text text-md"},[_vm._v(_vm._s(row.company))]),_vm._v(" "),_c('a',{staticClass:"font-thin text-sm ash-text",attrs:{"href":""}},[_vm._v(_vm._s(row.companyLink))])])]),_vm._v(" "),_c('input',{attrs:{"type":"checkbox","checked":""}}),_vm._v(" "),_c('span',{staticClass:"checkmark mt-5"})])]),_vm._v(" "),_c('td',{staticClass:"font-bold pt-3"},[_c('progress',{attrs:{"id":"file","max":"100"},domProps:{"value":row.license}},[_vm._v(" 32% ")])]),_vm._v(" "),_c('td',{},[_c('button',{staticClass:"px-3 py-2",class:row.buttonColor},[_vm._v("\n                "+_vm._s(row.status)+"\n              ")])]),_vm._v(" "),_c('td',[_c('img',{attrs:{"src":row.users,"alt":""}})]),_vm._v(" "),_c('td',[_c('span',[_c('h1',{staticClass:"font-medium grey-text text-md"},[_vm._v(_vm._s(row.aboutTitle))]),_vm._v(" "),_c('p',{staticClass:"font-thin text-sm ash-text"},[_vm._v(_vm._s(row.about))])])]),_vm._v(" "),_c('td',{staticClass:"text-center"},[_c('div',{staticClass:"flex justify-end gap-x-6 mr-10"},[_c('span',[_c('svg',{attrs:{"width":"20","height":"20","viewBox":"0 0 20 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M2.5 5.00001H4.16667M4.16667 5.00001H17.5M4.16667 5.00001V16.6667C4.16667 17.1087 4.34226 17.5326 4.65482 17.8452C4.96738 18.1577 5.39131 18.3333 5.83333 18.3333H14.1667C14.6087 18.3333 15.0326 18.1577 15.3452 17.8452C15.6577 17.5326 15.8333 17.1087 15.8333 16.6667V5.00001H4.16667ZM6.66667 5.00001V3.33334C6.66667 2.89131 6.84226 2.46739 7.15482 2.15483C7.46738 1.84227 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84227 12.8452 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M8.33333 9.16667V14.1667M11.6667 9.16667V14.1667","stroke":"#667085","stroke-width":"1.66667","stroke-linecap":"round","stroke-linejoin":"round"}})])]),_vm._v(" "),_c('span',[_c('svg',{attrs:{"width":"20","height":"20","viewBox":"0 0 20 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M14.1667 2.5C14.3855 2.28113 14.6454 2.10752 14.9313 1.98906C15.2173 1.87061 15.5238 1.80965 15.8333 1.80965C16.1429 1.80965 16.4493 1.87061 16.7353 1.98906C17.0213 2.10752 17.2811 2.28113 17.5 2.5C17.7189 2.71887 17.8925 2.97871 18.0109 3.26468C18.1294 3.55064 18.1903 3.85714 18.1903 4.16667C18.1903 4.4762 18.1294 4.7827 18.0109 5.06866C17.8925 5.35463 17.7189 5.61447 17.5 5.83334L6.24999 17.0833L1.66666 18.3333L2.91666 13.75L14.1667 2.5Z","stroke":"#667085","stroke-width":"1.66667","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])])}),0)]),_vm._v(" "),_c('div',{staticClass:"hidden lg:flex justify-between px-8 py-4  talent-table"},[_c('div',{staticClass:"flex gap-x-4"},[_c('button',{staticClass:"btn-primary gray-text bg-white flex p-2"},[_c('a',{staticClass:"px-2 gray-text",attrs:{"href":"#"}},[_vm._v("Previous")])]),_vm._v(" "),_c('button',{staticClass:"btn-primary gray-text bg-white flex p-2"},[_c('a',{staticClass:"px-2 gray-text",attrs:{"href":"#"}},[_vm._v("Next")])])]),_vm._v(" "),_c('p',{staticClass:"gray-text text-sm"},[_vm._v("Page 1 of 10")])])]),_vm._v(" "),_c('div',{staticClass:"lg:hidden flex w-full justify-between py-4 page"},[_c('button',{staticClass:"gray-text bg-white"},[_c('svg',{attrs:{"width":"14","height":"14","viewBox":"0 0 14 14","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M12.8334 7.00002H1.16669M1.16669 7.00002L7.00002 12.8334M1.16669 7.00002L7.00002 1.16669","stroke":"#667085","stroke-width":"1.67","stroke-linecap":"round","stroke-linejoin":"round"}})])]),_vm._v(" "),_c('p',{staticClass:"gray-text text-sm"},[_vm._v("Page 1 of 10")]),_vm._v(" "),_c('button',{staticClass:"gray-text bg-white"},[_c('svg',{attrs:{"width":"14","height":"14","viewBox":"0 0 14 14","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M1.16669 7.00002H12.8334M12.8334 7.00002L7.00002 1.16669M12.8334 7.00002L7.00002 12.8334","stroke":"#667085","stroke-width":"1.67","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=51200857&

// EXTERNAL MODULE: ./components/detailCard.vue + 4 modules
var detailCard = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',
  components: {
    detailCard: detailCard["default"]
  },

  data() {
    return {
      cards: [{
        title: "Total customers",
        percent: 40,
        figure: 2420,
        graphImage: "_Chart.png",
        arrowImage: "arrowup.png",
        textColor: "text-success"
      }, {
        title: "Members",
        percent: 10,
        figure: 1210,
        graphImage: "_Chart2.png",
        arrowImage: "arrowndown.png",
        textColor: "text-error"
      }, {
        title: "Active now",
        percent: 20,
        figure: 316,
        graphImage: "_Chart.png",
        arrowImage: "arrowup.png",
        textColor: "text-success"
      }],
      tableRows: [{
        company: "Catalog",
        companyLink: "catalogapp.io",
        companyImage: "company.png",
        license: 80,
        status: "customer",
        users: "Avatars1.png",
        aboutTitle: "Content curating app",
        about: "Brings all your news into one place",
        buttonColor: "status-btn"
      }, {
        company: "Circooles",
        companyLink: "getcircooles.com",
        companyImage: "company2.png",
        license: 70,
        status: "Churned",
        users: "Avatars2.png",
        aboutTitle: "Design software",
        about: "Super lightweight design app",
        buttonColor: "status-btn2"
      }, {
        company: "Command+R",
        companyLink: "cmdr.ai",
        companyImage: "company3.png",
        license: 80,
        status: "customer",
        users: "Avatars3.png",
        aboutTitle: "Data prediction",
        about: "AI and machine learning data",
        buttonColor: "status-btn"
      }, {
        company: "Hourglass",
        companyLink: "hourglass.app",
        companyImage: "company4.png",
        license: 90,
        status: "customer",
        users: "Avatars4.png",
        aboutTitle: "Productivity app",
        about: "Time management and productivity",
        buttonColor: "status-btn"
      }, {
        company: "Layers",
        companyLink: "getlayers.io",
        companyImage: "company5.png",
        license: 30,
        status: "Churned",
        users: "Avatars4.png",
        aboutTitle: "Web app integrations",
        about: "Connect web apps seamlessly",
        buttonColor: "status-btn2"
      }, {
        company: "Quotient",
        companyLink: "quotient.co",
        companyImage: "company6.png",
        license: 20,
        status: "customer",
        users: "Avatars5.png",
        aboutTitle: "Sales CRM",
        about: "Web-based sales doc management",
        buttonColor: "status-btn"
      }, {
        company: "Sisyphus",
        companyLink: "sisyphus.com",
        companyImage: "company7.png",
        license: 50,
        status: "customer",
        users: "Avatars7.png",
        aboutTitle: "Automation and workflow",
        about: "Time tracking, invoicing and expenses",
        buttonColor: "status-btn"
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "627a0d87"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map