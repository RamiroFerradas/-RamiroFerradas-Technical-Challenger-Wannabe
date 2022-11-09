import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchSpecies() {
  const [species, setSpecies] = useState([]);

  const fetchSpecies = async (value) => {
    if (value) {
      try {
        value.map(async (e) => {
          const response = (await axios(await e)).data;
          setSpecies(response.name);
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (!species.length) fetchSpecies();
  }, [species.length]);

  return { species, fetchSpecies };
}

//Hook perzonalizado para poder extraer el detalle de la especie del personaje, pasandole como "value" la respectiva url. Posible de reutilizar para extraer la informacion en cualquier parte de la pagina.
