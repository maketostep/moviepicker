import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MovieCard } from "../components/MovieCard";
import { MovieService } from "../services/MovieService";
import { Movie } from "../models/Movie";
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
      <MovieCard movie={film} />
    </div>
  );
}
