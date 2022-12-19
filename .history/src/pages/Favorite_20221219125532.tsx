import React from 'react';
import { Meal } from "../App";

type PropsType = {
  recipe:Meal[];
  setAddFevorite:React.Dispatch<React.SetStateAction<string>>;
}

export default function Favorite({recipe, setAddFevorite}:PropsType) {
  return (
    <div>
      Add Favorite
    </div>
)};