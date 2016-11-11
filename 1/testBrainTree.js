var Gateways = require('42-cent');

credentials = {
    "MERCHANT_ID": "pdgdk8cfrnntxcn9",
    "PUBLIC_KEY" : "x54f55sf8vs52khd",
    "PRIVATE_KEY" : "55501d316920c499675e1ed642bcbc22"
};

var client = Gateways.use('Braintree', credentials);
var casual = require('casual');

var order = {'amount':100};
var creditCard = {
    'creditCardNumber':4111111111111111,
    'expirationMonth':11,
    'expirationYear':2018,
    'cvv':123

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
    console.log("Transaction ID"+transaction.transactionId)
});
console.log(res);

//Gateways.registerGateway('GatewayName', factoryFunction);
