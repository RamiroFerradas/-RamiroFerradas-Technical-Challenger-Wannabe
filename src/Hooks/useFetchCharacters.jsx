import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchCharacters() {
  const [characters, setCharacters] = useState([]);

  const [totalCharacters, setTotalCharacters] = useState();
  const fetchCharacters = async (value) => {
    if (value) {
      try {
        const response = (
          await axios.get(`https://swapi.dev/api/people/?page=${value}`)
        ).data;
        setCharacters(await response.results);
        setTotalCharacters(await response.count);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (!characters.length) fetchCharacters();
  }, [characters.length]);

  return {
    characters,
    totalCharacters,
    setCharacters,
    fetchCharacters,
  };
}
