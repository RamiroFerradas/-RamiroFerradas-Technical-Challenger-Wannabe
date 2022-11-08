import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchPlanets() {
  const [planet, setPlanet] = useState([]);

  const fetchDetailsPlanets = async (value) => {
    const response = (await axios(value)).data;

    setPlanet(response?.name);
  };

  useEffect(() => {
    if (!planet.length) fetchDetailsPlanets();
  }, [planet.length]);

  return { planet, fetchDetailsPlanets };
}
