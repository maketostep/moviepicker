import FilmList from "../components/FilmList";

export default function MainPage() {
  return (
    <div className="main">
      <div className="container">
        <h2>Выберите фильм для просмотра:</h2>
          <FilmList />
      </div>
    </div>
  )
}
