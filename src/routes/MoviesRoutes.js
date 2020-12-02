import React from 'react';
import { Route } from 'react-router-dom';
import { MovieInfo } from "../components/MovieInfo";

export const MoviesRoutes = () => (
    <Route path="/movie/:id" component = { MovieInfo }/>
)