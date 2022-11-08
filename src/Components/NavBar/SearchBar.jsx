import React, { useEffect, useState } from "react";
import { Button, Container, Form, Navbar, Stack } from "react-bootstrap";
import useSearchCharacter from "../../Hooks/useFetchSearchCharacter";
import useLoader from "../../Hooks/useLoader";
import logoSW from "../../assets/Logos/Star_Wars_Logo..png";
import Swal from "sweetalert2";

export default function SearchBar({ setCharacters, setPage, setSearch }) {
  const [name, setName] = useState();
  const { load, setLoad } = useLoader();
  const { search, fetchSearchCharacter } = useSearchCharacter();
  console.log(search.length);

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
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search..."
                className="me-3 text-center form-control"
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
