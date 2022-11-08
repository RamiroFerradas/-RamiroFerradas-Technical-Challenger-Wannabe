import React, { useEffect, useState } from "react";
import useFetchCharacters from "../../Hooks/useFetchCharacters";
import useSearchCharacter from "../../Hooks/useFetchSearchCharacter";
import useLoader from "../../Hooks/useLoader";
import Loader from "../Loader/Loader";

export default function SearchBar({ characters, setCharacters, setPage }) {
  const [name, setName] = useState();
  const { load, setLoad } = useLoader();

  const { search, fetchSearchCharacter } = useSearchCharacter();

  useEffect(() => {
    if (name) {
      setCharacters(search);
      setLoad(false);
    }
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearchCharacter(name);
    setLoad(true);
  };

  const handleInputChange = (e) => {
    setName(e.target.value.toLowerCase());
  };

  const handleClear = () => {
    setCharacters([]);
    setPage(1);
  };

  return load ? (
    <Loader />
  ) : (
    <div>
      <div>{search.name}</div>
      <div>{search.name}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="txt"
          onChange={(e) => handleInputChange(e)}
          placeholder="Search Character..."
        />
        <button type="submit" value="Submit">
          SEARCH
        </button>
        <button onClick={handleClear}>CLEAR</button>
      </form>
    </div>
  );
}
