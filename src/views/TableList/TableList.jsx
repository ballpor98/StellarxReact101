import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import arrayP from "module/array_pubkey.json";
import { thead, tbody } from "variables/general";
// import stellar from 'stellar-sdk';

// const server = new stellar.Server('https://horizon-testnet.stellar.org');
const head = ["Name", "PublicKey"];

const createData=(array)=> {
  const res=[];
  array.forEach((bnk)=>{
    let name = bnk.name;
    let publicKey = bnk.publicKey;
    res.push([
      name,
      publicKey
    ]);
    // data.push([name,String(res.balances[0].balance),publicKey]);
    res.sort(function(a, b) {//sort name
      var nameA = a[0].toUpperCase(); // ignore upper and lowercase
      var nameB = b[0].toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    // res.sort(function(a, b) {//sort vote
    //   return a[1] - b[1];
    // });
  });
  return res;
}

// const getStellar= async ()=>{
//   // const data=[];
//   // for (const bnk of arrayP) {
//   //   let name = bnk.name;
//   //   let publicKey = bnk.publicKey;
//   //   let vote = '1';
//   //   // let temp = [];
//   //   const res = await server.accounts()
//   //   .accountId(bnk.publicKey)
//   //   .call()
//   //   data.push([name,String(parseInt(res.balances[0].balance)),publicKey]);
//   // }
//   const loop = arrayP.map(async (bnk,key)=>{
//     // console.log(bnk);
//     let name = bnk.name;
//     let publicKey = bnk.publicKey;
//     // let vote = '1';
//     // let temp = [];
//     const res = await server.accounts()
//     .accountId(bnk.publicKey)
//     .call()
//     return ([name,String(parseInt(res.balances[0].balance)),publicKey]);
//     // data.push([name,String(parseInt(res.balances[0].balance)),publicKey]);
//   })
//   const data = await Promise.all(loop)
//   // console.log(data);
//
//   data.sort(function(a, b) {//sort name
//     var nameA = a[0].toUpperCase(); // ignore upper and lowercase
//     var nameB = b[0].toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
//     return 0;
//   });
//   // data.sort(function(a, b) {//sort vote
//   //   return a[1] - b[1];
//   // });
//   // return data;
// }

class RegularTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:createData(arrayP)
    }
  }
  //
  // queryData = async() => {
  //   let data = await getStellar();
  //   this.setState({data:data});
  // };

  //  componentDidMount() {
  //   // this.queryData();
  //   // var intervalId =  setInterval(this.timer, 30000);
  //   // this.setState({ intervalId: intervalId });
  // }
  //
  // componentWillUnmount() {
  //   // clearInterval(this.state.intervalId);
  // }

  timer = () => {
    this.queryData();
  };

  render() {
    const data = this.state.data;
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Vote Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      {head.map((prop, key) => {
                        if (key === head.length - 1)
                          return (
                            <th key={key} className="text-center">
                              {prop}
                            </th>
                          );
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((prop, key) => {
                      return (
                        <tr key={key}>
                          {prop.map((prop, key) => {
                            if (key === thead.length - 1)
                              return (
                                <td key={key} className="text-right">
                                  {prop}
                                </td>
                              );
                            return <td key={key}>{prop}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RegularTables;
