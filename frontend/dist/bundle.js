/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_javascript_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/javascript/app */ "./src/javascript/app.js");
/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__);


new _src_javascript_app__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html,\r\nbody {\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Rakkas\";\r\n}\r\n\r\n#root {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  min-width: 400px;\r\n}\r\n\r\n#background-overlay {\r\n  z-index: 2;\r\n  background-color: lightgray;\r\n  opacity: 0.4;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: none;\r\n}\r\n\r\n.fighter-logo {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.logo-image {\r\n  height: 100px;\r\n}\r\n\r\n.fighters {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex: 1;\r\n  flex-wrap: wrap;\r\n  padding: 0 15px;\r\n}\r\n\r\n.fighter {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 20px;\r\n}\r\n\r\n.fighter:hover {\r\n  box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.06);\r\n  cursor: pointer;\r\n}\r\n\r\n.name {\r\n  align-self: center;\r\n  font-size: 21px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.fighter-image {\r\n  height: 200px;\r\n}\r\n\r\n#loading-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 18px;\r\n  background: rgba(255, 255, 255, 0.7);\r\n  visibility: hidden;\r\n}\r\n\r\n#game {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.game-panel {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 20px 50px;\r\n  align-items: center;\r\n}\r\n\r\n.select-fighters {\r\n  display: flex;\r\n  margin: 15px 20px;\r\n  flex: 1 1 0;\r\n}\r\n\r\n.select-fighter-container {\r\n  flex: 1 1 0;\r\n}\r\n\r\n.select-fighter-label {\r\n  font-size: 24px;\r\n  margin: 5px 10px;\r\n}\r\n\r\n.select-fighter {\r\n  font-family: \"Rakkas\", cursive;\r\n  font-size: 20px;\r\n}\r\n\r\n.start-game,\r\n.back-btn,\r\n.next-btn {\r\n  width: 150px;\r\n  height: 50px;\r\n  font-family: \"Rakkas\", cursive;\r\n  font-size: 20px;\r\n}\r\n\r\n.next-btn {\r\n  margin-right: 20px;\r\n}\r\n\r\n.start-game:hover,\r\n.select-fighter:hover,\r\n.next-btn:hover,\r\n.back-btn:hover {\r\n  box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.06);\r\n}\r\n\r\n#modal {\r\n  z-index: 3;\r\n  position: absolute;\r\n  background-color: khaki;\r\n  border-radius: 10px;\r\n  width: 600px;\r\n  height: 400px;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-top: -200px;\r\n  margin-left: -250px;\r\n  box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.1);\r\n  display: none;\r\n}\r\n\r\n.fighter-details-image {\r\n  height: 300px;\r\n  margin: 20px;\r\n  max-height: 360px;\r\n}\r\n\r\n.modal-close-btn {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.fighters-internal-container {\r\n  display: flex;\r\n  overflow-x: scroll;\r\n  overflow-y: hidden;\r\n  max-width: 95vw;\r\n}\r\n\r\n.fighters-internal-container::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  background-color: #f5f5f5;\r\n  border-radius: 10px;\r\n}\r\n\r\n.fighters-internal-container::-webkit-scrollbar {\r\n  width: 10px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.fighters-internal-container::-webkit-scrollbar-thumb {\r\n  background-color: #aaa;\r\n  border-radius: 10px;\r\n  background-image: -webkit-linear-gradient(\r\n    180deg,\r\n    rgba(0, 0, 0, 0.2) 25%,\r\n    transparent 25%,\r\n    transparent 50%,\r\n    rgba(0, 0, 0, 0.2) 50%,\r\n    rgba(0, 0, 0, 0.2) 75%,\r\n    transparent 75%,\r\n    transparent\r\n  );\r\n}\r\n\r\n.fighter-details-view {\r\n  display: flex;\r\n  height: 100%;\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n\r\n.fighter-details-image-container,\r\n.fighter-info-container {\r\n  flex: 1 1 0;\r\n}\r\n\r\n.fighter-details-image-container {\r\n  text-align: center;\r\n}\r\n\r\n.fighter-info-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  padding: 10px;\r\n}\r\n\r\n.fighter-name {\r\n  font-size: 40px;\r\n  text-align: center;\r\n  margin: 20px 5px;\r\n}\r\n\r\n.fighter-input-container {\r\n  display: flex;\r\n  margin: 15px 5px;\r\n  font-size: 20px;\r\n  align-items: center;\r\n}\r\n\r\n.fighter-input-label {\r\n  flex-grow: 1;\r\n  font-size: 20px;\r\n  line-height: 20px;\r\n}\r\n\r\n.fighter-input-container input {\r\n  flex-grow: 0;\r\n  width: 60%;\r\n  padding: 5px;\r\n  font-size: 20px;\r\n  line-height: 20px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.fight-view-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 20px 30px;\r\n}\r\n\r\n.fighter-update-container {\r\n  flex-grow: 1;\r\n  text-align: center;\r\n}\r\n\r\n.fighter-update-btn {\r\n  font-size: 20px;\r\n  position: absolute;\r\n  bottom: 40px;\r\n}\r\n\r\n.fighter-update-btn:hover {\r\n  box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.active-fighters-container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.active-fighter {\r\n  width: 150px;\r\n}\r\n\r\n.fight-header {\r\n  text-align: center;\r\n  color: maroon;\r\n  font-size: 25px;\r\n}\r\n\r\n.winner-panel {\r\n  text-align: center;\r\n  color: limegreen;\r\n  font-size: 20px;\r\n}\r\n\r\n.active-fighter-image {\r\n  height: 200px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.active-fighter-name {\r\n  text-align: center;\r\n  font-size: 25px;\r\n  color: maroon;\r\n}\r\n\r\n.attack,\r\n.defense {\r\n  text-align: center;\r\n  font-size: 15px;\r\n}\r\n\r\n.attack span,\r\n.defense span {\r\n  padding: 10px;\r\n}\r\n\r\n.health-container {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.health-value {\r\n  color: forestgreen;\r\n  margin-right: 20px;\r\n}\r\n\r\n.health-bar {\r\n  height: 10px;\r\n  background-color: lawngreen;\r\n}\r\n\r\n.buttons-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/javascript/app.js":
/*!*******************************!*\
  !*** ./src/javascript/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_gameView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/gameView */ "./src/javascript/views/gameView.js");
