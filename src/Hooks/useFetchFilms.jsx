import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchFilms() {
  const [films, setFilms] = useState([]);

  const fetchDetailsFilms = async (value) => {
    console.log(value);
    const res = value.map(async (e) => {
      return (await axios.get(e)).data.title;
      // const titles = await response.title;
    });
    console.log(res);
    setFilms(res);
  };

  useEffect(() => {
    fetchDetailsFilms();
  }, []);

  return { films, fetchDetailsFilms };
}
