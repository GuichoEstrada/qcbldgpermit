import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Puff } from 'react-loading-icons'
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  let history = useHistory();
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const redirect = () => {
    setTimeout(() => history.push('/status'), 5000);
  }

  const handleOpen = () => {
    setOpen(true);
    redirect();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Your payment is being processed...</h2>
      <p id="simple-modal-description">
      <Puff stroke="#98ff98" strokeOpacity="1" width="100%" height="100px" margin="0 auto" />
      </p>
      <SimpleModal />
    </div>
  );

  return (
    <div>
      <button type="button" id="paymaya" onClick={handleOpen}></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}