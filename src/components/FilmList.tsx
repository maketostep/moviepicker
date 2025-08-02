import { Link } from "react-router";
import { MovieService } from "../services/MovieService";
import { Movie } from "../models/Movie";

export default function FilmList() {
  const allMovies: Movie[] = MovieService.getAll();

  return (
    <ul>
      {allMovies.map((film: Movie) => (
        <li
          className="bg-blue-100 rounded-lg mb-4 shadow p-4 hover:shadow-lg hover:scale-105 transition-transform"
          key={film.id}
        >
          <h3 className="text-xl font-bold">{film.title}</h3>
          <p className="text-gray-700 line-clamp-1">{film.description}</p>
          <Link to={`/film/${film.id}`}>
            <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              Перейти
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
