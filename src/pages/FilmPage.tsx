import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { MovieCard } from "../components/MovieCard";
import { MovieService } from "../services/MovieService";
import { Movie } from "../models/Movie";
import MoviePageCard from "../components/MoviePageCard";
export default function FilmPage() {
  const { id } = useParams<{ id: string }>();
  const [film, setFilm] = useState<Movie | null>(null);

  useEffect(() => {
    if (id) {
      const numericId = parseInt(id, 10);
      const currentMovie = MovieService.getById(numericId);
      setFilm(currentMovie ?? null);
    }
  }, [id]);

  if (!film) return <div>Loading...</div>;

  return (
    <div className="flex flex-col rounded-xl shadow-2xl justify-center items-center bg-gray-200 py-10 border-t border-b">
      <MoviePageCard movie={film} />
      <Link to={`/`}>
        <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
          Вернуться к списку
        </button>
      </Link>
    </div>
  );
}
