import React from "react";
import { Meal } from "../App";
import FavoriteRecipe from "./FavoriteRecipe";

type PropsType = {
    addFavorite : Meal[];
  setAddFavorite:React.Dispatch<React.SetStateAction<Meal[]>>;
};
export default function FavoriteItem({addFavorite, setAddFavorite}:PropsType){
    return(
        <div className="FavoriteItem">
          {addFavorite.map((item)=>(
            <FavoriteRecipe item={item}/>
          )
          )}
        </div>
    )
}