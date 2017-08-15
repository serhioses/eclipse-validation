'use strict';

export function hideAllNotices () {
  $('.ev-notice').remove();
};

export function hideNotice (notice) {
  notice.remove();
};

export function showNotice (id, className, target, text) {
  var notice = $('<div/>');

  if (target.length && !$('#' + id).length) {
    notice.attr('id', id);
    notice.text(text).addClass('ev-notice ' + className).appendTo(target.closest('.ev-notice-parent'));

    setTimeout(() => {
      notice.addClass('ev-notice--active');
    }, 4);
  }
};
