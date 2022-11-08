import React, { useEffect, useState } from "react";
import useFetchCharacters from "../../Hooks/useFetchCharacters";

export default function Paginado({
  page,
  setPage,
  totalCharacters,
  setCharacters,
}) {
  let pageNumbers = [];
  let [characterPerPage, setcharacterPerPage] = useState(10);
  let totalPages = Math.ceil(totalCharacters / characterPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = async (e) => {
    setPage(await e.target.value);
    setCharacters([]);
  };

  return (
    <div>
      {pageNumbers?.map((num) => {
        return (
          <button
            key={num}
            className={page === num ? "btnActive" : "btnPagination"}
            value={num}
            onClick={handleClick}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
}
