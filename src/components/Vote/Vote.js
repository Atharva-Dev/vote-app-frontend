import './Vote.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import { baseUrl } from '../../Global'

import { Paper, Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import CandidateButton from './CandidateButton';


function Vote() {

    const [candidates, setCandidates] = useState([])
    const [checked, setChecked] = useState(0)
    const location= useLocation(); 

    useEffect(() => {
        fetch(baseUrl + '/getcandidatelist')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                data.push('None')
                setCandidates(data)
                setChecked(data.length - 1)
            })
    }, []);


    const castVote = () => {
        
        fetch(baseUrl + '/castvote', {
            method: 'post',
            headers: new Headers({
                "content-type": "application/json"
            }),
            body: JSON.stringify({to: checked,
                                by: location.state.id})
        })
        .then(response => response.json())
        .then(data => {
                console.log(data)
        })
    }


    return (
        <div className="container">
            <Paper elevation={6} className="card">
                <h3 className='title'>Candidates</h3>
                {
                    candidates.map((candidate, index) => (
                        <div key={index} className='candidateContainer' onClick={()=> setChecked(index)}>
                                <CandidateButton check={index == checked} name={candidate} />
                        </div>

                    ))
                }
            <br />
            <Button variant='outlined' size='small' fullwidth endIcon={<SendIcon />} onClick={castVote}>Vote to {candidates[checked]}</Button>
            </Paper>
        </div>
    )
}

export default Vote