import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import item from '../Images/item.png';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { setfav, removefav } from './DataSlice'; // Corrected import path
import { useDispatch, useSelector } from 'react-redux';
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Cardsearch = (props) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.datastore.fav);

  const isFavorite = favorites.find((item) => item.id === props.id);

  const addToFavorites = () => {
    dispatch(setfav(props));
  };

  const handleDelete = () => {
    dispatch(removefav(props.id));
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className='cardstyles'>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
          className='imags'  
        />
        <CardContent>        
          <Typography gutterBottom variant="p" component="div" className='stylealigns' >
            {props.cate}
          </Typography>  
          <Typography gutterBottom variant="h5" component="div" className='titles stylealigns'>
            {props.title} 
          </Typography>
          <div className='btnalign'>
            <Link to={`/ingredients/${props.id}`}>  
              <Button className='viewbtn'>View details</Button>
            </Link>
            <button onClick={isFavorite ? handleDelete : addToFavorites} className='btnheart heartalign'>
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Cardsearch;
