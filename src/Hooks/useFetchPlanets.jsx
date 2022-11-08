import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchPlanets(value) {
  const [planet, setPlanet] = useState({});
  // console.log(planet, "planetaa");

  const fetchDetailsCharacter = async () => {
    const response = (await axios(value)).data;
    // console.log(response);
    setPlanet(response);
  };

  useEffect(() => {
    fetchDetailsCharacter();
  }, []);
  return { planet };
}
