import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Meal } from "../App";

import "./RecipeList.css";

type PropsType = {
    recipe:Meal;
};
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
//type
type ExpandMoreProps=IconButtonProps & {}
export default function RecipeList({recipe}:PropsType){
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = ()=>{
        setExpanded(!expanded);
    }
    return(
        <div className="recipeList">
            <div className="recipe">
            <div className="strmeal" >
                <p><b>{recipe.strMeal}</b></p>
                <p>{recipe.strCategory}</p>
            </div>
            <div className="strMealThumb"><img src={recipe.strMealThumb} alt= "recipe.idMeal" /></div>
            <div className="discription">
                <b>Ingridients</b>
                <p><b>1 : </b>{recipe.strIngredient1}</p>
                <p><b>2 : </b>{recipe.strIngredient2}</p>
                <p><b>3 : </b>{recipe.strIngredient3}</p>
                <p className="discription-text">{recipe.strInstructions}</p>
            </div>
            <button className="add-to-favorite">
                Add to favorite</button>
            </div>
        </div>
    )
}