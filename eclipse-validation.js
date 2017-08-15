'use strict';

import eclipse from 'eclipse';

import Validation from './lib/validate';
import * as notice from './lib/notice';

eclipse.utils.namespace('forms');
eclipse.utils.namespace('forms.notice');

eclipse.forms.Validation = Validation;
eclipse.forms.notice = notice;
