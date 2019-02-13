# Use node Stellar-SDK

[Getting Started](#Getting-Started)  
[Create Account](#create_account.js)  


## Getting Started

Run command below

```bash
node query_account.js
```

this script will return stellar account information from this account

```string
GABEW3JTHAGINJEFB43HOWMSBVHW72FOUEP2NGVPLZUXEJODI3K7DCKT
```

next step we will use others functions from stellar-SDK
____

## create_account.js

Step

1. We need 1 stellar account to create another stellar account
2. Generate new keypair(Identifier) for new account
3. Create transaction that have create account operation

code

```javascript
const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
StellarSdk.Network.useTestNetwork();
```

```javascript
const sourceKeypair = StellarSdk.Keypair.fromSecret(''); //create keypair object from secret key
const destinationKeypair = StellarSdk.Keypair.random(); //Generate new keypair
const amount = "10"; // startingBalance

const run = async () => {
    console.log("publicKey: "+destinationKeypair.publicKey());
    console.log("secretKey: "+destinationKeypair.secret());
    // print new keypair
    let sourceAccount = await server.loadAccount(sourceKeypair.publicKey());
    //get account object
    let transaction = new StellarSdk.TransactionBuilder(sourceAccount); // Create transaction from account object
    let options = {
        destination: destinationKeypair.publicKey(),
        startingBalance: amount
    }; // Create operation parameter
    let xdrOperation = StellarSdk.Operation.createAccount(options); // create operation
    transaction = transaction.addOperation(xdrOperation);//add operation to transaction
    transaction = transaction.build();
    transaction.sign(sourceKeypair);

    let transactionResult = await server.submitTransaction(transaction);
        console.log(JSON.stringify(transactionResult, null, 2));
}
run();
```

____

## Payment.js

Step

1. We need 1 stellar account to create another stellar account
2. Generate new keypair(Identifier) for new account
3. Create transaction that have create account operation

code

```javascript
const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
StellarSdk.Network.useTestNetwork();

const sourceKeypair = "";
const destinationKeypair = "";

const nativeAsset = StellarSdk.Asset.native();
const customAsset = new stellar.Asset(
    'KOUPON1', //Asset name
    'GDJ6DWZPKOXDFXZ6K6FIGIH4DADWA2VS4QLKFCOCRCZRYOI5KR2RAGHQ' //Issuer public key
)
const amount = "";

const run = async () => {
    let options = {
        destination: destinationKeypair.publicKey(),
        asset: nativeAsset,
        amount: amount
    };
    //TODO
}
run();
```

## example

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds
