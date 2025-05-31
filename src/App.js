import { Route, Routes, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Calender from "./Pages/Calender";
import Documents from "./Pages/Documents";
import Projects from "./Pages/Projects";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const Pages = styled.div`
  margin-left: 3.5rem; // ширина Sidebar в свернутом виде
  padding: 2rem;
  min-height: 100vh;   // вместо фиксированной высоты
  overflow-y: auto;    // разрешаем вертикальный скролл
  box-sizing: border-box;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;





function App() {
  const location = useLocation();

  // Вот тут добавляем изменение title в зависимости от пути
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Главная";
        break;
      case "/team":
        document.title = "Биография";
        break;
      case "/calender":
        document.title = "Книги, Даты книг";
        break;
      case "/documents":
        document.title = "Анализ произведений";
        break;
      case "/projects":
        document.title = "Проекты Ч.Айтматова";
        break;
      default:
        document.title = "Aitmatov";
    }
  }, [location.pathname]);

  return (
    <>
      <Sidebar />
      <Pages>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
