import React, { useEffect, useState } from "react";
import { MoviesController } from "../controllers/MoviesController";
import { setFavourite } from "../actions/favouriteActions";
import { useDispatch } from 'react-redux';

export const MovieInfo = (props) => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState([]);  
  const id = props.match.params.id;

  useEffect(() => {
    MoviesController.getDetails(id).then(data => setMovie(data.data));
  }, [id]);

  return (
    <>
      <div>
        <h2>{movie.title}</h2>
        <h3>{movie.tagline}</h3>
        <p>{movie.overview}</p>
        <button onClick={()=> dispatch(setFavourite({ movie: movie}))}>Adicionar aos favoritos</button>
      </div>
    </>
  );
};
