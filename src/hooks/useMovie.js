import React, { useEffect, useState } from "react";
import { MoviesController } from "../controllers/MoviesController";

export function useMovie(id) {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        MoviesController.getDetails(id).then(data => setMovie(data.data));
    }, [id]);

    return movie;
}