import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetchCharacters from "./useFetchCharacters";

export default function useSearchCharacter() {
  const [search, setSearch] = useState([]);

  const fetchSearchCharacter = async (value) => {
    const response = (
      await axios.get(`https://swapi.dev//api/people/?search=${value}`)
    ).data;
    const res = await response.results;

    setSearch(await res);
  };

  useEffect(() => {
    fetchSearchCharacter();
  }, []);
  return { search, fetchSearchCharacter };
}
