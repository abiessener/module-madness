$(document).ready(function () {
    $.ajax({
        method: 'GET',
        url: '/moduleMadness',
        success: function (response) {
            $('#moduleMadnessDiv').append('<p>' + response.string + '<br>' + response.dollar + '</p>');
        }
    });



    $('#submitButton').on('click', function () {
        //get the input and stick it in userInput
        var userInput = {};

        userInput.min = $('#inputMin').val();
        userInput.max = $('#inputMax').val();
        $.ajax({
            method: 'POST',
            url: '/random-balance',
            data: userInput,
            success: function (response) {
                $('#userResultDiv').append('<p>' + response.string + '<br>' + response.dollar + '</p>');
                $('#inputMin').val('');
                $('#inputMax').val('');
            }
        });
    })
});