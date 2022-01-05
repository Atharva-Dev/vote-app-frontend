import React from "react";
import { Button } from "@mui/material";

function CandidateButton(props) {

    return  props.check == true ?
        <Button variant="contained" color="success" fullWidth>{props.name}</Button>
    :
        <Button variant="outlined" color="success" fullWidth>{props.name}</Button>
    
}

export default CandidateButton;