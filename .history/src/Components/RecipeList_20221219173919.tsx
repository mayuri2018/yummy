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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
//import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { Meal } from "../App";

import "./RecipeList.css";

type PropsType = {
    recipe:Meal;
    addFavorite :React.Dispatch<React.SetStateAction<string>>;
    setAddFavorite:React.Dispatch<React.SetStateAction<string>>;
};
//type
type ExpandMoreProps=IconButtonProps & {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
export default function RecipeList({recipe,addFavorite, setAddFavorite}:PropsType){
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = ()=>{
        setExpanded(!expanded);
    }
//Access to recipeItem
//setFavrecipe
    function addFavoriteHandler(){
        const result = [...addFavorite, recipe];
        setAddFavorite(result);
    }
    console.log(addFavorite,"recipe");
    return(
        <div className="recipeList">
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
        <List>
            <ListItem>{recipe.strIngredient1}</ListItem>
          <ListItem>{recipe.strIngredient2}</ListItem>
          <ListItem>{recipe.strIngredient3}</ListItem>
        </List>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick = {addFavoriteHandler}/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Instruction</Typography>
          <Typography paragraph>
            {recipe.strInstructions}£
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
        </div>
    )
}