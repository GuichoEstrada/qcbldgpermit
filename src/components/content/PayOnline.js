import React, { Component } from 'react';

// UI
import Grid from '@material-ui/core/Grid';
import PayamayaModal from './PaymayaModal';
import GCashModal from './GCashModal';
import UnionbankModal from './UnionBankModal';
import LandbankModal from './LandbankModal';

class PayOnline extends Component {

    render() {
        return (
            <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minHeight: '90vh' }}

            id="optionsContainer"
            >
                <Grid item xs={12}>
                    <div id="onlineContainer">
                        <h1>Choose a payment option:</h1>
                        <Grid item xs={6} className="zoom bankgrid"><UnionbankModal /></Grid>
                        <Grid item xs={6} className="zoom bankgrid"><LandbankModal /></Grid>
                        <Grid item xs={6} className="zoom bankgrid"><GCashModal /></Grid>
                        <Grid item xs={6} className="zoom bankgrid"><PayamayaModal /></Grid>
                    </div>
                </Grid>   
            </Grid>
        )
    }
}

export default PayOnline;