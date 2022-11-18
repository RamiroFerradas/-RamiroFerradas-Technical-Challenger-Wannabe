import React, { useEffect, useState } from "react";
import useFetchCharacters from "../../Hooks/useFetchCharacters";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import useTheme from "../../Hooks/useTheme";

import { Col, Row } from "react-bootstrap";
import style from "./Home.module.css";

//Components:
import Paginado from "../Paginado/Paginado";
import Loader from "../Loader/Loader";
import Detail from "../Detail/Detail";
import NavBar from "../NavBar/NavBar";
import CardHome from "../CardHome/CardHome";
import Info from "../Info/Info";
import useFetchFilms from "../../Hooks/useFetchData";
import useFetchData from "../../Hooks/useFetchData";

export default function Home() {
  const [url, setUrl] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useLocalStorage("search", false);
  const [characterDetails, setCharacterDetails] = useLocalStorage(
    "modalDetail",
    false
  );
  const {
    characters,
    totalCharacters,
    setCharacters,
    page,
    setPage,
    setTotalCharacters,
  } = useFetchCharacters();
  const { theme } = useTheme();

  const handleShow = () => setShow(true);

  const handleDetail = async (e) => {
    setUrl(e);
    setCharacterDetails(!characterDetails);
  };

  return (
    <div className={theme === "dark" ? style.body : style.bodyLigth}>
      <div className={style.details}>
        {characterDetails && (
          <Detail
            url={url}
            characterDetails={characterDetails}
            setCharacterDetails={setCharacterDetails}
          />
        )}
      </div>

      {show && <Info show={show} setShow={setShow} />}
      <NavBar
        setSearch={setSearch}
        characters={characters}
        setCharacters={setCharacters}
        setPage={setPage}
        setTotalCharacters={setTotalCharacters}
      />

      {!characters.length ? (
        <Loader />
      ) : (
        <div>
          <Row xs={2} md={4} s={2} lg={4} className="g-3 p-3">
            {characters.map((e) => {
              return (
                <Col md={4} key={e.name}>
                  <CardHome handleDetail={handleDetail} character={e} />
                </Col>
              );
            })}
          </Row>

          {!search && (
            <Paginado
              totalCharacters={totalCharacters}
              page={page}
              setPage={setPage}
              setCharacters={setCharacters}
            />
          )}
        </div>
      )}
      <i
        onClick={handleShow}
        className={`fa-sharp fa-solid fa-circle-info ${style.info}`}
      ></i>
    </div>
  );
}
