import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function LessonDetail() {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadLesson() {
      try {
        const response = await fetch("http://localhost:3001/lessons?size=99999");

        if (!response.ok) {
          throw new Error("Errore HTTP: " + response.status);
        }

        const data = await response.json();
        const lessons = data.content;

        const foundLesson = lessons.find(
          (l) => String(l.id) === String(lessonId)
        );

        setLesson(foundLesson || null);

      } catch (error) {
        console.error("Errore nel fetch:", error);
      } finally {
        setLoading(false);
      }
    }

    loadLesson();

  }, [lessonId]);

  if (loading) {
    return (
      <div className="flex justify-center pt-20">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-cyan-500 border-t-transparent" />
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="text-center text-xl py-20">
        Lesson not found.
      </div>
    );
  }

  return (
    <div className="bg-amber-50">
      <div className="max-w-3xl mx-auto px-6 py-14">

        <div className="rounded-2xl overflow-hidden shadow-lg mb-10">
          <img
            src={lesson.imageUrl}
            alt={lesson.title}
            className="w-full object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold text-stone-900 mb-6">
          {lesson.title}
        </h1>

        <div className="prose prose-stone max-w-none text-lg leading-relaxed">
          <ReactMarkdown>{lesson.text}</ReactMarkdown>
        </div>

      </div>
    </div>
  );
}

