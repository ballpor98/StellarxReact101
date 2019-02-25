import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// react plugin used to create charts
import {HorizontalBar} from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import Stats from "components/Stats/Stats.jsx";
import arrayP from "module/array_pubkey.json";
import stellar from 'stellar-sdk';

const server = new stellar.Server('https://horizon-testnet.stellar.org');
const createData=(array)=> {
  const res=[];
  array.forEach((bnk)=>{
    let name = bnk.name;
    res.push([
      name,
      '0'
    ]);
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
    res.sort(function(a, b) {//sort vote
      return a[1] - b[1];
    });
  });
  return res;
}

const getStellar= async ()=>{
  const loop = arrayP.map(async (bnk,key)=>{
    let name = bnk.name;
    const res = await server.accounts()
    .accountId(bnk.publicKey)
    .call()
    return ([name,String(parseInt(res.balances[0].balance))]);
  })
  const data = await Promise.all(loop)
  data.sort(function(a, b) {//sort name
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
  data.sort(function(a, b) {//sort vote
    return a[1] - b[1];
  });
  return data;
}

const createChart = (data)=>{
  return ({
    data: canvas => {
      return data;
    },
    options: {
      legend: {
        display: false
      },

      tooltips: {
        enabled: true
      },

      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: "#9f9f9f",
              beginAtZero: false,
              maxTicksLimit: 5
              // padding: 20
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "#ccc",
              color: "rgba(255,255,255,0.05)"
            }
          }
        ],

        xAxes: [
          {
            barPercentage: 0.8,
            gridLines: {
              drawBorder: false,
              color: "rgba(255,255,255,0.1)",
              zeroLineColor: "transparent",
              display: false
            },
            ticks: {
              beginAtZero:true,
              padding: 10,
              fontColor: "#9f9f9f"
            }
          }
        ]
      }
    }
  });
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    let data = createData(arrayP);
    let labels = data.map((bnk,key)=>{
      return (bnk[0]);
    });
    let vote = data.map((bnk,key)=>{
      return (bnk[1]);
    });
    let chart = {
      labels: labels,
      datasets: [
        {
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: vote
        }
      ]
    };
    this.state = {
      chart:createChart(chart)
    }
  }
  componentDidMount() {
    this.queryData();
    var intervalId =  setInterval(this.timer, 20000);
    this.setState({ intervalId: intervalId });
 }
 timer = () => {
   this.queryData();
 };

 componentWillUnmount() {
   clearInterval(this.state.intervalId);
 }

 queryData = async() => {
   let data = await getStellar(); // createData(arrayP);
   let labels = data.map((bnk,key)=>{
     return (bnk[0]);
   });
   let vote = data.map((bnk,key)=>{
     return (bnk[1]);
   });
   let chart = {
     labels: labels,
     datasets: [
       {
         borderColor: "#6bd098",
         backgroundColor: "#6bd098",
         pointRadius: 0,
         pointHoverRadius: 0,
         borderWidth: 3,
         data: vote
       }
     ]
   };
   // console.log(chart.labels);
   // console.log(chart.datasets[0].data);
   this.setState({ chart: createChart(chart) });
 };

  render() {
    const chart = this.state.chart;
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle>BNK48 Voting Chart</CardTitle>
              </CardHeader>
              <CardBody>
                <HorizontalBar
                  data={chart.data}
                  options={chart.options}
                  width={400}
                  height={200}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-history",
                      t: " Updated 0 minutes ago"
                    }
                  ]}
                </Stats>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
