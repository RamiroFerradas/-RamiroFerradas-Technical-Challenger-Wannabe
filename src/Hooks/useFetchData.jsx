import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchData() {
  const [films, setFilms] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);

  const fetchData = async (data, value) => {
    if (value) {
      try {
        const posts = await Promise.all(
          value.map(async (films) => {
            const res = await axios(films);
            return res.data;
          })
        );
        if (data === "films") {
          setFilms(posts);
        }
        if (data === "vehicles") {
          setVehicles(posts);
        }
        if (data === "starships") {
          setStarships(posts);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { films, fetchData, vehicles, starships };
}
