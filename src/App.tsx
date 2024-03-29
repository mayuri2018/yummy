import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from"./Components/NavBar";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Favorite from "./pages/Favorite";
import Contct from "./pages/Contct";
import {useState, useEffect} from "react"
import "./App.css";

export type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
};

function App() {
  const[recipe, setRecipe]= useState<Meal[]>([]);
  const [userInput, setUserInput]=useState("");
  const [addFavorite, setAddFavorite]=useState<Meal[]>([]);
  const [totalFavorite, setTotalFavorite] = useState<number>(0);

// useEffect for onetime fetch data
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`
    useEffect(()=>{
      fetch(url)
      .then ((Response)=>Response.json())
      .then ((data)=>setRecipe(data.meals))
      .catch((error)=>console.log(error));
    },[url]);
    console.log(recipe, "data");
    //console.log(userInput, "userinput");

//Delate favorite
    const deleteFavorite = (recipe: Meal) => {
      let favoriteArray = [...addFavorite];
      let recipeIndex = favoriteArray.findIndex(
        (item) => item.idMeal === recipe.idMeal
      );
      if (recipeIndex !== -1) {
        setAddFavorite(
        addFavorite.filter(
            (item) => addFavorite.indexOf(item) !== recipeIndex
          )
        );
        setTotalFavorite((totalFavorite) => totalFavorite - 1);
      }
    };
  
  return(
    <div className="App">
      <NavBar  addFavorite={addFavorite}/>
      <Routes>
        <Route path="" element ={<Home />}></Route>
        <Route path='/recipe' element={<Recipe recipe={recipe} setUserInput={setUserInput} addFavorite={addFavorite} setAddFavorite={setAddFavorite}/>}></Route>
        <Route path="/favorite" element = {<Favorite addFavorite={addFavorite} setAddFavorite={setAddFavorite} deleteFavorite={deleteFavorite}/>}></Route>
        <Route path="/contact" element = {<Contct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
