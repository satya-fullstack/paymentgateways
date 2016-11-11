var Gateways = require('42-cent');
var casual = require('casual');

credentials = {
    "API_SECRET": "sk_test_jzk7BX4KKVZUBBlkfh3hXoDd",
};

var client = Gateways.use('Stripe', credentials);

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
    };

var other = {
    'description' : 'test transaction'
}

client.submitTransaction(order,creditCard,prospect,other).then(function (transaction) {
    console.log("Transaction ID: "+transaction.transactionId)
});

