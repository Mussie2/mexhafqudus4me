"use client";

import { useQuery } from "@tanstack/react-query";
import getBooks from "../../db/api";
import { BibleHeader } from "@/components/BibleHeader";
import { useEffect, useState } from "react";
import { signOut } from "@/lib/utlis/actions";
import { createClient } from "@/lib/utlis/supabase/clinte";
import { redirect } from "next/navigation";

const supabase = await createClient();
const user = await supabase.auth.getUser();
if (user.data.user === null) {
  redirect("/");
}
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

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    redirect("/");
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BibleHeader
        darkMode={darkMode}
        onDarkModeToggle={handleDarkModeToggle}
        onSearch={handleSearch}
        onSignOut={handleSignOut}
      />
      <main>
        {/* Added some padding for better layout */}
        <div className="px-40 md:px-40">
          {/* A single paragraph tag to contain all the verses */}
          <p className="text-lg leading-relaxed">
            {!query.data ? (
              <span>Loading...</span>
            ) : (
              query.data.map((verse, index) => (
                <span key={verse.book_id || index}>
                  <sup className="font-bold text-sm mr-1">{verse.verses}</sup>
                  {verse.verses_text}{" "}
                </span>
              ))
            )}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
