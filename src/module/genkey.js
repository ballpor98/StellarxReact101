var stellar = require('stellar-sdk');
// var arrayS = require('./array_secret.json');
const server = new stellar.Server('https://horizon-testnet.stellar.org');
stellar.Network.useTestNetwork();
// gen keypair code
const names = [
  "Kong",
  "Kim",
  "Joey",
  "Pop",
  ];
// console.log(names);
//create file
var arrayS=[];
var arrayP=[];
for(num in names){
  // console.log(name);
  let key = stellar.Keypair.random();
  // arrayS.push({name:names[num],keypair:key.secret()});
  arrayP.push({name:names[num],publicKey:key.publicKey(),secret:key.secret()});
}
// console.log(JSON.stringify(arrayS));
console.log(JSON.stringify(arrayP));
