import { Movie } from "../models/Movie";

export default function MoviePageCard({ movie }: { movie: Movie }) {
  return (
    <div className="bg-gray-300 m-4 p-10 rounded-2xl">
      <h2 className="text-3xl text-black p-4">{movie.title}</h2>
      <p className="text-gray-700">{movie.description}</p>
    </div>
  );
}
