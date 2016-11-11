var Gateways = require('42-cent');
var casual = require('casual');

credentials = {
    "PUBLIC_KEY": "pkey_test_55v93rl1xl0h83t4uic",
    "SECRET_KEY" : "skey_test_55v93rl2hr1x38ynvlz"
};

var client = Gateways.use('Omise', credentials);

var order = {'amount':10};
var creditCard = {
    'creditCardNumber':4242424242424242,
    'expirationMonth':11,
    'expirationYear':2016,
    'cvv':314

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
        'shippingCountry' : casual.country_code
        //'name' : 'test'
    };

var other = {
    'description' : 'test transaction',
    'email' : 'test@test.com'
    //'name' : 'testuser'
}

client.submitTransaction(order,creditCard,prospect,other).then(function (transaction) {
    console.log("Transaction ID: "+transaction.transactionId)
});

