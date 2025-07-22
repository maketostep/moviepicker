import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">FilmPicker</div>
      <nav className="header-nav">
        <a href="/">Главная</a>

        <a href="/about">О нас</a>

        <a href="/contact">Контакты</a>
      </nav>
      <div className="header-exit">Выход</div>
    </div>
  );
}
