import React, { useState } from "react";
import style from "./Home.module.css";
import Paginado from "../Paginado/Paginado";
import Loader from "../Loader/Loader";
import Detail from "../Detail/Detail";
import SearchBar from "../NavBar/SearchBar";
import CardHome from "../CardHome/CardHome";
import useFetchCharacters from "../../Hooks/useFetchCharacters";
import { Col, Row } from "react-bootstrap";

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

  const handleDetail = async (e) => {
    setUrl(e);
    setCharacterDetails(!characterDetails);
  };

  return (
    <div className={style.body}>
      {characterDetails && (
        <Detail
          url={url}
          characterDetails={characterDetails}
          setCharacterDetails={setCharacterDetails}
        />
      )}
      <SearchBar
        characters={characters}
        setCharacters={setCharacters}
        setPage={setPage}
      />

      {!characters.length ? (
        <Loader />
      ) : (
        <div>
          <Row xs={2} md={4} s={2} lg={5} className="g-3 p-3">
            {characters.map((e) => {
              return (
                <Col key={e.name}>
                  <CardHome handleDetail={handleDetail} character={e} />
                </Col>
              );
            })}
          </Row>
          <Paginado
            totalCharacters={totalCharacters}
            page={page}
            setPage={setPage}
            setCharacters={setCharacters}
          />
        </div>
      )}
    </div>
  );
}
