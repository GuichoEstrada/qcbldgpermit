import React from 'react';
import Grid from '@material-ui/core/Grid';

const useStateWithLocalStorage = localStorageKey => {
    const [value, setValue] = React.useState(
      localStorage.getItem(localStorageKey) || ''
    );
   
    React.useEffect(() => {
      localStorage.setItem(localStorageKey, value);
      var payStatus = document.getElementById("status");
      console.log(payStatus)

      var string1 = '"';

      if (payStatus.innerHTML === string1+"FOR PAYMENT"+string1) {
        payStatus.style.color = "rgb(79, 161, 255)";
        payStatus.innerHTML = "PENDING";
        } else if (payStatus.innerHTML === string1+"PAID"+string1) {
            payStatus.style.color = "rgb(53, 223, 53)";
        } else if (payStatus.innerHTML === string1+"FAILED"+string1) {
            payStatus.style.color = "rgb(221, 36, 36)";
        }

    }, [value]);
   
    return [value, setValue];
  };
  

const StatusPage = () => {
    
const [value, setValue] = useStateWithLocalStorage(
    'payStatus'
    );

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
                        <h1>Payment Status: <span id="status">{value}</span></h1>
                        <h3>Note:<br></br> It will take a few days to process your payment.<br></br>Please check your payment status again after a few business days.</h3>
                    </div>
                </Grid> 
            </Grid>
        )
    }

export default StatusPage;