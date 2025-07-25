import FilmList from "../components/FilmList";

export default function MainPage() {
  return (
    <div className="flex flex-co justify-center max-w-screen w-full">
      <div className="bg-gray-300 m-4 p-10 rounded-2xl ">
        <h2 className="text-3xl text-black p-4">
          Выберите фильм для просмотра:
        </h2>
        <FilmList />
      </div>
      <div className="bg-gray-200 m-4 p-10 rounded-2xl">
        <h2 className="text-3xl text-black p-4">Новинки:</h2>
      </div>
    </div>
  );
}
