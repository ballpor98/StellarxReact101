import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import StellarSdk from 'stellar-sdk';

const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
StellarSdk.Network.useTestNetwork();

class votePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretKey:""
    }
  }
  textHandler = (e) => {
    console.log(e.target.value);
    this.setState({secretKey: e.target.value});
  }
  render() {
    const secretKey = this.state.secretKey;
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Vote page</CardTitle>
              </CardHeader>
              <CardBody>
              <FormInputs
                  ncols={["col-md-10 pr-1"]}
                  proprieties={[
                    {
                      label: "Secret Key",
                      inputProps: {
                        type: "text",
                        disabled: false,
                        onChange: (e) => this.textHandler(e)
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

export default votePage;
