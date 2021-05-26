import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class PayOnline extends Component {

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
                    <div id="onlineContainer">
                        <h1>Choose a payment option:</h1>
                        <Grid item xs={6} id="unionbank" className="zoom"></Grid>
                        <Grid item xs={6} id="landbank" className="zoom"></Grid>
                        <Grid item xs={6} id="gcash" className="zoom"></Grid>
                        <Grid item xs={6} id="paymaya" className="zoom"></Grid>
                    </div>
                </Grid>   
            </Grid>
        )
    }
}

export default PayOnline;