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
    const newKeypair = StellarSdk.Keypair.random();
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
