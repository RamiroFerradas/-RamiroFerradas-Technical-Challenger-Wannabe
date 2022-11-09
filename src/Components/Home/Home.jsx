import React, { useState } from "react";
import style from "./Home.module.css";
import Paginado from "../Paginado/Paginado";
import Loader from "../Loader/Loader";
import Detail from "../Detail/Detail";
import NavBar from "../NavBar/NavBar";
import CardHome from "../CardHome/CardHome";
import useFetchCharacters from "../../Hooks/useFetchCharacters";
import { Col, Row } from "react-bootstrap";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import useTheme from "../../Hooks/useTheme";
import { Modal, Button } from "react-bootstrap";
import Info from "../Info/Info";

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
      {characterDetails && (
        <Detail
          url={url}
          characterDetails={characterDetails}
          setCharacterDetails={setCharacterDetails}
        />
      )}

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
          <Row xs={2} md={4} s={2} lg={5} className="g-3 p-3">
            {characters.map((e) => {
              return (
                <Col key={e.name}>
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
