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

var _jquery = __webpack_require__(4);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hideAllNotices() {
  (0, _jquery2.default)('.ev-notice').remove();
};

function hideNotice(notice) {
  notice.remove();
};

function showNotice(id, className, target, text) {
  var notice = (0, _jquery2.default)('<div/>');

  if (target.length && !(0, _jquery2.default)('#' + id).length) {
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
      var currentForm = (0, _jquery2.default)(e.target).closest('[data-ev-form]');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNsaXBzZS12YWxpZGF0aW9uLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTM3NzVlZWI4ZDZjMWMyMzY3YTEiLCJ3ZWJwYWNrOi8vL2xpYi9ub3RpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJlY2xpcHNlXCIsXCJjb21tb25qczJcIjpcImVjbGlwc2VcIixcImFtZFwiOlwiZWNsaXBzZVwiLFwidW1kXCI6XCJlY2xpcHNlXCIsXCJyb290XCI6XCJlY2xpcHNlXCJ9Iiwid2VicGFjazovLy9saWIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vL2VjbGlwc2UtdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCIsXCJ1bWRcIjpcImpxdWVyeVwiLFwicm9vdFwiOlwialF1ZXJ5XCJ9Il0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImVjbGlwc2VcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiZWNsaXBzZVwiLCBcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiZWNsaXBzZVwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSkgOiBmYWN0b3J5KHJvb3RbXCJlY2xpcHNlXCJdLCByb290W1wialF1ZXJ5XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUzNzc1ZWViOGQ2YzFjMjM2N2ExIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlQWxsTm90aWNlcyAoKSB7XHJcbiAgJCgnLmV2LW5vdGljZScpLnJlbW92ZSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVOb3RpY2UgKG5vdGljZSkge1xyXG4gIG5vdGljZS5yZW1vdmUoKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93Tm90aWNlIChpZCwgY2xhc3NOYW1lLCB0YXJnZXQsIHRleHQpIHtcclxuICB2YXIgbm90aWNlID0gJCgnPGRpdi8+Jyk7XHJcblxyXG4gIGlmICh0YXJnZXQubGVuZ3RoICYmICEkKCcjJyArIGlkKS5sZW5ndGgpIHtcclxuICAgIG5vdGljZS5hdHRyKCdpZCcsIGlkKTtcclxuICAgIG5vdGljZS50ZXh0KHRleHQpLmFkZENsYXNzKCdldi1ub3RpY2UgJyArIGNsYXNzTmFtZSkuYXBwZW5kVG8odGFyZ2V0LmNsb3Nlc3QoJy5ldi1ub3RpY2UtcGFyZW50JykpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBub3RpY2UuYWRkQ2xhc3MoJ2V2LW5vdGljZS0tYWN0aXZlJyk7XHJcbiAgICB9LCA0KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvbm90aWNlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZWNsaXBzZVwiLFwiY29tbW9uanMyXCI6XCJlY2xpcHNlXCIsXCJhbWRcIjpcImVjbGlwc2VcIixcInVtZFwiOlwiZWNsaXBzZVwiLFwicm9vdFwiOlwiZWNsaXBzZVwifVxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7aGlkZUFsbE5vdGljZXMsIHNob3dOb3RpY2V9IGZyb20gJy4vbm90aWNlJztcclxuXHJcbmltcG9ydCBlY2xpcHNlIGZyb20gJ2VjbGlwc2UnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuY29uc3QgRU1BSUxfUkVHRVhQID0gJ14oPz0uezEsMjU0fSQpKD89LnsxLDY0fUApWy0hIyQlJlxcJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKFxcLlstISMkJSZcXCcqKy8wLTk9P0EtWl5fYGEtent8fX5dKykqQFtBLVphLXowLTldKFtBLVphLXowLTktXXswLDYxfVtBLVphLXowLTldKT8oXFwuW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPykqJCc7XHJcblxyXG52YXIgdmFsaWRhdGlvblByb3BzID0gWydtaW5MZW5ndGgnLCAnbWF4TGVuZ3RoJywgJ3BhdHRlcm4nLCAnY2hlY2tlZCcsICdzZWxlY3RlZCcsICdlcXVhbFRvJ10sXHJcbiAgaW5zdGFuY2VzID0gW10sXHJcbiAgbm90aWNlSUQgPSAwLFxyXG4gIHZhbGlkYXRvcjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BhdHRlcm4gKHBhdHRlcm4sIHN0ciwgaWdub3JlRmxhZykge1xyXG4gIHJldHVybiAoc3RyLmxlbmd0aCAmJiBwYXR0ZXJuLmxlbmd0aCkgPyBuZXcgUmVnRXhwKHBhdHRlcm4sICdnJyArIChpZ25vcmVGbGFnID8gJ2knIDogJycpKS50ZXN0KHN0cikgOiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFbWFpbCAoc3RyKSB7XHJcbiAgcmV0dXJuIGlzUGF0dGVybihFTUFJTF9SRUdFWFAsIHN0ci50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxudmFsaWRhdG9yID0ge1xyXG4gIG1pbkxlbmd0aDogZnVuY3Rpb24gKGZpZWxkLCBsZW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiBmaWVsZC52YWwoKS5sZW5ndGggPj0gbGVuLFxyXG4gICAgICBwYXJhbWV0ZXI6ICdtaW5MZW5ndGgnXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWF4TGVuZ3RoOiBmdW5jdGlvbiAoZmllbGQsIGxlbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IGZpZWxkLnZhbCgpLmxlbmd0aCA8PSBsZW4sXHJcbiAgICAgIHBhcmFtZXRlcjogJ21heExlbmd0aCdcclxuICAgIH07XHJcbiAgfSxcclxuICBwYXR0ZXJuOiBmdW5jdGlvbiAoZmllbGQsIHBhdHRlcm4sIG9wdGlvbnMpIHtcclxuICAgIGlmICh0aGlzW3BhdHRlcm5dKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWU6IHRoaXNbcGF0dGVybl0oZmllbGQpLFxyXG4gICAgICAgIHBhcmFtZXRlcjogJ3BhdHRlcm4nXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IGlzUGF0dGVybihwYXR0ZXJuLCBmaWVsZC52YWwoKSwgb3B0aW9ucy5pZ25vcmVGbGFnKSxcclxuICAgICAgcGFyYW1ldGVyOiAncGF0dGVybidcclxuICAgIH07XHJcbiAgfSxcclxuICBlcXVhbFRvOiBmdW5jdGlvbiAoZmllbGQsIHZhbCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IGZpZWxkLnZhbCgpID09PSAkKHZhbCkudmFsKCksXHJcbiAgICAgIHBhcmFtZXRlcjogJ2VxdWFsVG8nXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgc3RyaW5nOiBmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgIHJldHVybiBmaWVsZC52YWwoKS5sZW5ndGg7XHJcbiAgfSxcclxuICBlbWFpbDogZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICByZXR1cm4gaXNFbWFpbChmaWVsZC52YWwoKSk7XHJcbiAgfSxcclxuICBudW1iZXI6IGZ1bmN0aW9uIChmaWVsZCkge1xyXG4gICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KGZpZWxkLnZhbCgpKSkgJiYgaXNGaW5pdGUocGFyc2VGbG9hdChmaWVsZC52YWwoKSkpO1xyXG4gIH0sXHJcbiAgY2hlY2tlZDogZnVuY3Rpb24gKGZpZWxkLCB2YWwsIG9wdGlvbnMpIHtcclxuICAgIHZhciBjb3VudGVyID0gMCxcclxuICAgICAgdHlwZSA9IGZpZWxkWzBdLnR5cGU7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB2YWx1ZTogZmllbGQuZmlsdGVyKCc6Y2hlY2tlZCcpLmxlbmd0aCA9PT0gMSxcclxuICAgICAgICBwYXJhbWV0ZXI6ICdjaGVja2VkJ1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZpZWxkLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykgPT09IHZhbCkge1xyXG4gICAgICAgIGNvdW50ZXIgKz0gMTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuY2hlY2tlZExlbmd0aCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHZhbHVlOiBjb3VudGVyID09PSBvcHRpb25zLmNoZWNrZWRMZW5ndGgsXHJcbiAgICAgICAgcGFyYW1ldGVyOiAnY2hlY2tlZExlbmd0aCdcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5taW5DaGVja2VkTGVuZ3RoKSB7XHJcbiAgICAgIGlmIChjb3VudGVyIDwgb3B0aW9ucy5taW5DaGVja2VkTGVuZ3RoIHx8ICFjb3VudGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICAgIHBhcmFtZXRlcjogJ21pbkNoZWNrZWRMZW5ndGgnXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLm1heENoZWNrZWRMZW5ndGgpIHtcclxuICAgICAgaWYgKGNvdW50ZXIgPiBvcHRpb25zLm1heENoZWNrZWRMZW5ndGggfHwgIWNvdW50ZXIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgICAgcGFyYW1ldGVyOiAnbWF4Q2hlY2tlZExlbmd0aCdcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMubWluQ2hlY2tlZExlbmd0aCAmJiBvcHRpb25zLm1heENoZWNrZWRMZW5ndGgpIHtcclxuICAgICAgaWYgKGNvdW50ZXIgPCBvcHRpb25zLm1pbkNoZWNrZWRMZW5ndGggfHwgY291bnRlciA+IG9wdGlvbnMubWF4Q2hlY2tlZExlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgICBwYXJhbWV0ZXI6ICdyYW5nZUNoZWNrZWRMZW5ndGgnXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiBjb3VudGVyID4gMCxcclxuICAgICAgcGFyYW1ldGVyOiAnY2hlY2tlZCdcclxuICAgIH07XHJcbiAgfSxcclxuICBzZWxlY3RlZDogZnVuY3Rpb24gKGZpZWxkLCB2YWwsIG9wdGlvbnMpIHtcclxuICAgIHZhciBjb3VudGVyID0gMCxcclxuICAgICAgdHlwZSA9IGZpZWxkWzBdLnR5cGU7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdzZWxlY3Qtb25lJykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHZhbHVlOiAhIWZpZWxkLnZhbCgpICYmIGZpZWxkLnZhbCgpICE9PSAndW5zZWxlY3RhYmxlJyxcclxuICAgICAgICBwYXJhbWV0ZXI6ICdzZWxlY3RlZCdcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmaWVsZC5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQodGhpcykucHJvcCgnc2VsZWN0ZWQnKSAmJiAhJCh0aGlzKS5wcm9wKCdkaXNhYmxlZCcpICYmICQodGhpcykudmFsKCkgIT09ICd1bnNlbGVjdGFibGUnKSB7XHJcbiAgICAgICAgY291bnRlciArPSAxO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5zZWxlY3RlZExlbmd0aCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHZhbHVlOiBjb3VudGVyID09PSBvcHRpb25zLnNlbGVjdGVkTGVuZ3RoLFxyXG4gICAgICAgIHBhcmFtZXRlcjogJ3NlbGVjdGVkTGVuZ3RoJ1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLm1pblNlbGVjdGVkTGVuZ3RoKSB7XHJcbiAgICAgIGlmIChjb3VudGVyIDwgb3B0aW9ucy5taW5TZWxlY3RlZExlbmd0aCB8fCAhY291bnRlcikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgICBwYXJhbWV0ZXI6ICdtaW5TZWxlY3RlZExlbmd0aCdcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMubWF4U2VsZWN0ZWRMZW5ndGgpIHtcclxuICAgICAgaWYgKGNvdW50ZXIgPiBvcHRpb25zLm1heFNlbGVjdGVkTGVuZ3RoIHx8ICFjb3VudGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICAgIHBhcmFtZXRlcjogJ21heFNlbGVjdGVkTGVuZ3RoJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5taW5TZWxlY3RlZExlbmd0aCAmJiBvcHRpb25zLm1heFNlbGVjdGVkTGVuZ3RoKSB7XHJcbiAgICAgIGlmIChjb3VudGVyIDwgb3B0aW9ucy5taW5TZWxlY3RlZExlbmd0aCB8fCBjb3VudGVyID4gb3B0aW9ucy5tYXhTZWxlY3RlZExlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgICBwYXJhbWV0ZXI6ICdyYW5nZVNlbGVjdGVkTGVuZ3RoJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogY291bnRlciA+IDAsXHJcbiAgICAgIHBhcmFtZXRlcjogJ3NlbGVjdGVkJ1xyXG4gICAgfTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0RWxlbWVudHMgKCkge1xyXG4gIHRoaXMuX2RlZmF1bHRzLm5hbWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIHRoaXMuZWxlbWVudHNbaXRlbV0gPSB0aGlzLmZvcm0uZmluZChgW25hbWU9XCIke2l0ZW19XCJdYCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQ2hhbmdlZCAoZWwpIHtcclxuICBpZiAoZWxbMF0udHlwZSA9PT0gJ3NlbGVjdC1vbmUnKSB7XHJcbiAgICByZXR1cm4gISFlbC52YWwoKSAmJiBlbC52YWwoKSAhPT0gJ3Vuc2VsZWN0YWJsZSc7XHJcbiAgfSBlbHNlIGlmIChlbFswXS50eXBlID09PSAnc2VsZWN0LW11bHRpcGxlJykge1xyXG4gICAgcmV0dXJuICEhZWwudmFsKCkubGVuZ3RoICYmIGVsLnZhbCgpWzBdICE9PSAndW5zZWxlY3RhYmxlJztcclxuICB9IGVsc2UgaWYgKGVsWzBdLnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2UgaWYgKGVsWzBdLnR5cGUgPT09ICdjaGVja2JveCcpIHtcclxuICAgIHJldHVybiAhIWVsLmZpbHRlcignOmNoZWNrZWQnKS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gISFlbC52YWwoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZEVtcHR5IChncm91cEluZGV4LCBncm91cCkge1xyXG4gIHZhciBncm91cEVsZW1lbnRzLCBkZWZhdWx0cyA9IHRoaXMuX2RlZmF1bHRzO1xyXG5cclxuICByZXR1cm4gZ3JvdXBFbGVtZW50cyA9IGRlZmF1bHRzLm5hbWVzLmZpbHRlcigoZWwpID0+IHtcclxuICAgIHZhciBjdXJyZW50RWwgPSB0aGlzLmVsZW1lbnRzW2VsXTtcclxuXHJcbiAgICBpZiAoZGVmYXVsdHMucnVsZXNbZWxdLmdyb3VwID09PSBncm91cEluZGV4ICYmICFjdXJyZW50RWwuaGFzQ2xhc3MoJ2V2LXZhbGlkLWl0ZW0nKSAmJiAhZGVmYXVsdHMuZ3JvdXBzW2dyb3VwSW5kZXhdLm1hcmtlZFtlbF0pIHtcclxuICAgICAgZGVmYXVsdHMuZ3JvdXBzW2dyb3VwSW5kZXhdLm1hcmtlZFtlbF0gPSB0cnVlO1xyXG5cclxuICAgICAgcmV0dXJuIGlzQ2hhbmdlZChjdXJyZW50RWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tGaWVsZCAoZmllbGQsIHJ1bGVzKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxpZGF0aW9uUHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGxldCBwID0gdmFsaWRhdGlvblByb3BzW2ldLFxyXG4gICAgICByZXN1bHQ7XHJcblxyXG4gICAgaWYgKCFmaWVsZC5pcygnOmRpc2FibGVkJykpIHtcclxuICAgICAgaWYgKHZhbGlkYXRvcltwXSAmJiB0eXBlb2YgcnVsZXNbcF0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gdmFsaWRhdG9yW3BdKGZpZWxkLCBydWxlc1twXSwgcnVsZXMub3B0aW9ucyB8fCB7fSk7XHJcblxyXG4gICAgICAgIGlmICghcmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHt2YWx1ZTogdHJ1ZX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrR3JvdXAgKGdyb3VwSW5kZXgsIGdyb3VwLCBncm91cEVsZW1lbnRzLCBjaGVja0VtcHR5KSB7XHJcbiAgdmFyIG1lc3NhZ2UsIHJlc3VsdHMgPSB7fSwgZGVmYXVsdHMgPSB0aGlzLl9kZWZhdWx0cztcclxuXHJcbiAgaWYgKGRlZmF1bHRzLnN0b3BPbkludmFsaWQgJiYgdGhpcy5pc1N0b3BwZWQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmICghZ3JvdXBFbGVtZW50cykge1xyXG4gICAgZ3JvdXBFbGVtZW50cyA9IHRoaXMuX2RlZmF1bHRzLm5hbWVzLmZpbHRlcigoZWwpID0+IHtcclxuICAgICAgcmV0dXJuIGRlZmF1bHRzLnJ1bGVzW2VsXS5ncm91cCA9PT0gZ3JvdXBJbmRleDtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBncm91cEVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICB2YXIgcnVsZXMgPSBkZWZhdWx0cy5ydWxlc1tlbF0sXHJcbiAgICAgIHJlc3VsdCA9IGNoZWNrRmllbGQuY2FsbCh0aGlzLCB0aGlzLmVsZW1lbnRzW2VsXSwgcnVsZXMpO1xyXG5cclxuICAgIHJlc3VsdHNbZWxdID0gcmVzdWx0O1xyXG5cclxuICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgZ3JvdXAuY291bnRWYWxpZCArPSAxO1xyXG4gICAgICB0aGlzLmVsZW1lbnRzW2VsXS5kYXRhKCdldi1wb3NzaWJseS12YWxpZCcsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbGVtZW50c1tlbF0uZGF0YSgnZXYtcG9zc2libHktZXJyb3InLCB0cnVlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZ3JvdXAuY2hlY2tlZCA9IHRydWU7XHJcblxyXG4gIGlmIChncm91cC5jb3VudFZhbGlkID49IGdyb3VwLnJlcXVpcmVkRmllbGRzICYmICFjaGVja0VtcHR5KSB7XHJcbiAgICBncm91cC5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgXHJcbiAgICBncm91cEVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2VsXS5kYXRhKCdldi1wb3NzaWJseS12YWxpZCcpKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50c1tlbF0uYWRkQ2xhc3MoJ2V2LXZhbGlkLWl0ZW0nKTtcclxuICAgICAgICBkZWZhdWx0cy5vblNldFZhbGlkKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLmUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBncm91cEVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNbZWxdLmRhdGEoJ2V2LXBvc3NpYmx5LWVycm9yJykpIHtcclxuICAgICAgICAgIHRoaXMuaXNGb3JtVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuZWxlbWVudHNbZWxdLmFkZENsYXNzKCdldi1pbnZhbGlkLWl0ZW0nKTtcclxuXHJcbiAgICAgICAgICBtZXNzYWdlID0gZGVmYXVsdHMubWVzc2FnZXNbZWxdICYmIGRlZmF1bHRzLm1lc3NhZ2VzW2VsXVtyZXN1bHRzW2VsXS5wYXJhbWV0ZXJdO1xyXG5cclxuICAgICAgICAgIGlmIChtZXNzYWdlICYmIGRlZmF1bHRzLnNob3dOb3RpY2UpIHtcclxuICAgICAgICAgICAgc2hvd05vdGljZShgbm90aWNlLSR7TWF0aC5yYW5kb20oKX0tJHtub3RpY2VJRH1gLCAnJywgdGhpcy5lbGVtZW50c1tlbF0sIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBub3RpY2VJRCArPSAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGRlZmF1bHRzLm9uU2V0SW52YWxpZCgpO1xyXG5cclxuICAgICAgICAgIGlmICghdGhpcy5maXJzdEludmFsaWRGaWVsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0SW52YWxpZEZpZWxkID0gdGhpcy5lbGVtZW50c1tlbF07XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RJbnZhbGlkRmllbGQuYWRkQ2xhc3MoJ2V2LWludmFsaWQtaXRlbS0tZmlyc3QnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChkZWZhdWx0cy5zY3JvbGxUb0ludmFsaWQpIHtcclxuICAgICAgICAgICAgICBlY2xpcHNlLkRPTS5zY3JvbGxQYWdlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdEludmFsaWRGaWVsZC5jbG9zZXN0KCcuZXYtbm90aWNlLXBhcmVudCcpLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdHMuc2Nyb2xsQ29ycmVjdGlvbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRzLnNjcm9sbE9wdGlvbnNcclxuICAgICAgICAgICAgICApLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRzLnNldEZvY3VzKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RJbnZhbGlkRmllbGQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRzLmFmdGVyU2Nyb2xsKCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkZWZhdWx0cy5zZXRGb2N1cykge1xyXG4gICAgICAgICAgICAgIHRoaXMuZmlyc3RJbnZhbGlkRmllbGQuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChkZWZhdWx0cy5zdG9wT25JbnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2VsXS5hZGRDbGFzcygnZXYtdmFsaWQtaXRlbScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgZGVmYXVsdHMub25TdG9wT25JbnZhbGlkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0VsZW1lbnRzICgpIHtcclxuICB0cnkge1xyXG4gICAgdGhpcy5fZGVmYXVsdHMubmFtZXMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgdmFyIGRlZmF1bHRzID0gdGhpcy5fZGVmYXVsdHMsXHJcbiAgICAgICAgcnVsZXMgPSBkZWZhdWx0cy5ydWxlc1tlbF0sXHJcbiAgICAgICAgcmVzdWx0LCBzaG91bGRDaGVjayA9IHRydWUsXHJcbiAgICAgICAgZ3JvdXAsIGdyb3VwRWxlbWVudHMsIG1lc3NhZ2U7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHJ1bGVzLmdyb3VwICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGdyb3VwID0gZGVmYXVsdHMuZ3JvdXBzW3J1bGVzLmdyb3VwXTtcclxuXHJcbiAgICAgICAgaWYgKCFncm91cC5pc1ZhbGlkICYmICFncm91cC5jaGVja2VkKSB7XHJcbiAgICAgICAgICBjaGVja0dyb3VwLmNhbGwodGhpcywgcnVsZXMuZ3JvdXAsIGdyb3VwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGdyb3VwLmlzVmFsaWQpIHtcclxuICAgICAgICAgIGdyb3VwRWxlbWVudHMgPSBmaW5kRW1wdHkuY2FsbCh0aGlzLCBydWxlcy5ncm91cCwgZ3JvdXApO1xyXG5cclxuICAgICAgICAgIGlmIChncm91cEVsZW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjaGVja0dyb3VwLmNhbGwodGhpcywgcnVsZXMuZ3JvdXAsIGdyb3VwLCBncm91cEVsZW1lbnRzLCB0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHJ1bGVzLmNoZWNrSWZDaGFuZ2VkKSB7XHJcbiAgICAgICAgICBpZiAoIWlzQ2hhbmdlZCh0aGlzLmVsZW1lbnRzW2VsXSkpIHtcclxuICAgICAgICAgICAgc2hvdWxkQ2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0ID0gY2hlY2tGaWVsZC5jYWxsKHRoaXMsIHRoaXMuZWxlbWVudHNbZWxdLCBydWxlcyk7XHJcblxyXG4gICAgICAgIGlmICghcmVzdWx0LnZhbHVlICYmIHNob3VsZENoZWNrKSB7XHJcbiAgICAgICAgICB0aGlzLmlzRm9ybVZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgaWYgKGRlZmF1bHRzLnN0b3BPbkludmFsaWQgJiYgdGhpcy5pc1N0b3BwZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5lLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2VsXS5hZGRDbGFzcygnZXYtaW52YWxpZC1pdGVtJyk7XHJcblxyXG4gICAgICAgICAgbWVzc2FnZSA9IGRlZmF1bHRzLm1lc3NhZ2VzW2VsXSAmJiBkZWZhdWx0cy5tZXNzYWdlc1tlbF1bcmVzdWx0LnBhcmFtZXRlcl07XHJcblxyXG4gICAgICAgICAgaWYgKG1lc3NhZ2UgJiYgZGVmYXVsdHMuc2hvd05vdGljZSkge1xyXG4gICAgICAgICAgICBzaG93Tm90aWNlKGBub3RpY2UtJHtNYXRoLnJhbmRvbSgpfS0ke25vdGljZUlEfWAsICcnLCB0aGlzLmVsZW1lbnRzW2VsXSwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIG5vdGljZUlEICs9IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZGVmYXVsdHMub25TZXRJbnZhbGlkKCk7XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGlzLmZpcnN0SW52YWxpZEZpZWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RJbnZhbGlkRmllbGQgPSB0aGlzLmVsZW1lbnRzW2VsXTtcclxuICAgICAgICAgICAgdGhpcy5maXJzdEludmFsaWRGaWVsZC5hZGRDbGFzcygnZXYtaW52YWxpZC1pdGVtLS1maXJzdCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRlZmF1bHRzLnNjcm9sbFRvSW52YWxpZCkge1xyXG4gICAgICAgICAgICAgIGVjbGlwc2UuRE9NLnNjcm9sbFBhZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0SW52YWxpZEZpZWxkLmNsb3Nlc3QoJy5ldi1ub3RpY2UtcGFyZW50JyksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0cy5zY3JvbGxDb3JyZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdHMuc2Nyb2xsT3B0aW9uc1xyXG4gICAgICAgICAgICAgICkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdHMuc2V0Rm9jdXMpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdEludmFsaWRGaWVsZC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdHMuYWZ0ZXJTY3JvbGwoKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAoZGVmYXVsdHMuc2V0Rm9jdXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RJbnZhbGlkRmllbGQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKGRlZmF1bHRzLnN0b3BPbkludmFsaWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2VsXS5hZGRDbGFzcygnZXYtdmFsaWQtaXRlbScpO1xyXG4gICAgICAgICAgZGVmYXVsdHMub25TZXRWYWxpZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBkZWZhdWx0cy5vblN0b3BPbkludmFsaWQoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0R3JvdXBzICgpIHtcclxuICB0aGlzLl9kZWZhdWx0cy5ncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcclxuICAgIGdyb3VwLmlzVmFsaWQgPSBmYWxzZTtcclxuICAgIGdyb3VwLmNvdW50VmFsaWQgPSAwO1xyXG4gICAgZ3JvdXAuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgZ3JvdXAubWFya2VkID0ge307XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKGZvcm0sIG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG4gICAgZGVmYXVsdHMucnVsZXMgPSB7fTtcclxuICAgIGRlZmF1bHRzLm5hbWVzID0gW107XHJcbiAgICBkZWZhdWx0cy5ncm91cHMgPSBbXTtcclxuICAgIGRlZmF1bHRzLm1lc3NhZ2VzID0ge307XHJcbiAgICBkZWZhdWx0cy5zY3JvbGxUb0ludmFsaWQgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuc2Nyb2xsQ29ycmVjdGlvbiA9IDA7XHJcbiAgICBkZWZhdWx0cy5zY3JvbGxPcHRpb25zID0ge307XHJcbiAgICBkZWZhdWx0cy5zaG93Tm90aWNlID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLnN0b3BPbkludmFsaWQgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMuc2V0Rm9jdXMgPSB0cnVlO1xyXG4gICAgZGVmYXVsdHMub25TZXRWYWxpZCA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLm9uU2V0SW52YWxpZCA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLmFmdGVyU2Nyb2xsID0gJC5ub29wO1xyXG4gICAgZGVmYXVsdHMub25TdG9wT25JbnZhbGlkID0gJC5ub29wO1xyXG5cclxuICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3Mob3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnRzID0ge307XHJcbiAgICB0aGlzLmZvcm0gPSBmb3JtO1xyXG4gICAgdGhpcy5maXJzdEludmFsaWRGaWVsZCA9IG51bGw7XHJcbiAgICB0aGlzLmlzRm9ybVZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19kZWZhdWx0cycsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbml0RWxlbWVudHMuY2FsbCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmZvcm0uYXR0cignbm92YWxpZGF0ZScsICdub3ZhbGlkYXRlJyk7XHJcblxyXG4gICAgaW5zdGFuY2VzLnB1c2godGhpcyk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZShlKSB7XHJcbiAgICB0aGlzLmUgPSBlO1xyXG4gICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNGb3JtVmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIGhpZGVBbGxOb3RpY2VzKCk7XHJcbiAgICAgIFxyXG4gICAgT2JqZWN0LmtleXModGhpcy5lbGVtZW50cykuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgdGhpcy5lbGVtZW50c1tlbF0ucmVtb3ZlQ2xhc3MoJ2V2LWludmFsaWQtaXRlbSBldi12YWxpZC1pdGVtJykuZGF0YSgnZXYtcG9zc2libHktZXJyb3InLCAnJykuZGF0YSgnZXYtcG9zc2libHktdmFsaWQnLCAnJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmZpcnN0SW52YWxpZEZpZWxkID0gbnVsbDtcclxuXHJcbiAgICBpZiAodGhpcy5fZGVmYXVsdHMuZ3JvdXBzLmxlbmd0aCkge1xyXG4gICAgICByZXNldEdyb3Vwcy5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRWxlbWVudHMuY2FsbCh0aGlzKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5pc0Zvcm1WYWxpZDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWxlZ2F0ZVN1Ym1pdChlKSB7XHJcbiAgICB2YXIgaW5zdGFuY2UgPSBWYWxpZGF0aW9uLmZpbmRJbnN0YW5jZShlKTtcclxuXHJcbiAgICBpZiAoaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuIGluc3RhbmNlLnZhbGlkYXRlKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0aWMgZmluZEluc3RhbmNlKGUpIHtcclxuICAgIHZhciBjdXJyZW50Rm9ybSA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ1tkYXRhLWV2LWZvcm1dJyk7XHJcblxyXG4gICAgaWYgKCFjdXJyZW50Rm9ybS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBWYWxpZGF0aW9uLmluc3RhbmNlcygpLmZpbHRlcigoaW5zdGFuY2UpID0+IHtcclxuICAgICAgcmV0dXJuIGluc3RhbmNlLmZvcm0uYXR0cignaWQnKSA9PT0gY3VycmVudEZvcm0uYXR0cignaWQnKTtcclxuICAgIH0pWzBdO1xyXG4gIH1cclxuICBzdGF0aWMgaW5zdGFuY2VzKCkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlcztcclxuICB9XHJcbiAgc3RhdGljIGV4dGVuZFZhbGlkYXRpb25Qcm9wcyhuZXdQcm9wcykge1xyXG4gICAgbmV3UHJvcHMuZm9yRWFjaCgocHJvcGVydHlPYmopID0+IHtcclxuICAgICAgaWYgKCFlY2xpcHNlLmhlbHBlcnMuaW5BcnJheSh2YWxpZGF0aW9uUHJvcHMsIHByb3BlcnR5T2JqLm5hbWUpICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsaWRhdG9yLCBwcm9wZXJ0eU9iai5uYW1lKSkge1xyXG4gICAgICAgIHZhbGlkYXRpb25Qcm9wcy5wdXNoKHByb3BlcnR5T2JqLm5hbWUpO1xyXG4gICAgICAgIHZhbGlkYXRvcltwcm9wZXJ0eU9iai5uYW1lXSA9IHByb3BlcnR5T2JqLnZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi92YWxpZGF0ZS5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBlY2xpcHNlIGZyb20gJ2VjbGlwc2UnO1xyXG5cclxuaW1wb3J0IFZhbGlkYXRpb24gZnJvbSAnLi9saWIvdmFsaWRhdGUnO1xyXG5pbXBvcnQgKiBhcyBub3RpY2UgZnJvbSAnLi9saWIvbm90aWNlJztcclxuXHJcbmVjbGlwc2UudXRpbHMubmFtZXNwYWNlKCdmb3JtcycpO1xyXG5lY2xpcHNlLnV0aWxzLm5hbWVzcGFjZSgnZm9ybXMubm90aWNlJyk7XHJcblxyXG5lY2xpcHNlLmZvcm1zLlZhbGlkYXRpb24gPSBWYWxpZGF0aW9uO1xyXG5lY2xpcHNlLmZvcm1zLm5vdGljZSA9IG5vdGljZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGVjbGlwc2UtdmFsaWRhdGlvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCIsXCJ1bWRcIjpcImpxdWVyeVwiLFwicm9vdFwiOlwialF1ZXJ5XCJ9XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7O0FDaEVBO0FBQ0E7Ozs7QUFHQTtBQUlBO0FBSUE7QUFDQTtBQVhBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkJBOzs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQWFBO0FBSUE7QUFDQTtBQWpCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQXhKQTtBQUNBO0FBMEpBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBM0ZBOzs7Ozs7O0FDbmFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNYQTs7OztBIiwic291cmNlUm9vdCI6IiJ9