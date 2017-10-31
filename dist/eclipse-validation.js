(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("eclipse"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["eclipse", "jquery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("eclipse"), require("jquery")) : factory(root["eclipse"], root["jQuery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

var _jquery = __webpack_require__(2);

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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
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

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EMAIL_REGEXP = '^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&\'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&\'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$',
    NUMBER_REGEXP = '^\\d+$';

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
  hardNumber: function hardNumber(field) {
    return isPattern(NUMBER_REGEXP, field.val().toLowerCase());
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
      if ((0, _jquery2.default)(this).prop('checked') === val && (0, _jquery2.default)(this).val() !== 'unselectable') {
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
    _this.parents[item] = _this.elements[item].closest('.ev-field-parent');
  });
}

// Add checkbox unselectable
function isChanged(el) {
  if (el[0].type === 'select-one') {
    return !!el.val() && el.val() !== 'unselectable';
  } else if (el[0].type === 'select-multiple') {
    if (!el.val().length || el.val()[0] === 'unselectable' && el.val().length === 1) {
      return false;
    }

    return true;
    // return !!el.val().length && el.val()[0] !== 'unselectable';
  } else if (el[0].type === 'radio') {
    return true;
  } else if (el[0].type === 'checkbox') {
    return !!el.filter(':checked').length && el.filter(':checked').first().val() !== 'unselectable';
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
        _this3.parents[el].addClass('ev-valid-item');
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
          _this3.parents[el].addClass('ev-invalid-item');

          message = defaults.messages[el] && defaults.messages[el][results[el].parameter];

          if (message && defaults.showNotice) {
            (0, _notice.showNotice)('notice-' + Math.random() + '-' + noticeID, '', _this3.elements[el], message);
            noticeID += 1;
          }

          defaults.onSetInvalid();

          if (!_this3.firstInvalidField) {
            _this3.firstInvalidField = _this3.elements[el];
            _this3.firstInvalidField.addClass('ev-invalid-item--first').closest('.ev-field-parent').addClass('ev-invalid-item--first');

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
          _this3.parents[el].addClass('ev-valid-item');
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
        // Not required field
        if (rules.checkIfChanged) {
          if (!isChanged(_this4.elements[el])) {
            shouldCheck = false;
          }
        }
        result = checkField.call(_this4, _this4.elements[el], rules);

        _this4.elements[el].removeClass('ev-valid-item');
        _this4.parents[el].removeClass('ev-valid-item');

        if (!result.value && shouldCheck) {
          _this4.isFormValid = false;

          if (defaults.stopOnInvalid && _this4.isStopped) {
            throw new Error();
          }

          _this4.e.preventDefault();
          _this4.elements[el].addClass('ev-invalid-item');
          _this4.parents[el].addClass('ev-invalid-item');

          message = defaults.messages[el] && defaults.messages[el][result.parameter];

          if (message && defaults.showNotice) {
            (0, _notice.showNotice)('notice-' + Math.random() + '-' + noticeID, '', _this4.elements[el], message);
            noticeID += 1;
          }

          defaults.onSetInvalid();

          if (!_this4.firstInvalidField) {
            _this4.firstInvalidField = _this4.elements[el];
            _this4.firstInvalidField.addClass('ev-invalid-item--first').closest('.ev-notice-parent').addClass('ev-invalid-item--first');

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
          if (shouldCheck) {
            _this4.elements[el].addClass('ev-valid-item');
            _this4.parents[el].addClass('ev-valid-item');
            defaults.onSetValid();
          }
        }
      }
    });
  } catch (err) {
    this._defaults.onStopOnInvalid();
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
    this.parents = {};
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
        _this5.elements[el].removeClass('ev-invalid-item ev-valid-item ev-valid-item--first ev-invalid-item--first').data('ev-possibly-error', '').data('ev-possibly-valid', '');
        _this5.parents[el].removeClass('ev-invalid-item ev-valid-item ev-valid-item--first ev-invalid-item--first');
      });

      this.firstInvalidField = null;

      if (this._defaults.groups.length) {
        resetGroups.call(this);
      }

      checkElements.call(this);

      return this.isFormValid;
    }
  }, {
    key: 'validateGroupField',
    value: function validateGroupField(e, field, groupIndex) {
      var _this6 = this;

      var defaults = this._defaults,
          name = field.attr('name'),
          group = defaults.groups[groupIndex],
          currentField = this.elements[name],
          rules = this._defaults.rules[name],
          results = {},
          result,
          shouldCheck = true,
          groupElements,
          message,
          countValid = 0;

      groupElements = this._defaults.names.filter(function (el) {
        return defaults.rules[el].group === groupIndex;
      });

      groupElements.forEach(function (el) {
        var rules = defaults.rules[el],
            result = checkField.call(_this6, _this6.elements[el], rules);

        results[el] = result;

        if (result.value) {
          countValid += 1;
        }
      });

      if (countValid < group.requiredFields) {
        return this.validateField(e, field);
      } else {
        currentField.removeClass('ev-valid-item ev-invalid-item');

        groupElements.forEach(function (el) {
          if (!results[el].value && countValid >= group.requiredFields) {
            if (!isChanged(_this6.elements[el])) {
              _this6.elements[el].removeClass('ev-invalid-item');
              (0, _notice.hideNotice)(_this6.elements[el].closest('.ev-notice-parent').find('.ev-notice'));
            }
          }
        });

        if (!isChanged(currentField)) {
          shouldCheck = false;
        }

        result = checkField.call(this, currentField, rules);

        if (!result.value && shouldCheck) {

          e.preventDefault();
          currentField.addClass('ev-invalid-item');
          currentField.removeClass('ev-valid-item');

          message = defaults.messages[name] && defaults.messages[name][result.parameter];

          (0, _notice.hideNotice)(currentField.closest('.ev-notice-parent').find('.ev-notice'));

          if (message && defaults.showNotice) {
            (0, _notice.showNotice)('notice-' + Math.random() + '-' + noticeID, '', currentField, message);
            noticeID += 1;
          }

          defaults.onSetInvalid();

          return false;
        } else {
          (0, _notice.hideNotice)(currentField.closest('.ev-notice-parent').find('.ev-notice'));

          if (shouldCheck) {
            currentField.addClass('ev-valid-item');
            defaults.onSetValid();

            return true;
          }
        }
      }

      return null;
    }
  }, {
    key: 'validateField',
    value: function validateField(e, field) {
      var name = field.attr('name'),
          currentField = this.elements[name],
          currentParent = this.parents[name],
          rules = this._defaults.rules[name],
          defaults = this._defaults,
          shouldCheck = true,
          isValid = true,
          result,
          message;

      currentField.removeClass('ev-valid-item ev-invalid-item');
      currentParent.removeClass('ev-valid-item ev-invalid-item');

      (0, _notice.hideNotice)(currentField.closest('.ev-notice-parent').find('.ev-notice'));

      if (!isChanged(currentField)) {
        shouldCheck = false;
      }

      result = checkField.call(this, currentField, rules);

      if (shouldCheck && !result.value) {
        result = checkField.call(this, currentField, rules);

        isValid = false;

        e.preventDefault();

        currentField.addClass('ev-invalid-item');
        currentParent.addClass('ev-invalid-item');

        message = defaults.messages[name] && defaults.messages[name][result.parameter];

        if (message && defaults.showNotice) {
          (0, _notice.showNotice)('notice-' + Math.random() + '-' + noticeID, '', currentField, message);
          noticeID += 1;
        }
      } else if (shouldCheck && result.value) {
        isValid = true;

        currentField.addClass('ev-valid-item');
        currentParent.addClass('ev-valid-item');
        defaults.onSetValid();
      }

      return isValid;
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _eclipse = __webpack_require__(1);

var _eclipse2 = _interopRequireDefault(_eclipse);

var _validate = __webpack_require__(3);

var _validate2 = _interopRequireDefault(_validate);

var _notice = __webpack_require__(0);

var notice = _interopRequireWildcard(_notice);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_eclipse2.default.utils.namespace('forms');
_eclipse2.default.utils.namespace('forms.notice');

_eclipse2.default.forms.Validation = _validate2.default;
_eclipse2.default.forms.notice = notice;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNsaXBzZS12YWxpZGF0aW9uLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjRjOWMxYzM3ZmYwZDc1ODIyNzgiLCJ3ZWJwYWNrOi8vL2xpYi9ub3RpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJlY2xpcHNlXCIsXCJjb21tb25qczJcIjpcImVjbGlwc2VcIixcImFtZFwiOlwiZWNsaXBzZVwiLFwidW1kXCI6XCJlY2xpcHNlXCIsXCJyb290XCI6XCJlY2xpcHNlXCJ9Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIixcInVtZFwiOlwianF1ZXJ5XCIsXCJyb290XCI6XCJqUXVlcnlcIn0iLCJ3ZWJwYWNrOi8vL2xpYi92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vZWNsaXBzZS12YWxpZGF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImVjbGlwc2VcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiZWNsaXBzZVwiLCBcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiZWNsaXBzZVwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSkgOiBmYWN0b3J5KHJvb3RbXCJlY2xpcHNlXCJdLCByb290W1wialF1ZXJ5XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGY0YzljMWMzN2ZmMGQ3NTgyMjc4IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlQWxsTm90aWNlcyAoKSB7XHJcbiAgJCgnLmV2LW5vdGljZScpLnJlbW92ZSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVOb3RpY2UgKG5vdGljZSkge1xyXG4gIG5vdGljZS5yZW1vdmUoKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93Tm90aWNlIChpZCwgY2xhc3NOYW1lLCB0YXJnZXQsIHRleHQpIHtcclxuICB2YXIgbm90aWNlID0gJCgnPGRpdi8+Jyk7XHJcblxyXG4gIGlmICh0YXJnZXQubGVuZ3RoICYmICEkKCcjJyArIGlkKS5sZW5ndGgpIHtcclxuICAgIG5vdGljZS5hdHRyKCdpZCcsIGlkKTtcclxuICAgIG5vdGljZS50ZXh0KHRleHQpLmFkZENsYXNzKCdldi1ub3RpY2UgJyArIGNsYXNzTmFtZSkuYXBwZW5kVG8odGFyZ2V0LmNsb3Nlc3QoJy5ldi1ub3RpY2UtcGFyZW50JykpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBub3RpY2UuYWRkQ2xhc3MoJ2V2LW5vdGljZS0tYWN0aXZlJyk7XHJcbiAgICB9LCA0KTtcclxuICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvbm90aWNlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZWNsaXBzZVwiLFwiY29tbW9uanMyXCI6XCJlY2xpcHNlXCIsXCJhbWRcIjpcImVjbGlwc2VcIixcInVtZFwiOlwiZWNsaXBzZVwiLFwicm9vdFwiOlwiZWNsaXBzZVwifVxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCIsXCJ1bWRcIjpcImpxdWVyeVwiLFwicm9vdFwiOlwialF1ZXJ5XCJ9XG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHtoaWRlQWxsTm90aWNlcywgc2hvd05vdGljZSwgaGlkZU5vdGljZX0gZnJvbSAnLi9ub3RpY2UnO1xyXG5cclxuaW1wb3J0IGVjbGlwc2UgZnJvbSAnZWNsaXBzZSc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5jb25zdCBFTUFJTF9SRUdFWFAgPSAnXig/PS57MSwyNTR9JCkoPz0uezEsNjR9QClbLSEjJCUmXFwnKisvMC05PT9BLVpeX2BhLXp7fH1+XSsoXFwuWy0hIyQlJlxcJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKSpAW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPyhcXC5bQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KSokJyxcclxuICBOVU1CRVJfUkVHRVhQID0gJ15cXFxcZCskJztcclxuXHJcbnZhciB2YWxpZGF0aW9uUHJvcHMgPSBbJ21pbkxlbmd0aCcsICdtYXhMZW5ndGgnLCAncGF0dGVybicsICdjaGVja2VkJywgJ3NlbGVjdGVkJywgJ2VxdWFsVG8nXSxcclxuICBpbnN0YW5jZXMgPSBbXSxcclxuICBub3RpY2VJRCA9IDAsXHJcbiAgdmFsaWRhdG9yO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0dGVybiAocGF0dGVybiwgc3RyLCBpZ25vcmVGbGFnKSB7XHJcbiAgcmV0dXJuIChzdHIubGVuZ3RoICYmIHBhdHRlcm4ubGVuZ3RoKSA/IG5ldyBSZWdFeHAocGF0dGVybiwgJ2cnICsgKGlnbm9yZUZsYWcgPyAnaScgOiAnJykpLnRlc3Qoc3RyKSA6IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VtYWlsIChzdHIpIHtcclxuICByZXR1cm4gaXNQYXR0ZXJuKEVNQUlMX1JFR0VYUCwgc3RyLnRvTG93ZXJDYXNlKCkpO1xyXG59XHJcblxyXG52YWxpZGF0b3IgPSB7XHJcbiAgbWluTGVuZ3RoOiBmdW5jdGlvbiAoZmllbGQsIGxlbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IGZpZWxkLnZhbCgpLmxlbmd0aCA+PSBsZW4sXHJcbiAgICAgIHBhcmFtZXRlcjogJ21pbkxlbmd0aCdcclxuICAgIH07XHJcbiAgfSxcclxuICBtYXhMZW5ndGg6IGZ1bmN0aW9uIChmaWVsZCwgbGVuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogZmllbGQudmFsKCkubGVuZ3RoIDw9IGxlbixcclxuICAgICAgcGFyYW1ldGVyOiAnbWF4TGVuZ3RoJ1xyXG4gICAgfTtcclxuICB9LFxyXG4gIHBhdHRlcm46IGZ1bmN0aW9uIChmaWVsZCwgcGF0dGVybiwgb3B0aW9ucykge1xyXG4gICAgaWYgKHRoaXNbcGF0dGVybl0pIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB2YWx1ZTogdGhpc1twYXR0ZXJuXShmaWVsZCksXHJcbiAgICAgICAgcGFyYW1ldGVyOiAncGF0dGVybidcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogaXNQYXR0ZXJuKHBhdHRlcm4sIGZpZWxkLnZhbCgpLCBvcHRpb25zLmlnbm9yZUZsYWcpLFxyXG4gICAgICBwYXJhbWV0ZXI6ICdwYXR0ZXJuJ1xyXG4gICAgfTtcclxuICB9LFxyXG4gIGVxdWFsVG86IGZ1bmN0aW9uIChmaWVsZCwgdmFsKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogZmllbGQudmFsKCkgPT09ICQodmFsKS52YWwoKSxcclxuICAgICAgcGFyYW1ldGVyOiAnZXF1YWxUbydcclxuICAgIH07XHJcbiAgfSxcclxuICBzdHJpbmc6IGZ1bmN0aW9uIChmaWVsZCkge1xyXG4gICAgcmV0dXJuIGZpZWxkLnZhbCgpLmxlbmd0aDtcclxuICB9LFxyXG4gIGVtYWlsOiBmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgIHJldHVybiBpc0VtYWlsKGZpZWxkLnZhbCgpKTtcclxuICB9LFxyXG4gIG51bWJlcjogZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQoZmllbGQudmFsKCkpKSAmJiBpc0Zpbml0ZShwYXJzZUZsb2F0KGZpZWxkLnZhbCgpKSk7XHJcbiAgfSxcclxuICBoYXJkTnVtYmVyOiBmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgIHJldHVybiBpc1BhdHRlcm4oTlVNQkVSX1JFR0VYUCwgZmllbGQudmFsKCkudG9Mb3dlckNhc2UoKSk7XHJcbiAgfSxcclxuICBjaGVja2VkOiBmdW5jdGlvbiAoZmllbGQsIHZhbCwgb3B0aW9ucykge1xyXG4gICAgdmFyIGNvdW50ZXIgPSAwLFxyXG4gICAgICB0eXBlID0gZmllbGRbMF0udHlwZTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHZhbHVlOiBmaWVsZC5maWx0ZXIoJzpjaGVja2VkJykubGVuZ3RoID09PSAxLFxyXG4gICAgICAgIHBhcmFtZXRlcjogJ2NoZWNrZWQnXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZmllbGQuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSA9PT0gdmFsICYmICQodGhpcykudmFsKCkgIT09ICd1bnNlbGVjdGFibGUnKSB7XHJcbiAgICAgICAgY291bnRlciArPSAxO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5jaGVja2VkTGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWU6IGNvdW50ZXIgPT09IG9wdGlvbnMuY2hlY2tlZExlbmd0aCxcclxuICAgICAgICBwYXJhbWV0ZXI6ICdjaGVja2VkTGVuZ3RoJ1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLm1pbkNoZWNrZWRMZW5ndGgpIHtcclxuICAgICAgaWYgKGNvdW50ZXIgPCBvcHRpb25zLm1pbkNoZWNrZWRMZW5ndGggfHwgIWNvdW50ZXIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgICAgcGFyYW1ldGVyOiAnbWluQ2hlY2tlZExlbmd0aCdcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMubWF4Q2hlY2tlZExlbmd0aCkge1xyXG4gICAgICBpZiAoY291bnRlciA+IG9wdGlvbnMubWF4Q2hlY2tlZExlbmd0aCB8fCAhY291bnRlcikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgICBwYXJhbWV0ZXI6ICdtYXhDaGVja2VkTGVuZ3RoJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5taW5DaGVja2VkTGVuZ3RoICYmIG9wdGlvbnMubWF4Q2hlY2tlZExlbmd0aCkge1xyXG4gICAgICBpZiAoY291bnRlciA8IG9wdGlvbnMubWluQ2hlY2tlZExlbmd0aCB8fCBjb3VudGVyID4gb3B0aW9ucy5tYXhDaGVja2VkTGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICAgIHBhcmFtZXRlcjogJ3JhbmdlQ2hlY2tlZExlbmd0aCdcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IGNvdW50ZXIgPiAwLFxyXG4gICAgICBwYXJhbWV0ZXI6ICdjaGVja2VkJ1xyXG4gICAgfTtcclxuICB9LFxyXG4gIHNlbGVjdGVkOiBmdW5jdGlvbiAoZmllbGQsIHZhbCwgb3B0aW9ucykge1xyXG4gICAgdmFyIGNvdW50ZXIgPSAwLFxyXG4gICAgICB0eXBlID0gZmllbGRbMF0udHlwZTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdC1vbmUnKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWU6ICEhZmllbGQudmFsKCkgJiYgZmllbGQudmFsKCkgIT09ICd1bnNlbGVjdGFibGUnLFxyXG4gICAgICAgIHBhcmFtZXRlcjogJ3NlbGVjdGVkJ1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZpZWxkLmZpbmQoJ29wdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoJCh0aGlzKS5wcm9wKCdzZWxlY3RlZCcpICYmICEkKHRoaXMpLnByb3AoJ2Rpc2FibGVkJykgJiYgJCh0aGlzKS52YWwoKSAhPT0gJ3Vuc2VsZWN0YWJsZScpIHtcclxuICAgICAgICBjb3VudGVyICs9IDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChvcHRpb25zLnNlbGVjdGVkTGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWU6IGNvdW50ZXIgPT09IG9wdGlvbnMuc2VsZWN0ZWRMZW5ndGgsXHJcbiAgICAgICAgcGFyYW1ldGVyOiAnc2VsZWN0ZWRMZW5ndGgnXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMubWluU2VsZWN0ZWRMZW5ndGgpIHtcclxuICAgICAgaWYgKGNvdW50ZXIgPCBvcHRpb25zLm1pblNlbGVjdGVkTGVuZ3RoIHx8ICFjb3VudGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICAgIHBhcmFtZXRlcjogJ21pblNlbGVjdGVkTGVuZ3RoJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5tYXhTZWxlY3RlZExlbmd0aCkge1xyXG4gICAgICBpZiAoY291bnRlciA+IG9wdGlvbnMubWF4U2VsZWN0ZWRMZW5ndGggfHwgIWNvdW50ZXIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgICAgcGFyYW1ldGVyOiAnbWF4U2VsZWN0ZWRMZW5ndGgnXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLm1pblNlbGVjdGVkTGVuZ3RoICYmIG9wdGlvbnMubWF4U2VsZWN0ZWRMZW5ndGgpIHtcclxuICAgICAgaWYgKGNvdW50ZXIgPCBvcHRpb25zLm1pblNlbGVjdGVkTGVuZ3RoIHx8IGNvdW50ZXIgPiBvcHRpb25zLm1heFNlbGVjdGVkTGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICAgIHBhcmFtZXRlcjogJ3JhbmdlU2VsZWN0ZWRMZW5ndGgnXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiBjb3VudGVyID4gMCxcclxuICAgICAgcGFyYW1ldGVyOiAnc2VsZWN0ZWQnXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXRFbGVtZW50cyAoKSB7XHJcbiAgdGhpcy5fZGVmYXVsdHMubmFtZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgdGhpcy5lbGVtZW50c1tpdGVtXSA9IHRoaXMuZm9ybS5maW5kKGBbbmFtZT1cIiR7aXRlbX1cIl1gKTtcclxuICAgIHRoaXMucGFyZW50c1tpdGVtXSA9IHRoaXMuZWxlbWVudHNbaXRlbV0uY2xvc2VzdCgnLmV2LWZpZWxkLXBhcmVudCcpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBBZGQgY2hlY2tib3ggdW5zZWxlY3RhYmxlXHJcbmZ1bmN0aW9uIGlzQ2hhbmdlZCAoZWwpIHtcclxuICBpZiAoZWxbMF0udHlwZSA9PT0gJ3NlbGVjdC1vbmUnKSB7XHJcbiAgICByZXR1cm4gISFlbC52YWwoKSAmJiBlbC52YWwoKSAhPT0gJ3Vuc2VsZWN0YWJsZSc7XHJcbiAgfSBlbHNlIGlmIChlbFswXS50eXBlID09PSAnc2VsZWN0LW11bHRpcGxlJykge1xyXG4gICAgaWYgKCFlbC52YWwoKS5sZW5ndGggfHwgKGVsLnZhbCgpWzBdID09PSAndW5zZWxlY3RhYmxlJyAmJiBlbC52YWwoKS5sZW5ndGggPT09IDEpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vIHJldHVybiAhIWVsLnZhbCgpLmxlbmd0aCAmJiBlbC52YWwoKVswXSAhPT0gJ3Vuc2VsZWN0YWJsZSc7XHJcbiAgfSBlbHNlIGlmIChlbFswXS50eXBlID09PSAncmFkaW8nKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKGVsWzBdLnR5cGUgPT09ICdjaGVja2JveCcpIHtcclxuICAgIHJldHVybiAhIWVsLmZpbHRlcignOmNoZWNrZWQnKS5sZW5ndGggJiYgZWwuZmlsdGVyKCc6Y2hlY2tlZCcpLmZpcnN0KCkudmFsKCkgIT09ICd1bnNlbGVjdGFibGUnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICEhZWwudmFsKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRFbXB0eSAoZ3JvdXBJbmRleCwgZ3JvdXApIHtcclxuICB2YXIgZ3JvdXBFbGVtZW50cywgZGVmYXVsdHMgPSB0aGlzLl9kZWZhdWx0cztcclxuXHJcbiAgcmV0dXJuIGdyb3VwRWxlbWVudHMgPSBkZWZhdWx0cy5uYW1lcy5maWx0ZXIoKGVsKSA9PiB7XHJcbiAgICB2YXIgY3VycmVudEVsID0gdGhpcy5lbGVtZW50c1tlbF07XHJcblxyXG4gICAgaWYgKGRlZmF1bHRzLnJ1bGVzW2VsXS5ncm91cCA9PT0gZ3JvdXBJbmRleCAmJiAhY3VycmVudEVsLmhhc0NsYXNzKCdldi12YWxpZC1pdGVtJykgJiYgIWRlZmF1bHRzLmdyb3Vwc1tncm91cEluZGV4XS5tYXJrZWRbZWxdKSB7XHJcbiAgICAgIGRlZmF1bHRzLmdyb3Vwc1tncm91cEluZGV4XS5tYXJrZWRbZWxdID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJldHVybiBpc0NoYW5nZWQoY3VycmVudEVsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRmllbGQgKGZpZWxkLCBydWxlcykge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRhdGlvblByb3BzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBsZXQgcCA9IHZhbGlkYXRpb25Qcm9wc1tpXSxcclxuICAgICAgcmVzdWx0O1xyXG5cclxuICAgIGlmICghZmllbGQuaXMoJzpkaXNhYmxlZCcpKSB7XHJcbiAgICAgIGlmICh2YWxpZGF0b3JbcF0gJiYgdHlwZW9mIHJ1bGVzW3BdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJlc3VsdCA9IHZhbGlkYXRvcltwXShmaWVsZCwgcnVsZXNbcF0sIHJ1bGVzLm9wdGlvbnMgfHwge30pO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7dmFsdWU6IHRydWV9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0dyb3VwIChncm91cEluZGV4LCBncm91cCwgZ3JvdXBFbGVtZW50cywgY2hlY2tFbXB0eSkge1xyXG4gIHZhciBtZXNzYWdlLCByZXN1bHRzID0ge30sIGRlZmF1bHRzID0gdGhpcy5fZGVmYXVsdHM7XHJcblxyXG4gIGlmIChkZWZhdWx0cy5zdG9wT25JbnZhbGlkICYmIHRoaXMuaXNTdG9wcGVkKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoIWdyb3VwRWxlbWVudHMpIHtcclxuICAgIGdyb3VwRWxlbWVudHMgPSB0aGlzLl9kZWZhdWx0cy5uYW1lcy5maWx0ZXIoKGVsKSA9PiB7XHJcbiAgICAgIHJldHVybiBkZWZhdWx0cy5ydWxlc1tlbF0uZ3JvdXAgPT09IGdyb3VwSW5kZXg7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgZ3JvdXBFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgdmFyIHJ1bGVzID0gZGVmYXVsdHMucnVsZXNbZWxdLFxyXG4gICAgICByZXN1bHQgPSBjaGVja0ZpZWxkLmNhbGwodGhpcywgdGhpcy5lbGVtZW50c1tlbF0sIHJ1bGVzKTtcclxuXHJcbiAgICByZXN1bHRzW2VsXSA9IHJlc3VsdDtcclxuXHJcbiAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgIGdyb3VwLmNvdW50VmFsaWQgKz0gMTtcclxuICAgICAgdGhpcy5lbGVtZW50c1tlbF0uZGF0YSgnZXYtcG9zc2libHktdmFsaWQnLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHNbZWxdLmRhdGEoJ2V2LXBvc3NpYmx5LWVycm9yJywgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGdyb3VwLmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuICBpZiAoZ3JvdXAuY291bnRWYWxpZCA+PSBncm91cC5yZXF1aXJlZEZpZWxkcyAmJiAhY2hlY2tFbXB0eSkge1xyXG4gICAgZ3JvdXAuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgIFxyXG4gICAgZ3JvdXBFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5lbGVtZW50c1tlbF0uZGF0YSgnZXYtcG9zc2libHktdmFsaWQnKSkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHNbZWxdLmFkZENsYXNzKCdldi12YWxpZC1pdGVtJyk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRzW2VsXS5hZGRDbGFzcygnZXYtdmFsaWQtaXRlbScpO1xyXG4gICAgICAgIGRlZmF1bHRzLm9uU2V0VmFsaWQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMuZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGdyb3VwRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1tlbF0uZGF0YSgnZXYtcG9zc2libHktZXJyb3InKSkge1xyXG4gICAgICAgICAgdGhpcy5pc0Zvcm1WYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5lbGVtZW50c1tlbF0uYWRkQ2xhc3MoJ2V2LWludmFsaWQtaXRlbScpO1xyXG4gICAgICAgICAgdGhpcy5wYXJlbnRzW2VsXS5hZGRDbGFzcygnZXYtaW52YWxpZC1pdGVtJyk7XHJcblxyXG4gICAgICAgICAgbWVzc2FnZSA9IGRlZmF1bHRzLm1lc3NhZ2VzW2VsXSAmJiBkZWZhdWx0cy5tZXNzYWdlc1tlbF1bcmVzdWx0c1tlbF0ucGFyYW1ldGVyXTtcclxuXHJcbiAgICAgICAgICBpZiAobWVzc2FnZSAmJiBkZWZhdWx0cy5zaG93Tm90aWNlKSB7XHJcbiAgICAgICAgICAgIHNob3dOb3RpY2UoYG5vdGljZS0ke01hdGgucmFuZG9tKCl9LSR7bm90aWNlSUR9YCwgJycsIHRoaXMuZWxlbWVudHNbZWxdLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgbm90aWNlSUQgKz0gMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkZWZhdWx0cy5vblNldEludmFsaWQoKTtcclxuXHJcbiAgICAgICAgICBpZiAoIXRoaXMuZmlyc3RJbnZhbGlkRmllbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdEludmFsaWRGaWVsZCA9IHRoaXMuZWxlbWVudHNbZWxdO1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0SW52YWxpZEZpZWxkLmFkZENsYXNzKCdldi1pbnZhbGlkLWl0ZW0tLWZpcnN0JykuY2xvc2VzdCgnLmV2LWZpZWxkLXBhcmVudCcpLmFkZENsYXNzKCdldi1pbnZhbGlkLWl0ZW0tLWZpcnN0Jyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZGVmYXVsdHMuc2Nyb2xsVG9JbnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgZWNsaXBzZS5ET00uc2Nyb2xsUGFnZShcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RJbnZhbGlkRmllbGQuY2xvc2VzdCgnLmV2LW5vdGljZS1wYXJlbnQnKSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRzLnNjcm9sbENvcnJlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0cy5zY3JvbGxPcHRpb25zXHJcbiAgICAgICAgICAgICAgKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0cy5zZXRGb2N1cykge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0SW52YWxpZEZpZWxkLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0cy5hZnRlclNjcm9sbCgpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZGVmYXVsdHMuc2V0Rm9jdXMpIHtcclxuICAgICAgICAgICAgICB0aGlzLmZpcnN0SW52YWxpZEZpZWxkLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoZGVmYXVsdHMuc3RvcE9uSW52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lbGVtZW50c1tlbF0uYWRkQ2xhc3MoJ2V2LXZhbGlkLWl0ZW0nKTtcclxuICAgICAgICAgIHRoaXMucGFyZW50c1tlbF0uYWRkQ2xhc3MoJ2V2LXZhbGlkLWl0ZW0nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGRlZmF1bHRzLm9uU3RvcE9uSW52YWxpZCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tFbGVtZW50cyAoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHRoaXMuX2RlZmF1bHRzLm5hbWVzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIHZhciBkZWZhdWx0cyA9IHRoaXMuX2RlZmF1bHRzLFxyXG4gICAgICAgIHJ1bGVzID0gZGVmYXVsdHMucnVsZXNbZWxdLFxyXG4gICAgICAgIHJlc3VsdCwgc2hvdWxkQ2hlY2sgPSB0cnVlLFxyXG4gICAgICAgIGdyb3VwLCBncm91cEVsZW1lbnRzLCBtZXNzYWdlO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBydWxlcy5ncm91cCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBncm91cCA9IGRlZmF1bHRzLmdyb3Vwc1tydWxlcy5ncm91cF07XHJcblxyXG4gICAgICAgIGlmICghZ3JvdXAuaXNWYWxpZCAmJiAhZ3JvdXAuY2hlY2tlZCkge1xyXG4gICAgICAgICAgY2hlY2tHcm91cC5jYWxsKHRoaXMsIHJ1bGVzLmdyb3VwLCBncm91cCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChncm91cC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICBncm91cEVsZW1lbnRzID0gZmluZEVtcHR5LmNhbGwodGhpcywgcnVsZXMuZ3JvdXAsIGdyb3VwKTtcclxuXHJcbiAgICAgICAgICBpZiAoZ3JvdXBFbGVtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2hlY2tHcm91cC5jYWxsKHRoaXMsIHJ1bGVzLmdyb3VwLCBncm91cCwgZ3JvdXBFbGVtZW50cywgdHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIE5vdCByZXF1aXJlZCBmaWVsZFxyXG4gICAgICAgIGlmIChydWxlcy5jaGVja0lmQ2hhbmdlZCkge1xyXG4gICAgICAgICAgaWYgKCFpc0NoYW5nZWQodGhpcy5lbGVtZW50c1tlbF0pKSB7XHJcbiAgICAgICAgICAgIHNob3VsZENoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdCA9IGNoZWNrRmllbGQuY2FsbCh0aGlzLCB0aGlzLmVsZW1lbnRzW2VsXSwgcnVsZXMpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnRzW2VsXS5yZW1vdmVDbGFzcygnZXYtdmFsaWQtaXRlbScpO1xyXG4gICAgICAgIHRoaXMucGFyZW50c1tlbF0ucmVtb3ZlQ2xhc3MoJ2V2LXZhbGlkLWl0ZW0nKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXN1bHQudmFsdWUgJiYgc2hvdWxkQ2hlY2spIHtcclxuICAgICAgICAgIHRoaXMuaXNGb3JtVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICBpZiAoZGVmYXVsdHMuc3RvcE9uSW52YWxpZCAmJiB0aGlzLmlzU3RvcHBlZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHRoaXMuZWxlbWVudHNbZWxdLmFkZENsYXNzKCdldi1pbnZhbGlkLWl0ZW0nKTtcclxuICAgICAgICAgIHRoaXMucGFyZW50c1tlbF0uYWRkQ2xhc3MoJ2V2LWludmFsaWQtaXRlbScpO1xyXG5cclxuICAgICAgICAgIG1lc3NhZ2UgPSBkZWZhdWx0cy5tZXNzYWdlc1tlbF0gJiYgZGVmYXVsdHMubWVzc2FnZXNbZWxdW3Jlc3VsdC5wYXJhbWV0ZXJdO1xyXG5cclxuICAgICAgICAgIGlmIChtZXNzYWdlICYmIGRlZmF1bHRzLnNob3dOb3RpY2UpIHtcclxuICAgICAgICAgICAgc2hvd05vdGljZShgbm90aWNlLSR7TWF0aC5yYW5kb20oKX0tJHtub3RpY2VJRH1gLCAnJywgdGhpcy5lbGVtZW50c1tlbF0sIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBub3RpY2VJRCArPSAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGRlZmF1bHRzLm9uU2V0SW52YWxpZCgpO1xyXG5cclxuICAgICAgICAgIGlmICghdGhpcy5maXJzdEludmFsaWRGaWVsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0SW52YWxpZEZpZWxkID0gdGhpcy5lbGVtZW50c1tlbF07XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RJbnZhbGlkRmllbGQuYWRkQ2xhc3MoJ2V2LWludmFsaWQtaXRlbS0tZmlyc3QnKS5jbG9zZXN0KCcuZXYtbm90aWNlLXBhcmVudCcpLmFkZENsYXNzKCdldi1pbnZhbGlkLWl0ZW0tLWZpcnN0Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGVmYXVsdHMuc2Nyb2xsVG9JbnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgZWNsaXBzZS5ET00uc2Nyb2xsUGFnZShcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RJbnZhbGlkRmllbGQuY2xvc2VzdCgnLmV2LW5vdGljZS1wYXJlbnQnKSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRzLnNjcm9sbENvcnJlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0cy5zY3JvbGxPcHRpb25zXHJcbiAgICAgICAgICAgICAgKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0cy5zZXRGb2N1cykge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0SW52YWxpZEZpZWxkLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0cy5hZnRlclNjcm9sbCgpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChkZWZhdWx0cy5zZXRGb2N1cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdEludmFsaWRGaWVsZC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoZGVmYXVsdHMuc3RvcE9uSW52YWxpZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChzaG91bGRDaGVjaykge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2VsXS5hZGRDbGFzcygnZXYtdmFsaWQtaXRlbScpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudHNbZWxdLmFkZENsYXNzKCdldi12YWxpZC1pdGVtJyk7XHJcbiAgICAgICAgICAgIGRlZmF1bHRzLm9uU2V0VmFsaWQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgdGhpcy5fZGVmYXVsdHMub25TdG9wT25JbnZhbGlkKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEdyb3VwcyAoKSB7XHJcbiAgdGhpcy5fZGVmYXVsdHMuZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XHJcbiAgICBncm91cC5pc1ZhbGlkID0gZmFsc2U7XHJcbiAgICBncm91cC5jb3VudFZhbGlkID0gMDtcclxuICAgIGdyb3VwLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIGdyb3VwLm1hcmtlZCA9IHt9O1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcihmb3JtLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgZGVmYXVsdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG5cclxuICAgIGRlZmF1bHRzLnJ1bGVzID0ge307XHJcbiAgICBkZWZhdWx0cy5uYW1lcyA9IFtdO1xyXG4gICAgZGVmYXVsdHMuZ3JvdXBzID0gW107XHJcbiAgICBkZWZhdWx0cy5tZXNzYWdlcyA9IHt9O1xyXG4gICAgZGVmYXVsdHMuc2Nyb2xsVG9JbnZhbGlkID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLnNjcm9sbENvcnJlY3Rpb24gPSAwO1xyXG4gICAgZGVmYXVsdHMuc2Nyb2xsT3B0aW9ucyA9IHt9O1xyXG4gICAgZGVmYXVsdHMuc2hvd05vdGljZSA9IHRydWU7XHJcbiAgICBkZWZhdWx0cy5zdG9wT25JbnZhbGlkID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLnNldEZvY3VzID0gdHJ1ZTtcclxuICAgIGRlZmF1bHRzLm9uU2V0VmFsaWQgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5vblNldEludmFsaWQgPSAkLm5vb3A7XHJcbiAgICBkZWZhdWx0cy5hZnRlclNjcm9sbCA9ICQubm9vcDtcclxuICAgIGRlZmF1bHRzLm9uU3RvcE9uSW52YWxpZCA9ICQubm9vcDtcclxuXHJcbiAgICBpZiAoZWNsaXBzZS5oZWxwZXJzLmdldENsYXNzKG9wdGlvbnMpID09PSAnT2JqZWN0Jykge1xyXG4gICAgICAkLmV4dGVuZCh0cnVlLCBkZWZhdWx0cywgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50cyA9IHt9O1xyXG4gICAgdGhpcy5wYXJlbnRzID0ge307XHJcbiAgICB0aGlzLmZvcm0gPSBmb3JtO1xyXG4gICAgdGhpcy5maXJzdEludmFsaWRGaWVsZCA9IG51bGw7XHJcbiAgICB0aGlzLmlzRm9ybVZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19kZWZhdWx0cycsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbml0RWxlbWVudHMuY2FsbCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmZvcm0uYXR0cignbm92YWxpZGF0ZScsICdub3ZhbGlkYXRlJyk7XHJcblxyXG4gICAgaW5zdGFuY2VzLnB1c2godGhpcyk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZShlKSB7XHJcbiAgICB0aGlzLmUgPSBlO1xyXG4gICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNGb3JtVmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIGhpZGVBbGxOb3RpY2VzKCk7XHJcbiAgICAgIFxyXG4gICAgT2JqZWN0LmtleXModGhpcy5lbGVtZW50cykuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgdGhpcy5lbGVtZW50c1tlbF0ucmVtb3ZlQ2xhc3MoJ2V2LWludmFsaWQtaXRlbSBldi12YWxpZC1pdGVtIGV2LXZhbGlkLWl0ZW0tLWZpcnN0IGV2LWludmFsaWQtaXRlbS0tZmlyc3QnKS5kYXRhKCdldi1wb3NzaWJseS1lcnJvcicsICcnKS5kYXRhKCdldi1wb3NzaWJseS12YWxpZCcsICcnKTtcclxuICAgICAgdGhpcy5wYXJlbnRzW2VsXS5yZW1vdmVDbGFzcygnZXYtaW52YWxpZC1pdGVtIGV2LXZhbGlkLWl0ZW0gZXYtdmFsaWQtaXRlbS0tZmlyc3QgZXYtaW52YWxpZC1pdGVtLS1maXJzdCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5maXJzdEludmFsaWRGaWVsZCA9IG51bGw7XHJcblxyXG4gICAgaWYgKHRoaXMuX2RlZmF1bHRzLmdyb3Vwcy5sZW5ndGgpIHtcclxuICAgICAgcmVzZXRHcm91cHMuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0VsZW1lbnRzLmNhbGwodGhpcyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaXNGb3JtVmFsaWQ7XHJcbiAgfVxyXG4gIHZhbGlkYXRlR3JvdXBGaWVsZChlLCBmaWVsZCwgZ3JvdXBJbmRleCkge1xyXG4gICAgdmFyIGRlZmF1bHRzID0gdGhpcy5fZGVmYXVsdHMsXHJcbiAgICAgIG5hbWUgPSBmaWVsZC5hdHRyKCduYW1lJyksXHJcbiAgICAgIGdyb3VwID0gZGVmYXVsdHMuZ3JvdXBzW2dyb3VwSW5kZXhdLFxyXG4gICAgICBjdXJyZW50RmllbGQgPSB0aGlzLmVsZW1lbnRzW25hbWVdLFxyXG4gICAgICBydWxlcyA9IHRoaXMuX2RlZmF1bHRzLnJ1bGVzW25hbWVdLFxyXG4gICAgICByZXN1bHRzID0ge30sXHJcbiAgICAgIHJlc3VsdCxcclxuICAgICAgc2hvdWxkQ2hlY2sgPSB0cnVlLFxyXG4gICAgICBncm91cEVsZW1lbnRzLFxyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgICBjb3VudFZhbGlkID0gMDtcclxuXHJcbiAgICBncm91cEVsZW1lbnRzID0gdGhpcy5fZGVmYXVsdHMubmFtZXMuZmlsdGVyKChlbCkgPT4ge1xyXG4gICAgICByZXR1cm4gZGVmYXVsdHMucnVsZXNbZWxdLmdyb3VwID09PSBncm91cEluZGV4O1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBncm91cEVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIHZhciBydWxlcyA9IGRlZmF1bHRzLnJ1bGVzW2VsXSxcclxuICAgICAgICByZXN1bHQgPSBjaGVja0ZpZWxkLmNhbGwodGhpcywgdGhpcy5lbGVtZW50c1tlbF0sIHJ1bGVzKTtcclxuXHJcbiAgICAgIHJlc3VsdHNbZWxdID0gcmVzdWx0O1xyXG5cclxuICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgIGNvdW50VmFsaWQgKz0gMTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGNvdW50VmFsaWQgPCBncm91cC5yZXF1aXJlZEZpZWxkcykge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZUZpZWxkKGUsIGZpZWxkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN1cnJlbnRGaWVsZC5yZW1vdmVDbGFzcygnZXYtdmFsaWQtaXRlbSBldi1pbnZhbGlkLWl0ZW0nKTtcclxuXHJcbiAgICAgIGdyb3VwRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3VsdHNbZWxdLnZhbHVlICYmIGNvdW50VmFsaWQgPj0gZ3JvdXAucmVxdWlyZWRGaWVsZHMpIHtcclxuICAgICAgICAgIGlmICghaXNDaGFuZ2VkKHRoaXMuZWxlbWVudHNbZWxdKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2VsXS5yZW1vdmVDbGFzcygnZXYtaW52YWxpZC1pdGVtJyk7XHJcbiAgICAgICAgICAgIGhpZGVOb3RpY2UodGhpcy5lbGVtZW50c1tlbF0uY2xvc2VzdCgnLmV2LW5vdGljZS1wYXJlbnQnKS5maW5kKCcuZXYtbm90aWNlJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIWlzQ2hhbmdlZChjdXJyZW50RmllbGQpKSB7XHJcbiAgICAgICAgc2hvdWxkQ2hlY2sgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVzdWx0ID0gY2hlY2tGaWVsZC5jYWxsKHRoaXMsIGN1cnJlbnRGaWVsZCwgcnVsZXMpO1xyXG5cclxuICAgICAgaWYgKCFyZXN1bHQudmFsdWUgJiYgc2hvdWxkQ2hlY2spIHtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGN1cnJlbnRGaWVsZC5hZGRDbGFzcygnZXYtaW52YWxpZC1pdGVtJyk7XHJcbiAgICAgICAgY3VycmVudEZpZWxkLnJlbW92ZUNsYXNzKCdldi12YWxpZC1pdGVtJyk7XHJcblxyXG4gICAgICAgIG1lc3NhZ2UgPSBkZWZhdWx0cy5tZXNzYWdlc1tuYW1lXSAmJiBkZWZhdWx0cy5tZXNzYWdlc1tuYW1lXVtyZXN1bHQucGFyYW1ldGVyXTtcclxuXHJcbiAgICAgICAgaGlkZU5vdGljZShjdXJyZW50RmllbGQuY2xvc2VzdCgnLmV2LW5vdGljZS1wYXJlbnQnKS5maW5kKCcuZXYtbm90aWNlJykpO1xyXG5cclxuICAgICAgICBpZiAobWVzc2FnZSAmJiBkZWZhdWx0cy5zaG93Tm90aWNlKSB7XHJcbiAgICAgICAgICBzaG93Tm90aWNlKGBub3RpY2UtJHtNYXRoLnJhbmRvbSgpfS0ke25vdGljZUlEfWAsICcnLCBjdXJyZW50RmllbGQsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgbm90aWNlSUQgKz0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHRzLm9uU2V0SW52YWxpZCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGlkZU5vdGljZShjdXJyZW50RmllbGQuY2xvc2VzdCgnLmV2LW5vdGljZS1wYXJlbnQnKS5maW5kKCcuZXYtbm90aWNlJykpO1xyXG5cclxuICAgICAgICBpZiAoc2hvdWxkQ2hlY2spIHtcclxuICAgICAgICAgIGN1cnJlbnRGaWVsZC5hZGRDbGFzcygnZXYtdmFsaWQtaXRlbScpO1xyXG4gICAgICAgICAgZGVmYXVsdHMub25TZXRWYWxpZCgpO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICB2YWxpZGF0ZUZpZWxkKGUsIGZpZWxkKSB7XHJcbiAgICB2YXIgbmFtZSA9IGZpZWxkLmF0dHIoJ25hbWUnKSxcclxuICAgICAgY3VycmVudEZpZWxkID0gdGhpcy5lbGVtZW50c1tuYW1lXSxcclxuICAgICAgY3VycmVudFBhcmVudCA9IHRoaXMucGFyZW50c1tuYW1lXSxcclxuICAgICAgcnVsZXMgPSB0aGlzLl9kZWZhdWx0cy5ydWxlc1tuYW1lXSxcclxuICAgICAgZGVmYXVsdHMgPSB0aGlzLl9kZWZhdWx0cyxcclxuICAgICAgc2hvdWxkQ2hlY2sgPSB0cnVlLFxyXG4gICAgICBpc1ZhbGlkID0gdHJ1ZSxcclxuICAgICAgcmVzdWx0LFxyXG4gICAgICBtZXNzYWdlO1xyXG5cclxuICAgIGN1cnJlbnRGaWVsZC5yZW1vdmVDbGFzcygnZXYtdmFsaWQtaXRlbSBldi1pbnZhbGlkLWl0ZW0nKTtcclxuICAgIGN1cnJlbnRQYXJlbnQucmVtb3ZlQ2xhc3MoJ2V2LXZhbGlkLWl0ZW0gZXYtaW52YWxpZC1pdGVtJyk7XHJcbiAgICBcclxuICAgIGhpZGVOb3RpY2UoY3VycmVudEZpZWxkLmNsb3Nlc3QoJy5ldi1ub3RpY2UtcGFyZW50JykuZmluZCgnLmV2LW5vdGljZScpKTtcclxuICAgIFxyXG4gICAgaWYgKCFpc0NoYW5nZWQoY3VycmVudEZpZWxkKSkge1xyXG4gICAgICBzaG91bGRDaGVjayA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdCA9IGNoZWNrRmllbGQuY2FsbCh0aGlzLCBjdXJyZW50RmllbGQsIHJ1bGVzKTtcclxuXHJcbiAgICBpZiAoc2hvdWxkQ2hlY2sgJiYgIXJlc3VsdC52YWx1ZSkge1xyXG4gICAgICByZXN1bHQgPSBjaGVja0ZpZWxkLmNhbGwodGhpcywgY3VycmVudEZpZWxkLCBydWxlcyk7XHJcblxyXG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBjdXJyZW50RmllbGQuYWRkQ2xhc3MoJ2V2LWludmFsaWQtaXRlbScpO1xyXG4gICAgICBjdXJyZW50UGFyZW50LmFkZENsYXNzKCdldi1pbnZhbGlkLWl0ZW0nKTtcclxuXHJcbiAgICAgIG1lc3NhZ2UgPSBkZWZhdWx0cy5tZXNzYWdlc1tuYW1lXSAmJiBkZWZhdWx0cy5tZXNzYWdlc1tuYW1lXVtyZXN1bHQucGFyYW1ldGVyXTtcclxuXHJcbiAgICAgIGlmIChtZXNzYWdlICYmIGRlZmF1bHRzLnNob3dOb3RpY2UpIHtcclxuICAgICAgICBzaG93Tm90aWNlKGBub3RpY2UtJHtNYXRoLnJhbmRvbSgpfS0ke25vdGljZUlEfWAsICcnLCBjdXJyZW50RmllbGQsIG1lc3NhZ2UpO1xyXG4gICAgICAgIG5vdGljZUlEICs9IDE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoc2hvdWxkQ2hlY2sgJiYgcmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgIGlzVmFsaWQgPSB0cnVlO1xyXG5cclxuICAgICAgY3VycmVudEZpZWxkLmFkZENsYXNzKCdldi12YWxpZC1pdGVtJyk7XHJcbiAgICAgIGN1cnJlbnRQYXJlbnQuYWRkQ2xhc3MoJ2V2LXZhbGlkLWl0ZW0nKTtcclxuICAgICAgZGVmYXVsdHMub25TZXRWYWxpZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc1ZhbGlkO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRlbGVnYXRlU3VibWl0KGUpIHtcclxuICAgIHZhciBpbnN0YW5jZSA9IFZhbGlkYXRpb24uZmluZEluc3RhbmNlKGUpO1xyXG5cclxuICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm4gaW5zdGFuY2UudmFsaWRhdGUoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRpYyBmaW5kSW5zdGFuY2UoZSkge1xyXG4gICAgdmFyIGN1cnJlbnRGb3JtID0gJChlLnRhcmdldCkuY2xvc2VzdCgnW2RhdGEtZXYtZm9ybV0nKTtcclxuXHJcbiAgICBpZiAoIWN1cnJlbnRGb3JtLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFZhbGlkYXRpb24uaW5zdGFuY2VzKCkuZmlsdGVyKChpbnN0YW5jZSkgPT4ge1xyXG4gICAgICByZXR1cm4gaW5zdGFuY2UuZm9ybS5hdHRyKCdpZCcpID09PSBjdXJyZW50Rm9ybS5hdHRyKCdpZCcpO1xyXG4gICAgfSlbMF07XHJcbiAgfVxyXG4gIHN0YXRpYyBpbnN0YW5jZXMoKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2VzO1xyXG4gIH1cclxuICBzdGF0aWMgZXh0ZW5kVmFsaWRhdGlvblByb3BzKG5ld1Byb3BzKSB7XHJcbiAgICBuZXdQcm9wcy5mb3JFYWNoKChwcm9wZXJ0eU9iaikgPT4ge1xyXG4gICAgICBpZiAoIWVjbGlwc2UuaGVscGVycy5pbkFycmF5KHZhbGlkYXRpb25Qcm9wcywgcHJvcGVydHlPYmoubmFtZSkgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWxpZGF0b3IsIHByb3BlcnR5T2JqLm5hbWUpKSB7XHJcbiAgICAgICAgdmFsaWRhdGlvblByb3BzLnB1c2gocHJvcGVydHlPYmoubmFtZSk7XHJcbiAgICAgICAgdmFsaWRhdG9yW3Byb3BlcnR5T2JqLm5hbWVdID0gcHJvcGVydHlPYmoudmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3ZhbGlkYXRlLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IGVjbGlwc2UgZnJvbSAnZWNsaXBzZSc7XHJcblxyXG5pbXBvcnQgVmFsaWRhdGlvbiBmcm9tICcuL2xpYi92YWxpZGF0ZSc7XHJcbmltcG9ydCAqIGFzIG5vdGljZSBmcm9tICcuL2xpYi9ub3RpY2UnO1xyXG5cclxuZWNsaXBzZS51dGlscy5uYW1lc3BhY2UoJ2Zvcm1zJyk7XHJcbmVjbGlwc2UudXRpbHMubmFtZXNwYWNlKCdmb3Jtcy5ub3RpY2UnKTtcclxuXHJcbmVjbGlwc2UuZm9ybXMuVmFsaWRhdGlvbiA9IFZhbGlkYXRpb247XHJcbmVjbGlwc2UuZm9ybXMubm90aWNlID0gbm90aWNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZWNsaXBzZS12YWxpZGF0aW9uLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7O0FDaEVBO0FBQ0E7Ozs7QUFHQTtBQUlBO0FBSUE7QUFDQTtBQVhBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkJBOzs7Ozs7QUNBQTs7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUFjQTtBQUlBO0FBQ0E7QUFsQkE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQTNKQTtBQUNBO0FBNkpBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQTdOQTs7Ozs7OztBQ3piQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9