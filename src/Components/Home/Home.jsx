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
import Card from "../Card/Card";

export default function Home() {
  const [characterDetails, setCharacterDetails] = useState(false);
  const { characters, totalCharacters, setCharacters, page, setPage } =
    useFetchCharacters();
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
        <Navbar
          characters={characters}
          setCharacters={setCharacters}
          setPage={setPage}
        />
      )}

      <Paginado
        totalCharacters={totalCharacters}
        page={page}
        setPage={setPage}
        setCharacters={setCharacters}
      />
      <ul>
        {!characters.length ? (
          <Loader />
        ) : (
          <div>
            {characters.map((e) => {
              return (
                <Card handleDetail={handleDetail} name={e.name} url={e.url} />
              );
            })}
          </div>
        )}
      </ul>
    </div>
  );
}
