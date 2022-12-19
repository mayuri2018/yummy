import React from "react";
import TextField from '@mui/material/TextField';



type Prop = {
    setUserInput : React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchForm({setUserInput}:Prop){
    function userInputHandler(event : React.ChangeEvent<HTMLInputElement>){
        const input = event.target.value;
        setUserInput(input);
    }
    console.log(setUserInput, "userinput");
    
    return(
        <div className="form">
            <TextField id="standard-basic" label="Standard" variant="standard" onChange={userInputHandler} helperText="Suggestion : Pizza, pork, lambs"/>
        </div>
    )
}