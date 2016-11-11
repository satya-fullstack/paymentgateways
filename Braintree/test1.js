var braintree = require("braintree");

var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: "pdgdk8cfrnntxcn9",
    publicKey: "x54f55sf8vs52khd",
    privateKey: "55501d316920c499675e1ed642bcbc22"
});


gateway.clientToken.generate({}, function (err, response) {
    console.log(response.clientToken);
});

