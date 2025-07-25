export default function Header() {
  return (
    <div className="flex max-w-screen">
      <div className="flex justify-between items-center w-full p-5 m-10 rounded-2xl bg-gray-300">
        <div className="text-3xl pointer-events-none">FilmPicker</div>
        <nav className="flex gap-4">
          <a href="/">Главная</a>

          <a href="/about">О нас</a>

          <a href="/contact">Контакты</a>
        </nav>
        <div className="text-black bg-gray-500 p-2 rounded-2xl cursor-pointer hover:bg-gray-400 transition-all">
          Выход
        </div>
      </div>
    </div>
  );
}
