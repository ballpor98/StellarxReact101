# Stellar React tutorial guide

## **_Note_**

This tutorial is not the best practice to build Stellar application (many security concerns). We use this tutorial solely to learn a concept of Stellar (using Stellar SDK and handling responses).  
Lots line of code in this tutorial are hard coded.

---

## **_Demo_**

Use this [demo website](https://ballpor98.github.io/StellarxReact101/) to monitor your work.

---

## **_Tasks_**

### **Task 1**

In `src/module/array_pubkey.json`, you need to change public key and secret key to yours. Moreover, your account should have more than 3 XLM and trust your custom asset. [About Minimum Account Balance](https://www.stellar.org/developers/guides/concepts/fees.html#minimum-account-balance)

### **Task 2**

In `src/views/createAccountPage/createAccountPage.jsx`, in handler function(line 27). You need to handle a button action.

1. Create new account
2. Trust your custom asset
3. Do new asset payment.

### **Task 3**

In `src/views/votePage/votePage.jsx` in handleButton function(line 41). You need to handle a button action.

1. Do your custom asset payment.
2. In line 95, I did hard code the choices of name. Feel free to edit them :).