/* harmony import */ var _services_fightersService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/fightersService */ "./src/javascript/services/fightersService.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/constants */ "./src/javascript/helpers/constants.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class App {
  constructor() {
    this.startApp();
  }

  async startApp() {
    try {
      App.loadingElement.style.visibility = "visible";
      const fighters = await _services_fightersService__WEBPACK_IMPORTED_MODULE_1__["fightersService"].getFighters();
      const gameView = new _views_gameView__WEBPACK_IMPORTED_MODULE_0__["default"](fighters);
      const gameElement = gameView.element;
      App.rootElement.appendChild(gameElement);
    } catch (error) {
      console.warn(error);
      App.rootElement.innerText = _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["default"].FAILED_TO_LOAD_TEXT;
    } finally {
      App.loadingElement.style.visibility = "hidden";
    }
  }

}

_defineProperty(App, "rootElement", document.getElementById("root"));

_defineProperty(App, "loadingElement", document.getElementById("loading-overlay"));

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/javascript/classes/fight.js":
/*!*****************************************!*\
  !*** ./src/javascript/classes/fight.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fighter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fighter */ "./src/javascript/classes/fighter.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Fight {
  constructor(fighter1, fighter2) {
    _defineProperty(this, "fighter1", void 0);

    _defineProperty(this, "fighter2", void 0);

    _defineProperty(this, "fightRound", void 0);

    _defineProperty(this, "gameOver", void 0);

    _defineProperty(this, "winner", void 0);

    this.fighter1 = new _fighter__WEBPACK_IMPORTED_MODULE_0__["default"](fighter1);
    this.fighter2 = new _fighter__WEBPACK_IMPORTED_MODULE_0__["default"](fighter2);
    this.fightRound = 0;
    this.gameOver = false;
    this.winner = null;
  }

  startNextRound() {
    if (this.gameOver) {
      return;
    }

    this.fightRound++;
    const fighter1Hit = this.fighter1.getHitPower() - this.fighter2.getBlockPower();
    const fighter2Hit = this.fighter2.getHitPower() - this.fighter1.getBlockPower();
    this.fighter1.takeHit(fighter2Hit);
    this.fighter2.takeHit(fighter1Hit);

    if (this.fighter1.alive && this.fighter2.alive) {
      return;
    }

    this.gameOver = true;

    if (!this.fighter1.alive && !this.fighter2.alive) {
      return; // game ends in a draw
    }

    if (this.fighter1.alive) {
      this.winner = {
        fighter: this.fighter1,
        order: 1
      };
    } else {
      this.winner = {
        fighter: this.fighter2,
        order: 2
      };
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Fight);

/***/ }),

