import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { getAccount } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

class AppInfo extends Component {

  state = {
    accounts: []
  }

  componentDidMount = async () => {
    this.getAccounts()
  }

  getAccounts = async () => {
    const queryString = this.props.match.params.id;
        console.log(queryString);

    const input = {
      id: queryString
    };

    const result = await API.graphql(graphqlOperation(getAccount, input))

    this.setState({accounts: result.data.getAccount})

    console.log(result)
  }

  render() {
    const { classes } = this.props;
    const { accounts } = this.state;
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
          <div id="paymentContainer">
            <h1>Choose a payment option:</h1>
            <h2>Application No: {accounts.applicationNo}</h2>
            <h2>Amount: ₱{accounts.orAmount}</h2>
            <h2>Status: {accounts.postFlag}</h2>
            <div id="paymentOptions">
              <Button variant="contained" color="primary" >Pay Online</Button>
              <Button variant="contained" color="primary" >Pay On-Site</Button>
            </div>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div id="infoContainer">
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Category</TableCell>
                    <TableCell>Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {accounts.map((account) => (
                    <TableRow key={account.applicationNo}>
                      <TableCell component="th" scope="row">
                        {account.applicationNo}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {account.taxpayerName}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>

      </Grid>
    );
  }
}

export default AppInfo;

  // useEffect(()=> {
  //   Axios.get('http://localhost:3306/api/get').then((response)=> {
  //     setAppInfo(response.data)
  //   })
  // }, [])

  // const [appInfo, setAppInfo] = useState([]);