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
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Meal } from "../App";
import "./FavoriteRecipe.css";

type PropsType={
    item:Meal;
    deleteFavorite :Function;
}
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
export default function FavoriteRecipe({item,deleteFavorite}:PropsType){
  const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = ()=>{
        setExpanded(!expanded);
    }
    return(
        <div className="FavoriteRecipe">
            <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
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
      <CardActions disableSpacing>
        <IconButton aria-label="delate">
        <DeleteIcon onClick ={()=>{deleteFavorite(item)}}/>
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
            {item.strInstructions}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
        </div>
    );
}