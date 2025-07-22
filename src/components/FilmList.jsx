import { useEffect, useState } from "react";
import films from "../data/films.json";
import { Link } from "react-router";
export default function FilmList() {
  const [filmData, setFilmData] = useState([]);
  useEffect(() => {
    const filmData = films;
    setFilmData(filmData);
  }, []);
  return (
    <div className="film-list">
      <div className="film-list-container">
        {filmData.map((film) => (
          <div className="film-item" key={film.id}>
            <h3>{film.title}</h3>
            <p>{film.description}</p>
            <div className="film-item-actions">
              <Link to={`/film/${film.id}`}>
                <button>Смотреть</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="film-list-footer">
        <p>Всего фильмов: {filmData.length}</p>
      </div>
    </div>
  );
}
