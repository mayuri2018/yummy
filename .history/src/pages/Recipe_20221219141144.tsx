import React from "react";
import { Meal } from "../App";
import RecipeList from "../Components/RecipeList";
import SearchForm from "../Components/SearchForm";

export type PropsType = {
    recipe : Meal[];
    setUserInput : React.Dispatch<React.SetStateAction<string>>;
    addFavorite : React.Dispatch<React.SetStateAction<string>>;
    setAddFevorite :React.Dispatch<React.SetStateAction<string>>;
  };

export default function Recipe({recipe, setUserInput,setAddFevorite}:PropsType){
    console.log(recipe, "data");
    if(recipe.length===0){
      return <div>Sorry we have not get recipe yet!</div>
    }
    return(
        <div className="Recipe">
        <SearchForm setUserInput={setUserInput}/>
        {recipe.map((item)=>{
          return(
            <RecipeList recipe={item} key={item.idMeal} setAddFevorite={setAddFevorite}/>
          )
        })}
        </div>
    );
};