import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CategoryChoice() {
  const { languageName } = useParams();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mappa URL -> codice lingua DB
  const langMap = {
    italian: "it",
    english: "en",
    portuguese: "pt",
  };

  const langCode = langMap[languageName];

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch("http://localhost:3001/lessons");

        if (!res.ok) {
          throw new Error("HTTP error: " + res.status);
        }

        const json = await res.json();

        const lessons = json.content || json;

        // Filtra le lezioni della lingua scelta
        const filtered = lessons.filter(
          (lesson) =>
            lesson.category &&
            lesson.category.language === langCode
        );

        // Categorie uniche
        const uniqueMap = new Map();
        filtered.forEach((lesson) => {
          uniqueMap.set(lesson.category.id, lesson.category);
        });

        setCategories([...uniqueMap.values()]);
      } catch (err) {
        console.error("Errore nel caricamento categorie:", err);
      } finally {
        setLoading(false);
      }
      console.log("languageName from URL:", languageName);
      console.log("langCode mapped:", langCode);

    }

    if (!langCode) {
      setCategories([]);
      setLoading(false);
      return;
    }

    loadCategories();
  }, [languageName]);

  const formattedName =
    languageName.charAt(0).toUpperCase() + languageName.slice(1);

  return (
    <div className="bg-amber-50">
      <div className="max-w-3xl mx-auto mt-35">

        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center leading-tight">
          What are you doing right now?
        </h1>

        <div className="bg-cyan-200 p-6 sm:p-10 md:p-14 rounded-2xl shadow-md">

          <p className="text-center text-xl sm:text-2xl md:text-3xl text-stone-700 mb-10">
            Choose an activity in{" "}
            <span className="text-cyan-600 font-bold">{formattedName}</span>
          </p>

          {loading && (
            <div className="flex justify-center mb-6">
              <div className="animate-spin rounded-full h-10 w-10 border-4 border-cyan-500 border-t-transparent"></div>
            </div>
          )}

          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3
              gap-4 sm:gap-5 md:gap-6
            "
          >
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/lessons/${cat.id}`}
                className="
                  block text-center px-6 py-4 
                  rounded-xl bg-white font-semibold
                  text-lg sm:text-xl
                  hover:bg-cyan-300 hover:text-black 
                  hover:shadow-lg transition-all duration-200
                "
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {!loading && categories.length === 0 && (
            <p className="text-center text-xl text-stone-600 mt-6">
              No categories available for this language.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
