import React from "react";
import SearchBar from "./SearchBar";

export default function Navbar({ characters, setCharacters }) {
  return (
    <div>
      <SearchBar characters={characters} setCharacters={setCharacters} />
    </div>
  );
}
