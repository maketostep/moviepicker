import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import films from "../data/films.json";
export default function FilmPage() {
  const [film, setFilm] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const film = films.find((f) => f.id === parseInt(id));
    setFilm(film);
  }, [id]);

  if (!film) return <div>Loading...</div>;
  return (
    <div className="flex flex-col  justify-center items-center bg-gray-200 py-10 border-t border-b">
      <div className="flex bg-amber-200 p-4 rounded-3xl">
        <h2 className="text-3xl underline">{film.title}</h2>
      </div>
      <div className="film-page-content mt-14">
        {film ? (
          <>
            <p className="text-2xl bg-amber-200 p-4 rounded-xl">
              {film.description}
            </p>
          </>
        ) : (
          <p>Film not found</p>
        )}
      </div>
      <div className="m-4">
        <Link to={`/`}>
          <button>Назад</button>
        </Link>
      </div>
    </div>
  );
}