/***/ "./src/javascript/classes/fighter.js":
/*!*******************************************!*\
  !*** ./src/javascript/classes/fighter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Fighter {
  constructor({
    name = "",
    health = 0,
    attack = 0,
    defense = 0
  }) {
    _defineProperty(this, "fighterStatus", {});

    _defineProperty(this, "alive", void 0);

    this.fighterStatus = {
      name,
      health,
      attack,
      defense
    };
    this.alive = true; // new fighter is always created alive
  }

  getHitPower() {
    const criticalHitChance = Math.random() + 1;
    return Math.round(this.fighterStatus.attack * criticalHitChance);
  }

  getBlockPower() {
    const dodgeChance = Math.random() + 1;
    return Math.round(this.fighterStatus.defense * dodgeChance);
  }

  takeHit(hit) {
    const healthChange = hit > 0 ? hit : 0; // if hit is < 0, fighter avoided the hit

    this.fighterStatus.health -= healthChange;

    if (this.fighterStatus.health <= 0) {
      this.fighterStatus.health = 0;
      this.alive = false;
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Fighter);

/***/ }),

/***/ "./src/javascript/helpers/apiHelper.js":
/*!*********************************************!*\
  !*** ./src/javascript/helpers/apiHelper.js ***!
  \*********************************************/
/*! exports provided: callApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callApi", function() { return callApi; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/javascript/helpers/constants.js");
// const API_URL =
//   "https://api.github.com/repos/binary-studio-academy/stage-2-es6-for-everyone/contents/resources/api/";


function callApi(endpoint, method, body) {
  const url = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].API_URL + endpoint;
  const options = {
    method,
    body
  };
  return fetch(url, options).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(Error("Failed to load"));
    }
  }).catch(error => {
    throw error;
  });
}



/***/ }),

/***/ "./src/javascript/helpers/constants.js":
/*!*********************************************!*\
  !*** ./src/javascript/helpers/constants.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  FAILED_TO_LOAD_TEXT: "Failed to load data",
  START_NEW_GAME: "Start New Game",
  FIGHT: "Fight",
  DRAW: "Draw",
  NEXT_ROUND: "Next Round",
  UPDATE: "Update",
  API_URL: "http://fighters-api-server.herokuapp.com/"
});

/***/ }),

/***/ "./src/javascript/services/fightersService.js":
/*!****************************************************!*\
  !*** ./src/javascript/services/fightersService.js ***!
  \****************************************************/
/*! exports provided: fightersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fightersService", function() { return fightersService; });
/* harmony import */ var _helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/apiHelper */ "./src/javascript/helpers/apiHelper.js");


class FightersService {
  async getFighters() {
    try {
      const endpoint = "user/";
      const apiResult = await Object(_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__["callApi"])(endpoint, "GET");
      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(_id) {
    try {
      const endpoint = `user/${_id}`;
      const apiResult = await Object(_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__["callApi"])(endpoint, "GET");
      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async updateFighterDetailsInMap(_id, fighterDetailsMap) {
    try {
      const fighterDetails = await fightersService.getFighterDetails(_id);

      if (!fighterDetailsMap.get(_id)) {
        fighterDetailsMap.set(_id, fighterDetails);
      }

      return fighterDetails;
    } catch (error) {
      throw error;
    }
  }

  async updateFighterDetailsOnServer(_id, fighter) {
    try {
      const body = JSON.stringify(fighter);
      const apiResult = await Object(_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__["callApi"])(`user/${_id}`, "PUT", body);
      return apiResult;
    } catch (error) {
      throw error;
    }
  }

}

const fightersService = new FightersService();

/***/ }),

/***/ "./src/javascript/views/activeFighterView.js":
/*!***************************************************!*\
  !*** ./src/javascript/views/activeFighterView.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/javascript/views/view.js");
/* harmony import */ var _classes_fighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/fighter */ "./src/javascript/classes/fighter.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ActiveFighterView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(fighter, maxHealth) {
    super();

    _defineProperty(this, "fighter", void 0);

    _defineProperty(this, "maxHealth", void 0);

    this.fighter = fighter;
    this.maxHealth = maxHealth;
    this.createActiveFighterView(fighter);
  }

  createActiveFighterView(fighter) {
    this.element = this.createElement({
      tagName: "div",
      className: "active-fighter"
    });
    const nameElement = this.createName(fighter.name);
    const fighterContainer = this.createFighterContainer(fighter);
    const healthBar = this.createHealthContainer(fighter.health);
    this.element.append(nameElement, fighterContainer, healthBar);
  }

  createName(name) {
    const nameElement = this.createElement({
      tagName: "div",
      className: "active-fighter-name"
    });
    nameElement.innerHTML = name;
    return nameElement;
  }

