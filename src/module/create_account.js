// txhash createAccount
//1a902e1e9c1ab61ce7c240337dc899fec027cf7e56e6f085cb78ea4f8e12de25
// official key
// Public Key	GB5LIPG22NXNPODZVZL6QJNZTWDNXTRFKNLFXJ4S3LZDQIAXDKG3GOYZ
// Secret Key	SDX2WSMWA5JVOQFFNP7A4IO7CSVWHLAL6D6GIUQB4EA2QFQ5I4NG6SRW
var stellar = require('stellar-sdk');
var arrayS = require('./array_pubkey.json');
const server = new stellar.Server('https://horizon-testnet.stellar.org');
stellar.Network.useTestNetwork();

const run = async() =>{
  const sourcekey = stellar.Keypair.fromSecret(
    'SCSY3LLR6GMUO5DPSW6FP2RENBN7TOTII55R4MV3Y7FC2JKQWCDV2HZU'
  );
  const asset = new stellar.Asset(
    'Acoin', //Asset name
    sourcekey.publicKey() //Issuer pubkey
  )
  const sourceAccount = await server.loadAccount(sourcekey.publicKey());
  let transaction = new stellar.TransactionBuilder(sourceAccount);
  arrayS.forEach((bnk) => {
    const options = {
      destination: stellar.Keypair.fromSecret(bnk.secret).publicKey(),
      startingBalance: '3'
    };
    const xdrOperation = stellar.Operation.createAccount(options);
    transaction = transaction.addOperation(xdrOperation);
  });

  transaction = transaction.build();
  transaction.sign(sourcekey);
  const transactionResult = await server.submitTransaction(transaction);
  console.log(transactionResult);
  arrayS.forEach(async(name) => {
    try{
    const keypair = stellar.Keypair.fromSecret(name.secret);
    const account = await server.loadAccount(keypair.publicKey());
    let transaction2 = new stellar.TransactionBuilder(account);
    let changeTrustOptions = {
      asset: asset,
    };
    let changeTrustOperation = stellar.Operation.changeTrust(changeTrustOptions);
    transaction2 = transaction2.addOperation(changeTrustOperation);
    transaction2 = transaction2.build();
    transaction2.sign(keypair);
    let transactionResult2 = await server.submitTransaction(transaction2);
    console.log(JSON.stringify(transactionResult2, null, 2));
  }
  catch(err){
    console.log(err);
  }
  });
  
};
run();
