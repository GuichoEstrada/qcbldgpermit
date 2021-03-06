import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// GRAPHQL | AMPLIFY
import {listAccounts} from  "../../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';

class AppInfo extends Component {

  state = {
    accounts: {}
  }

  componentDidMount = async () => {
    this.getAccounts()
  }

  getAccounts = async () => {
    const result = await API.graphql(graphqlOperation(listAccounts, {
        filter: {
            applicationNo: {
                eq: this.props.location.state.search
            }
        }
    }));
    this.setState({accounts: result.data.listAccounts.items[0]})
    
    localStorage.setItem('payStatus', JSON.stringify(this.state.accounts.postflag))
    console.log(localStorage)
    console.log(this.state.accounts)
    
    const status = this.state.accounts.postflag;
    let p = document.createElement('p');
    p.setAttribute("id","failedpay");
    let failText = document.createTextNode("*Please call 122 or email helpdesk@quezoncitygov.ph about failed payment.");
    let paymentOptions = document.getElementById("paymentOptions");
    let summary = document.getElementById("summary")
    if (status === "PAID") {
      let statusClr = document.getElementById("status");
      statusClr.style.color = "rgb(81 195 32)";
      paymentOptions.style.display = "none";
    } else if (status === "FAILED"){
      let statusClr = document.getElementById("status");
      statusClr.style.color = "#CB3930";
      p.appendChild(failText);
      paymentOptions.style.display = "none";
      summary.appendChild(p);
    } else {
      let statusClr = document.getElementById("status");
      statusClr.style.color = "#1D3A9C";
    }
  }

  render() {

    const { accounts } = this.state;

    return (
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: '90vh' }}
        >

        <Grid item xs={6} id="summary">
          <div id="paymentContainer" className="partial-border">
            <h1>Choose a payment option:</h1>
            <h2>Application No: {accounts.applicationNo}</h2>
            <h2>Amount: ???{accounts.orAmount}.00</h2>
            <h2>Status: <span id="status">&nbsp;{accounts.postflag}</span></h2>
            <div id="paymentOptions">
              <Link to="/payonline"><Button variant="contained" color="primary" >Pay Online</Button></Link>
              <Link to={{ 
                pathname: "/payonsite", 
                state: {search: this.state.accounts} 
                }}>
                <Button variant="contained" color="primary">Pay Onsite</Button>
              </Link>
              
            </div>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div id="infoContainer">
            <TableContainer>
              <Table aria-label="simple table">

                <TableHead>
                  <TableCell><b>Category</b></TableCell>
                  <TableCell><b>Value</b></TableCell>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Application No.
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {accounts.applicationNo}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      Building Owner
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {accounts.taxpayerName}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      Breakdown of Fees
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {accounts.incomeDescription}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {accounts.incomeObject}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {accounts.incomeSubDescription}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      Amount
                    </TableCell>
                    <TableCell component="th" scope="row">
                      ???{accounts.orAmount}.00
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      Status
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {accounts.postflag}
                    </TableCell>
                  </TableRow>
              
                </TableBody>

              </Table>
            </TableContainer>
          </div>
        </Grid>

      </Grid>
    );
  }
}

export default AppInfo;