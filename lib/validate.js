'use strict';

import {hideAllNotices, showNotice} from './notice';

const EMAIL_REGEXP = '^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&\'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&\'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$';

var validationProps = ['minLength', 'maxLength', 'pattern', 'checked', 'selected', 'equalTo'],
    instances = [];

export function isPattern (pattern, str, ignoreFlag) {
    return (str.length && pattern.length) ? new RegExp(pattern, 'g' + (ignoreFlag ? 'i' : '')).test(str) : null;
}

export function isEmail (str) {
    return isPattern(EMAIL_REGEXP, str.toLowerCase());
}

var validator = {
    minLength: function (field, len) {
        return {
            value: field.val().length >= len,
            parameter: 'minLength'
        };
    },
    maxLength: function (field, len) {
        return {
            value: field.val().length <= len,
            parameter: 'maxLength'
        };
    },
    pattern: function (field, pattern, options) {
        if (this[pattern]) {
            return {
                value: this[pattern](field),
                parameter: 'pattern'
            };
        }

        return {
            value: isPattern(pattern, field.val(), options.ignoreFlag),
            parameter: 'pattern'
        };
    },
    equalTo: function (field, val) {
        return {
            value: field.val() === $(val).val(),
            parameter: 'equalTo'
        };
    },
    string: function (field) {
        return field.val().length;
    },
    email: function (field) {
        return isEmail(field.val());
    },
    number: function (field) {
        return !isNaN(parseFloat(field.val())) && isFinite(parseFloat(field.val()));
    },
    checked: function (field, val, options) {
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
    selected: function (field, val, options) {
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

function initElements () {
    this._defaults.names.forEach((item) => {
        this.elements[item] = this.form.find(`[name="${item}"]`);
    });
}

function findEmpty (groupIndex, group) {
    var groupElements, defaults = this._defaults;

    groupElements = this._defaults.names.filter((el) => {
        // console.log(defaults.rules[el].group);
        // console.log(this.elements[el]);
        // console.log(groupIndex);
        // if (groupIndex === 0) {
        //     console.log(defaults.rules[el].group === groupIndex);
        // }
        return defaults.rules[el].group === groupIndex && !this.elements[el].hasClass('ev-valid-item');
    });
    console.log(groupElements);
}

function checkField (field, rules) {
    for (let i = 0; i < validationProps.length; i += 1) {
        let p = validationProps[i],
            result;

        if (!field.is(':disabled')) {
            if (validator[p] && typeof rules[p] !== 'undefined') {
                result = validator[p](field, rules[p], rules.options || {});

                if (!result.value) {
                    return result;
                }
            }
        }
    }

    return {value: true};
}

function checkGroup (groupIndex, group) {
    var groupElements, message, results = {}, defaults = this._defaults;

    if (defaults.stopOnInvalid && this.isStopped) {
        return;
    }

    groupElements = this._defaults.names.filter((el) => {
        return defaults.rules[el].group === groupIndex;
    });
    
    groupElements.forEach((el) => {
        var rules = defaults.rules[el],
            result = checkField.call(this, this.elements[el], rules);

        results[el] = result;

        if (result.value) {
            group.countValid += 1;
            this.elements[el].data('ev-possibly-valid', true);
        } else {
            this.elements[el].data('ev-possibly-error', true);
        }
    });

    group.checked = true;

    if (group.countValid >= group.requiredFields) {
        group.isValid = true;
        
        groupElements.forEach((el) => {
            if (this.elements[el].data('ev-possibly-valid')) {
                this.elements[el].addClass('ev-valid-item');
            }
        });
    } else {
        this.e.preventDefault();

        try {
            groupElements.forEach((el) => {
                if (this.elements[el].data('ev-possibly-error')) {
                    this.isFormValid = false;
                    this.elements[el].addClass('ev-invalid-item');

                    message = defaults.messages[el] && defaults.messages[el][results[el].parameter];

                    if (message && defaults.showNotice) {
                        showNotice(Math.random(), '', this.elements[el], message);
                    }

                    if (!this.firstInvalidField) {
                        this.firstInvalidField = this.elements[el];
                        this.firstInvalidField.addClass('ev-invalid-item--first');
                        
                        if (defaults.scrollToInvalid) {
                            eclipse.DOM.scrollPage(
                                this.firstInvalidField.closest('.ev-notice-parent'),
                                defaults.scrollCorrection,
                                defaults.scrollOptions
                            );
                        }
                    }

                    if (defaults.stopOnInvalid) {
                        this.isStopped = true;

                        throw new Error('Validation error. Stopped on invalid group');
                    }
                } else {
                    this.elements[el].addClass('ev-valid-item');
                }
            });
        } catch (err) {
            console.log(err.message);
        }
    }
}

function checkElements () {
    // this.e.preventDefault();
    try {
        this._defaults.names.forEach((el) => {
            var defaults = this._defaults,
                rules = defaults.rules[el],
                result = checkField.call(this, this.elements[el], rules),
                group, message;

            if (typeof rules.group !== 'undefined') {
                group = defaults.groups[rules.group];

                if (!group.isValid && !group.checked) {
                    checkGroup.call(this, rules.group, group);
                } else if (group.isValid) {
                    findEmpty.call(this, rules.group, group);
                }
            } else {
                if (!result.value) {
                    this.isFormValid = false;

                    if (defaults.stopOnInvalid && this.isStopped) {
                        throw new Error('Stopped on invalid');
                    }
                    this.e.preventDefault();
                    this.elements[el].addClass('ev-invalid-item');

                    message = defaults.messages[el] && defaults.messages[el][result.parameter];

                    if (message && defaults.showNotice) {
                        showNotice(Math.random(), '', this.elements[el], message);
                    }

                    if (!this.firstInvalidField) {
                        this.firstInvalidField = this.elements[el];
                        this.firstInvalidField.addClass('ev-invalid-item--first');

                        if (defaults.scrollToInvalid) {
                            eclipse.DOM.scrollPage(
                                this.firstInvalidField.closest('.ev-notice-parent'),
                                defaults.scrollCorrection,
                                defaults.scrollOptions
                            );
                        }
                    }
                    
                    if (defaults.stopOnInvalid) {
                        this.isStopped = true;

                        throw new Error('Validation error. Stopped on invalid');
                    }
                } else {
                    this.elements[el].addClass('ev-valid-item');
                }
            }
        });
    } catch (err) {
        console.log(err.message);
    }
}

function resetGroups () {
    this._defaults.groups.forEach((group) => {
        group.isValid = false;
        group.countValid = 0;
        group.checked = false;
    });
}

export default class Validation {
    constructor(form, options) {
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
            get: function () {
                return defaults;
            }
        });

        initElements.call(this);

        this.form.attr('novalidate', 'novalidate');

        instances.push(this);
    }

    validate(e) {
        this.e = e;
        this.isStopped = false;
        this.isFormValid = true;

        hideAllNotices();
        
        Object.keys(this.elements).forEach((el) => {
            this.elements[el].removeClass('ev-invalid-item ev-valid-item').data('ev-possibly-error', '').data('ev-possibly-valid', '');
        });

        this.firstInvalidField = null;

        if (this._defaults.groups.length) {
            resetGroups.call(this);
        }

        checkElements.call(this);

        return this.isFormValid;
    }

    static delegateSubmit(e) {
        var instance = Validation.findInstance(e);

        if (instance) {
            return instance.validate(e);
        }
    }
    static findInstance(e) {
        var currentForm = $(e.target).closest('[data-ev-from]');

        if (!currentForm.length) {
            return;
        }

        return Validation.instances().filter((instance) => {
            return instance.form.attr('id') === currentForm.attr('id');
        })[0];
    }
    static instances() {
        return instances;
    }
}
