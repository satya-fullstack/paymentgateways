var Gateways = require('42-cent');
var casual = require('casual');
var credentials = {
    API_LOGIN_ID: '47B8S2nQd4e',
    TRANSACTION_KEY: '7jww4WZ643Z9nhnN'
};


var client = Gateways.use('Authorize.Net', credentials);


var order = {'amount':100};
var creditCard = {
    'creditCardNumber':4012888818888,
    'expirationMonth':'1',
    'expirationYear':2017,
    'cvv':666

};

var res = client.submitTransaction(order,creditCard).then(function (transaction) {
    console.log("Transaction ID"+transaction.transactionId)
});
console.log(res);