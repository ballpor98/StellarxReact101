'use strict';

var _stellarSdk = require('stellar-sdk');

var _stellarSdk2 = _interopRequireDefault(_stellarSdk);
var arrayS = require('./array_pubkey.json');
var server = new _stellarSdk2.Server('https://horizon-testnet.stellar.org');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var handleTx = (res) =>{
  // console.log(res.account);
  let pubkey = res.account;
  server.accounts()
  .accountId(res.account)
  .call()
  .then((res)=> {
    var found = arrayS.find(function(element) {
    return element.publicKey === pubkey;
  });
    console.log(found.name+" "+res.balances[0].balance);
  })
  .catch((err)=> {
    console.error(err);
  })
}
var handleError = (res) =>{
  console.error(res.type+" "+res.status);
}

  let count = 0;
  arrayS.forEach((bnk) => {
    server.payments()
    .forAccount(bnk.publicKey)
    .stream({
      onmessage: handleTx,
      onerror: handleError,
      reconnectTimeout:60000
    });
  });
  // var server = new _stellarSdk2.default.Server('https://horizon-testnet.stellar.org')
  // .payments()
  // .forAccount('GB5LIPG22NXNPODZVZL6QJNZTWDNXTRFKNLFXJ4S3LZDQIAXDKG3GOYZ')
  // .stream({
  //   onmessage: handleTx,
  //   onerror: handleError,
  //   reconnectTimeout:15000
  // });
// 'use strict';
//
// var _stellarSdk = require('stellar-sdk');
//
// var _stellarSdk2 = _interopRequireDefault(_stellarSdk);
//
// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// console.log("start");
//
// var handleTx = (res) =>{
//   console.log(count+': '+res.type);
//   count++;
//
// }
// var handleError = (res) =>{
//   console.error(res);
//
// }
//   let count = 0;
//   var server = new _stellarSdk2.default.Server('https://horizon-testnet.stellar.org')
//   .effects()
//   .forAccount('GAHDYNW2NRTE246WGTYXFF4FE4ZED73INDP36ATNB4ZBJ4ALB7QYWCPF')
//   .cursor('now')
//   .stream({
//     onmessage: handleTx,
//     onerror: handleError,
//     reconnectTimeout:15000
//   });
