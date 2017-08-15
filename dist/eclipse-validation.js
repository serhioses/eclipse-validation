(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("eclipse"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["eclipse", "jquery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("eclipse"), require("jquery")) : factory(root["eclipse"], root["jQuery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__) {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideAllNotices = hideAllNotices;
exports.hideNotice = hideNotice;
exports.showNotice = showNotice;
function hideAllNotices() {
  $('.ev-notice').remove();
};

function hideNotice(notice) {
  notice.remove();
};

function showNotice(id, className, target, text) {
  var notice = $('<div/>');

  if (target.length && !$('#' + id).length) {
    notice.attr('id', id);
    notice.text(text).addClass('ev-notice ' + className).appendTo(target.closest('.ev-notice-parent'));

    setTimeout(function () {
      notice.addClass('ev-notice--active');
    }, 4);
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.isPattern = isPattern;
exports.isEmail = isEmail;

var _notice = __webpack_require__(0);

var _eclipse = __webpack_require__(1);

var _eclipse2 = _interopRequireDefault(_eclipse);

var _jquery = __webpack_require__(4);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EMAIL_REGEXP = '^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&\'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&\'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$';

var validationProps = ['minLength', 'maxLength', 'pattern', 'checked', 'selected', 'equalTo'],
    _instances = [],
    noticeID = 0,
    validator;

function isPattern(pattern, str, ignoreFlag) {
  return str.length && pattern.length ? new RegExp(pattern, 'g' + (ignoreFlag ? 'i' : '')).test(str) : null;
}

function isEmail(str) {
  return isPattern(EMAIL_REGEXP, str.toLowerCase());
}

validator = {
  minLength: function minLength(field, len) {
    return {
      value: field.val().length >= len,
      parameter: 'minLength'
    };
  },
  maxLength: function maxLength(field, len) {
    return {
      value: field.val().length <= len,
      parameter: 'maxLength'
    };
  },
  pattern: function pattern(field, _pattern, options) {
    if (this[_pattern]) {
      return {
        value: this[_pattern](field),
        parameter: 'pattern'
      };
    }

    return {
      value: isPattern(_pattern, field.val(), options.ignoreFlag),
      parameter: 'pattern'
    };
  },
  equalTo: function equalTo(field, val) {
    return {
      value: field.val() === (0, _jquery2.default)(val).val(),
      parameter: 'equalTo'
    };
  },
  string: function string(field) {
    return field.val().length;
  },
  email: function email(field) {
    return isEmail(field.val());
  },
  number: function number(field) {
    return !isNaN(parseFloat(field.val())) && isFinite(parseFloat(field.val()));
  },
  checked: function checked(field, val, options) {
    var counter = 0,
        type = field[0].type;

    if (type === 'radio') {
      return {
        value: field.filter(':checked').length === 1,
        parameter: 'checked'
      };
    }

    field.each(function () {
      if ((0, _jquery2.default)(this).prop('checked') === val) {
        counter += 1;
      }
    });

    if (options.checkedLength) {
      return {
        value: counter === options.checkedLength,
        parameter: 'checkedLength'
      };
    }

    if (options.minCheckedLength) {
      if (counter < options.minCheckedLength || !counter) {
        return {
          value: false,
          parameter: 'minCheckedLength'
        };
      }
    }

    if (options.maxCheckedLength) {
      if (counter > options.maxCheckedLength || !counter) {
        return {
          value: false,
          parameter: 'maxCheckedLength'
        };
      }
    }

    if (options.minCheckedLength && options.maxCheckedLength) {
      if (counter < options.minCheckedLength || counter > options.maxCheckedLength) {
        return {
          value: false,
          parameter: 'rangeCheckedLength'
        };
      }
    }

    return {
      value: counter > 0,
      parameter: 'checked'
    };
  },
  selected: function selected(field, val, options) {
    var counter = 0,
        type = field[0].type;

    if (type === 'select-one') {
      return {
        value: !!field.val() && field.val() !== 'unselectable',
        parameter: 'selected'
      };
    }

    field.find('option').each(function () {
      if ((0, _jquery2.default)(this).prop('selected') && !(0, _jquery2.default)(this).prop('disabled') && (0, _jquery2.default)(this).val() !== 'unselectable') {
        counter += 1;
      }
    });

    if (options.selectedLength) {
      return {
        value: counter === options.selectedLength,
        parameter: 'selectedLength'
      };
    }

    if (options.minSelectedLength) {
      if (counter < options.minSelectedLength || !counter) {
        return {
          value: false,
          parameter: 'minSelectedLength'
        };
      }
    }

    if (options.maxSelectedLength) {
      if (counter > options.maxSelectedLength || !counter) {
        return {
          value: false,
          parameter: 'maxSelectedLength'
        };
      }
    }

    if (options.minSelectedLength && options.maxSelectedLength) {
      if (counter < options.minSelectedLength || counter > options.maxSelectedLength) {
        return {
          value: false,
          parameter: 'rangeSelectedLength'
        };
      }
    }

    return {
      value: counter > 0,
      parameter: 'selected'
    };
  }
};

function initElements() {
  var _this = this;

  this._defaults.names.forEach(function (item) {
    _this.elements[item] = _this.form.find('[name="' + item + '"]');
  });
}

function isChanged(el) {
  if (el[0].type === 'select-one') {
    return !!el.val() && el.val() !== 'unselectable';
  } else if (el[0].type === 'select-multiple') {
    return !!el.val().length && el.val()[0] !== 'unselectable';
  } else if (el[0].type === 'radio') {
    return false;
  } else if (el[0].type === 'checkbox') {
    return !!el.filter(':checked').length;
  }

  return !!el.val();
}

function findEmpty(groupIndex, group) {
  var _this2 = this;

  var groupElements,
      defaults = this._defaults;

  return groupElements = defaults.names.filter(function (el) {
    var currentEl = _this2.elements[el];

    if (defaults.rules[el].group === groupIndex && !currentEl.hasClass('ev-valid-item') && !defaults.groups[groupIndex].marked[el]) {
      defaults.groups[groupIndex].marked[el] = true;

      return isChanged(currentEl);
    }

    return false;
  });
}

function checkField(field, rules) {
  for (var i = 0; i < validationProps.length; i += 1) {
    var p = validationProps[i],
        result = void 0;

    if (!field.is(':disabled')) {
      if (validator[p] && typeof rules[p] !== 'undefined') {
        result = validator[p](field, rules[p], rules.options || {});

        if (!result.value) {
          return result;
        }
      }
    }
  }

  return { value: true };
}

function checkGroup(groupIndex, group, groupElements, checkEmpty) {
  var _this3 = this;

  var message,
      results = {},
      defaults = this._defaults;

  if (defaults.stopOnInvalid && this.isStopped) {
    return;
  }

  if (!groupElements) {
    groupElements = this._defaults.names.filter(function (el) {
      return defaults.rules[el].group === groupIndex;
    });
  }

  groupElements.forEach(function (el) {
    var rules = defaults.rules[el],
        result = checkField.call(_this3, _this3.elements[el], rules);

    results[el] = result;

    if (result.value) {
      group.countValid += 1;
      _this3.elements[el].data('ev-possibly-valid', true);
    } else {
      _this3.elements[el].data('ev-possibly-error', true);
    }
  });

  group.checked = true;

  if (group.countValid >= group.requiredFields && !checkEmpty) {
    group.isValid = true;

    groupElements.forEach(function (el) {
      if (_this3.elements[el].data('ev-possibly-valid')) {
        _this3.elements[el].addClass('ev-valid-item');
        defaults.onSetValid();
      }
    });
  } else {
    this.e.preventDefault();

    try {
      groupElements.forEach(function (el) {
        if (_this3.elements[el].data('ev-possibly-error')) {
          _this3.isFormValid = false;
          _this3.elements[el].addClass('ev-invalid-item');

          message = defaults.messages[el] && defaults.messages[el][results[el].parameter];

          if (message && defaults.showNotice) {
            (0, _notice.showNotice)('notice-' + Math.random() + '-' + noticeID, '', _this3.elements[el], message);
            noticeID += 1;
          }

          defaults.onSetInvalid();

          if (!_this3.firstInvalidField) {
            _this3.firstInvalidField = _this3.elements[el];
            _this3.firstInvalidField.addClass('ev-invalid-item--first');

            if (defaults.scrollToInvalid) {
              _eclipse2.default.DOM.scrollPage(_this3.firstInvalidField.closest('.ev-notice-parent'), defaults.scrollCorrection, defaults.scrollOptions).then(function () {
                if (defaults.setFocus) {
                  _this3.firstInvalidField.focus();
                }
                defaults.afterScroll();
              });
            }
          } else {
            if (defaults.setFocus) {
              _this3.firstInvalidField.focus();
            }
          }

          if (defaults.stopOnInvalid) {
            _this3.isStopped = true;

            throw new Error();
          }
        } else {
          _this3.elements[el].addClass('ev-valid-item');
        }
      });
    } catch (err) {
      defaults.onStopOnInvalid();
    }
  }
}

function checkElements() {
  var _this4 = this;

  try {
    this._defaults.names.forEach(function (el) {
      var defaults = _this4._defaults,
          rules = defaults.rules[el],
          result,
          shouldCheck = true,
          group,
          groupElements,
          message;

      if (typeof rules.group !== 'undefined') {
        group = defaults.groups[rules.group];

        if (!group.isValid && !group.checked) {
          checkGroup.call(_this4, rules.group, group);
        } else if (group.isValid) {
          groupElements = findEmpty.call(_this4, rules.group, group);

          if (groupElements.length) {
            checkGroup.call(_this4, rules.group, group, groupElements, true);
          }
        }
      } else {
        if (rules.checkIfChanged) {
          if (!isChanged(_this4.elements[el])) {
            shouldCheck = false;
          }
        }
        result = checkField.call(_this4, _this4.elements[el], rules);

        if (!result.value && shouldCheck) {
          _this4.isFormValid = false;

          if (defaults.stopOnInvalid && _this4.isStopped) {
            throw new Error();
          }

          _this4.e.preventDefault();
          _this4.elements[el].addClass('ev-invalid-item');

          message = defaults.messages[el] && defaults.messages[el][result.parameter];

          if (message && defaults.showNotice) {
            (0, _notice.showNotice)('notice-' + Math.random() + '-' + noticeID, '', _this4.elements[el], message);
            noticeID += 1;
          }

          defaults.onSetInvalid();

          if (!_this4.firstInvalidField) {
            _this4.firstInvalidField = _this4.elements[el];
            _this4.firstInvalidField.addClass('ev-invalid-item--first');

            if (defaults.scrollToInvalid) {
              _eclipse2.default.DOM.scrollPage(_this4.firstInvalidField.closest('.ev-notice-parent'), defaults.scrollCorrection, defaults.scrollOptions).then(function () {
                if (defaults.setFocus) {
                  _this4.firstInvalidField.focus();
                }
                defaults.afterScroll();
              });
            } else {
              if (defaults.setFocus) {
                _this4.firstInvalidField.focus();
              }
            }
          }

          if (defaults.stopOnInvalid) {
            _this4.isStopped = true;

            throw new Error();
          }
        } else {
          _this4.elements[el].addClass('ev-valid-item');
          defaults.onSetValid();
        }
      }
    });
  } catch (err) {
    defaults.onStopOnInvalid();
  }
}

function resetGroups() {
  this._defaults.groups.forEach(function (group) {
    group.isValid = false;
    group.countValid = 0;
    group.checked = false;
    group.marked = {};
  });
}

var Validation = function () {
  function Validation(form, options) {
    _classCallCheck(this, Validation);

    var defaults = Object.create(null);

    defaults.rules = {};
    defaults.names = [];
    defaults.groups = [];
    defaults.messages = {};
    defaults.scrollToInvalid = true;
    defaults.scrollCorrection = 0;
    defaults.scrollOptions = {};
    defaults.showNotice = true;
    defaults.stopOnInvalid = true;
    defaults.setFocus = true;
    defaults.onSetValid = _jquery2.default.noop;
    defaults.onSetInvalid = _jquery2.default.noop;
    defaults.afterScroll = _jquery2.default.noop;
    defaults.onStopOnInvalid = _jquery2.default.noop;

    if (_eclipse2.default.helpers.getClass(options) === 'Object') {
      _jquery2.default.extend(true, defaults, options);
    }

    this.elements = {};
    this.form = form;
    this.firstInvalidField = null;
    this.isFormValid = true;

    Object.defineProperty(this, '_defaults', {
      get: function get() {
        return defaults;
      }
    });

    initElements.call(this);

    this.form.attr('novalidate', 'novalidate');

    _instances.push(this);
  }

  _createClass(Validation, [{
    key: 'validate',
    value: function validate(e) {
      var _this5 = this;

      this.e = e;
      this.isStopped = false;
      this.isFormValid = true;

      (0, _notice.hideAllNotices)();

      Object.keys(this.elements).forEach(function (el) {
        _this5.elements[el].removeClass('ev-invalid-item ev-valid-item').data('ev-possibly-error', '').data('ev-possibly-valid', '');
      });

      this.firstInvalidField = null;

      if (this._defaults.groups.length) {
        resetGroups.call(this);
      }

      checkElements.call(this);

      return this.isFormValid;
    }
  }], [{
    key: 'delegateSubmit',
    value: function delegateSubmit(e) {
      var instance = Validation.findInstance(e);

      if (instance) {
        return instance.validate(e);
      }
    }
  }, {
    key: 'findInstance',
    value: function findInstance(e) {
      var currentForm = (0, _jquery2.default)(e.target).closest('[data-ev-from]');

      if (!currentForm.length) {
        return;
      }

      return Validation.instances().filter(function (instance) {
        return instance.form.attr('id') === currentForm.attr('id');
      })[0];
    }
  }, {
    key: 'instances',
    value: function instances() {
      return _instances;
    }
  }, {
    key: 'extendValidationProps',
    value: function extendValidationProps(newProps) {
      newProps.forEach(function (propertyObj) {
        if (!_eclipse2.default.helpers.inArray(validationProps, propertyObj.name) && !Object.prototype.hasOwnProperty.call(validator, propertyObj.name)) {
          validationProps.push(propertyObj.name);
          validator[propertyObj.name] = propertyObj.value;
        }
      });
    }
  }]);

  return Validation;
}();

exports.default = Validation;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _eclipse = __webpack_require__(1);

var _eclipse2 = _interopRequireDefault(_eclipse);

var _validate = __webpack_require__(2);

var _validate2 = _interopRequireDefault(_validate);

var _notice = __webpack_require__(0);

var notice = _interopRequireWildcard(_notice);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_eclipse2.default.utils.namespace('forms');
_eclipse2.default.utils.namespace('forms.notice');

_eclipse2.default.forms.Validation = _validate2.default;
_eclipse2.default.forms.notice = notice;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNsaXBzZS12YWxpZGF0aW9uLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGI4ODRlMTkzODk5MjhiZGRlOTkiLCJ3ZWJwYWNrOi8vL2xpYi9ub3RpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJlY2xpcHNlXCIsXCJjb21tb25qczJcIjpcImVjbGlwc2VcIixcImFtZFwiOlwiZWNsaXBzZVwiLFwidW1kXCI6XCJlY2xpcHNlXCIsXCJyb290XCI6XCJlY2xpcHNlXCJ9Iiwid2VicGFjazovLy9saWIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vL2VjbGlwc2UtdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCIsXCJ1bWRcIjpcImpxdWVyeVwiLFwicm9vdFwiOlwialF1ZXJ5XCJ9Il0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImVjbGlwc2VcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiZWNsaXBzZVwiLCBcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiZWNsaXBzZVwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSkgOiBmYWN0b3J5KHJvb3RbXCJlY2xpcHNlXCJdLCByb290W1wialF1ZXJ5XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRiODg0ZTE5Mzg5OTI4YmRkZTk5IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVBbGxOb3RpY2VzICgpIHtcclxuICAkKCcuZXYtbm90aWNlJykucmVtb3ZlKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZU5vdGljZSAobm90aWNlKSB7XHJcbiAgbm90aWNlLnJlbW92ZSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dOb3RpY2UgKGlkLCBjbGFzc05hbWUsIHRhcmdldCwgdGV4dCkge1xyXG4gIHZhciBub3RpY2UgPSAkKCc8ZGl2Lz4nKTtcclxuXHJcbiAgaWYgKHRhcmdldC5sZW5ndGggJiYgISQoJyMnICsgaWQpLmxlbmd0aCkge1xyXG4gICAgbm90aWNlLmF0dHIoJ2lkJywgaWQpO1xyXG4gICAgbm90aWNlLnRleHQodGV4dCkuYWRkQ2xhc3MoJ2V2LW5vdGljZSAnICsgY2xhc3NOYW1lKS5hcHBlbmRUbyh0YXJnZXQuY2xvc2VzdCgnLmV2LW5vdGljZS1wYXJlbnQnKSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIG5vdGljZS5hZGRDbGFzcygnZXYtbm90aWNlLS1hY3RpdmUnKTtcclxuICAgIH0sIDQpO1xyXG4gIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9ub3RpY2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJlY2xpcHNlXCIsXCJjb21tb25qczJcIjpcImVjbGlwc2VcIixcImFtZFwiOlwiZWNsaXBzZVwiLFwidW1kXCI6XCJlY2xpcHNlXCIsXCJyb290XCI6XCJlY2xpcHNlXCJ9XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHtoaWRlQWxsTm90aWNlcywgc2hvd05vdGljZX0gZnJvbSAnLi9ub3RpY2UnO1xyXG5cclxuaW1wb3J0IGVjbGlwc2UgZnJvbSAnZWNsaXBzZSc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5jb25zdCBFTUFJTF9SRUdFWFAgPSAnXig/PS57MSwyNTR9JCkoPz0uezEsNjR9QClbLSEjJCUmXFwnKisvMC05PT9BLVpeX2BhLXp7fH1+XSsoXFwuWy0hIyQlJlxcJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKSpAW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPyhcXC5bQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KSokJztcclxuXHJcbnZhciB2YWxpZGF0aW9uUHJvcHMgPSBbJ21pbkxlbmd0aCcsICdtYXhMZW5ndGgnLCAncGF0dGVybicsICdjaGVja2VkJywgJ3NlbGVjdGVkJywgJ2VxdWFsVG8nXSxcclxuICBpbnN0YW5jZXMgPSBbXSxcclxuICBub3RpY2VJRCA9IDAsXHJcbiAgdmFsaWRhdG9yO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0dGVybiAocGF0dGVybiwgc3RyLCBpZ25vcmVGbGFnKSB7XHJcbiAgcmV0dXJuIChzdHIubGVuZ3RoICYmIHBhdHRlcm4ubGVuZ3RoKSA/IG5ldyBSZWdFeHAocGF0dGVybiwgJ2cnICsgKGlnbm9yZUZsYWcgPyAnaScgOiAnJykpLnRlc3Qoc3RyKSA6IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VtYWlsIChzdHIpIHtcclxuICByZXR1cm4gaXNQYXR0ZXJuKEVNQUlMX1JFR0VYUCwgc3RyLnRvTG93ZXJDYXNlKCkpO1xyXG59XHJcblxyXG52YWxpZGF0b3IgPSB7XHJcbiAgbWluTGVuZ3RoOiBmdW5jdGlvbiAoZmllbGQsIGxlbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IGZpZWxkLnZhbCgpLmxlbmd0aCA+PSBsZW4sXHJcbiAgICAgIHBhcmFtZXRlcjogJ21pbkxlbmd0aCdcclxuICAgIH07XHJcbiAgfSxcclxuICBtYXhMZW5ndGg6IGZ1bmN0aW9uIChmaWVsZCwgbGVuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogZmllbGQudmFsKCkubGVuZ3RoIDw9IGxlbixcclxuICAgICAgcGFyYW1ldGVyOiAnbWF4TGVuZ3RoJ1xyXG4gICAgfTtcclxuICB9LFxyXG4gIHBhdHRlcm46IGZ1bmN0aW9uIChmaWVsZCwgcGF0dGVybiwgb3B0aW9ucykge1xyXG4gICAgaWYgKHRoaXNbcGF0dGVybl0pIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB2YWx1ZTogdGhpc1twYXR0ZXJuXShmaWVsZCksXHJcbiAgICAgICAgcGFyYW1ldGVyOiAncGF0dGVybidcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogaXNQYXR0ZXJuKHBhdHRlcm4sIGZpZWxkLnZhbCgpLCBvcHRpb25zLmlnbm9yZUZsYWcpLFxyXG4gICAgICBwYXJhbWV0ZXI6ICdwYXR0ZXJuJ1xyXG4gICAgfTtcclxuICB9LFxyXG4gIGVxdWFsVG86IGZ1bmN0aW9uIChmaWVsZCwgdmFsKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogZmllbGQudmFsKCkgPT09ICQodmFsKS52YWwoKSxcclxuICAgICAgcGFyYW1ldGVyOiAnZXF1YWxUbydcclxuICAgIH07XHJcbiAgfSxcclxuICBzdHJpbmc6IGZ1bmN0aW9uIChmaWVsZCkge1xyXG4gICAgcmV0dXJuIGZpZWxkLnZhbCgpLmxlbmd0aDtcclxuICB9LFxyXG4gIGVtYWlsOiBmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgIHJldHVybiBpc0VtYWlsKGZpZWxkLnZhbCgpKTtcclxuICB9LFxyXG4gIG51bWJlcjogZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQoZmllbGQudmFsKCkpKSAmJiBpc0Zpbml0ZShwYXJzZUZsb2F0KGZpZWxkLnZhbCgpKSk7XHJcbiAgfSxcclxuICBjaGVja2VkOiBmdW5jdGlvbiAoZmllbGQsIHZhbCwgb3B0aW9ucykge1xyXG4gICAgdmFyIGNvdW50ZXIgPSAwLFxyXG4gICAgICB0eXBlID0gZmllbGRbMF0udHlwZTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHZhbHVlOiBmaWVsZC5maWx0ZXIoJzpjaGVja2VkJykubGVuZ3RoID09PSAxLFxyXG4gICAgICAgIHBhcmFtZXRlcjogJ2NoZWNrZWQnXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZmllbGQuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdmFsKSB7XHJcbiAgICAgICAgY291bnRlciArPSAxO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5jaGVja2VkTGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWU6IGNvdW50ZXIgPT09IG9wdGlvbnMuY2hlY2tlZExlbmd0aCxcclxuICAgICAgICBwYXJhbWV0ZXI6ICdjaGVja2VkTGVuZ3RoJ1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLm1pbkNoZWNrZWRMZW5ndGgpIHtcclxuICAgICAgaWYgKGNvdW50ZXIgPCBvcHRpb25zLm1pbkNoZWNrZWRMZW5ndGggfHwgIWNvdW50ZXIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgICAgcGFyYW1ldGVyOiAnbWluQ2hlY2tlZExlbmd0aCdcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMubWF4Q2hlY2tlZExlbmd0aCkge1xyXG4gICAgICBpZiAoY291bnRlciA+IG9wdGlvbnMubWF4Q2hlY2tlZExlbmd0aCB8fCAhY291bnRlcikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgICBwYXJhbWV0ZXI6ICdtYXhDaGVja2VkTGVuZ3RoJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5taW5DaGVja2VkTGVuZ3RoICYmIG9wdGlvbnMubWF4Q2hlY2tlZExlbmd0aCkge1xyXG4gICAgICBpZiAoY291bnRlciA8IG9wdGlvbnMubWluQ2hlY2tlZExlbmd0aCB8fCBjb3VudGVyID4gb3B0aW9ucy5tYXhDaGVja2VkTGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICAgIHBhcmFtZXRlcjogJ3JhbmdlQ2hlY2tlZExlbmd0aCdcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IGNvdW50ZXIgPiAwLFxyXG4gICAgICBwYXJhbWV0ZXI6ICdjaGVja2VkJ1xyXG4gICAgfTtcclxuICB9LFxyXG4gIHNlbGVjdGVkOiBmdW5jdGlvbiAoZmllbGQsIHZhbCwgb3B0aW9ucykge1xyXG4gICAgdmFyIGNvdW50ZXIgPSAwLFxyXG4gICAgICB0eXBlID0gZmllbGRbMF0udHlwZTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdC1vbmUnKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWU6ICEhZmllbGQudmFsKCkgJiYgZmllbGQudmFsKCkgIT09ICd1bnNlbGVjdGFibGUnLFxyXG4gICAgICAgIHBhcmFtZXRlcjogJ3NlbGVjdGVkJ1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZpZWxkLmZpbmQoJ29wdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoJCh0aGlzKS5wcm9wKCdzZWxlY3RlZCcpICYmICEkKHRoaXMpLnByb3AoJ2Rpc2FibGVkJykgJiYgJCh0aGlzKS52YWwoKSAhPT0gJ3Vuc2VsZWN0YWJsZScpIHtcclxuICAgICAgICBjb3VudGVyICs9IDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChvcHRpb25zLnNlbGVjdGVkTGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWU6IGNvdW50ZXIgPT09IG9wdGlvbnMuc2VsZWN0ZWRMZW5ndGgsXHJcbiAgICAgICAgcGFyYW1ldGVyOiAnc2VsZWN0ZWRMZW5ndGgnXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMubWluU2VsZWN0ZWRMZW5ndGgpIHtcclxuICAgICAgaWYgKGNvdW50ZXIgPCBvcHRpb25zLm1pblNlbGVjdGVkTGVuZ3RoIHx8ICFjb3VudGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICAgIHBhcmFtZXRlcjogJ21pblNlbGVjdGVkTGVuZ3RoJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5tYXhTZWxlY3RlZExlbmd0aCkge1xyXG4gICAgICBpZiAoY291bnRlciA+IG9wdGlvbnMubWF4U2VsZWN0ZWRMZW5ndGggfHwgIWNvdW50ZXIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgICAgcGFyYW1ldGVyOiAnbWF4U2VsZWN0ZWRMZW5ndGgnXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLm1pblNlbGVjdGVkTGVuZ3RoICYmIG9wdGlvbnMubWF4U2VsZWN0ZWRMZW5ndGgpIHtcclxuICAgICAgaWYgKGNvdW50ZXIgPCBvcHRpb25zLm1pblNlbGVjdGVkTGVuZ3RoIHx8IGNvdW50ZXIgPiBvcHRpb25zLm1heFNlbGVjdGVkTGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICAgIHBhcmFtZXRlcjogJ3JhbmdlU2VsZWN0ZWRMZW5ndGgnXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiBjb3VudGVyID4gMCxcclxuICAgICAgcGFyYW1ldGVyOiAnc2VsZWN0ZWQnXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXRFbGVtZW50cyAoKSB7XHJcbiAgdGhpcy5fZGVmYXVsdHMubmFtZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgdGhpcy5lbGVtZW50c1tpdGVtXSA9IHRoaXMuZm9ybS5maW5kKGBbbmFtZT1cIiR7aXRlbX1cIl1gKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDaGFuZ2VkIChlbCkge1xyXG4gIGlmIChlbFswXS50eXBlID09PSAnc2VsZWN0LW9uZScpIHtcclxuICAgIHJldHVybiAhIWVsLnZhbCgpICYmIGVsLnZhbCgpICE9PSAndW5zZWxlY3RhYmxlJztcclxuICB9IGVsc2UgaWYgKGVsWzBdLnR5cGUgPT09ICdzZWxlY3QtbXVsdGlwbGUnKSB7XHJcbiAgICByZXR1cm4gISFlbC52YWwoKS5sZW5ndGggJiYgZWwudmFsKClbMF0gIT09ICd1bnNlbGVjdGFibGUnO1xyXG4gIH0gZWxzZSBpZiAoZWxbMF0udHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAoZWxbMF0udHlwZSA9PT0gJ2NoZWNrYm94Jykge1xyXG4gICAgcmV0dXJuICEhZWwuZmlsdGVyKCc6Y2hlY2tlZCcpLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHJldHVybiAhIWVsLnZhbCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kRW1wdHkgKGdyb3VwSW5kZXgsIGdyb3VwKSB7XHJcbiAgdmFyIGdyb3VwRWxlbWVudHMsIGRlZmF1bHRzID0gdGhpcy5fZGVmYXVsdHM7XHJcblxyXG4gIHJldHVybiBncm91cEVsZW1lbnRzID0gZGVmYXVsdHMubmFtZXMuZmlsdGVyKChlbCkgPT4ge1xyXG4gICAgdmFyIGN1cnJlbnRFbCA9IHRoaXMuZWxlbWVudHNbZWxdO1xyXG5cclxuICAgIGlmIChkZWZhdWx0cy5ydWxlc1tlbF0uZ3JvdXAgPT09IGdyb3VwSW5kZXggJiYgIWN1cnJlbnRFbC5oYXNDbGFzcygnZXYtdmFsaWQtaXRlbScpICYmICFkZWZhdWx0cy5ncm91cHNbZ3JvdXBJbmRleF0ubWFya2VkW2VsXSkge1xyXG4gICAgICBkZWZhdWx0cy5ncm91cHNbZ3JvdXBJbmRleF0ubWFya2VkW2VsXSA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gaXNDaGFuZ2VkKGN1cnJlbnRFbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0ZpZWxkIChmaWVsZCwgcnVsZXMpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkYXRpb25Qcm9wcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgbGV0IHAgPSB2YWxpZGF0aW9uUHJvcHNbaV0sXHJcbiAgICAgIHJlc3VsdDtcclxuXHJcbiAgICBpZiAoIWZpZWxkLmlzKCc6ZGlzYWJsZWQnKSkge1xyXG4gICAgICBpZiAodmFsaWRhdG9yW3BdICYmIHR5cGVvZiBydWxlc1twXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXN1bHQgPSB2YWxpZGF0b3JbcF0oZmllbGQsIHJ1bGVzW3BdLCBydWxlcy5vcHRpb25zIHx8IHt9KTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge3ZhbHVlOiB0cnVlfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tHcm91cCAoZ3JvdXBJbmRleCwgZ3JvdXAsIGdyb3VwRWxlbWVudHMsIGNoZWNrRW1wdHkpIHtcclxuICB2YXIgbWVzc2FnZSwgcmVzdWx0cyA9IHt9LCBkZWZhdWx0cyA9IHRoaXMuX2RlZmF1bHRzO1xyXG5cclxuICBpZiAoZGVmYXVsdHMuc3RvcE9uSW52YWxpZCAmJiB0aGlzLmlzU3RvcHBlZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFncm91cEVsZW1lbnRzKSB7XHJcbiAgICBncm91cEVsZW1lbnRzID0gdGhpcy5fZGVmYXVsdHMubmFtZXMuZmlsdGVyKChlbCkgPT4ge1xyXG4gICAgICByZXR1cm4gZGVmYXVsdHMucnVsZXNbZWxdLmdyb3VwID09PSBncm91cEluZGV4O1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIGdyb3VwRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgIHZhciBydWxlcyA9IGRlZmF1bHRzLnJ1bGVzW2VsXSxcclxuICAgICAgcmVzdWx0ID0gY2hlY2tGaWVsZC5jYWxsKHRoaXMsIHRoaXMuZWxlbWVudHNbZWxdLCBydWxlcyk7XHJcblxyXG4gICAgcmVzdWx0c1tlbF0gPSByZXN1bHQ7XHJcblxyXG4gICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICBncm91cC5jb3VudFZhbGlkICs9IDE7XHJcbiAgICAgIHRoaXMuZWxlbWVudHNbZWxdLmRhdGEoJ2V2LXBvc3NpYmx5LXZhbGlkJywgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVsZW1lbnRzW2VsXS5kYXRhKCdldi1wb3NzaWJseS1lcnJvcicsIHRydWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBncm91cC5jaGVja2VkID0gdHJ1ZTtcclxuXHJcbiAgaWYgKGdyb3VwLmNvdW50VmFsaWQgPj0gZ3JvdXAucmVxdWlyZWRGaWVsZHMgJiYgIWNoZWNrRW1wdHkpIHtcclxuICAgIGdyb3VwLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICBcclxuICAgIGdyb3VwRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZWxlbWVudHNbZWxdLmRhdGEoJ2V2LXBvc3NpYmx5LXZhbGlkJykpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzW2VsXS5hZGRDbGFzcygnZXYtdmFsaWQtaXRlbScpO1xyXG4gICAgICAgIGRlZmF1bHRzLm9uU2V0VmFsaWQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMuZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGdyb3VwRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1tlbF0uZGF0YSgnZXYtcG9zc2libHktZXJyb3InKSkge1xyXG4gICAgICAgICAgdGhpcy5pc0Zvcm1WYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5lbGVtZW50c1tlbF0uYWRkQ2xhc3MoJ2V2LWludmFsaWQtaXRlbScpO1xyXG5cclxuICAgICAgICAgIG1lc3NhZ2UgPSBkZWZhdWx0cy5tZXNzYWdlc1tlbF0gJiYgZGVmYXVsdHMubWVzc2FnZXNbZWxdW3Jlc3VsdHNbZWxdLnBhcmFtZXRlcl07XHJcblxyXG4gICAgICAgICAgaWYgKG1lc3NhZ2UgJiYgZGVmYXVsdHMuc2hvd05vdGljZSkge1xyXG4gICAgICAgICAgICBzaG93Tm90aWNlKGBub3RpY2UtJHtNYXRoLnJhbmRvbSgpfS0ke25vdGljZUlEfWAsICcnLCB0aGlzLmVsZW1lbnRzW2VsXSwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIG5vdGljZUlEICs9IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZGVmYXVsdHMub25TZXRJbnZhbGlkKCk7XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGlzLmZpcnN0SW52YWxpZEZpZWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RJbnZhbGlkRmllbGQgPSB0aGlzLmVsZW1lbnRzW2VsXTtcclxuICAgICAgICAgICAgdGhpcy5maXJzdEludmFsaWRGaWVsZC5hZGRDbGFzcygnZXYtaW52YWxpZC1pdGVtLS1maXJzdCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGRlZmF1bHRzLnNjcm9sbFRvSW52YWxpZCkge1xyXG4gICAgICAgICAgICAgIGVjbGlwc2UuRE9NLnNjcm9sbFBhZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0SW52YWxpZEZpZWxkLmNsb3Nlc3QoJy5ldi1ub3RpY2UtcGFyZW50JyksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0cy5zY3JvbGxDb3JyZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdHMuc2Nyb2xsT3B0aW9uc1xyXG4gICAgICAgICAgICAgICkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdHMuc2V0Rm9jdXMpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdEludmFsaWRGaWVsZC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdHMuYWZ0ZXJTY3JvbGwoKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGRlZmF1bHRzLnNldEZvY3VzKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5maXJzdEludmFsaWRGaWVsZC5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGRlZmF1bHRzLnN0b3BPbkludmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZWxlbWVudHNbZWxdLmFkZENsYXNzKCdldi12YWxpZC1pdGVtJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBkZWZhdWx0cy5vblN0b3BPbkludmFsaWQoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRWxlbWVudHMgKCkge1xyXG4gIHRyeSB7XHJcbiAgICB0aGlzLl9kZWZhdWx0cy5uYW1lcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICB2YXIgZGVmYXVsdHMgPSB0aGlzLl9kZWZhdWx0cyxcclxuICAgICAgICBydWxlcyA9IGRlZmF1bHRzLnJ1bGVzW2VsXSxcclxuICAgICAgICByZXN1bHQsIHNob3VsZENoZWNrID0gdHJ1ZSxcclxuICAgICAgICBncm91cCwgZ3JvdXBFbGVtZW50cywgbWVzc2FnZTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgcnVsZXMuZ3JvdXAgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgZ3JvdXAgPSBkZWZhdWx0cy5ncm91cHNbcnVsZXMuZ3JvdXBdO1xyXG5cclxuICAgICAgICBpZiAoIWdyb3VwLmlzVmFsaWQgJiYgIWdyb3VwLmNoZWNrZWQpIHtcclxuICAgICAgICAgIGNoZWNrR3JvdXAuY2FsbCh0aGlzLCBydWxlcy5ncm91cCwgZ3JvdXApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ3JvdXAuaXNWYWxpZCkge1xyXG4gICAgICAgICAgZ3JvdXBFbGVtZW50cyA9IGZpbmRFbXB0eS5jYWxsKHRoaXMsIHJ1bGVzLmdyb3VwLCBncm91cCk7XHJcblxyXG4gICAgICAgICAgaWYgKGdyb3VwRWxlbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNoZWNrR3JvdXAuY2FsbCh0aGlzLCBydWxlcy5ncm91cCwgZ3JvdXAsIGdyb3VwRWxlbWVudHMsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAocnVsZXMuY2hlY2tJZkNoYW5nZWQpIHtcclxuICAgICAgICAgIGlmICghaXNDaGFuZ2VkKHRoaXMuZWxlbWVudHNbZWxdKSkge1xyXG4gICAgICAgICAgICBzaG91bGRDaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQgPSBjaGVja0ZpZWxkLmNhbGwodGhpcywgdGhpcy5lbGVtZW50c1tlbF0sIHJ1bGVzKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXN1bHQudmFsdWUgJiYgc2hvdWxkQ2hlY2spIHtcclxuICAgICAgICAgIHRoaXMuaXNGb3JtVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICBpZiAoZGVmYXVsdHMuc3RvcE9uSW52YWxpZCAmJiB0aGlzLmlzU3RvcHBlZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHRoaXMuZWxlbWVudHNbZWxdLmFkZENsYXNzKCdldi1pbnZhbGlkLWl0ZW0nKTtcclxuXHJcbiAgICAgICAgICBtZXNzYWdlID0gZGVmYXVsdHMubWVzc2FnZXNbZWxdICYmIGRlZmF1bHRzLm1lc3NhZ2VzW2VsXVtyZXN1bHQucGFyYW1ldGVyXTtcclxuXHJcbiAgICAgICAgICBpZiAobWVzc2FnZSAmJiBkZWZhdWx0cy5zaG93Tm90aWNlKSB7XHJcbiAgICAgICAgICAgIHNob3dOb3RpY2UoYG5vdGljZS0ke01hdGgucmFuZG9tKCl9LSR7bm90aWNlSUR9YCwgJycsIHRoaXMuZWxlbWVudHNbZWxdLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgbm90aWNlSUQgKz0gMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkZWZhdWx0cy5vblNldEludmFsaWQoKTtcclxuXHJcbiAgICAgICAgICBpZiAoIXRoaXMuZmlyc3RJbnZhbGlkRmllbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdEludmFsaWRGaWVsZCA9IHRoaXMuZWxlbWVudHNbZWxdO1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0SW52YWxpZEZpZWxkLmFkZENsYXNzKCdldi1pbnZhbGlkLWl0ZW0tLWZpcnN0Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGVmYXVsdHMuc2Nyb2xsVG9JbnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgZWNsaXBzZS5ET00uc2Nyb2xsUGFnZShcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RJbnZhbGlkRmllbGQuY2xvc2VzdCgnLmV2LW5vdGljZS1wYXJlbnQnKSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRzLnNjcm9sbENvcnJlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0cy5zY3JvbGxPcHRpb25zXHJcbiAgICAgICAgICAgICAgKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0cy5zZXRGb2N1cykge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0SW52YWxpZEZpZWxkLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0cy5hZnRlclNjcm9sbCgpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChkZWZhdWx0cy5zZXRGb2N1cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdEludmFsaWRGaWVsZC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoZGVmYXVsdHMuc3RvcE9uSW52YWxpZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZWxlbWVudHNbZWxdLmFkZENsYXNzKCdldi12YWxpZC1pdGVtJyk7XHJcbiAgICAgICAgICBkZWZhdWx0cy5vblNldFZhbGlkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGRlZmF1bHRzLm9uU3RvcE9uSW52YWxpZCgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRHcm91cHMgKCkge1xyXG4gIHRoaXMuX2RlZmF1bHRzLmdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xyXG4gICAgZ3JvdXAuaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgZ3JvdXAuY291bnRWYWxpZCA9IDA7XHJcbiAgICBncm91cC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICBncm91cC5tYXJrZWQgPSB7fTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoZm9ybSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbiAgICBkZWZhdWx0cy5ydWxlcyA9IHt9O1xyXG4gICAgZGVmYXVsdHMubmFtZXMgPSBbXTtcclxuICAgIGRlZmF1bHRzLmdyb3VwcyA9IFtdO1xyXG4gICAgZGVmYXVsdHMubWVzc2FnZXMgPSB7fTtcclxuICAgIGRlZmF1bHRzLnNjcm9sbFRvSW52YWxpZCA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5zY3JvbGxDb3JyZWN0aW9uID0gMDtcclxuICAgIGRlZmF1bHRzLnNjcm9sbE9wdGlvbnMgPSB7fTtcclxuICAgIGRlZmF1bHRzLnNob3dOb3RpY2UgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuc3RvcE9uSW52YWxpZCA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5zZXRGb2N1cyA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5vblNldFZhbGlkID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMub25TZXRJbnZhbGlkID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMuYWZ0ZXJTY3JvbGwgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5vblN0b3BPbkludmFsaWQgPSAkLm5vb3A7XHJcblxyXG4gICAgaWYgKGVjbGlwc2UuaGVscGVycy5nZXRDbGFzcyhvcHRpb25zKSA9PT0gJ09iamVjdCcpIHtcclxuICAgICAgJC5leHRlbmQodHJ1ZSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcclxuICAgIHRoaXMuZm9ybSA9IGZvcm07XHJcbiAgICB0aGlzLmZpcnN0SW52YWxpZEZpZWxkID0gbnVsbDtcclxuICAgIHRoaXMuaXNGb3JtVmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2RlZmF1bHRzJywge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGluaXRFbGVtZW50cy5jYWxsKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuZm9ybS5hdHRyKCdub3ZhbGlkYXRlJywgJ25vdmFsaWRhdGUnKTtcclxuXHJcbiAgICBpbnN0YW5jZXMucHVzaCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKGUpIHtcclxuICAgIHRoaXMuZSA9IGU7XHJcbiAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0Zvcm1WYWxpZCA9IHRydWU7XHJcblxyXG4gICAgaGlkZUFsbE5vdGljZXMoKTtcclxuICAgICAgXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmVsZW1lbnRzKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICB0aGlzLmVsZW1lbnRzW2VsXS5yZW1vdmVDbGFzcygnZXYtaW52YWxpZC1pdGVtIGV2LXZhbGlkLWl0ZW0nKS5kYXRhKCdldi1wb3NzaWJseS1lcnJvcicsICcnKS5kYXRhKCdldi1wb3NzaWJseS12YWxpZCcsICcnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZmlyc3RJbnZhbGlkRmllbGQgPSBudWxsO1xyXG5cclxuICAgIGlmICh0aGlzLl9kZWZhdWx0cy5ncm91cHMubGVuZ3RoKSB7XHJcbiAgICAgIHJlc2V0R3JvdXBzLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tFbGVtZW50cy5jYWxsKHRoaXMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmlzRm9ybVZhbGlkO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRlbGVnYXRlU3VibWl0KGUpIHtcclxuICAgIHZhciBpbnN0YW5jZSA9IFZhbGlkYXRpb24uZmluZEluc3RhbmNlKGUpO1xyXG5cclxuICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm4gaW5zdGFuY2UudmFsaWRhdGUoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRpYyBmaW5kSW5zdGFuY2UoZSkge1xyXG4gICAgdmFyIGN1cnJlbnRGb3JtID0gJChlLnRhcmdldCkuY2xvc2VzdCgnW2RhdGEtZXYtZnJvbV0nKTtcclxuXHJcbiAgICBpZiAoIWN1cnJlbnRGb3JtLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFZhbGlkYXRpb24uaW5zdGFuY2VzKCkuZmlsdGVyKChpbnN0YW5jZSkgPT4ge1xyXG4gICAgICByZXR1cm4gaW5zdGFuY2UuZm9ybS5hdHRyKCdpZCcpID09PSBjdXJyZW50Rm9ybS5hdHRyKCdpZCcpO1xyXG4gICAgfSlbMF07XHJcbiAgfVxyXG4gIHN0YXRpYyBpbnN0YW5jZXMoKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2VzO1xyXG4gIH1cclxuICBzdGF0aWMgZXh0ZW5kVmFsaWRhdGlvblByb3BzKG5ld1Byb3BzKSB7XHJcbiAgICBuZXdQcm9wcy5mb3JFYWNoKChwcm9wZXJ0eU9iaikgPT4ge1xyXG4gICAgICBpZiAoIWVjbGlwc2UuaGVscGVycy5pbkFycmF5KHZhbGlkYXRpb25Qcm9wcywgcHJvcGVydHlPYmoubmFtZSkgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWxpZGF0b3IsIHByb3BlcnR5T2JqLm5hbWUpKSB7XHJcbiAgICAgICAgdmFsaWRhdGlvblByb3BzLnB1c2gocHJvcGVydHlPYmoubmFtZSk7XHJcbiAgICAgICAgdmFsaWRhdG9yW3Byb3BlcnR5T2JqLm5hbWVdID0gcHJvcGVydHlPYmoudmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3ZhbGlkYXRlLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGVjbGlwc2UgZnJvbSAnZWNsaXBzZSc7XHJcblxyXG5pbXBvcnQgVmFsaWRhdGlvbiBmcm9tICcuL2xpYi92YWxpZGF0ZSc7XHJcbmltcG9ydCAqIGFzIG5vdGljZSBmcm9tICcuL2xpYi9ub3RpY2UnO1xyXG5cclxuZWNsaXBzZS51dGlscy5uYW1lc3BhY2UoJ2Zvcm1zJyk7XHJcbmVjbGlwc2UudXRpbHMubmFtZXNwYWNlKCdmb3Jtcy5ub3RpY2UnKTtcclxuXHJcbmVjbGlwc2UuZm9ybXMuVmFsaWRhdGlvbiA9IFZhbGlkYXRpb247XHJcbmVjbGlwc2UuZm9ybXMubm90aWNlID0gbm90aWNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZWNsaXBzZS12YWxpZGF0aW9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIixcInVtZFwiOlwianF1ZXJ5XCIsXCJyb290XCI6XCJqUXVlcnlcIn1cbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7QUNoRUE7QUFDQTs7OztBQUNBO0FBSUE7QUFJQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3JCQTs7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUFhQTtBQUlBO0FBQ0E7QUFqQkE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUF4SkE7QUFDQTtBQTBKQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQTNGQTs7Ozs7OztBQ25hQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDWEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==