  createFighterContainer(fighter) {
    const fighterContainer = this.createElement({
      tagName: "div",
      className: "fighter-detail"
    });
    const img = this.createImg(fighter.source);
    const attackLabel = this.createInfoLabel("Attack", fighter.attack, "attack");
    const defenseLabel = this.createInfoLabel("Defense", fighter.defense, "defense");
    fighterContainer.append(attackLabel, defenseLabel, img);
    return fighterContainer;
  }

  createHealthContainer(health) {
    const healthContainer = this.createElement({
      tagName: "div",
      className: "health-container"
    });
    const healthBar = this.createElement({
      tagName: "div",
      className: "health-bar"
    });
    healthBar.style.width = `${this.getHealthPercent(health)}%`;
    const healthValue = this.createElement({
      tagName: "div",
      className: "health-value"
    });
    healthValue.innerHTML = health;
    healthContainer.append(healthValue, healthBar);
    return healthContainer;
  }

  createImg(source) {
    const img = this.createElement({
      tagName: "img",
      className: "active-fighter-image",
      attributes: {
        src: source
      }
    });
    return img;
  }

  createInfoLabel(name, value, className) {
    const infoLabel = this.createElement({
      tagName: "div",
      className
    });
    const labelSpan = this.createElement({
      tagName: "span",
      className: `${className}-label`
    });
    labelSpan.innerHTML = name;
    const valueSpan = this.createElement({
      tagName: "span",
      className: `${className}-value`
    });
    valueSpan.innerHTML = value;
    infoLabel.append(labelSpan, valueSpan);
    return infoLabel;
  }

  updateHealth(health) {
    const healthPercent = this.getHealthPercent(health);
    const healthBar = this.element.querySelector(".health-bar");
    healthBar.style.width = `${healthPercent}%`;
    const healthValue = this.element.querySelector(".health-value");
    healthValue.innerHTML = health;
  }

  getHealthPercent(health) {
    return Math.floor(health / this.maxHealth * 100);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ActiveFighterView);

/***/ }),

/***/ "./src/javascript/views/fightView.js":
/*!*******************************************!*\
  !*** ./src/javascript/views/fightView.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/javascript/views/view.js");
/* harmony import */ var _classes_fight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/fight */ "./src/javascript/classes/fight.js");
/* harmony import */ var _activeFighterView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activeFighterView */ "./src/javascript/views/activeFighterView.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/constants */ "./src/javascript/helpers/constants.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class FightView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(fighter1, fighter2) {
    super();

    _defineProperty(this, "fight", void 0);

    _defineProperty(this, "fighterView1", void 0);

    _defineProperty(this, "fighterView2", void 0);

    _defineProperty(this, "maxHealth", void 0);

    this.fight = new _classes_fight__WEBPACK_IMPORTED_MODULE_1__["default"](fighter1, fighter2);
    const maxHealth = Math.max(fighter1.health, fighter2.health);
    this.backBtnClick = this.backBtnHandleClick.bind(this);
    this.nextBtnClick = this.nextBtnHandleClick.bind(this);
    this.fighterView1 = new _activeFighterView__WEBPACK_IMPORTED_MODULE_2__["default"](fighter1, maxHealth);
    this.fighterView2 = new _activeFighterView__WEBPACK_IMPORTED_MODULE_2__["default"](fighter2, maxHealth);
    this.createFightView(fighter1, fighter2);
  }

  createFightView(fighter1, fighter2) {
    this.element = this.createElement({
      tagName: "div",
      className: "fight-view-container"
    });
    const header = this.createHeader();
    const infoPanel = this.createInfoPanel(); // there is no winner at the start

    const fightersContainer = this.createFighters(fighter1, fighter2);
    const buttonsContainer = this.createButtonsContainer();
    this.element.append(header, infoPanel, fightersContainer, buttonsContainer);
  }

  createButtonsContainer() {
    const buttonsContainer = this.createElement({
      tagName: "div",
      className: "buttons-container"
    });
    const nextBtn = this.createNextBtn();
    const backBtn = this.createBackBtn();
    buttonsContainer.append(nextBtn, backBtn);
    return buttonsContainer;
  }

  createHeader() {
    const header = this.createElement({
      tagName: "div",
      className: "fight-header"
    });
    header.innerHTML = _helpers_constants__WEBPACK_IMPORTED_MODULE_3__["default"].FIGHT;
    return header;
  }

  createFighters() {
    const fightersContainer = this.createElement({
      tagName: "div",
      className: "active-fighters-container"
    });
    const fighter1Element = this.fighterView1.element;
    const fighter2Element = this.fighterView2.element;
    fightersContainer.append(fighter1Element, fighter2Element);
    return fightersContainer;
  }

  createBackBtn() {
    const backBtn = this.createElement({
      tagName: "button",
      className: "back-btn"
    });
    backBtn.innerHTML = _helpers_constants__WEBPACK_IMPORTED_MODULE_3__["default"].START_NEW_GAME;
    backBtn.onclick = this.backBtnClick;
    backBtn.style.display = "none";
    return backBtn;
  }

  backBtnHandleClick() {
    const gameElement = document.getElementById("game");
    gameElement.style.display = "flex";
    this.element.parentNode.removeChild(this.element);
  }

  nextBtnHandleClick(event) {
    this.fight.startNextRound();
    this.updateInfoPanelText(`Round ${this.fight.fightRound + 1}`);
    const fighter1Health = this.fight.fighter1.fighterStatus.health;
    const fighter2Health = this.fight.fighter2.fighterStatus.health;
    this.fighterView1.updateHealth(fighter1Health);
    this.fighterView2.updateHealth(fighter2Health);

    if (this.fight.gameOver) {
      const backBtn = document.querySelector(".back-btn");
      backBtn.style.display = "block";
      event.target.setAttribute("disabled", true);
      const winner = this.fight.winner;
      const gameResultText = winner ? `Fighter ${winner.order} wins with ${winner.fighter.fighterStatus.name}` : _helpers_constants__WEBPACK_IMPORTED_MODULE_3__["default"].DRAW;
      this.updateInfoPanelText(gameResultText);
    }
  }

  createNextBtn() {
    const nextBtn = this.createElement({
      tagName: "button",
      className: "next-btn"
    });
    nextBtn.innerHTML = _helpers_constants__WEBPACK_IMPORTED_MODULE_3__["default"].NEXT_ROUND;
    nextBtn.onclick = this.nextBtnClick;
    return nextBtn;
  }

  updateInfoPanelText(text) {
    const winnerText = document.querySelector(".winner");
    winnerText.innerHTML = text;
  }

  createInfoPanel() {
    const infoPanel = this.createElement({
      tagName: "div",
      className: "winner-panel"
    });
    const winnerText = this.createElement({
      tagName: "span",
      className: "winner"
    });
    winnerText.innerHTML = `Round ${this.fight.fightRound + 1}`;
    infoPanel.append(winnerText);
    return infoPanel;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FightView);

