import './VoterLogin.css';
import React, { useState } from 'react';
import { baseUrl } from '../../Global'

import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Dialog } from '@mui/material';
import { DialogContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


import StatusPopup from './StatusPopup';




function VoterLogin() {

  const [helper, setHelper] = useState("")
  const [error, setError] = useState(false)
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)
  const [popupStatus, setPopStatus] = useState(false)
  const [popupMessage, setPopupMessage] = useState("")
  const [id, setId] = useState("")
  navigate = useNavigate()


  const checkIfValid = (value) => {
    setId(value)
    console.log(id)
    if (value == "" || value == null) {
      setError(false)
      setIsSubmitDisabled(true)
      setHelper("")
    }
    else if (!(/^\d+$/.test(value)) || value.length !== 12) {
      setError(true)
      setHelper("Invalid aadhar number")
      setIsSubmitDisabled(true)
    }
    else {
      setError(false)
      setIsSubmitDisabled(false)
      setHelper("")
    }
  }




  const checkStatus = () => {
    alert(id)
    fetch(baseUrl+'/status/'+id)
    .then(response => response.json())
    .then(data => {
      if(data.code != 0){
        setPopupMessage(data.message)
        setPopStatus(true)
      }
      else{
        navigate('/vote')
      }
    });

    
  }



  return (
    <div className="login-container">

      <Paper elevation={6} className="card" >
        <div>


          <TextField
            fullWidth
            error={error}
            id="outlined-error-helper-text"
            label="Enter Your Aadhar Number"
            helperText={helper}
            onChange={(event) => checkIfValid(event.target.value)}
          />

          <div className="button-container">
            <Button className="left" variant="contained" onClick={() => checkStatus()} disabled={isSubmitDisabled}>Submit</Button>
            <Dialog
              open={popupStatus}
              onClose={() => setPopStatus(false)}
              className="popup"
              PaperProps={{sx: { height:"15em", width:"20em" }}}
            >
              <DialogContent>
                <StatusPopup message={popupMessage}/>
              </DialogContent>
            </Dialog>
            <Link to="/admin-login"> <Button className="right" variant="outlined">Admin Login</Button></Link>

          </div>
        </div>
      </Paper>

    </div>
  );
}

export default VoterLogin;
