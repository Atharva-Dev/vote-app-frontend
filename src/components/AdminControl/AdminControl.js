import './AdminControl.css';

import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';

import { DateTimePicker } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';

import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { baseUrl } from '../../Global';




function AdminControl() {

    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [candidates, setCandidates] = useState([])
    const [newCandidate, setNewCandidate] = useState("")
    const [isAddDisabled, setIsAddDisabled] = useState(true)
    const [helper, setHelper] = useState("")
    const [error, setError] = useState(false)

    const setNewCandidateName = (name) => {        
        setNewCandidate(name)
        if (name == "" || name == null) {
            setIsAddDisabled(true)
            setError(false)
            setIsAddDisabled(true)

        }
        else if(candidates.indexOf(name) != -1){
            setError(true)
            setHelper("Candidate already exists!")
            setIsAddDisabled(true)
        }
        else {
            setIsAddDisabled(false)
            setError(false)
            setHelper("")
        }
    }

    const startTimeHandler = (value) => {
        setStartTime(value)
        setEndTime(value)
    }

    const removeCondidate = (index) => {
        var newCandidates = JSON.parse(JSON.stringify(candidates))
        newCandidates.splice(index, 1)
        setCandidates(newCandidates)
        setNewCandidateName("")
        setError(false)
        setHelper("")
    }


    const addCandidate = () => {
        var newCandidates = JSON.parse(JSON.stringify(candidates))
        newCandidates.push(newCandidate)
        setCandidates(newCandidates)
        setNewCandidate("")
    }

    const startVoting = () => {
        const data = {
            start_time: startTime.toString(),
            end_time: endTime.toString()
        }
        fetch(baseUrl+'/setvotingperiod', {
            method: 'post',
            headers: new Headers({
                "content-type": "application/json"
              }),
            body:  JSON.stringify(data)
        }).then(response => response.json())
        .then( data => {
            console.log(data)
        })
        
        const candidatedata = {
            candidates : candidates
        }

        fetch(baseUrl+'/addcandidates', {
            method: 'post',
            headers: new Headers({
                "content-type": "application/json"
              }),
            body:  JSON.stringify(candidatedata)
        }).then(response => response.json())
        .then( data => {
            console.log(data)
        })
    }


    return (
        <div className="papercontainer">
        <Paper elevation={6} className="container">
            <div className="datetimecontainer">
            <div className="padded">
                <LocalizationProvider
                    dateAdapter={DateAdapter}>
                    <DateTimePicker
                        label="Select start time"
                        value={startTime}
                        onChange={startTimeHandler}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            <div className="padded">
                <LocalizationProvider
                    dateAdapter={DateAdapter}>
                    <DateTimePicker
                        minDateTime={startTime}
                        label="Select End time"
                        value={endTime}
                        onChange={(value) => setEndTime(value)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            </div>

            <div className="candidateHandler">
                <h3 >Candidates</h3>
                {
                    candidates.map((candidate, index) => (
                        <div className="candidateContainer" key={candidate} >
                            <div>
                                <TextField
                                    id="outlined-read-only-input"
                                    defaultValue={candidate}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </div>
                            <div className="deleteicon" >
                                <Button  onClick={() => removeCondidate(index)} ><DeleteIcon/></Button>
                            </div>
                        </div>
                    ))
                }
                <div className="candidateContainer">
                    <div>
                        <TextField
                            id="outlined-error-helper-text"
                            label="new candidate name"
                            error={error}
                            helperText={helper}
                            value={newCandidate}
                            onChange={(event) => setNewCandidateName(event.target.value)}
                        />
                    </div>
                    <div  className="addicon">
                        <Button disabled={isAddDisabled} onClick={addCandidate}><AddCircleIcon /></Button>
                    </div>
                </div>
                <br />
                <Button onClick={startVoting} variant="contained" disabled={candidates.length <= 0}>Start voting</Button>
            </div>
            
        </Paper>
        </div>
    )
}

export default AdminControl;
