import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchCharacters() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await axios.get(`https://swapi.dev/api/people`);
    const res2 = await response.data.results;

    console.log(response);

    return setCharacters(res2);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return { characters };
}
