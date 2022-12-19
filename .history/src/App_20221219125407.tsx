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
  const [addFavorite, setAddFevorite]=useState("");
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

  return(
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="" element ={<Home />}></Route>
        <Route path='/recipe' element={<Recipe recipe={recipe} setUserInput={setUserInput}/>}></Route>
        <Route path="/favorite" element = {<Favorite recipe={recipe} setAddFevorite={setAddFevorite}/>}></Route>
        <Route path="/contact" element = {<Contct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
