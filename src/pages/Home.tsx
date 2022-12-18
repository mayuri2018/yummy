import React from "react";
import "../App.css";
import shrimp from "../assets/shrimp.avif";
import salad from "../assets/salad.avif";
import pizza from "../assets/pizza.webp";
import cake from "../assets/cake.avif";
import chicken from "../assets/chicken.avif";


export default function Home (){
    return(
        <div className="home">
            <div className="header">
            <h1>Healthy Delicious Recipes</h1>
            </div>
            <div className="popularfood">
                <h1>Popular Food</h1>
                <p>We provide a variety of food and beverage recipes with high taste from famous chefs</p>
                <div className="food-img">
                <img src={shrimp} alt="shirmp" />
                <img src={salad} alt="shirmp" />
                <img src={pizza} alt="shirmp" />
                <img src={cake} alt="shirmp" />
                <img src={chicken} alt="shirmp" />
                </div>
            </div>
            
            
        </div>
    )
}