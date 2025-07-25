import { Link } from "react-router";

export default function Header() {
  return (
    <header className="sticky flex max-w-screen">
      <div className="flex justify-between items-center w-full p-5 m-10 rounded-2xl bg-gray-300 border-t shadow-2xl">
        <div className="text-3xl">FilmPicker</div>
        <nav className="flex gap-4">
          <Link to="/">Главная</Link>

          <Link to="/about">О нас</Link>

          <Link to="/contact">Контакты</Link>
        </nav>
        <div className="text-black bg-gray-500 p-2 rounded-2xl cursor-pointer hover:bg-gray-400 transition-all">
          Выход
        </div>
      </div>
    </header>
  );
}
