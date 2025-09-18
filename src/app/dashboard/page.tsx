"use client";

import { useQuery } from "@tanstack/react-query";
import getBooks from "../../db/api";
import { BibleHeader } from "@/components/BibleHeader";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("read");
  const [currentBook, setCurrentBook] = useState("Genesis");
  const [currentChapter, setCurrentChapter] = useState(1);
  const query = useQuery({ queryKey: ["books"], queryFn: getBooks });

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Implement search functionality here
  };

  const handleBookChange = (book: string) => {
    setCurrentBook(book);
    setCurrentChapter(1); // Reset to chapter 1 when changing books
  };

  const handleChapterChange = (chapter: number) => {
    setCurrentChapter(chapter);
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };
  if (!query.data) {
    return <div>No data in database</div>;
  } else if (query.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BibleHeader
        darkMode={darkMode}
        onDarkModeToggle={handleDarkModeToggle}
        onSearch={handleSearch}
      />
      <main>
        {/* Added some padding for better layout */}
        <div className="px-20 md:px-20">
          {/* A single paragraph tag to contain all the verses */}
          <p className="text-lg leading-relaxed">
            {query.data.map((verse, index) => (
              // Use a React Fragment or a <span> for each verse segment
              <span key={verse.book_id || index}>
                <sup className="font-bold text-sm mr-1">{verse.verses}</sup>
                {/* Add a space after the verse text for separation */}
                {verse.verses_text}{" "}
              </span>
            ))}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
