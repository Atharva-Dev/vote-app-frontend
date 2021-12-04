import './StatusPopup.css';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

function StatusPopup(props) {

    return (
        <div className="container">
            <CloseIcon className="icon"/>
            <p>{props.message}</p>
        </div>
    )

}

export default StatusPopup;