/***/ }),

/***/ "./src/javascript/views/fighterDetailsView.js":
/*!****************************************************!*\
  !*** ./src/javascript/views/fighterDetailsView.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/javascript/views/view.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/constants */ "./src/javascript/helpers/constants.js");
/* harmony import */ var _services_fightersService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fightersService */ "./src/javascript/services/fightersService.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class FighterDetailsView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(fighter, fightersMap) {
    super();

    _defineProperty(this, "fightersMap", void 0);

    _defineProperty(this, "fighter", void 0);

    this.fighter = fighter;
    this.fightersMap = fightersMap;
    this.createFighterDetailsView(fighter);
  }

  createFighterDetailsView(fighter) {
    this.element = this.createElement({
      tagName: "div",
      className: "fighter-details-view"
    });
    const imageContainer = this.createImageContainer(fighter.source);
    const infoContainer = this.createInfoContainer(fighter);
    const updateContainer = this.createUpdateContainer();
    const closeBtn = this.createCloseBtn();
    infoContainer.append(updateContainer);
    this.element.append(imageContainer, infoContainer, closeBtn);
  }

  closeModal() {
    FighterDetailsView.modal.innerHTML = "";
    FighterDetailsView.modal.style.display = "none";
    FighterDetailsView.backgroundOverlay.style.display = "none";
  }

  async updateFighterClickHandler() {
    const health = this.element.querySelector(".health-input").value;
    const attack = this.element.querySelector(".attack-input").value;
    const defense = this.element.querySelector(".defense-input").value;
    this.fighter = { ...this.fighter,
      health,
      attack,
      defense
    };
    this.fightersMap.set(this.fighter._id, this.fighter);
    const result = await _services_fightersService__WEBPACK_IMPORTED_MODULE_2__["fightersService"].updateFighterDetailsOnServer(this.fighter._id, this.fighter);
    console.log("Updated fighter on server", result);
    this.closeModal();
  }

  createImageContainer(source) {
    const imageContainer = this.createElement({
      tagName: "div",
      className: "fighter-details-image-container"
    });
    const image = this.createElement({
      tagName: "img",
      className: "fighter-details-image",
      attributes: {
        src: source
      }
    });
    imageContainer.append(image);
    return imageContainer;
  }

  createInputContainer(name, value) {
    const inputContainer = this.createElement({
      tagName: "div",
      className: "fighter-input-container"
    });
    const inputLabel = this.createElement({
      tagName: "label",
      className: "fighter-input-label"
    });
    inputLabel.innerHTML = name;
    const input = this.createElement({
      tagName: "input",
      className: `${name.toLowerCase()}-input`,
      attributes: {
        type: "number",
        min: 0,
        step: 1,
        name
      }
    });
    input.value = value;
    inputContainer.append(inputLabel, input);
    return inputContainer;
  }

  createInfoContainer(fighter) {
    const infoContainer = this.createElement({
      tagName: "div",
      className: "fighter-info-container"
    });
    const name = this.createElement({
      tagName: "div",
      className: "fighter-name"
    });
    name.innerHTML = fighter.name;
    const health = this.createInputContainer("Health", fighter.health);
    const attack = this.createInputContainer("Attack", fighter.attack);
    const defense = this.createInputContainer("Defense", fighter.defense);
    infoContainer.append(name, health, attack, defense);
    return infoContainer;
  }

  createUpdateContainer() {
    const updateContainer = this.createElement({
      tagName: "div",
      className: "fighter-update-container"
    });
    const updateBtn = this.createElement({
      tagName: "button",
      className: "fighter-update-btn"
    });
    updateBtn.innerHTML = _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE;
    updateBtn.onclick = this.updateFighterClickHandler.bind(this);
    updateContainer.append(updateBtn);
    return updateContainer;
  }

  createCloseBtn() {
    const closeBtn = this.createElement({
      tagName: "span",
      className: "modal-close-btn"
    });
    closeBtn.innerHTML = "&#10060;";
    closeBtn.addEventListener("click", this.closeModal, false);
    return closeBtn;
  }

}

