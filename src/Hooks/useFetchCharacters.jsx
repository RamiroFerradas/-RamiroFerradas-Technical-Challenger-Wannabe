import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchCharacters(page) {
  const [characters, setCharacters] = useState([]);
  const [totalCharacters, setTotalCharacters] = useState();

  const fetchCharacters = async () => {
    const response = (
      await axios.get(`https://swapi.dev/api/people/?page=${page}`)
    ).data;
    console.log(response, "response");
    setCharacters(await response.results);
    setTotalCharacters(await response.count);
  };

  useEffect(() => {
    fetchCharacters();
  }, [page]);

  return { characters, totalCharacters, setCharacters };
}
