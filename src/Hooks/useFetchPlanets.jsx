import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchPlanets() {
  const [planet, setPlanet] = useState([]);

  const fetchDetailsPlanets = async (value) => {
    if (value) {
      try {
        const response = (await axios(await value)).data;
        setPlanet(response?.name);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (!planet.length) fetchDetailsPlanets();
  }, [planet.length]);

  return { planet, fetchDetailsPlanets };
}
