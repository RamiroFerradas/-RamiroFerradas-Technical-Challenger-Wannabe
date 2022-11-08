import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchFilms() {
  const [films, setFilms] = useState({ title: "" });

  const fetchDetailsFilms = async (value) => {
    if (value) {
      try {
        const res = await value.map(async (e) => {
          const response = (await axios(e)).data;
          const res = response.title;
          setFilms((state) => {
            return {
              ...state,
              title: res,
            };
          });
        });
        return res;
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchDetailsFilms();
  }, []);

  return { films, fetchDetailsFilms };
}
