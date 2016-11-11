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
    'expirationMonth':1,
    'expirationYear':2017,
    'cvv':666

};

var prospect= {
    'customerFirstName' : casual.first_name,
    'customerLastName' : casual.last_name,
    'customerEmail' : casual.email,
    'billingAddress' :casual.address1,
    'billingCity' : casual.city,
    'billingState' : casual.state,
    'billingZip' : 3212,
    'billingCountry' : casual.country_code,
    'shippingFirstName' : casual.first_name,
    'shippingLastName' : casual.last_name,
    'shippingAddress' : casual.address1,
    'shippingCity' : casual.city,
    'shippingState' : casual.state,
    'shippingZip' : 3212,
    'shippingCountry' : casual.country_code,
};


var res = client.submitTransaction(order,creditCard,prospect).then(function (transaction) {
    console.log("Transaction ID: "+transaction.transactionId)
});
