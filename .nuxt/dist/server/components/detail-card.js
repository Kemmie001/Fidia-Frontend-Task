exports.ids = [1];
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

/***/ })

};;
//# sourceMappingURL=detail-card.js.map