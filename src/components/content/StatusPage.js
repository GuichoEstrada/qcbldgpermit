import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
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
                    <div id="onsiteContainer">
                        <h1>Payment Status: <span id="paid">PAID</span></h1>
                        <h1>Payment Status: <span id="failed">FAILED</span></h1>
                        <h1>Payment Status: <span id="pending">PENDING</span></h1>
                    </div>
                </Grid> 
            </Grid>
        )
    }
}

export default StatusPage;