'use strict';

$(document).ready(() => {
    var v = new eclipse.forms.Validation($('#form'), {
        stopOnInvalid: false,
        groups: [
            {
                requiredFields: 2
            },
            {
                requiredFields: 1
            }
        ],
        names: ['name', 'tel', 'email', 'password', 'password_confirm', 'num', 'license', 'rooms', 'color', 'number', 'animal', 'food', 'book'],
        rules: {
            name: {
                minLength: 3,
                maxLength: 6,
                pattern: 'string',
                empty: 1,
                group: 0,
                checkIfChanged: true
            },
            tel: {
                minLength: 1,
                maxLength: 1,
                pattern: '\\d{1,}',
                group: 0
            },
            email: {
                pattern: 'email',
                group: 0
            },
            password: {
                pattern: 'string',
                equalTo: '[name="password_confirm"]'
            },
            password_confirm: {
                pattern: 'string'
            },
            num: {
                checkIfChanged: true,
                pattern: 'hardNumber'
            },
            license: {
                checked: true
            },
            rooms: {
                checked: true
            },
            color: {
                checked: true
            },
            number: {
                checked: true,
                options: {
                    checkedLength: 2
                }
            },
            animal: {
                selected: true
            },
            food: {
                selected: true,
                group: 1
            },
            book: {
                selected: true,
                options: {
                    minSelectedLength: 1,
                    maxSelectedLength: 3
                },
                group: 1
            }
        },
        messages: {
            name: {
                minLength: 'Минимальная длина имени 3 символа',
                maxLength: 'Максимальная длина имени 6 символов',
                pattern: 'Введите корректный формат имени',
                empty: 'Required'
            },
            tel: {
                minLength: 'Минимальная длина телефона 1 символ',
                maxLength: 'Максимальная длина телефона 1 символ',
                pattern: 'Введите корректный формат телефона (1)'
            },
            email: {
                pattern: 'Введите корректный формат e-mail (example@mail.com)'
            },
            num: {
                pattern: 'Must be number!!!'
            },
            license: {
                checked: 'Это поле должно быть обязательно отмечено'
            },
            color: {
                checked: 'Выберете хотя бы один цвет'
            },
            number: {
                checked: 'Выберете номер',
                checkedLength: 'Необходимо выбрать два номера'
            },
            animal: {
                selected: 'Необходимо выбрать животное'
            },
            food: {
                selected: 'Необходимо выбрать еду'
            },
            book: {
                selected: 'Необходимо выбрать книгу',
                minSelectedLength: 'Выберете минимум одну книгу',
                maxSelectedLength: 'Вы не можете выбрать более трёх книг'
            }
        }
    });
    $('body').on('submit', '#form', function (e) {
        // e.preventDefault();
        eclipse.forms.Validation.delegateSubmit(e)
        // v.validate(e);

    });
    // $(':input').blur(function (e) {
    //     v.validate(e);
    // });
    // $(':input:not(button[type="submit"])').on('blur', function (e) {
    //     v.validateField(e, $(this));
    // });
    // $('[name="name"], [name="tel"], [name="email"]').on('change', function (e) {
    //     v.validateGroupField(e, $(this), 0);
    // });
    $('[name="name"], [name="tel"], [name="email"]').on('input', function (e) {
        v.validateField(e, $(this));
    });
    // $('[name="number"]').on('change', function (e) {
    //     v.validateField(e, $(this));
    // });
});
