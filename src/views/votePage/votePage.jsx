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
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import StellarSdk from 'stellar-sdk';

const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
StellarSdk.Network.useTestNetwork();

class votePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretKey:"",
      value:""
    }
  }
  textHandler = (e) => {
    console.log(e.target.value);
    this.setState({secretKey: e.target.value});
  }
  handleChange = (e) => {
    this.setState({value: e.target.value});
    console.log(this.state.value);
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
                <FormControl component="fieldset">
          <FormLabel component="legend">Select Coach</FormLabel>
          <RadioGroup
            aria-label="Coach"
            name="Coach1"
            onChange={(e) => this.textHandler(e)}
          >
            <FormControlLabel value="Kong" control={<Radio />} label="Kong" />
            <FormControlLabel value="Kim" control={<Radio />} label="Kim" />
            <FormControlLabel value="Joey" control={<Radio />} label="Joey" />
            <FormControlLabel value="Pop" control={<Radio />} label="Pop" />
          </RadioGroup>
        </FormControl>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default votePage;
