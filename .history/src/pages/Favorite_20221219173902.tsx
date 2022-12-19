import React from 'react';
import { Meal } from "../App";
import FavoriteItem from '../Components/FavoriteItem';

type PropsType = {
  recipe:Meal[];
  addFavorite : React.Dispatch<React.SetStateAction<string>>;
  setAddFavorite:React.Dispatch<React.SetStateAction<string>>;
}

export default function Favorite({recipe,addFavorite, setAddFavorite}:PropsType) {
  return (
    <div className='addfevorite'>
      Add Favorite
    </div>
)};