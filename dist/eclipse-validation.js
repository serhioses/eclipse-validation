(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.isPattern = isPattern;
exports.isEmail = isEmail;

var _notice = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EMAIL_REGEXP = '^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&\'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&\'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$';

var validationProps = ['minLength', 'maxLength', 'pattern', 'checked', 'selected', 'equalTo'],
    _instances = [];

function isPattern(pattern, str, ignoreFlag) {
    return str.length && pattern.length ? new RegExp(pattern, 'g' + (ignoreFlag ? 'i' : '')).test(str) : null;
}

function isEmail(str) {
    return isPattern(EMAIL_REGEXP, str.toLowerCase());
}

var validator = {
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
            value: field.val() === $(val).val(),
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
                value: field.prop('checked') === val,
                parameter: 'checked'
            };
        }

        field.each(function () {
            if ($(this).prop('checked') === val) {
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
            if ($(this).prop('selected') && !$(this).prop('disabled') && $(this).val() !== 'unselectable') {
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

function findEmpty(groupIndex, group) {
    var _this2 = this;

    var groupElements,
        defaults = this._defaults;

    groupElements = this._defaults.names.filter(function (el) {
        // console.log(defaults.rules[el].group);
        // console.log(this.elements[el]);
        // console.log(groupIndex);
        // if (groupIndex === 0) {
        //     console.log(defaults.rules[el].group === groupIndex);
        // }
        return defaults.rules[el].group === groupIndex && !_this2.elements[el].hasClass('ev-valid-item');
    });
    console.log(groupElements);
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

function checkGroup(groupIndex, group) {
    var _this3 = this;

    var groupElements,
        message,
        results = {},
        defaults = this._defaults;

    if (defaults.stopOnInvalid && this.isStopped) {
        return;
    }

    groupElements = this._defaults.names.filter(function (el) {
        return defaults.rules[el].group === groupIndex;
    });

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

    if (group.countValid >= group.requiredFields) {
        group.isValid = true;

        groupElements.forEach(function (el) {
            if (_this3.elements[el].data('ev-possibly-valid')) {
                _this3.elements[el].addClass('ev-valid-item');
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
                        (0, _notice.showNotice)(Math.random(), '', _this3.elements[el], message);
                    }

                    if (!_this3.firstInvalidField) {
                        _this3.firstInvalidField = _this3.elements[el];
                        _this3.firstInvalidField.addClass('ev-invalid-item--first');

                        if (defaults.scrollToInvalid) {
                            eclipse.DOM.scrollPage(_this3.firstInvalidField.closest('.ev-notice-parent'), defaults.scrollCorrection, defaults.scrollOptions);
                        }
                    }

                    if (defaults.stopOnInvalid) {
                        _this3.isStopped = true;

                        throw new Error('Validation error. Stopped on invalid group');
                    }
                } else {
                    _this3.elements[el].addClass('ev-valid-item');
                }
            });
        } catch (err) {
            console.log(err.message);
        }
    }
}

function checkElements() {
    var _this4 = this;

    // this.e.preventDefault();
    try {
        this._defaults.names.forEach(function (el) {
            var defaults = _this4._defaults,
                rules = defaults.rules[el],
                result = checkField.call(_this4, _this4.elements[el], rules),
                group,
                message;

            if (typeof rules.group !== 'undefined') {
                group = defaults.groups[rules.group];

                if (!group.isValid && !group.checked) {
                    checkGroup.call(_this4, rules.group, group);
                } else if (group.isValid) {
                    findEmpty.call(_this4, rules.group, group);
                }
            } else {
                if (!result.value) {
                    _this4.isFormValid = false;

                    if (defaults.stopOnInvalid && _this4.isStopped) {
                        throw new Error('Stopped on invalid');
                    }
                    _this4.e.preventDefault();
                    _this4.elements[el].addClass('ev-invalid-item');

                    message = defaults.messages[el] && defaults.messages[el][result.parameter];

                    if (message && defaults.showNotice) {
                        (0, _notice.showNotice)(Math.random(), '', _this4.elements[el], message);
                    }

                    if (!_this4.firstInvalidField) {
                        _this4.firstInvalidField = _this4.elements[el];
                        _this4.firstInvalidField.addClass('ev-invalid-item--first');

                        if (defaults.scrollToInvalid) {
                            eclipse.DOM.scrollPage(_this4.firstInvalidField.closest('.ev-notice-parent'), defaults.scrollCorrection, defaults.scrollOptions);
                        }
                    }

                    if (defaults.stopOnInvalid) {
                        _this4.isStopped = true;

                        throw new Error('Validation error. Stopped on invalid');
                    }
                } else {
                    _this4.elements[el].addClass('ev-valid-item');
                }
            }
        });
    } catch (err) {
        console.log(err.message);
    }
}

function resetGroups() {
    this._defaults.groups.forEach(function (group) {
        group.isValid = false;
        group.countValid = 0;
        group.checked = false;
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

        if (eclipse.helpers.getClass(options) === 'Object') {
            $.extend(true, defaults, options);
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
            var currentForm = $(e.target).closest('[data-ev-from]');

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
    }]);

    return Validation;
}();

exports.default = Validation;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

var _notice = __webpack_require__(0);

var notice = _interopRequireWildcard(_notice);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

eclipse.utils.namespace('forms');
eclipse.utils.namespace('forms.notice');

eclipse.forms.Validation = _validate2.default;
eclipse.forms.notice = notice;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNsaXBzZS12YWxpZGF0aW9uLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzNhNTQ0ZjQxNWM1ZWM2MjNlYjkiLCJ3ZWJwYWNrOi8vL2xpYi9ub3RpY2UuanMiLCJ3ZWJwYWNrOi8vL2xpYi92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vZWNsaXBzZS12YWxpZGF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzM2E1NDRmNDE1YzVlYzYyM2ViOSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlQWxsTm90aWNlcyAoKSB7XHJcbiAgICAkKCcuZXYtbm90aWNlJykucmVtb3ZlKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZU5vdGljZSAobm90aWNlKSB7XHJcbiAgICBub3RpY2UucmVtb3ZlKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd05vdGljZSAoaWQsIGNsYXNzTmFtZSwgdGFyZ2V0LCB0ZXh0KSB7XHJcbiAgICB2YXIgbm90aWNlID0gJCgnPGRpdi8+Jyk7XHJcblxyXG4gICAgaWYgKHRhcmdldC5sZW5ndGggJiYgISQoJyMnICsgaWQpLmxlbmd0aCkge1xyXG4gICAgICAgIG5vdGljZS5hdHRyKCdpZCcsIGlkKTtcclxuICAgICAgICBub3RpY2UudGV4dCh0ZXh0KS5hZGRDbGFzcygnZXYtbm90aWNlICcgKyBjbGFzc05hbWUpLmFwcGVuZFRvKHRhcmdldC5jbG9zZXN0KCcuZXYtbm90aWNlLXBhcmVudCcpKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vdGljZS5hZGRDbGFzcygnZXYtbm90aWNlLS1hY3RpdmUnKTtcclxuICAgICAgICB9LCA0KTtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9ub3RpY2UuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQge2hpZGVBbGxOb3RpY2VzLCBzaG93Tm90aWNlfSBmcm9tICcuL25vdGljZSc7XHJcblxyXG5jb25zdCBFTUFJTF9SRUdFWFAgPSAnXig/PS57MSwyNTR9JCkoPz0uezEsNjR9QClbLSEjJCUmXFwnKisvMC05PT9BLVpeX2BhLXp7fH1+XSsoXFwuWy0hIyQlJlxcJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKSpAW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPyhcXC5bQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KSokJztcclxuXHJcbnZhciB2YWxpZGF0aW9uUHJvcHMgPSBbJ21pbkxlbmd0aCcsICdtYXhMZW5ndGgnLCAncGF0dGVybicsICdjaGVja2VkJywgJ3NlbGVjdGVkJywgJ2VxdWFsVG8nXSxcclxuICAgIGluc3RhbmNlcyA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0dGVybiAocGF0dGVybiwgc3RyLCBpZ25vcmVGbGFnKSB7XHJcbiAgICByZXR1cm4gKHN0ci5sZW5ndGggJiYgcGF0dGVybi5sZW5ndGgpID8gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnZycgKyAoaWdub3JlRmxhZyA/ICdpJyA6ICcnKSkudGVzdChzdHIpIDogbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWwgKHN0cikge1xyXG4gICAgcmV0dXJuIGlzUGF0dGVybihFTUFJTF9SRUdFWFAsIHN0ci50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxudmFyIHZhbGlkYXRvciA9IHtcclxuICAgIG1pbkxlbmd0aDogZnVuY3Rpb24gKGZpZWxkLCBsZW4pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZTogZmllbGQudmFsKCkubGVuZ3RoID49IGxlbixcclxuICAgICAgICAgICAgcGFyYW1ldGVyOiAnbWluTGVuZ3RoJ1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWF4TGVuZ3RoOiBmdW5jdGlvbiAoZmllbGQsIGxlbikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBmaWVsZC52YWwoKS5sZW5ndGggPD0gbGVuLFxyXG4gICAgICAgICAgICBwYXJhbWV0ZXI6ICdtYXhMZW5ndGgnXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBwYXR0ZXJuOiBmdW5jdGlvbiAoZmllbGQsIHBhdHRlcm4sIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodGhpc1twYXR0ZXJuXSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXNbcGF0dGVybl0oZmllbGQpLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyOiAncGF0dGVybidcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBpc1BhdHRlcm4ocGF0dGVybiwgZmllbGQudmFsKCksIG9wdGlvbnMuaWdub3JlRmxhZyksXHJcbiAgICAgICAgICAgIHBhcmFtZXRlcjogJ3BhdHRlcm4nXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBlcXVhbFRvOiBmdW5jdGlvbiAoZmllbGQsIHZhbCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBmaWVsZC52YWwoKSA9PT0gJCh2YWwpLnZhbCgpLFxyXG4gICAgICAgICAgICBwYXJhbWV0ZXI6ICdlcXVhbFRvJ1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgc3RyaW5nOiBmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICByZXR1cm4gZmllbGQudmFsKCkubGVuZ3RoO1xyXG4gICAgfSxcclxuICAgIGVtYWlsOiBmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICByZXR1cm4gaXNFbWFpbChmaWVsZC52YWwoKSk7XHJcbiAgICB9LFxyXG4gICAgbnVtYmVyOiBmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQoZmllbGQudmFsKCkpKSAmJiBpc0Zpbml0ZShwYXJzZUZsb2F0KGZpZWxkLnZhbCgpKSk7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tlZDogZnVuY3Rpb24gKGZpZWxkLCB2YWwsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgY291bnRlciA9IDAsXHJcbiAgICAgICAgICAgIHR5cGUgPSBmaWVsZFswXS50eXBlO1xyXG5cclxuICAgICAgICBpZiAodHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkLnByb3AoJ2NoZWNrZWQnKSA9PT0gdmFsLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyOiAnY2hlY2tlZCdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZpZWxkLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykgPT09IHZhbCkge1xyXG4gICAgICAgICAgICAgICAgY291bnRlciArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLmNoZWNrZWRMZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBjb3VudGVyID09PSBvcHRpb25zLmNoZWNrZWRMZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXI6ICdjaGVja2VkTGVuZ3RoJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMubWluQ2hlY2tlZExlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoY291bnRlciA8IG9wdGlvbnMubWluQ2hlY2tlZExlbmd0aCB8fCAhY291bnRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyOiAnbWluQ2hlY2tlZExlbmd0aCdcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLm1heENoZWNrZWRMZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPiBvcHRpb25zLm1heENoZWNrZWRMZW5ndGggfHwgIWNvdW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcjogJ21heENoZWNrZWRMZW5ndGgnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5taW5DaGVja2VkTGVuZ3RoICYmIG9wdGlvbnMubWF4Q2hlY2tlZExlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoY291bnRlciA8IG9wdGlvbnMubWluQ2hlY2tlZExlbmd0aCB8fCBjb3VudGVyID4gb3B0aW9ucy5tYXhDaGVja2VkTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXI6ICdyYW5nZUNoZWNrZWRMZW5ndGgnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZTogY291bnRlciA+IDAsXHJcbiAgICAgICAgICAgIHBhcmFtZXRlcjogJ2NoZWNrZWQnXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBzZWxlY3RlZDogZnVuY3Rpb24gKGZpZWxkLCB2YWwsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgY291bnRlciA9IDAsXHJcbiAgICAgICAgICAgIHR5cGUgPSBmaWVsZFswXS50eXBlO1xyXG5cclxuICAgICAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdC1vbmUnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogISFmaWVsZC52YWwoKSAmJiBmaWVsZC52YWwoKSAhPT0gJ3Vuc2VsZWN0YWJsZScsXHJcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXI6ICdzZWxlY3RlZCdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZpZWxkLmZpbmQoJ29wdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5wcm9wKCdzZWxlY3RlZCcpICYmICEkKHRoaXMpLnByb3AoJ2Rpc2FibGVkJykgJiYgJCh0aGlzKS52YWwoKSAhPT0gJ3Vuc2VsZWN0YWJsZScpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5zZWxlY3RlZExlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGNvdW50ZXIgPT09IG9wdGlvbnMuc2VsZWN0ZWRMZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXI6ICdzZWxlY3RlZExlbmd0aCdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLm1pblNlbGVjdGVkTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChjb3VudGVyIDwgb3B0aW9ucy5taW5TZWxlY3RlZExlbmd0aCB8fCAhY291bnRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyOiAnbWluU2VsZWN0ZWRMZW5ndGgnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5tYXhTZWxlY3RlZExlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoY291bnRlciA+IG9wdGlvbnMubWF4U2VsZWN0ZWRMZW5ndGggfHwgIWNvdW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcjogJ21heFNlbGVjdGVkTGVuZ3RoJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMubWluU2VsZWN0ZWRMZW5ndGggJiYgb3B0aW9ucy5tYXhTZWxlY3RlZExlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoY291bnRlciA8IG9wdGlvbnMubWluU2VsZWN0ZWRMZW5ndGggfHwgY291bnRlciA+IG9wdGlvbnMubWF4U2VsZWN0ZWRMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcjogJ3JhbmdlU2VsZWN0ZWRMZW5ndGgnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZTogY291bnRlciA+IDAsXHJcbiAgICAgICAgICAgIHBhcmFtZXRlcjogJ3NlbGVjdGVkJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0RWxlbWVudHMgKCkge1xyXG4gICAgdGhpcy5fZGVmYXVsdHMubmFtZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHNbaXRlbV0gPSB0aGlzLmZvcm0uZmluZChgW25hbWU9XCIke2l0ZW19XCJdYCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZEVtcHR5IChncm91cEluZGV4LCBncm91cCkge1xyXG4gICAgdmFyIGdyb3VwRWxlbWVudHMsIGRlZmF1bHRzID0gdGhpcy5fZGVmYXVsdHM7XHJcblxyXG4gICAgZ3JvdXBFbGVtZW50cyA9IHRoaXMuX2RlZmF1bHRzLm5hbWVzLmZpbHRlcigoZWwpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkZWZhdWx0cy5ydWxlc1tlbF0uZ3JvdXApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudHNbZWxdKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhncm91cEluZGV4KTtcclxuICAgICAgICAvLyBpZiAoZ3JvdXBJbmRleCA9PT0gMCkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhkZWZhdWx0cy5ydWxlc1tlbF0uZ3JvdXAgPT09IGdyb3VwSW5kZXgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4gZGVmYXVsdHMucnVsZXNbZWxdLmdyb3VwID09PSBncm91cEluZGV4ICYmICF0aGlzLmVsZW1lbnRzW2VsXS5oYXNDbGFzcygnZXYtdmFsaWQtaXRlbScpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhncm91cEVsZW1lbnRzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tGaWVsZCAoZmllbGQsIHJ1bGVzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkYXRpb25Qcm9wcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGxldCBwID0gdmFsaWRhdGlvblByb3BzW2ldLFxyXG4gICAgICAgICAgICByZXN1bHQ7XHJcblxyXG4gICAgICAgIGlmICghZmllbGQuaXMoJzpkaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3JbcF0gJiYgdHlwZW9mIHJ1bGVzW3BdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsaWRhdG9yW3BdKGZpZWxkLCBydWxlc1twXSwgcnVsZXMub3B0aW9ucyB8fCB7fSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7dmFsdWU6IHRydWV9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0dyb3VwIChncm91cEluZGV4LCBncm91cCkge1xyXG4gICAgdmFyIGdyb3VwRWxlbWVudHMsIG1lc3NhZ2UsIHJlc3VsdHMgPSB7fSwgZGVmYXVsdHMgPSB0aGlzLl9kZWZhdWx0cztcclxuXHJcbiAgICBpZiAoZGVmYXVsdHMuc3RvcE9uSW52YWxpZCAmJiB0aGlzLmlzU3RvcHBlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBncm91cEVsZW1lbnRzID0gdGhpcy5fZGVmYXVsdHMubmFtZXMuZmlsdGVyKChlbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0cy5ydWxlc1tlbF0uZ3JvdXAgPT09IGdyb3VwSW5kZXg7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZ3JvdXBFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIHZhciBydWxlcyA9IGRlZmF1bHRzLnJ1bGVzW2VsXSxcclxuICAgICAgICAgICAgcmVzdWx0ID0gY2hlY2tGaWVsZC5jYWxsKHRoaXMsIHRoaXMuZWxlbWVudHNbZWxdLCBydWxlcyk7XHJcblxyXG4gICAgICAgIHJlc3VsdHNbZWxdID0gcmVzdWx0O1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGdyb3VwLmNvdW50VmFsaWQgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50c1tlbF0uZGF0YSgnZXYtcG9zc2libHktdmFsaWQnLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2VsXS5kYXRhKCdldi1wb3NzaWJseS1lcnJvcicsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGdyb3VwLmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmIChncm91cC5jb3VudFZhbGlkID49IGdyb3VwLnJlcXVpcmVkRmllbGRzKSB7XHJcbiAgICAgICAgZ3JvdXAuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZ3JvdXBFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50c1tlbF0uZGF0YSgnZXYtcG9zc2libHktdmFsaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1tlbF0uYWRkQ2xhc3MoJ2V2LXZhbGlkLWl0ZW0nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZ3JvdXBFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNbZWxdLmRhdGEoJ2V2LXBvc3NpYmx5LWVycm9yJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRm9ybVZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1tlbF0uYWRkQ2xhc3MoJ2V2LWludmFsaWQtaXRlbScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZGVmYXVsdHMubWVzc2FnZXNbZWxdICYmIGRlZmF1bHRzLm1lc3NhZ2VzW2VsXVtyZXN1bHRzW2VsXS5wYXJhbWV0ZXJdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZSAmJiBkZWZhdWx0cy5zaG93Tm90aWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dOb3RpY2UoTWF0aC5yYW5kb20oKSwgJycsIHRoaXMuZWxlbWVudHNbZWxdLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5maXJzdEludmFsaWRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0SW52YWxpZEZpZWxkID0gdGhpcy5lbGVtZW50c1tlbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RJbnZhbGlkRmllbGQuYWRkQ2xhc3MoJ2V2LWludmFsaWQtaXRlbS0tZmlyc3QnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0cy5zY3JvbGxUb0ludmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVjbGlwc2UuRE9NLnNjcm9sbFBhZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdEludmFsaWRGaWVsZC5jbG9zZXN0KCcuZXYtbm90aWNlLXBhcmVudCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRzLnNjcm9sbENvcnJlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHMuc2Nyb2xsT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRzLnN0b3BPbkludmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWYWxpZGF0aW9uIGVycm9yLiBTdG9wcGVkIG9uIGludmFsaWQgZ3JvdXAnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHNbZWxdLmFkZENsYXNzKCdldi12YWxpZC1pdGVtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0VsZW1lbnRzICgpIHtcclxuICAgIC8vIHRoaXMuZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB0aGlzLl9kZWZhdWx0cy5uYW1lcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZGVmYXVsdHMgPSB0aGlzLl9kZWZhdWx0cyxcclxuICAgICAgICAgICAgICAgIHJ1bGVzID0gZGVmYXVsdHMucnVsZXNbZWxdLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY2hlY2tGaWVsZC5jYWxsKHRoaXMsIHRoaXMuZWxlbWVudHNbZWxdLCBydWxlcyksXHJcbiAgICAgICAgICAgICAgICBncm91cCwgbWVzc2FnZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcnVsZXMuZ3JvdXAgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBncm91cCA9IGRlZmF1bHRzLmdyb3Vwc1tydWxlcy5ncm91cF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFncm91cC5pc1ZhbGlkICYmICFncm91cC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tHcm91cC5jYWxsKHRoaXMsIHJ1bGVzLmdyb3VwLCBncm91cCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdyb3VwLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaW5kRW1wdHkuY2FsbCh0aGlzLCBydWxlcy5ncm91cCwgZ3JvdXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRm9ybVZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0cy5zdG9wT25JbnZhbGlkICYmIHRoaXMuaXNTdG9wcGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcHBlZCBvbiBpbnZhbGlkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHNbZWxdLmFkZENsYXNzKCdldi1pbnZhbGlkLWl0ZW0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGRlZmF1bHRzLm1lc3NhZ2VzW2VsXSAmJiBkZWZhdWx0cy5tZXNzYWdlc1tlbF1bcmVzdWx0LnBhcmFtZXRlcl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlICYmIGRlZmF1bHRzLnNob3dOb3RpY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd05vdGljZShNYXRoLnJhbmRvbSgpLCAnJywgdGhpcy5lbGVtZW50c1tlbF0sIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZpcnN0SW52YWxpZEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RJbnZhbGlkRmllbGQgPSB0aGlzLmVsZW1lbnRzW2VsXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdEludmFsaWRGaWVsZC5hZGRDbGFzcygnZXYtaW52YWxpZC1pdGVtLS1maXJzdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRzLnNjcm9sbFRvSW52YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWNsaXBzZS5ET00uc2Nyb2xsUGFnZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0SW52YWxpZEZpZWxkLmNsb3Nlc3QoJy5ldi1ub3RpY2UtcGFyZW50JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHMuc2Nyb2xsQ29ycmVjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0cy5zY3JvbGxPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0cy5zdG9wT25JbnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsaWRhdGlvbiBlcnJvci4gU3RvcHBlZCBvbiBpbnZhbGlkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2VsXS5hZGRDbGFzcygnZXYtdmFsaWQtaXRlbScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0R3JvdXBzICgpIHtcclxuICAgIHRoaXMuX2RlZmF1bHRzLmdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xyXG4gICAgICAgIGdyb3VwLmlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICBncm91cC5jb3VudFZhbGlkID0gMDtcclxuICAgICAgICBncm91cC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihmb3JtLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGRlZmF1bHRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbiAgICAgICAgZGVmYXVsdHMucnVsZXMgPSB7fTtcclxuICAgICAgICBkZWZhdWx0cy5uYW1lcyA9IFtdO1xyXG4gICAgICAgIGRlZmF1bHRzLmdyb3VwcyA9IFtdO1xyXG4gICAgICAgIGRlZmF1bHRzLm1lc3NhZ2VzID0ge307XHJcbiAgICAgICAgZGVmYXVsdHMuc2Nyb2xsVG9JbnZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBkZWZhdWx0cy5zY3JvbGxDb3JyZWN0aW9uID0gMDtcclxuICAgICAgICBkZWZhdWx0cy5zY3JvbGxPcHRpb25zID0ge307XHJcbiAgICAgICAgZGVmYXVsdHMuc2hvd05vdGljZSA9IHRydWU7XHJcbiAgICAgICAgZGVmYXVsdHMuc3RvcE9uSW52YWxpZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChlY2xpcHNlLmhlbHBlcnMuZ2V0Q2xhc3Mob3B0aW9ucykgPT09ICdPYmplY3QnKSB7XHJcbiAgICAgICAgICAgICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRzLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xyXG4gICAgICAgIHRoaXMuZmlyc3RJbnZhbGlkRmllbGQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNGb3JtVmFsaWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19kZWZhdWx0cycsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW5pdEVsZW1lbnRzLmNhbGwodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybS5hdHRyKCdub3ZhbGlkYXRlJywgJ25vdmFsaWRhdGUnKTtcclxuXHJcbiAgICAgICAgaW5zdGFuY2VzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoZSkge1xyXG4gICAgICAgIHRoaXMuZSA9IGU7XHJcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzRm9ybVZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaGlkZUFsbE5vdGljZXMoKTtcclxuICAgICAgICBcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmVsZW1lbnRzKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2VsXS5yZW1vdmVDbGFzcygnZXYtaW52YWxpZC1pdGVtIGV2LXZhbGlkLWl0ZW0nKS5kYXRhKCdldi1wb3NzaWJseS1lcnJvcicsICcnKS5kYXRhKCdldi1wb3NzaWJseS12YWxpZCcsICcnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5maXJzdEludmFsaWRGaWVsZCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9kZWZhdWx0cy5ncm91cHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc2V0R3JvdXBzLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGVja0VsZW1lbnRzLmNhbGwodGhpcyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmlzRm9ybVZhbGlkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWxlZ2F0ZVN1Ym1pdChlKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gVmFsaWRhdGlvbi5maW5kSW5zdGFuY2UoZSk7XHJcblxyXG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2UudmFsaWRhdGUoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGZpbmRJbnN0YW5jZShlKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRGb3JtID0gJChlLnRhcmdldCkuY2xvc2VzdCgnW2RhdGEtZXYtZnJvbV0nKTtcclxuXHJcbiAgICAgICAgaWYgKCFjdXJyZW50Rm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFZhbGlkYXRpb24uaW5zdGFuY2VzKCkuZmlsdGVyKChpbnN0YW5jZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2UuZm9ybS5hdHRyKCdpZCcpID09PSBjdXJyZW50Rm9ybS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIH0pWzBdO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGluc3RhbmNlcygpIHtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2VzO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvdmFsaWRhdGUuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgVmFsaWRhdGlvbiBmcm9tICcuL2xpYi92YWxpZGF0ZSc7XHJcbmltcG9ydCAqIGFzIG5vdGljZSBmcm9tICcuL2xpYi9ub3RpY2UnO1xyXG5cclxuZWNsaXBzZS51dGlscy5uYW1lc3BhY2UoJ2Zvcm1zJyk7XHJcbmVjbGlwc2UudXRpbHMubmFtZXNwYWNlKCdmb3Jtcy5ub3RpY2UnKTtcclxuXHJcbmVjbGlwc2UuZm9ybXMuVmFsaWRhdGlvbiA9IFZhbGlkYXRpb247XHJcbmVjbGlwc2UuZm9ybXMubm90aWNlID0gbm90aWNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZWNsaXBzZS12YWxpZGF0aW9uLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7O0FDaEVBO0FBQ0E7Ozs7QUFDQTtBQUlBO0FBSUE7QUFSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDckJBO0FBQ0E7Ozs7Ozs7QUFRQTtBQUlBO0FBQ0E7QUFaQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQXhKQTtBQUNBO0FBMEpBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQTlFQTs7Ozs7OztBQ3ZXQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9