import { movies } from "../data/movies";
import { Movie } from "../models/Movie";

export class MovieService {
  static getAll(): Movie[] {
    return movies;
  }

  static getById(id: number): Movie | undefined {
    return movies.find((movie) => movie.id === id);
  }
}
