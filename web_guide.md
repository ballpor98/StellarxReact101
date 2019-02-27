# Stellar React tutorial guide

## Note

This tutorial is not the best practice to build Stellar application (many securities concerns). We use this tutorial solely to learn concept to call stellar horizon and handle responses.  
Lots line of code in this tutorial are hard coded.

## Demo

Use this [demo website](https://ballpor98.github.io/StellarxReact101/) to monitor your work.

## TODO list and where to look at

1. In `src/module/array_pubkey.json`, you need to change public key and secret key to yours. Moreover, your account should have more than 3 XLM and trust your custom asset. [About Minimum Account Balance](https://www.stellar.org/developers/guides/concepts/fees.html#minimum-account-balance)

2. In `src/views/createAccountPage/createAccountPage.jsx`, in handler function(line 27). You need to handle a button action.

   1. Create new account
   2. Trust your custom asset
   3. Do new asset payment to that account.

3. In `src/views/votePage/votePage.jsx` in handleButton function(line 41). You need to handle a button action.

   1. Do your custom asset payment to account.
   2. In line 95, I did hard code the choices of name. Feel free to edit them :).
