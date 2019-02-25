import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import Button from '@material-ui/core/Button';
import FormInputs from "components/FormInputs/FormInputs.jsx";
import StellarSdk from 'stellar-sdk';

const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
StellarSdk.Network.useTestNetwork();

class createAccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText:"Click button to generate new account",
      publicKey:"foo",
      secretKey:"bar",
      creating:false
    }
  }
  handler = async() => {
    this.setState({
      creating:true,
      headerText:"Please wait"
    });
    //TODO
    const sourceKeypair = StellarSdk.Keypair.fromSecret(
      'SCSY3LLR6GMUO5DPSW6FP2RENBN7TOTII55R4MV3Y7FC2JKQWCDV2HZU'
    );
    const asset = new StellarSdk.Asset(
      'Acoin', //Asset name
      sourceKeypair.publicKey() //Issuer pubkey
    )
    const newKeypair = StellarSdk.Keypair.random();
    let sourceAccount = await server.loadAccount(sourceKeypair.publicKey());
    let transaction = new StellarSdk.TransactionBuilder(sourceAccount);

    let createAccountOptions = {
        destination: newKeypair.publicKey(),
        startingBalance: "2"
    };
    let createAccountOperation = StellarSdk.Operation.createAccount(createAccountOptions);
    transaction = transaction.addOperation(createAccountOperation);
    transaction = transaction.build();
    transaction.sign(sourceKeypair);
    let transactionResult = await server.submitTransaction(transaction);
    console.log(JSON.stringify(transactionResult, null, 2));
    // -----------------------------------------------------------------------

    let transaction2 = new StellarSdk.TransactionBuilder(sourceAccount);

    let changeTrustOptions = {
      asset: asset,
      source: newKeypair.publicKey()
    };
    let paymentOptions = {
      destination: newKeypair.publicKey(),
      asset: asset,
      amount: "1"
    };

    let changeTrustOperation = StellarSdk.Operation.changeTrust(changeTrustOptions);
    let paymentOperation = StellarSdk.Operation.payment(paymentOptions);

    transaction2 = transaction2.addOperation(changeTrustOperation);
    transaction2 = transaction2.addOperation(paymentOperation);

    transaction2 = transaction2.build();
    transaction2.sign(sourceKeypair);
    transaction2.sign(newKeypair);

    let transactionResult2 = await server.submitTransaction(transaction2);
    console.log(JSON.stringify(transactionResult2, null, 2));
    //TODO
    this.setState(
      {
      publicKey:newKeypair.publicKey(),
      secretKey:newKeypair.secret(),
      creating:false,
      headerText:"Complete"
      }
    );
  }

  render() {
    const publicKey = this.state.publicKey;
    const secretKey = this.state.secretKey;
    const headerText = this.state.headerText;
    const creating = this.state.creating;
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">{headerText}</CardTitle>
              </CardHeader>
              <CardBody>
              <Button disabled={creating} variant="contained"
                onClick={() => this.handler()}
              >
                Create Account
              </Button>
              <FormInputs
                    ncols={["col-md-10 pr-1"]}
                    proprieties={[
                      {
                        label: "Public Key",
                        inputProps: {
                          type: "text",
                          disabled: true,
                          value: publicKey
                        }
                      },
                    ]}
                  />
                <FormInputs
                  ncols={["col-md-10 pr-1"]}
                  proprieties={[
                    {
                      label: "Secret Key",
                      inputProps: {
                        type: "text",
                        disabled: true,
                        value: secretKey
                      }
                    }
                  ]}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default createAccountPage;
