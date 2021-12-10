import React from "react";
import { TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function ListCandidates(props) {

    return (
        <div>
            {
                props.candidates.map((candidate, index) => (
                    <div className="candidateContainer" key={index}>
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
                            <DeleteIcon onClick={() => props.eleOnClick(index)} />
                        </div>
                    </div>
                ))
            }
        </div>
    )


}

export default ListCandidates


// {
//     candidates.map((candidate, index) => (
//         <div className="candidateContainer" key={index}>
//             <div>
//             <TextField
//                 id="outlined-read-only-input"
//                 defaultValue={candidate}
//                 InputProps={{
//                     readOnly: true,
//                 }}
//             />
//             </div>
//             <div className="deleteicon" > 
//             <DeleteIcon onClick={()=> removeCondidate(index)}/>
//             </div>
//         </div>
//     ))
// }