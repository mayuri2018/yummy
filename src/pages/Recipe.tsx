import React from "react";
import { Meal } from "../App";
import RecipeList from "../Components/RecipeList";
import SearchForm from "../Components/SearchForm";

export type PropsType = {
    recipe : Meal[];
    setUserInput : React.Dispatch<React.SetStateAction<string>>;
    addFavorite :Meal[];
    setAddFavorite :React.Dispatch<React.SetStateAction<Meal[]>>;
  };

export default function Recipe({recipe, setUserInput,addFavorite,setAddFavorite}:PropsType){
    return(
        <div className="Recipe">
        <SearchForm setUserInput={setUserInput}/>
            <RecipeList recipe={recipe} addFavorite={addFavorite} setAddFavorite={setAddFavorite}/>
        </div>
    );
};