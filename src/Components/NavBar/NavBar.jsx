import React, { useEffect, useState } from "react";
import { Button, Container, Form, Navbar, Stack } from "react-bootstrap";
import useSearchCharacter from "../../Hooks/useFetchSearchCharacter";
import useLoader from "../../Hooks/useLoader";
import logoSW from "../../assets/Logos/Star_Wars_Logo..png";
import Swal from "sweetalert2";
import useTheme from "../../Hooks/useTheme";
import style from "./NavBar.module.css";
import SearchBar from "./SearchBar";

export default function NavBar({ setCharacters, setPage, setSearch }) {
  const [name, setName] = useState();
  const { load, setLoad } = useLoader();
  const { search, fetchSearchCharacter } = useSearchCharacter();
  const { theme, handleTheme, check } = useTheme();

  useEffect(() => {
    if (name) {
      setLoad(false);
      if (search.length) {
        setCharacters(search);
        setSearch(true);
      } else {
        Swal.fire({
          icon: "error",
          text: "No characters match the search criteria",
          showConfirmButton: false,
          timer: 1800,
          background: "#0c0c0cb0",
          color: "white",
        });
      }
    }
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearchCharacter(name);
    setLoad(true);
    e.target.reset();
  };

  const handleInputChange = (e) => {
    setName(e.target.value.toLowerCase());
  };

  const handleClear = () => {
    setCharacters([]);
    setPage(1);
    setSearch(false);
  };

  return (
    <div>
      <Stack>
        <Navbar
          expand="lg"
          bg={theme === "dark" ? "dark" : "secondary"}
          className="mb-3"
          variant="dark"
          // style={{ minHeight: "110px" }}
        >
          <Container
            fluid
            className="d-flex justify-content-center align-items-center mt-3"
          >
            <Navbar.Brand
              onClick={handleClear}
              className="d-flex justify-content-center align-items-center  "
            >
              <img
                alt="logoStarWars"
                src={logoSW}
                width="125"
                height="65"
                className={style.imgLogo}
              />
            </Navbar.Brand>
            <Form className="d-flex" onSubmit={handleSubmit}>
              <SearchBar
                load={load}
                name={name}
                handleInputChange={handleInputChange}
                handleClear={handleClear}
              />
              <div className={`ms-3 ${style.switch}`}>
                <input
                  type="checkbox"
                  className={style.checkbox}
                  id="checkbox"
                  onChange={handleTheme}
                  defaultChecked={check}
                />
                <label htmlFor="checkbox" className={style.label}>
                  <i className={`fas fa-moon ${style.fa_moon}`}></i>
                  <i className={`fas fa-sun ${style.fa_sun}`}></i>
                  <div className={style.ball} />
                </label>
              </div>
            </Form>
          </Container>
        </Navbar>
      </Stack>
    </div>
  );
}
