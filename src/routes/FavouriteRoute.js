import React from 'react';
import { Route } from 'react-router-dom';
import { Favourites } from "../components/Playlist";

export const FavouritesRoute = () => (
    <Route path="/favourites" component = { Favourites }/>
)