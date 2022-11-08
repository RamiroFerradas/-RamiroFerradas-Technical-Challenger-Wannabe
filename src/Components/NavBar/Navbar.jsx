import React from "react";
import Filters from "./Filters";
import SearchBar from "./SearchBar";

export default function Navbar({ characters, setCharacters, setPage }) {
  return (
    <div>
      <Filters />
      <SearchBar
        characters={characters}
        setCharacters={setCharacters}
        setPage={setPage}
      />
    </div>
  );
}
