import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class PayOnsite extends Component {
    constructor(props) {
        super();
        this.state = {
            accounts:''
        };

    }

    showData() {
        this.props.getAccount(this.state.accounts)
        console.log(this.state.accounts)
    }

    render() {
        return (
            <Button variant="contained" color="primary" onClick={this.showData.bind(this)}>Show</Button>
        )
    }
}

export default PayOnsite;