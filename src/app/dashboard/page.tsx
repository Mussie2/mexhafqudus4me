"use client";
import { useState, useEffect } from "react";

interface Book {
  id: number;
  name: string;
  chapters: Chapter[];
}

interface Chapter {
  id: number;
  number: number;
  name: string;
  description: string;
}

const books: Book[] = [
  {
    id: 1,
    name: "Genesis",
    chapters: [
      {
        id: 1,
        number: 1,
        name: "Creation",
        description: "God creates the world.",
      },
      {
        id: 2,
        number: 2,
        name: "Fall of Man",
        description: "Adam and Eve's sin.",
      },
      // ... more chapters
    ],
  },
  {
    id: 2,
    name: "Exodus",
    chapters: [
      {
        id: 1,
        number: 1,
        name: "Moses and the Exodus",
        description: "Moses leads the Israelites out of Egypt.",
      },
      {
        id: 2,
        number: 2,
        name: "The Ten Commandments",
        description: "God gives laws to the people.",
      },
      // ... more chapters
    ],
  },
  // Add more books here
];

const Dashboard = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [showChapters, setShowChapters] = useState(false);

  useEffect(() => {
    if (selectedBook) {
      setShowChapters(true);
    }
  }, [selectedBook]);

  return (
    <div className="dashboard">
      <header>
        <h1>Bible Books & Chapters</h1>
      </header>
      <main>
        <section className="books">
          <h2>Books</h2>
          <div className="book-list">
            {books.map((book) => (
              <div
                key={book.id}
                className="book"
                onClick={() => setSelectedBook(book)}
              >
                <h3>{book.name}</h3>
                <ul className="chapters">
                  {book.chapters.map((chapter) => (
                    <li key={chapter.id} className="chapter">
                      <span>{chapter.number}.</span>
                      <span>{chapter.name}</span>
                      <p>{chapter.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        {selectedBook && showChapters && (
          <section className="chapters">
            <h2>Chapters</h2>
            <div className="chapter-list">
              {selectedBook.chapters.map((chapter) => (
                <div key={chapter.id} className="chapter">
                  <span>{chapter.number}.</span>
                  <span>{chapter.name}</span>
                  <p>{chapter.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <footer>
        <p>&copy; 2023 Bible Dashboard</p>
      </footer>
    </div>
  );
};

export default Dashboard;
