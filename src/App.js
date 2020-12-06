import React, { useEffect, useState } from "react";
import "./styles.css";
import { MoviesRoutes } from './routes/MoviesRoutes';
import { MoviesList } from "./components/MoviesList";
import { MoviesController } from "./controllers/MoviesController";
import { Favourites } from './components/Favourites';
import { useSelector } from 'react-redux';


export default function App() {
  const [movies, setMovies] = useState([]);
  
  const favourites = useSelector(state => state.favourites.favList);

  useEffect(() => {
    MoviesController.getMovies().then(data => setMovies(data))
  }, []);

  return (
    <div className="App">
      <h1>Movielist</h1>
      <div className="Main">
      <MoviesList movies={movies}/>
      <MoviesRoutes/>
      <Favourites favourites={favourites}/>
      </div>
    </div>
  );
}
