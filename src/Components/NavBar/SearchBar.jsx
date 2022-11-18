import React from "react";
import { Button, Form } from "react-bootstrap";
import useTheme from "../../Hooks/useTheme";

export default function SearchBar({
  load,
  name,
  handleInputChange,
  handleClear,
}) {
  const { theme } = useTheme();
  return (
    <>
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
        disabled={!load || !name}
      >
        {!load ? "Loading…" : "Search"}
      </Button>
      <Button
        className="me-3"
        onClick={handleClear}
        variant={theme === "dark" ? "outline-secondary" : "outline-dark"}
      >
        Reset
      </Button>
    </>
  );
}
