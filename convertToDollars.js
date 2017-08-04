function convertToDollars(number) {
    // var result = '$';
    // result += number.toFixed(2);

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });

    return formatter.format(number);

}

module.exports = convertToDollars;