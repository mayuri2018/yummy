import React from "react";
import { Meal } from "../App";
import RecipeList from "../Components/RecipeList";
import SearchForm from "../Components/SearchForm";

export type PropsType = {
    recipe : Meal[];
    setUserInput : React.Dispatch<React.SetStateAction<string>>;
  };

export default function Recipe({recipe, setUserInput}:PropsType){
    console.log(recipe, "data");
    return(
        <div className="Recipe">
        <SearchForm setUserInput={setUserInput}/>
        {recipe.map((item)=>{
          return(
            <RecipeList recipe={item} key={item.idMeal}/>
          )
        })}
        </div>
    );
};