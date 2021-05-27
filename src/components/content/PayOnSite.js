import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

// GRAPHQL | AMPLIFY
import {listAccounts} from  "../../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';

class PayOnSite extends Component {

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
        console.log(this.state.accounts)
      }

    render() {
        return (
            <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minHeight: '80vh' }}
            >
                <Grid item xs={12}>
                    <div id="onsiteContainer">
                        <h1>Instructions for Building Permit On-Site Payment</h1>
                        <ol>
                            <li>Type in your application number.</li>
                            <li>Click on the captcha box below it,  beside the "I'm not a robot message".</li>
                            <li>Click on the 'Search' button.</li>
                            <li>If your Application Number is in the system, your name will be displayed along with other details.</li>
                            <li>After checking your account details, choose "Pay On-Site".</li>
                            <li>You will be instructed on how to pay your remaining balance manually.</li>
                        </ol>
                    </div>
                    <div id="btnContainer">
                    <Link to={{ 
                        pathname: "/status", 
                        state: {search: this.state.accounts} 
                        }}>
                        <Button variant="contained" id="checkStatusBtn">CHECK PAYMENT STATUS</Button>
                      </Link>
                    </div>
                </Grid>   
            </Grid>
        )
    }
}

export default PayOnSite;