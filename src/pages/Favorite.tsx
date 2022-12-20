import React from 'react';
import { Meal } from "../App";
import FavoriteItem from '../Components/FavoriteItem';

type PropsType = {
  addFavorite : Meal[];
  setAddFavorite:React.Dispatch<React.SetStateAction<Meal[]>>;
}

export default function Favorite({addFavorite,setAddFavorite}:PropsType) {
  return (
    <div className='addfavorite'>
      <FavoriteItem addFavorite={addFavorite} setAddFavorite={setAddFavorite}/>
    </div>
)};