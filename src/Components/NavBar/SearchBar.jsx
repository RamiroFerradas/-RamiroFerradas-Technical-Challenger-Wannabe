import React, { useEffect, useState } from "react";
import { Button, Container, Form, Navbar, Stack } from "react-bootstrap";
import useFetchCharacters from "../../Hooks/useFetchCharacters";
import useSearchCharacter from "../../Hooks/useFetchSearchCharacter";
import useLoader from "../../Hooks/useLoader";
import Loader from "../Loader/Loader";
import logoSW from "../../assets/Logos/Star_Wars_Logo..png";
import Swal from "sweetalert2";

export default function SearchBar({ characters, setCharacters, setPage }) {
  const [name, setName] = useState();
  const { load, setLoad } = useLoader();
  const [noMatch, setNoMatch] = useState(false);

  const { search, fetchSearchCharacter } = useSearchCharacter();

  useEffect(() => {
    if (name) {
      setLoad(false);
      if (search.length) {
        setCharacters(search);
        setNoMatch(false);
      } else {
        setNoMatch(true);
        Swal.fire({
          icon: "error",
          text: "No character found with that name",
          showConfirmButton: false,
          timer: 1400,
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
  };

  return (
    <div>
      <Stack>
        <Navbar expand="md" bg="dark" className="mb-3" variant="dark ">
          <Container fluid className="d-flex justify-content-center">
            <Navbar.Brand onClick={handleClear}>
              <img
                alt="logoStarWars"
                src={logoSW}
                width="125"
                height="65"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Form className="d-flex  " onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-3"
                aria-label="Search"
                onChange={(e) => handleInputChange(e)}
              />
              <Button
                className="me-3"
                type="submit"
                variant="outline-warning"
                disabled={load || !name || /[^\w\s]/.test(name)}
              >
                {load ? "Loading…" : "Search"}
              </Button>
              <Button onClick={handleClear} variant="outline-secondary">
                Reset
              </Button>
            </Form>
          </Container>
        </Navbar>
      </Stack>
    </div>
  );
}
