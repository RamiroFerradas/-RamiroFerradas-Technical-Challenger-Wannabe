import React, { useEffect, useState } from "react";
import axios from "axios";

import style from "./Home.module.css";

import useFetchCharacters from "../../Hooks/useFetchCharacters";
import Paginado from "../Paginado/Paginado";
import Loader from "../Loader/Loader";

export default function Home() {
  const [page, setPage] = useState(2);
  const { characters, totalCharacters, setCharacters } =
    useFetchCharacters(page);

  let pageNumbers = [];
  let [characterPerPage, setcharacterPerPage] = useState(10);
  let totalPages = Math.ceil(totalCharacters / characterPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = async (e) => {
    console.log(e.target.value);
    setPage(e.target.value);
    setCharacters([]);
  };

  return (
    <div className={style.body}>
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
      {/* <Paginado page={page} setPage={setPage} /> */}

      {!characters.length ? (
        <Loader />
      ) : (
        characters.map((e) => {
          return <h1 key={e.name}>{e.name}</h1>;
        })
      )}
    </div>
  );
}
