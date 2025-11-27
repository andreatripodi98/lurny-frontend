import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import About from "./About";
import Plans from "./Plans";
import Home from "./Home";
import Login from "./Login";
import Schools from "./Schools";
import CategoryChoice from "./CategoryChoice";
import LessonsList from "./LessonsList";
import LessonDetail from "./LessonDetail";
import NotFound from "./NotFound";
import UserMenu from "./UserMenu";

export default function App() {
  const location = useLocation();

  
  const hideFooter = location.pathname.startsWith("/login");

  return (
    <div className="min-h-screen flex flex-col bg-amber-50">

      <Header />

      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/language/:languageName" element={<CategoryChoice />} />
          <Route path="/lessons/:categoryId" element={<LessonsList />} />
          <Route path="/lesson/:lessonId" element={<LessonDetail />} />

          <Route path="/schools" element={<Schools />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
}




