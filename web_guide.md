# Stellar React tutorial guild

## Attention

This tutorial isn't a best practice to build Stellar application. And It has many security issue. So, We use this tutorial to learn concept to call stellar horizon and handle responce.  
Many line of code are hard code. I'm sorry about that.

## Demo

We have demo [website](https://ballpor98.github.io/StellarxReact101/).Use this website to referent you work.

## Thing to do and where
In ```src/module/array_pubkey.json``` you need to change publicKey and secret to your own. And that account should have more than 3 XLM and trust your custom asset.  

In ```src/views/createAccountPage/createAccountPage.jsx``` in handler function(line 27). You need to handle button action. Create new account trust your custom asset and payment new asset to that account.  

In ```src/views/votePage/votePage.jsx``` in handleButton function(line 41). You need to handle button action. Payment your custom asset to account. In line 95 I'm hard code name of choice you freely to edit.

