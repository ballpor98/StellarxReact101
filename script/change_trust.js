const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
StellarSdk.Network.useTestNetwork();

const sourceKeypair = StellarSdk.Keypair.fromSecret(
    'SCSY3LLR6GMUO5DPSW6FP2RENBN7TOTII55R4MV3Y7FC2JKQWCDV2HZU'
  );
const asset = new StellarSdk.Asset(
    'USD', //Asset name
    'GDJ6DWZPKOXDFXZ6K6FIGIH4DADWA2VS4QLKFCOCRCZRYOI5KR2RAGHQ' //Issuer pubkey
  )

const run = async () => {
    let sourceAccount = await server.loadAccount(sourceKeypair.publicKey());
    let transaction = new StellarSdk.TransactionBuilder(sourceAccount);
    let options = {
        asset: asset
    };
    let xdrOperation = StellarSdk.Operation.changeTrust(options);
    transaction = transaction.addOperation(xdrOperation);

    transaction = transaction.build();
    transaction.sign(sourceKeypair);

    let transactionResult = await server.submitTransaction(transaction);
        console.log(JSON.stringify(transactionResult, null, 2));
}
run();