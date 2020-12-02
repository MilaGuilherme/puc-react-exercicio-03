import { MoviesService } from "../api/MoviesService";

export class MoviesController{
  
  static async getDetails(id){
      const movieDetails = await MoviesService.getMovieById(id);
      return movieDetails;
  }

  static async getMovies(){
    const { data: { results }} = await MoviesService.getPopularMovies()
    return results;
  };
}