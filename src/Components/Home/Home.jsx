import React, { useEffect, useState } from "react";
import axios from "axios";

import style from "./Home.module.css";

import useFetchCharacters from "../../Hooks/useFetchCharacters";
import Paginado from "../Paginado/Paginado";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import useFetchDetails from "../../Hooks/useFetchDetails";
import Detail from "../Detail/Detail";
import Navbar from "../NavBar/Navbar";
import useLoader from "../../Hooks/useLoader";

export default function Home() {
  const { load } = useLoader();
  console.log(load);
  const [page, setPage] = useState(1);
  const [characterDetails, setCharacterDetails] = useState(false);
  const { characters, totalCharacters, setCharacters } =
    useFetchCharacters(page);
  const [url, setUrl] = useState();

  let pageNumbers = [];
  let [characterPerPage, setcharacterPerPage] = useState(10);
  let totalPages = Math.ceil(totalCharacters / characterPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = async (e) => {
    setPage(e.target.value);
    setCharacters([]);
  };
  const handleDetail = async (e) => {
    setUrl(e);
    setCharacterDetails(!characterDetails);
  };

  return characterDetails ? (
    <Detail
      url={url}
      characterDetails={characterDetails}
      setCharacterDetails={setCharacterDetails}
    />
  ) : (
    <div className={style.body}>
      {!characters.length ? (
        <div></div>
      ) : (
        <Navbar characters={characters} setCharacters={setCharacters} />
      )}
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
      <ul>
        {!characters.length ? (
          <Loader />
        ) : (
          <div>
            {characters.map((e) => {
              return (
                <li key={e.name} onClick={() => handleDetail(e.url)}>
                  <button>
                    <span>{e.name}</span>
                  </button>
                </li>
              );
            })}
          </div>
        )}
      </ul>
    </div>
  );
}
