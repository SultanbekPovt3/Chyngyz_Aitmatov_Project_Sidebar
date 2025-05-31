import MotionHoc from "./MotionHoc";
import "./Calender.css";

const books = [
  {
    img: "https://knijky.ru/sites/default/files/styles/264x390/public/41597.jpg?itok=rgB0o2bQ",
    author: "Чингиз Айтматов",
    title: "Белый пароход",
    year: "1970 год",
    genre: "Советская литература, Классическая проза, Классика",
  },
  {
    img: "https://knijky.ru/sites/default/files/styles/264x390/public/169326.jpg?itok=diX2l6m6",
    author: "Чингиз Айтматов",
    title: "И дольше века длится день",
    year: "1980 год",
    genre: "Классика, Научная фантастика, Советская литература",
  },
  {
    img: "https://knijky.ru/sites/default/files/styles/264x390/public/89160.jpg?itok=CVibmrna",
    author: "Чингиз Айтматов",
    title: "Прощай, Гульсары!",
    year: "1966",
    genre: "Советская проза, Любовь к родине",
  },
  {
    img: "https://knijky.ru/sites/default/files/styles/264x390/public/21116.jpg?itok=FFoeAZfx",
    author: "Чингиз Айтматов",
    title: "Тополек мой в красной косынке",
    year: "1961",
    genre: "Внутренний мир человека, Советская литература, Советская проза",
  },
  {
    img: "https://knijky.ru/sites/default/files/styles/264x390/public/110026.jpg?itok=DuqiKR5S",
    author: "Чингиз Айтматов",
    title: "Джамиля",
    year: "1958",
    genre: "Повесть, Советская литература, Становление героя",
  },
  {
    img: "https://knijky.ru/sites/default/files/styles/264x390/public/110020.jpg?itok=1MShrkng",
    author: "Чингиз Айтматов",
    title: "Верблюжий глаз",
    year: "1961",
    genre: "Классика, Классическая проза, Советская литература",
  },
  {
    img: "https://knijky.ru/sites/default/files/styles/264x390/public/110031.jpg?itok=ayQla32w",
    author: "Чингиз Айтматов",
    title: "Лицом к лицу",
    year: "1957",
    genre: "Классика, Классическая проза, Советская литература",
  },
  {
    img: "https://knijky.ru/sites/default/files/styles/264x390/public/47691.jpg?itok=qzpGOMbL",
    author: "Чингиз Айтматов",
    title: "Первый учитель",
    year: "1962",
    genre: "Нравственные ценности, Советская классика, Советская литература",
  },
];

const CalenderComponent = () => {
  return (
    <div className="books-grid">
      {books.map((book, index) => (
        <div key={index} className="book-card">
          <img src={book.img} alt={`Обложка книги ${book.title || index + 1}`} />
          <div className="book-info">
            <p><strong>Автор:</strong> {book.author || "..."}</p>
            <p><strong>Название:</strong> {book.title || "..."}</p>
            <p><strong>Год выпуска:</strong> {book.year || "..."}</p>
            <p><strong>Жанр:</strong> {book.genre || "..."}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Calender = MotionHoc(CalenderComponent);

export default Calender;