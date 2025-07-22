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
    <div className="film-page">
      <div className="film-page-header">
        <h2>{film.title}</h2>
      </div>
      <div className="film-page-content">
        {film ? (
          <>
            <p>{film.description}</p>
          </>
        ) : (
          <p>Film not found</p>
        )}
      </div>
      <div className="film-page-footer">
        <Link to={`/`}>
          <button>Назад</button>
        </Link>
      </div>
    </div>
  );
}
