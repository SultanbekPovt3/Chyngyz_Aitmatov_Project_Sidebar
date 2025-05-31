import MotionHoc from "./MotionHoc";
import "./Home.css";
import { FaBook, FaUser, FaListAlt, FaPhoneAlt } from "react-icons/fa";

const HomeComponent = () => {
  return (
    <div className="about-project">
      <h1>О проекте</h1>

      <section className="section fade-in">
        <h2>Добро пожаловать!</h2>
        <p>
          Этот проект создан для тех, кто хочет глубже познакомиться с творчеством великого кыргызского писателя Чингиза Айтматова, узнать больше о его жизни и творчестве, а также получить аналитический взгляд на его книги.
        </p>
      </section>

      <section className="section fade-in delay">
        <h2>Что вы найдёте в приложении?</h2>
        <ul className="features-list">
          <li><FaUser className="icon" /><strong> Биография:</strong> Рассказ о жизни писателя, его достижениях и влиянии на мировую литературу.</li>
          <li><FaBook className="icon" /><strong> Книги:</strong> Список главных произведений, год выпуска и жанры.</li>
          <li><FaListAlt className="icon" /><strong> Анализ:</strong> Повествование, ключевые темы и заключения.</li>
          <li><FaPhoneAlt className="icon" /><strong> Контакты и проекты:</strong> Связь с автором и описание проектов Айтматова.</li>
        </ul>
      </section>
    </div>
  );
};

const Home = MotionHoc(HomeComponent);

export default Home;
