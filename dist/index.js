(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-js-toggle-button"] = factory();
	else
		root["vue-js-toggle-button"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module 'babel-core'\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:507:25)\n    at Module.require (internal/modules/cjs/loader.js:637:17)\n    at require (internal/modules/cjs/helpers.js:22:18)\n    at Object.<anonymous> (/Users/geert/sources/forks/vue-js-toggle-button/node_modules/babel-loader/lib/index.js:4:13)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:530:3)\n    at Module.require (internal/modules/cjs/loader.js:637:17)\n    at require (internal/modules/cjs/helpers.js:22:18)\n    at loadLoader (/Users/geert/sources/forks/vue-js-toggle-button/node_modules/loader-runner/lib/loadLoader.js:18:17)\n    at iteratePitchingLoaders (/Users/geert/sources/forks/vue-js-toggle-button/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/geert/sources/forks/vue-js-toggle-button/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at NormalModule.doBuild (/Users/geert/sources/forks/vue-js-toggle-button/node_modules/webpack/lib/NormalModule.js:179:3)\n    at NormalModule.build (/Users/geert/sources/forks/vue-js-toggle-button/node_modules/webpack/lib/NormalModule.js:268:15)\n    at Compilation.buildModule (/Users/geert/sources/forks/vue-js-toggle-button/node_modules/webpack/lib/Compilation.js:146:10)\n    at moduleFactory.create (/Users/geert/sources/forks/vue-js-toggle-button/node_modules/webpack/lib/Compilation.js:433:9)\n    at factory (/Users/geert/sources/forks/vue-js-toggle-button/node_modules/webpack/lib/NormalModuleFactory.js:253:5)\n    at applyPluginsAsyncWaterfall (/Users/geert/sources/forks/vue-js-toggle-button/node_modules/webpack/lib/NormalModuleFactory.js:99:14)\n    at /Users/geert/sources/forks/vue-js-toggle-button/node_modules/webpack/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (/Users/geert/sources/forks/vue-js-toggle-button/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Users/geert/sources/forks/vue-js-toggle-button/node_modules/webpack/node_modules/tapable/lib/Tapable.js:272:13)\n    at resolver (/Users/geert/sources/forks/vue-js-toggle-button/node_modules/webpack/lib/NormalModuleFactory.js:74:11)\n    at process.nextTick (/Users/geert/sources/forks/vue-js-toggle-button/node_modules/webpack/lib/NormalModuleFactory.js:205:8)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map