# Stellar Laboratory Guide

[Getting Started](#Let's-Create-Stellar-account-on-testnet)  
[Build Transaction](#Build-Transaction)  
[Sign & Submit Transaction](#Sign-&-Submit-Transaction)  
[Create-account](#Create-account)  
[Create New Asset](#Create-New-Asset)

## Let's create a Stellar account on Testnet network

1. Go to <https://www.stellar.org/laboratory/#account-creator?network=test>
2. Click `Generate keypair`.
3. Now, we have public key and secret key. Public key and Secret key are like username and password, respectively. Therefore, you need to keep the secret key secret. (- -")
4. However, you have not created an account yet. You need somebody else to create your account (Basically add money to the account). Luckily, We have a very friendly friendbot on Testnet. He is rich (not batman). You just tell your Public key to friendbot to create account for you in fill box below and then click `Get test network lumens`.
5. Hooray! We have just created an account with 10,000 lumens(XLM).

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/keypairgen.png)

---

## Build transaction

Let we explain about transaction parameters.

1. **Source Account** : Public key of stellar account to create this transaction.
2. **Transaction Sequence Number** : Order of transaction for each account. If your account sequence number is N. Next transaction sequence number must be N+1. Otherwise are invalid.
3. **Base Fee** : Fee for submit transaction to network.
4. **Memo** : A field to store a 32-bit length string.
5. **Time Bounds** : Transaction submition time bounds. If you submit transaction out of time bounds. Transaction will be invalid.

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/Tx1.png)

Let's build a transaction

1. Fill your public key in source account box.
2. In Transaction Sequence Number click `Fetch next Sequence Number...`. It generates valid Sequence Number (Basically it just adds one to the last sequence number).
3. Base fee is an optional field (leave it blank for this guide). It will calculate transaction fee after you finished.

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/Tx2.png)

Next We look to operation. We start at payment operation.

1. Select `Operation type` (dropdown) to `Payment`. Afterwards, you will see field boxs to fill parameters for Payment Operation.
2. For destination field box, you write public key account which you want to payment to. (Funnily enough, you can payment to yourself :))
3. Select your asset for payment. (In this tutorial, we choose `native` (XLM)).
4. Write amount that you want to give ,but your account needs to have amount of `native` more than [Minimum Account Balance](https://www.stellar.org/developers/guides/concepts/fees.html#minimum-account-balance).
5. Source account field is optional. In this tutorial, we leave it blank. For more information, click [this](https://www.stellar.org/developers/guides/concepts/operations.html#transactions-involving-multiple-accounts)

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/Payment.png)

1. Click `Sign in Trasaction Signer`

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/Tx3.png)

---

## Sign & Submit Transaction

1. Fill serect key in `Add Signer`.
2. Click `Submit to Post Transaction endpoint`.

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/SubmitTx1.png)

Click `Submit`
![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/SubmitTx2.png)

Now, you see result in JSON format.
![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/SubmitTx3.png)

---

## Create account

### Sequence Diagram for creating account

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/Create_Account_diagram.png)

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/Create_account.png)

---

## Create new asset

### Sequence Diagram for creating new asset

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/Create_New_Asset.png)

[Asset Description](https://www.stellar.org/developers/guides/concepts/assets.html)

![alt text](https://raw.githubusercontent.com/ballpor98/StellarxReact101/dev/pic/ChangeTrust.png)

---

### A sample account using in this guide

Public Key GBTCC44KSSKW7PO2Q7ICFMTWI6QWRPEZEZN3PBOTW6NNAJFJBDEG54QY  
Secret Key SBJ7J6UH5GESUVFMWVVAZSDWPMQFD6C6YUOHNMW3T42HHRR4HSWPGCK7  
[testnet informations](https://www.stellar.org/developers/guides/concepts/test-net.html#best-practices-for-using-testnet)
