import React, { useEffect, useState } from "react";
import { Button, Container, Form, Navbar, Stack } from "react-bootstrap";
import useSearchCharacter from "../../Hooks/useFetchSearchCharacter";
import useLoader from "../../Hooks/useLoader";
import logoSW from "../../assets/Logos/Star_Wars_Logo..png";
import Swal from "sweetalert2";
import useTheme from "../../Hooks/useTheme";
import style from "./SearchBar.module.css";

export default function SearchBar({ setCharacters, setPage, setSearch }) {
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
          variant="dark "
        >
          <Container
            fluid
            className="d-flex justify-content-center align-items-center"
            ali
          >
            <div className={style.switch}>
              <input
                type="checkbox"
                className={style.checkbox}
                id="checkbox"
                onChange={handleTheme}
                defaultChecked={check}
              />
              <label for="checkbox" className={style.label}>
                <i className={`fas fa-moon ${style.fa_moon}`}></i>
                <i className={`fas fa-sun ${style.fa_sun}`}></i>
                <div className={style.ball} />
              </label>
            </div>
            <Navbar.Brand onClick={handleClear}>
              <img
                alt="logoStarWars"
                src={logoSW}
                width="125"
                height="65"
                className="d-inline-block align-top me-5"
              />
            </Navbar.Brand>
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search..."
                className="me-4 text-center form-control"
                aria-label="Search"
                onChange={(e) => handleInputChange(e)}
              />
              <Button
                className="me-3"
                type="submit"
                variant="outline-warning"
                disabled={load || !name}
              >
                {load ? "Loading…" : "Search"}
              </Button>
              <Button
                className="me-3"
                onClick={handleClear}
                variant={
                  theme === "dark" ? "outline-secondary" : "outline-dark"
                }
              >
                Reset
              </Button>
            </Form>
          </Container>
        </Navbar>
      </Stack>
    </div>
  );
}