_defineProperty(FighterDetailsView, "modal", document.getElementById("modal"));

_defineProperty(FighterDetailsView, "backgroundOverlay", document.getElementById("background-overlay"));

/* harmony default export */ __webpack_exports__["default"] = (FighterDetailsView);

/***/ }),

/***/ "./src/javascript/views/fighterView.js":
/*!*********************************************!*\
  !*** ./src/javascript/views/fighterView.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/javascript/views/view.js");


class FighterView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(fighter, handleClick) {
    super();
    this.createFighter(fighter, handleClick);
  }

  createFighter(fighter, handleClick) {
    const {
      name,
      source
    } = fighter;
    const nameElement = this.createName(name);
    const imageElement = this.createImage(source);
    this.element = this.createElement({
      tagName: "div",
      className: "fighter"
    });
    this.element.append(imageElement, nameElement);
    this.element.addEventListener("click", event => handleClick(event, fighter), false);
  }

  createName(name) {
    const nameElement = this.createElement({
      tagName: "span",
      className: "name"
    });
    nameElement.innerText = name;
    return nameElement;
  }

  createImage(source) {
    const attributes = {
      src: source
    };
    const imgElement = this.createElement({
      tagName: "img",
      className: "fighter-image",
      attributes
    });
    return imgElement;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FighterView);

/***/ }),

/***/ "./src/javascript/views/fightersView.js":
/*!**********************************************!*\
  !*** ./src/javascript/views/fightersView.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/javascript/views/view.js");
/* harmony import */ var _fighterView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fighterView */ "./src/javascript/views/fighterView.js");
/* harmony import */ var _fighterDetailsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fighterDetailsView */ "./src/javascript/views/fighterDetailsView.js");
/* harmony import */ var _services_fightersService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/fightersService */ "./src/javascript/services/fightersService.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class FightersView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(fighters) {
    super();

    _defineProperty(this, "fightersDetailsMap", new Map());

    this.handleClick = this.handleFighterClick.bind(this);
    this.createFighters(fighters);
  }

  createFighters(fighters) {
    const fighterElements = fighters.map(fighter => {
      const fighterView = new _fighterView__WEBPACK_IMPORTED_MODULE_1__["default"](fighter, this.handleClick);
      return fighterView.element;
    });
    this.element = this.createElement({
      tagName: "div",
      className: "fighters"
    });
    const fightersInternalContainer = this.createElement({
      tagName: "div",
      className: "fighters-internal-container"
    });
    fightersInternalContainer.append(...fighterElements);
    this.element.append(fightersInternalContainer);
  }

  async handleFighterClick(event, fighter) {
    const selectedFighter = this.fightersDetailsMap.get(fighter._id);

    try {
      if (!selectedFighter) {
        await _services_fightersService__WEBPACK_IMPORTED_MODULE_3__["fightersService"].updateFighterDetailsInMap(fighter._id, this.fightersDetailsMap);
      }

      const fighterWithDetails = this.fightersDetailsMap.get(fighter._id);
      const fighterDetailsView = new _fighterDetailsView__WEBPACK_IMPORTED_MODULE_2__["default"](fighterWithDetails, this.fightersDetailsMap);
      FightersView.modal.append(fighterDetailsView.element);
      FightersView.backgroundOverlay.style.display = "block";
      FightersView.modal.style.display = "block";
    } catch (error) {
      throw error;
    }
  }

}

