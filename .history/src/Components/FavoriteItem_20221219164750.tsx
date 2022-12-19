import React from "react";
import { Meal } from "../App";

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
        </div>
    )
}