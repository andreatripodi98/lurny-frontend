import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function LessonsList() {
  const { categoryId } = useParams();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLessons() {
      try {
        const res = await fetch("http://localhost:3001/lessons");
        const json = await res.json();

        const filtered = json.content.filter(
          (lesson) => String(lesson.category.id) === String(categoryId)
        );

        setLessons(filtered);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadLessons();
  }, [categoryId]);

  return (
    <div className="bg-amber-50 px-4 py-10">

      <main className="w-full mx-auto max-w-lg sm:max-w-xl md:max-w-2xl">

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          Choose your lesson
        </h1>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin h-12 w-12 rounded-full border-4 border-cyan-600 border-t-transparent"></div>
          </div>
        )}

        {/* Lessons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/lesson/${lesson.id}`}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4"
            >
              <div className="w-full rounded-2xl overflow-hidden mb-4">
                <img
                  src={lesson.imageUrl}
                  alt={lesson.title}
                  className="w-full h-64 object-cover sm:h-72 md:h-80"
                />
              </div>

              <h3 className="text-2xl font-bold text-stone-900 leading-snug px-1">
                {lesson.title}
              </h3>
            </Link>
          ))}
        </div>

      </main>

    </div>
  );
}
