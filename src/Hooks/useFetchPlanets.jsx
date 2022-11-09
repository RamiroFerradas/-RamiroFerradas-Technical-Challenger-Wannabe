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

//Hook perzonalizado para poder extraer el detalle del planeta ("homeworld") pasandole como "value" la respectiva url. Posible de reutilizar para extraer la informacion en cualquier parte de la pagina.
