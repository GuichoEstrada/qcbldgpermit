import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

class PayOnSite extends Component {

    render() {
        return (
            <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minHeight: '70vh' }}
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
                        <Link to="/status" className="btn btn-primary" variant="contained" color="primary">Check Payment Status</Link>
                    </div>
                </Grid>   
            </Grid>
        )
    }
}

export default PayOnSite;