import React from "react";
import { Link } from "react-router-dom";

export const MoviesList = ({ movies }) => {
  return (
    <div>
      <h2>Filmes</h2>
      <ul>
        {movies.map((m) => (
          <li key={m.id}><Link to={`/movie/${m.id}`}>{m.title}</Link></li>
        ))}
      </ul>
    </div>
  );
};
