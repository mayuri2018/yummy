import { type } from "os";
import React from "react";
import { UserInput } from "../pages/Recipe";


type Prop = {
    userInput : string;
    setUserInput : React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchForm({userInput, setUserInput}:Prop){
    function userInputHandler(event : React.ChangeEvent<HTMLInputElement>){
        const input = event.target.value;
        setUserInput(input);
    }
    console.log(userInput, "userinput");
    
    return(
        <div className="form">
            <form>
                <label>Enter the meal name :</label>
                <input type="text" onChange={userInputHandler}></input>
            </form>
        </div>
    )
}