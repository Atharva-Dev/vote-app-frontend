import './AdminLogin.css';

import React from 'react';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

import { useNavigate } from "react-router-dom";

function AdminLogin() {
    var username, password;
    const navigate = useNavigate();


    const authenticate = () => {
        console.log('here')
        navigate('/admin-control');
        
    }

    return (
        <div className="login-container">

            <Paper elevation={6} className="card" >
                <div>

                    <div className="seperate">
                    <TextField
                        fullWidth
                        label="Username"
                        onChange={(event) => {username = event.target.value}}
                    />
                    </div>
                    <br />
                    <div className="seperate">
                    <TextField

                        fullWidth
                        label="Password"
                        type="password"
                        onChange={(event) => {password = event.target.value}}
                
                    />
                    </div>

                    <div className="button-container">
                        <Button className="left" variant="outlined" onClick={authenticate}>Login</Button>
                    </div>

                </div>
            </Paper>

        </div>
    )
}

export default AdminLogin