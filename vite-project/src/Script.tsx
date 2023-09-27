import * as $ from 'jquery';

// Wait for the DOM to be ready before manipulating it
$(document).ready(function () {
    // Loop through elements with class "set-bg"
    $('.set-bg').each(function () {
        const bg = $(this).data('setbg');
        $(this).css('background-image', `url(${bg})`);
    });
});
