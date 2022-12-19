import React from 'react';
import { Meal } from "../App";
import FavoriteItem from '../Components/FavoriteItem';

type PropsType = {
  recipe:Meal[];
  setAddFevorite:React.Dispatch<React.SetStateAction<string>>;
}

export default function Favorite({recipe, setAddFevorite}:PropsType) {
  return (
    <div className='addfevorite'>
      Add Favorite
    </div>
)};