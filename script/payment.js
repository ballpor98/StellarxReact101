const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
StellarSdk.Network.useTestNetwork();

const sourceKeypair = StellarSdk.Keypair.fromSecret(
    'SCSY3LLR6GMUO5DPSW6FP2RENBN7TOTII55R4MV3Y7FC2JKQWCDV2HZU'
  );
const destinationKeypair = StellarSdk.Keypair.fromSecret(
    'SCWWKFHOKC45P2F57PTMWHKFN7RNFJDPZ4X53UDXNB6CZ35AYZF7ZN6Z'
  );
// const asset = new stellar.Asset(
//     'KOUPON1', //Asset name
//     'GDJ6DWZPKOXDFXZ6K6FIGIH4DADWA2VS4QLKFCOCRCZRYOI5KR2RAGHQ' //Issuer pubkey
// )
const asset = StellarSdk.Asset.native();
const amount = "10";

const run = async () => {
    console.log(destinationKeypair.secret());
    let sourceAccount = await server.loadAccount(sourceKeypair.publicKey());
    let transaction = new StellarSdk.TransactionBuilder(sourceAccount);
    let options = {
        destination: destinationKeypair.publicKey(),
        asset: asset,
        amount: amount
    };
    let xdrOperation = StellarSdk.Operation.payment(options);
    transaction = transaction.addOperation(xdrOperation);

    transaction = transaction.build();
    transaction.sign(sourceKeypair);

    let transactionResult = await server.submitTransaction(transaction);
        console.log(JSON.stringify(transactionResult, null, 2));
}
run();