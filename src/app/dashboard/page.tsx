"use client";

import { useQuery } from "@tanstack/react-query";
import getBooks from "../db/api";

const Dashboard = () => {
  const query = useQuery({ queryKey: ["books"], queryFn: getBooks });
  return (
    <div>
      {query.data?.map((book) => (
        <span
          key={book.book_id}
          onClick={() => console.log(book)}
          className="cursor-pointer hover:decoration-dashed hover:underline hover:decoration-amber-400 hover:decoration-2 hover:underline-offset-5"
        >
          <sup className="pr-1">{book.verses}</sup>
          {book.verses_text}
        </span>
      ))}
    </div>
  );
};

export default Dashboard;
