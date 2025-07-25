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
    <div className="flex flex-col w-full">
      <div className="flex flex-col">
        {filmData.map((film) => (
          <div
            className="flex flex-col text-center bg-blue-200 rounded-4xl mb-5 p-3"
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
        <p>Всего фильмов: {filmData.length}</p>
      </div>
    </div>
  );
}
