import React from "react";
import { Meal } from "../App";
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type PropsType = {
    recipe:Meal;
};
export default function FavoriteItem({recipe}:PropsType){
    return(
        <div>
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
            {recipe.strMeal.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={recipe.strMeal}
        subheader={recipe.strCategory}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Ingridients
        </Typography>
        <list>
            <ListItem>{recipe.strIngredient1}</ListItem>
          <ListItem>{recipe.strIngredient2}</ListItem>
          <ListItem>{recipe.strIngredient3}</ListItem>
        </list>
      </CardContent>
      
    </Card>
        </div>
    )
}