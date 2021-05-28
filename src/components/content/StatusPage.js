import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class StatusPage extends Component {

    render() {
        
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
                    <div id="statusContainer">
                        <h1>Payment Status: <span id="paid">PAID</span></h1>
                        <h3>Note:<br></br> It will take a while to process your payment.<br></br>Please check your payment status again after a few business days.</h3>
                    </div>
                </Grid> 
            </Grid>
        )
    }
}

export default StatusPage;