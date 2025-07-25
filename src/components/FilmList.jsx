import { useEffect, useState } from "react";
import films from "../data/films.json";
import { Link } from "react-router";
export default function FilmList() {
  const [filmData, setFilmData] = useState([]);
  const filteredFilms = films.filter((film) => !film.new);
  useEffect(() => {
    setFilmData(filteredFilms);
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col">
        {filmData.map((film) => (
          <div
            className="flex flex-col text-center bg-blue-200 rounded-4xl mb-5 p-3 shadow p-4 hover:shadow-lg hover:scale-105 transition-transform"
            key={film.id}
          >
            <h3 className="text-2xl underline">{film.title}</h3>
            <p className="text-xl p-3">{film.description}</p>
            <div className="flex justify-center">
              <Link to={`/film/${film.id}`}>
                <button className="justify-center">Смотреть</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="film-list-footer">
        <p>Всего фильмов: {films.length}</p>
      </div>
    </div>
  );
}
