import React from 'react';
import { Redirect } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import {listAccounts} from  "../../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            value: '',
            checkAppNo: '',
            existingNo: '',
            errorMessage: 'Please input a valid application number.'
        };
    
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount = async () => {
        this.checkAccounts()
      }
    
    handleChange(event) {
        this.setState({value: event.target.value}, ()=> {
            console.log(this.state.value)
        });
    }

    handleSubmit= async (event) => {
        console.log(this.state.existingNo)
        if ((this.state.existingNo).indexOf(this.state.value) !== -1){
            this.setState({redirect:true})
        } else {
            const errorMessage = document.getElementById('errorMessage');
            errorMessage.style.display = "block";
        }
        event.preventDefault();
    } 

    checkAccounts = async () => {
        const existingAppNos = [];
        
        const result = await API.graphql(graphqlOperation(listAccounts));

        this.setState({checkAppNo: result.data.listAccounts.items});
        const checkAppNo = this.state.checkAppNo;
        checkAppNo.forEach(function (i) {
            existingAppNos.push(i.applicationNo); 
        })
        this.setState({existingNo: existingAppNos})
    }

    render() {
        if(this.state.redirect === true) {
            return <Redirect to={{ 
                pathname: "/information", 
                state: {search: this.state.value} 
                }} />
        }
        return (
            <Grid
            id="landingPage"
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
                        <form>
                            <label>
                            <input type="text" id="appInput" value={this.state.value} onChange={this.handleChange}placeholder="Enter Application No." />
                            </label>
                            <p id="errorMessage">{this.state.errorMessage}</p>
                            <Button variant="contained" color="primary" onClick={this.handleSubmit}>Search</Button>
                        </form>
                    </div>
                </Grid>
                <Grid item xs={6} className="instructionsContainer">
                    <div className="instructionsDiv">
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
                    <div className="instructionsDiv">
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