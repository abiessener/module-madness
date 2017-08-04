$(document).ready(function () {
    $.ajax({
        method: 'GET',
        url: '/moduleMadness',
        success: function (response) {
            $('body').append('<p>' + response.string + '<br>'  + response.dollar + '</p>');
        }
    })
});