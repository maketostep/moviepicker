import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between w-screen items-center content-center">
      <div className="header-logo">FilmPicker</div>
      <nav className="flex gap-4">
        <a href="/">Главная</a>

        <a href="/about">О нас</a>

        <a href="/contact">Контакты</a>
      </nav>
      <div className="header-exit">Выход</div>
    </div>
  );
}
