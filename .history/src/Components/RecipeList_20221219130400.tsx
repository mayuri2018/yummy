import React from "react";
import
import { Meal } from "../App";

import "./RecipeList.css";

type PropsType = {
    recipe:Meal;
}
export default function RecipeList({recipe}:PropsType){
    return(
        <div className="recipeList">
            <div className="recipe">
            <div className="strmeal" >
                <p><b>{recipe.strMeal}</b></p>
                <p>{recipe.strCategory}</p>
            </div>
            <div className="strMealThumb"><img src={recipe.strMealThumb} alt= "recipe.idMeal" /></div>
            <div className="discription">
                <b>Ingridients</b>
                <p><b>1 : </b>{recipe.strIngredient1}</p>
                <p><b>2 : </b>{recipe.strIngredient2}</p>
                <p><b>3 : </b>{recipe.strIngredient3}</p>
                <p className="discription-text">{recipe.strInstructions}</p>
            </div>
            <button className="add-to-favorite">
                Add to favorite</button>
            </div>
        </div>
    )
}