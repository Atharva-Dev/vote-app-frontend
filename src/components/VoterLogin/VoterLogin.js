import './VoterLogin.css';
import React, { useState } from 'react';

import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';


function VoterLogin() {

  const [helper, setHelper] = useState("")
  const [error, setError] = useState(false)
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)



  const checkIfValid = function (value) {
    if(value == "" || value == null){
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

  return (
    <div className="login-container">

      <Paper elevation={6} className="card" >
        <div>


          <TextField
            className="full-width"
            error={error}
            id="outlined-error-helper-text"
            label="Enter Your Aadhar Number"
            helperText={helper}
            onChange={(event) => checkIfValid(event.target.value)}
          />
          
          <div className="button-container">
          <Button className="left" variant="contained" disabled={isSubmitDisabled} onClick={() => alert("hi")}>Submit</Button>
          <Button className="right" variant="outlined">Admin Login</Button>

          </div>
        </div>
      </Paper>

    </div>
  );
}

export default VoterLogin;
