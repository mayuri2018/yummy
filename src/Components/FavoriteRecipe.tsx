import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Meal } from "../App";

type PropsType={
    item:Meal;
}
export default function FavoriteRecipe({item}:PropsType){
    return(
        <div>
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
            {item.strMeal.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.strMeal}
        subheader={item.strCategory}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.strMealThumb}
        alt={item.strMeal}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Ingridients
        </Typography>
        <List>
            <ListItem>{item.strIngredient1}</ListItem>
          <ListItem>{item.strIngredient2}</ListItem>
          <ListItem>{item.strIngredient3}</ListItem>
        </List>
      </CardContent>
      
    </Card>
        </div>
    );
}