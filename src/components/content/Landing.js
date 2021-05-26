import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value}, ()=> {
            console.log(this.state.value)
        });
      }
    
      handleSubmit(event) {
        this.setState({value: event.target.value});
        event.preventDefault();
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
                        <form onSubmit={this.handleSubmit}>
                            <label>
                            <input type="text" id="appInput" value={this.state.value} onChange={this.handleChange}placeholder="Enter Application No." />
                            </label>
                            <Link to="/information" type="submit" value="Search" onClick={() => this.props.handleChange(this.props.value)}>Search</Link>
                        </form>
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