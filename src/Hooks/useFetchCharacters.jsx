import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchCharacters(page) {
  const [characters, setCharacters] = useState([]);
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
    console.log(characters);
    if (!characters.length) fetchCharacters();
  }, [page, characters.length]);

  return { characters, totalCharacters, setCharacters };
}
