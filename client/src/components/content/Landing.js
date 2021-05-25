import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import AppInfo from './AppInfo';

class Landing extends Component {
    constructor(props) {
        super(props)
        
        this.state = {FindAppNo: ''};
        this.handleVerify = this.handleVerify.bind(this);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);

        this.state = {
            isVerified: false
        }
    }

    SearchRecord = () => {
        const FindAppNo = this.state.FindAppNo;

        if (FindAppNo.length === 0) {
            alert("Please input a valid application number")
        } else {
            alert("Success")
        }
    }

    recaptchaLoaded() {
        console.log('Verified');
    }
    handleVerify() {
        if (this.state.isVerified) {
            alert('You have successfully subscribed!');
        } else {
            alert('Please verify your humanity!');
        }
    }

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

                <Grid item xs={6}>
                    <div id="inputDiv">
                        <h2>Please enter your building permit application number:</h2>
                        <input 
                            id="appInput" 
                            placeholder="Enter Application No."
                            onChange={FindAppNo => this.setState({FindAppNo})}
                        />
                        <div id="recap">
                            <Recaptcha
                                sitekey="xxxxxxxxxxxxxxxxxxxx"
                                render="explicit"
                                // onloadCallback={this.recaptchaLoaded}
                            />
                        </div>
                        <Button variant="contained" color="primary" onClick={this.SearchRecord} >Search</Button>
                        <AppInfo />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div id="instructionsDiv">
                        <h2>Instructions for Building Permit Online Payment</h2>
                        <ol>
                            <li>Type in your application number.</li>
                            <li>Click on the captcha box below it,  beside the "I'm not a robot message".</li>
                            <li>Click on the 'Search' button.</li>
                            <li>If your Application Number is in the system, your name will be displayed along with other details.</li>
                            <li>After checking your account details, choose "Pay Online".</li>
                            <li>You will be directed to the payment options page and choose between Unionbank, Landbank, G-Cash or PayMaya.</li>
                        </ol>
                    </div>
                    <div>
                        <h2>Instructions for Building Permit On-Site Payment</h2>
                        <ol>
                            <li>Type in your application number.</li>
                            <li>Click on the captcha box below it,  beside the "I'm not a robot message".</li>
                            <li>Click on the 'Search' button.</li>
                            <li>If your Application Number is in the system, your name will be displayed along with other details.</li>
                            <li>After checking your account details, choose "Pay On-Site".</li>
                            <li>You will be instructed on how to pay your remaining balance manually.</li>
                        </ol>
                    </div>
                </Grid>   

            </Grid>
        )
    }
}

export default Landing;