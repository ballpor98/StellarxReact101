# Stellar Laboratory Guide

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

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/Tx2.png)

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