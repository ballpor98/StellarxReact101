# node.js Stellar-SDK Guide

[Getting Started](#Getting-Started)  
[Create Account](#Create-Account)  
[Payment](#Payment)  
[Change Trust](#Change-Trust)  
[Query](#Query)  

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
Ref: https://stellar.github.io/js-stellar-sdk/index.html
____

## Create Account

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

## Payment

code

```javascript
const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
StellarSdk.Network.useTestNetwork();

const sourceKeypair = ""; //TODO
const destinationKeypair = ""; //TODO

const nativeAsset = StellarSdk.Asset.native();
/*
new Asset('code','issuer');
ref: https://stellar.github.io/js-stellar-sdk/Asset.html
*/
const customAsset = new StellarSdk.Asset(
    'ACOIN',
    'GABEW3JTHAGINJEFB43HOWMSBVHW72FOUEP2NGVPLZUXEJODI3K7DCKT'
);

const run = async () => {
    let options = {
        destination: "TODO",
        asset: "TODO",
        amount: "TODO"
    };
    let xdrOperation = StellarSdk.Operation.payment(options);
    //TODO
}
run();
```

____

## Change Trust

code

```javascript
const run = async () => {
    let options = {
        asset: "TODO"
    };
    let xdrOperation = StellarSdk.Operation.changeTrust(options);
    //TODO
}
run();
```

____

## Query

Query account code

```javascript
const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
StellarSdk.Network.useTestNetwork();

const sourceKeypair = StellarSdk.Keypair.fromSecret(
    'SCSY3LLR6GMUO5DPSW6FP2RENBN7TOTII55R4MV3Y7FC2JKQWCDV2HZU'
  );

const run = async () => {
  console.log(sourceKeypair.publicKey());
  let queryResult = await server
  .accounts()
  .accountId(sourceKeypair.publicKey())
  .call();
  console.log(queryResult);
}
run();

```

Operations for Account

```javascript
  let queryResult = await server
  .operations()
  .forAccount(sourceKeypair.publicKey())
  .order('asc') //asc|desc
  .limit('1')
  .call()
```

Transactions for Account

```javascript
  let queryResult = await server
  .accounts()
  .accountId(sourceKeypair.publicKey())
  .call();
```