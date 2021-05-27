import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import {listAccounts} from  "../../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';

class StatusPage extends Component {

    state = {
        status: {}
    }

    componentDidMount = async () => {
        this.checkStatus()
    }

    checkStatus = async () => {
        const result = await API.graphql(graphqlOperation(listAccounts, {
            filter: {
                applicationNo: {
                    eq: this.props.location.state.search
                }
            }
        }));
        this.setState({status: result.data.listAccounts.items[0]})
        
        const acctStatus = this.state.accounts.postflag;
        if (acctStatus === "PAID") {
          let statusClr = document.getElementById("status");
          statusClr.style.color = "rgb(81 195 32)";
        } else if (acctStatus === "FAILED"){
          let statusClr = document.getElementById("status");
          statusClr.style.color = "#CB3930";
        } else {
          let statusClr = document.getElementById("status");
          statusClr.style.color = "#1D3A9C";
        }
      }

    render() {
        const { status } = this.state;
        return (
            <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minHeight: '80vh' }}

            id="optionsContainer"
            >
                <Grid item xs={12}>
                    <div id="onsiteContainer">
                        <h1>Payment Status: <span id="status">{status.postflag}</span></h1>
                        <h3>Note:<br></br> It will take a while to process your payment.<br></br>Please check your payment status again after a few business days.</h3>
                    </div>
                </Grid> 
            </Grid>
        )
    }
}

export default StatusPage;