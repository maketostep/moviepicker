export default function ContactsPage() {
  return (
    <div className="w-full max-w-none p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Контакты FilmPicker</h1>
      <p className="mb-4 text-gray-700">
        Если у вас есть вопросы, предложения или вы хотите поделиться своим
        мнением о сервисе, мы всегда рады обратной связи! Наша команда стремится
        сделать FilmPicker лучше для каждого пользователя.
      </p>
      <p className="mb-4 text-gray-700">
        Вы можете связаться с нами по электронной почте:{" "}
        <a
          href="mailto:support@filmpicker.ru"
          className="text-blue-600 underline"
        >
          support@filmpicker.ru
        </a>
      </p>
      <p className="mb-4 text-gray-700">
        Также будем рады видеть ваши сообщения и отзывы в наших социальных
        сетях:
      </p>
      <ul className="mb-4 text-gray-700 list-disc list-inside">
        <li>
          <a
            href="https://t.me/filmpicker"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </li>
        <li>
          <a
            href="https://vk.com/filmpicker"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ВКонтакте
          </a>
        </li>
      </ul>
      <p className="mb-4 text-gray-700">
        Мы стараемся отвечать на все обращения как можно быстрее. Спасибо, что
        выбираете FilmPicker!
      </p>
    </div>
  );
}
