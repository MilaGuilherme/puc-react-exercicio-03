import React from 'react';
import { setFavourite } from "../actions/favouriteActions";
import { useDispatch } from 'react-redux';
import { useMovie } from '../hooks/useMovie';

export const MovieInfo = (props) => {
  const dispatch = useDispatch();
  const movie = useMovie(props.match.params.id);

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
