



var Gateways = require('42-cent');
var Prospect = require('42-cent-model').Prospect;

var credentials = {
    API_LOGIN_ID: '47B8S2nQd4e',
    TRANSACTION_KEY: '7jww4WZ643Z9nhnN'
};


var client = Gateways.use('Authorize.Net', credentials);

var order = {'amount':2};

var creditCard = {
    'creditCardNumber':4111111111111111,
    'expirationMonth':12,
    'expirationYear':2017,
    'cvv':123

};

var prospect = {};

var res = client.submitTransaction(order,creditCard,prospect);
console.log(res);