$(document).ready(function () {
    $.ajax({
        method: 'GET',
        url: '/moduleMadness',
        success: function (response) {
            $('body').append('<p>' + response.string + '<br>'  + response.dollar + '</p>');
        }
    });

    var userInput = {
        min: 432,
        max: 7894523
    };

    $.ajax({
        method: 'POST',
        url: '/random-balance',
        data: userInput,
        success: function (response) {
            $('body').append('<p>' + response.string + '<br>'  + response.dollar + '</p>');
        }
    })    
});