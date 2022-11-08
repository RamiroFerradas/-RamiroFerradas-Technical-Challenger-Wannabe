import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useSearchCharacter() {
  const [search, setSearch] = useState([]);

  const fetchSearchCharacter = async (value) => {
    if (value) {
      try {
        const response = (
          await axios.get(`https://swapi.dev//api/people/?search=${value}`)
        ).data;

        const res = await response.results;
        setSearch(await res);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchSearchCharacter();
  }, []);
  return { search, fetchSearchCharacter };
}
