import React, { useEffect } from "react";
import { Meal } from "../App";
import RecipeList from "../Components/RecipeList";
import SearchForm from "../Components/SearchForm";
import {useState} from "react";



export type PropsType = {
    recipe : Meal[];
  };
export type UserInput= {
    userInput : string;
    setUserInput : React.Dispatch<React.SetStateAction<string>>;
}
export default function Recipe({recipe}: PropsType){
    console.log(recipe, "data");
    const [userInput, setUserInput]= useState("");
    const [filteredrecipe, setFilterdRecipe] = useState<Meal[]>([]);

// search logic
let result;
if (!userInput){
  result = recipe;
}else{
  result = filteredrecipe;
}

useEffect(()=>{
  const filteredrecipe = recipe.filter((recipe)=>
    recipe.strMeal.toLocaleLowerCase().includes(userInput.toLocaleLowerCase()));
    setFilterdRecipe(filteredrecipe);
}, [userInput,recipe]);
    
    return(
        <div className="Recipe">
        <SearchForm userInput={userInput} setUserInput={setUserInput}/>
        {result.map((item)=>{
          return(
            <RecipeList recipe={item} key={item.idMeal}/>
          )
        })}
        </div>
    );
};