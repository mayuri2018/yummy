import React from "react";
import logo from "../assets/chef.png"
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import "./NavBar.css";
import { Meal } from "../App";

type PropsType={
    addFavorite : Meal[];
}
export default function NavBar({addFavorite}:PropsType){
const addFavoriteCount = addFavorite.length
    return(
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="logo"/>
            <h3>Yummy</h3>
        </div>
        <div className="links">
        <Link to = "" className="Links_element">Home</Link>
        <Link to = "/Recipe" className="Links_element">Recipe</Link>
        <Badge badgeContent={addFavoriteCount} color="primary">
            <Link to = "/Favorite" className="Links_element">Favorite</Link>
        </Badge>
        <Link to = "/Contact" className="Links_element">Contact</Link>
        </div>
    </div>
)
}