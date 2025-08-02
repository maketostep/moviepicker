import { Link } from "react-router";
import { Movie } from "../models/Movie";

interface Props {
  movie: Movie;
}

export const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-bold">{movie.title}</h3>
      <p className="text-gray-700">{movie.description}</p>
      <Link to="/">
        <button>Назад</button>
      </Link>
    </div>
  );
};
