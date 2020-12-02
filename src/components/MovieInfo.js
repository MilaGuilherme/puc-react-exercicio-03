import React, { useEffect, useState } from "react";
import { MoviesController } from "../controller/MoviesController";

export const MovieInfo = (props) => {
  const [movie, setMovie] = useState([]);  
  const id = props.match.params.id;

  useEffect(() => {
    MoviesController.getDetails(id).then(data => setMovie(data.data));
  }, [props.match.params.id]);

  return (
    <>
      <div>
        <h1>{movie.title}</h1>
        <h2>{movie.tagline}</h2>
        <p>{movie.overview}</p>
      </div>
    </>
  );
};
