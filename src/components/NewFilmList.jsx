import React from "react";
import films from "../data/films.json";
import { Link } from "react-router";
export default function NewFilmList() {
  const newFilms = films.filter((film) => film.new);
  return (
    <ul>
      {newFilms.map((film) => (
        <li
          className="bg-blue-100 p-4 rounded-lg shadow-md mb-4 shadow p-4 hover:shadow-lg hover:scale-105 transition-transform"
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
