import React from "react";
import { Meal } from "../App";
import RecipeList from "../Components/RecipeList";
import SearchForm from "../Components/SearchForm";

export type PropsType = {
    recipe : Meal[];
    setUserInput : React.Dispatch<React.SetStateAction<Meal[]>>;
    addFavorite :Meal[];
    setAddFavorite :React.Dispatch<React.SetStateAction<Meal[]>>;
  };

export default function Recipe({recipe, setUserInput,addFavorite,setAddFavorite}:PropsType){
    console.log(recipe, "data");
    if(recipe.length===0){
      return <div>Sorry we have not get recipe yet!</div>
    }
    return(
        <div className="Recipe">
        <SearchForm setUserInput={setUserInput}/>
        {recipe.map((item)=>{
          return(
            <RecipeList recipe={item} key={item.idMeal} addFavorite={addFavorite} setAddFavorite={setAddFavorite}/>
          )
        })}
        </div>
    );
};