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
