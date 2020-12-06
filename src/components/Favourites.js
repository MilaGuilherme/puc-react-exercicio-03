import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export const Favourites = () => {
  var favourites = useSelector(state => state.favourites);

  return (
    <div>
    <h2>Favoritos</h2>
      <ul>
      {favourites.favList.map((m) => (
           <li key={m.id}><Link to={`/movie/${m.id}`}>{m.title}</Link></li>
      ))}
      </ul>
  </div>
  );
};