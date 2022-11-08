import React, { useState } from "react";
import { Pagination, Button } from "react-bootstrap";

export default function Paginado({
  page,
  setPage,
  totalCharacters,
  setCharacters,
  setTotalCharacters,
}) {
  let pageNumbers = [];
  let [characterPerPage, setcharacterPerPage] = useState(10);
  let totalPages = Math.ceil(totalCharacters / characterPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = async (num) => {
    setCharacters([]);
    setPage(num);
  };

  return (
    <div>
      <Pagination className="d-flex justify-content-center mt-3" size="sm">
        <Button
          className="me-3"
          variant="dark"
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1), setCharacters([]);
          }}
        >
          {"<"}
        </Button>
        {pageNumbers?.map((num) => {
          return (
            <Button
              size="sm"
              className="me-1 text-warning"
              key={num}
              disabled={page === num}
              onClick={() => handleClick(num)}
              variant="dark"
            >
              {num}
            </Button>
          );
        })}
        <Button
          className="ms-3"
          variant="dark"
          disabled={page === totalPages}
          onClick={() => {
            setPage(page + 1), setCharacters([]);
          }}
        >
          {">"}
        </Button>
      </Pagination>
    </div>
  );
}