_defineProperty(FightersView, "modal", document.getElementById("modal"));

_defineProperty(FightersView, "backgroundOverlay", document.getElementById("background-overlay"));

/* harmony default export */ __webpack_exports__["default"] = (FightersView);

/***/ }),

/***/ "./src/javascript/views/gameView.js":
/*!******************************************!*\
  !*** ./src/javascript/views/gameView.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/javascript/views/view.js");
/* harmony import */ var _fightersView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fightersView */ "./src/javascript/views/fightersView.js");
/* harmony import */ var _selectFightersView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectFightersView */ "./src/javascript/views/selectFightersView.js");
/* harmony import */ var _fightView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fightView */ "./src/javascript/views/fightView.js");
/* harmony import */ var _services_fightersService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/fightersService */ "./src/javascript/services/fightersService.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/constants */ "./src/javascript/helpers/constants.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class GameView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(fighters) {
    super();

    _defineProperty(this, "fighter1", void 0);

    _defineProperty(this, "fighter2", void 0);

    _defineProperty(this, "fightersView", void 0);

    if (fighters.length) {
      this.fighter1 = fighters[0];
      this.fighter2 = fighters[0];
    }

    this.startGameClick = this.startGameClickHandler.bind(this);
    this.selectFighter = this.selectFighterHandler.bind(this);
    this.createGame(fighters);
  }

  createGame(fighters) {
    const logo = this.createLogo("../../../resources/logo.png");
    const gamePanel = this.createGamePanel(fighters);
    this.fightersView = new _fightersView__WEBPACK_IMPORTED_MODULE_1__["default"](fighters);
    const fightersElement = this.fightersView.element;
    this.element = this.createElement({
      tagName: "div",
      className: "game",
      attributes: {
        id: "game"
      }
    });
    this.element.append(logo, fightersElement, gamePanel);
    this.element.addEventListener("selectFighter", this.selectFighter);
  }

  createGamePanel(fighters) {
    const gamePanel = this.createElement({
      tagName: "div",
      className: "game-panel"
    });
    const startGameBtn = this.createStartGameBtn(this.startGameClick);
    const selectFighters = new _selectFightersView__WEBPACK_IMPORTED_MODULE_2__["default"](fighters);
    gamePanel.append(selectFighters.element, startGameBtn);
    return gamePanel;
  }

  createStartGameBtn(startGame) {
    const startGameBtn = this.createElement({
      tagName: "button",
      className: "start-game"
    });
    startGameBtn.innerHTML = "Start Game";
    startGameBtn.onclick = startGame;
    return startGameBtn;
  }

  async startGameClickHandler() {
    // get fighter details if they have not been received yet
    try {
      const fightersDetailsMap = this.fightersView.fightersDetailsMap;
      const _ids = [this.fighter1._id, this.fighter2._id];
      GameView.loadingElement.style.visibility = "visible";
      GameView.rootElement.style.visibility = "hidden";

      for (const _id of _ids) {
        if (!fightersDetailsMap.get(_id)) {
          await _services_fightersService__WEBPACK_IMPORTED_MODULE_4__["fightersService"].updateFighterDetailsInMap(_id, fightersDetailsMap);
        }
      }

      const fightersDetails = _ids.map(_id => fightersDetailsMap.get(_id));

      const fightView = new _fightView__WEBPACK_IMPORTED_MODULE_3__["default"](fightersDetails[0], fightersDetails[1]);
      GameView.rootElement.append(fightView.element);
      GameView.rootElement.style.visibility = "visible";
      this.element.style.display = "none";
    } catch (error) {
      GameView.rootElement.innerText = _helpers_constants__WEBPACK_IMPORTED_MODULE_5__["default"].FAILED_TO_LOAD_TEXT;
      throw error;
    } finally {
      GameView.loadingElement.style.visibility = "hidden";
    }
  }

  createLogo(source) {
    const logo = this.createElement({
      tagName: "div",
      className: "fighter-logo"
    });
    const logoImg = this.createElement({
      tagName: "img",
      className: "logo-image",
      attributes: {
        src: source
      }
    });
    logo.append(logoImg);
    return logo;
  }

  selectFighterHandler(event) {
    const {
      detail
    } = event;
    detail.order === "1" ? this.fighter1 = detail.selectedFighter : this.fighter2 = detail.selectedFighter;
  }

}

