import React from 'react';
import { Meal } from "../App";
import FavoriteItem from '../Components/FavoriteItem';

type PropsType = {
  recipe:Meal[];
  addFavorite : Meal[];
  setAddFavorite:React.Dispatch<React.SetStateAction<string>>;
}

export default function FavoriteI({recipe,addFavorite,setAddFavorite}:PropsType) {
  return (
    <div className='addfevorite'>
      Add Favorite
    </div>
)};