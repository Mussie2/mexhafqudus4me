"use client";

import { useQuery } from "@tanstack/react-query";
import getBooks from "../../db/api";

const Dashboard = () => {
  const query = useQuery({ queryKey: ["books"], queryFn: getBooks });
  if (!query.data) {
    return <div>No data in database</div>;
  } else if (query.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex items-center justify-center">
      <div>
        <div className="absolute top-5 left-10 right-10 flex items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h500v600q-25 0-42.5 17.5T740-220q0 25 17.5 42.5T800-160v80H300Zm-60-267q14-7 29-10t31-3h20v-440h-20q-25 0-42.5 17.5T240-740v393Zm160-13h320v-440H400v440Zm-160 13v-453 453Zm60 187h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
        <div className="flex items-center justify-center pt-12">
          <h1 className="text-3xl font-bold">{query.data[0].name}</h1>
        </div>
        <div className="mli-auto max-w-[700px] pli-2 w-full sm:w-full mbe-12">
          {query.data.map((book) => (
            <span
              key={book.book_id}
              onClick={() => console.log(book)}
              className="text-[18px] font-[Inter]"
            >
              <sup className="text-amber-300">{book.verses}</sup>
              <a className="cursor-pointer hover:decoration-dashed hover:underline hover:decoration-amber-400 hover:decoration-2 hover:underline-offset-5">
                {book.verses_text}
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
