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
import Button from '@material-ui/core/Button';

import StellarSdk from 'stellar-sdk';
import arrayC from "module/array_pubkey.json";

const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
StellarSdk.Network.useTestNetwork();

class votePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretKey:"",
      value:"",
      headerText:"Vote page",
      waiting:false

    }
  }
  textHandler = (e) => {
    this.setState({secretKey: e.target.value});
  }
  handleChange = (e) => {
    this.setState({value: e.target.value});
  }
  handleButton = async() =>{
    this.setState({
      waiting:true,
      headerText:"Please wait"
    });
    const secretKey = this.state.secretKey;
    const coach = this.state.value;

    let coachPublicKey = "";
    arrayC.forEach((c)=>{
      if(c.name===coach)
      coachPublicKey = c.publicKey;
    });
    console.log(coachPublicKey);
    //TODO
    //TODO
    this.setState({
      waiting:false,
      headerText:"Finish"
    });
    
  }
  render() {
    const headerText = this.state.headerText;
    const waiting = this.state.waiting;
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">{headerText}</CardTitle>
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
            onChange={(e) => this.handleChange(e)}
          >
            <FormControlLabel value="Kong" control={<Radio />} label="Kong" />
            <FormControlLabel value="Kim" control={<Radio />} label="Kim" />
            <FormControlLabel value="Joey" control={<Radio />} label="Joey" />
            <FormControlLabel value="Pop" control={<Radio />} label="Pop" />
          </RadioGroup>
          <Button disabled={waiting} variant="contained"
                onClick={() => this.handleButton()}
              >
                Vote
              </Button>
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