_defineProperty(GameView, "rootElement", document.getElementById("root"));

_defineProperty(GameView, "loadingElement", document.getElementById("loading-overlay"));

/* harmony default export */ __webpack_exports__["default"] = (GameView);

/***/ }),

/***/ "./src/javascript/views/selectFighterView.js":
/*!***************************************************!*\
  !*** ./src/javascript/views/selectFighterView.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/javascript/views/view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SelectFighterView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(name, order, fighters) {
    super();

    _defineProperty(this, "fighters", void 0);

    _defineProperty(this, "selectedFighter", void 0);

    this.fighters = fighters;

    if (fighters.length) {
      this.selectedFighter = fighters[0];
    }

    this.fighterChange = this.selectFighterChange.bind(this);
    this.createSelectFighter(name, order);
  }

  createSelectFighter(name, order) {
    this.element = this.createElement({
      tagName: "div",
      className: "select-fighter-container"
    });
    const selectFighter = this.createElement({
      tagName: "select",
      className: "select-fighter",
      attributes: {
        name,
        "data-order": order
      }
    });
    selectFighter.onchange = this.fighterChange;
    const fighterOptions = this.fighters.map(fighter => this.createElement({
      tagName: "option",
      className: "select-fighter-option",
      attributes: {
        value: fighter._id
      }
    }));
    fighterOptions.forEach((fighterOption, index) => {
      fighterOption.innerHTML = this.fighters[index].name;
    });
    fighterOptions[0].setAttribute("selected", true);
    const selectFighterLabel = this.createSelectFighterLabel(name);
    selectFighter.append(...fighterOptions);
    this.element.append(selectFighterLabel, selectFighter);
  }

  selectFighterChange(selectFighter) {
    const selectFighterId = selectFighter.srcElement.value;
    const selectedFighter = this.fighters.filter(({
      _id
    }) => selectFighterId == _id // comparing string "value" from select to numeric _id
    );
    this.selectedFighter = selectedFighter[0]; // dispatch event to parent components

    const order = selectFighter.srcElement.attributes["data-order"].value;
    const selectFighterEvent = new CustomEvent("selectFighter", {
      bubbles: true,
      detail: {
        order,
        selectedFighter: this.selectedFighter
      }
    });
    this.element.dispatchEvent(selectFighterEvent);
  }

  createSelectFighterLabel(name) {
    const selectFighterLabel = this.createElement({
      tagName: "span",
      className: "select-fighter-label"
    });
    selectFighterLabel.innerHTML = name;
    return selectFighterLabel;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SelectFighterView);

/***/ }),

/***/ "./src/javascript/views/selectFightersView.js":
/*!****************************************************!*\
  !*** ./src/javascript/views/selectFightersView.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/javascript/views/view.js");
/* harmony import */ var _selectFighterView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectFighterView */ "./src/javascript/views/selectFighterView.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class SelectFightersView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(fighters) {
    super();

    _defineProperty(this, "fighters", void 0);

    this.fighters = fighters;
    this.createSelectFighters(fighters);
  }

  createSelectFighters(fighters) {
    this.element = this.createElement({
      tagName: "div",
      className: "select-fighters"
    });
    const selectFightersParams = [{
      name: "First Fighter",
      order: 1
    }, {
      name: "Second Fighter",
      order: 2
    }];
    const selectFighterElements = selectFightersParams.map(({
      name,
      order
    }) => {
      const fightView = new _selectFighterView__WEBPACK_IMPORTED_MODULE_1__["default"](name, order, fighters);
      return fightView.element;
    });
    const selectFighterElements2 = selectFightersParams.map(({
      name,
      order
    }) => {
      return this.createElement({
        tagName: "div",
        className: order
      });
    });
    this.element.append(...selectFighterElements);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SelectFightersView);

/***/ }),

/***/ "./src/javascript/views/view.js":
/*!**************************************!*\
  !*** ./src/javascript/views/view.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class View {
  constructor() {
    _defineProperty(this, "element", void 0);
  }

  createElement({
    tagName,
    className = "",
    attributes = {}
  }) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    return element;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map