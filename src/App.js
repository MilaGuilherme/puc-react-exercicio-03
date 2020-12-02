import React, { useEffect, useState } from "react";
import "./styles.css";
import { MoviesRoutes } from './routes/MoviesRoutes';
import { MoviesList } from "./components/MoviesList";
import { MoviesController } from "./controller/MoviesController";

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MoviesController.getMovies().then(data => setMovies(data))
  }, []);

  return (
    <div className="App">
      <h1>Movielist</h1>
      <MoviesList movies={movies}/>
      <MoviesRoutes/>
    </div>
  );
}
