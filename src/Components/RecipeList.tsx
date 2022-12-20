import React from "react";
import RecipeItem from "./RecipeItem";
import { Meal } from "../App";

//import "./RecipeList.css";

export type PropsType = {
    recipe:Meal[];
    addFavorite :Meal[];
    setAddFavorite:React.Dispatch<React.SetStateAction<Meal[]>>;
};
export default function RecipeList({recipe,addFavorite, setAddFavorite}:PropsType){
  console.log(recipe, "data");
    if(recipe.length===0){
      return <div>Sorry we have not get recipe yet!</div>
    }
return(
  <div>
{recipe.map((item)=>(
<RecipeItem key={item.idMeal} recipe={item} addFavorite={addFavorite} setAddFavorite={setAddFavorite}/>
))}
  </div>
)}