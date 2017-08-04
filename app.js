var express = require('express');
var bodyParser = require('body-parser')
var randomNumber = require('./randomNumber');
var convertToDollars = require('./convertToDollars');
var moduleThree = require('./moduleThree');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));

var port = 3000;

app.use(express.static('public'));

app.get('/moduleMadness', function(req,res){
    console.log('Module Madness hit');
    
    var output = {
        string: moduleThree.accountString,
        dollar: moduleThree.randomDollar(156301, 156301)
    }
    res.send(output);
});

app.post('/random-balance', function (req, res) {
    console.log('random-balance hit');

    var min = req.body.min;
    var max = req.body.max;

    var output = {
        string: moduleThree.accountString,
        dollar: moduleThree.randomDollar(156301, 156301)
    }
    res.send(output);
});


app.listen(port, function(){
    console.log('Listening on port', port);    
});

// console.log(randomNumber(100, 1000000));
// console.log(convertToDollars(123456));

// console.log(moduleThree.randomDollar(100, 10000));


