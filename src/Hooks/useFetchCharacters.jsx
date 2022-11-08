import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchCharacters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const [totalCharacters, setTotalCharacters] = useState();
  const fetchCharacters = async () => {
    try {
      const response = (
        await axios.get(`https://swapi.dev/api/people/?page=${page}`)
      ).data;
      setCharacters(await response.results);
      setTotalCharacters(await response.count);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!characters.length) fetchCharacters();
  }, [page, characters.length]);

  return {
    page,
    setPage,
    characters,
    totalCharacters,
    setCharacters,
    fetchCharacters,
  };
}
