# Stellar Laboratory Guide

[Getting Started](#Let's-Create-Stellar-account-on-testnet)  
[Build Transaction](#Build-Transaction)  
[Sign & Submit Transaction](#Sign-&-Submit-Transaction)  
[Create-account](#Create-account)  
[Create New Asset](#Create-New-Asset)  

## Let's Create Stellar account on testnet

1. Go to <https://www.stellar.org/laboratory/#account-creator?network=test>
2. Click Generate keypair button.
3. Now, We have public key and secret key. Public key likes username and Secret key likes password. So you need to keep your secret key secret (- -")
4. But now you don't have a account yet. So, you need someone to create account for you. And, We have friendbot. He's rich (but not batman). You just tell your Public key to friendbot to create account for you in fill box below and then click "Get test network lumens".
5. Hooray! We got a account with 10,000 lumens(XLM).

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/keypairgen.png)

___

## Build Transaction

Let's we explain about transaction parameters.

- Source Account  
  public key of stellar account to create this transaction.
- Transaction Sequence Number  
  Order of transaction for each account. If your account sequence number is N. Next transaction sequence number must be N+1. Otherwise are invalid.
- Base Fee  
  Fee for submit transaction to network.
- Memo  
- Time Bounds  
  Transaction submition time bounds. If you submit transaction out of time bounds. Transaction will be invalid.

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/Tx1.png)

Let's build transaction  
1. fill your public key in source account box.
2. in Transaction Sequence Number click "Fetch next Sequence Number...". It will generate valid Sequence Number for you.
3. you can leave base fee blank. It will calculate transaction fee after you finished.

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/Tx2.png)

Next We look to operation. We start at payment operation.


1. Select operation type to payment. Then you will see fill box to fill parameters for payment operation.
2. In destination, you must fill public key account that you want to payment to that account.(you can payment to yourself)
3. select your asset for payment. For now we select native(XLM).
4. Add you amount to pay but left your XLM in account more than [Minimum Account Balance](https://www.stellar.org/developers/guides/concepts/fees.html#minimum-account-balance).
5. For source account is optional. Can leave it blank or read [this](https://www.stellar.org/developers/guides/concepts/operations.html#transactions-involving-multiple-accounts)

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/Payment.png)

___

## Sign & Submit Transaction

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/SubmitTx1.png)

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/SubmitTx2.png)

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/SubmitTx3.png)

___

## Create account

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/Create_Account_diagram.png)

Create account sequence diagram

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/Create_account.png)

___

## Create New Asset

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/Create_New_Asset.png)

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/ChangeTrust.png)

### account

Public Key GBTCC44KSSKW7PO2Q7ICFMTWI6QWRPEZEZN3PBOTW6NNAJFJBDEG54QY  
Secret Key SBJ7J6UH5GESUVFMWVVAZSDWPMQFD6C6YUOHNMW3T42HHRR4HSWPGCK7