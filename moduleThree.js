var randomNumber = require('./randomNumber');
var convertToDollars = require('./convertToDollars');

function randomDollar(min,max) {
    return convertToDollars(randomNumber(min, max));
}

module.exports = {
    randomDollar: randomDollar,
    accountString: 'Account balance: \n'
}