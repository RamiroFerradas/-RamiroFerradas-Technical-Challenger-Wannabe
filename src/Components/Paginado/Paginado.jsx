import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
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

  const handleClick = async (num) => {
    setPage(await num);
    setCharacters([]);
  };

  return (
    <div>
      <Pagination className="d-flex justify-content-center">
        {pageNumbers?.map((num) => {
          return (
            <Pagination.Item
              size="sm"
              key={num}
              active={page === num}
              value={num}
              onClick={() => handleClick(num)}
            >
              {num}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
}
