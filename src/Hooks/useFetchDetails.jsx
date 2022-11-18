import { useEffect } from "react";
import axios from "axios";
import { useLocalStorage } from "./useLocalStorage";

export default function useFetchDetails(value) {
  const [detail, setDetail] = useLocalStorage("detail", {});

  const fetchDetailsCharacter = async () => {
    const response = (await axios.get(await value)).data;
    setDetail(await response);
  };

  useEffect(() => {
    fetchDetailsCharacter();
  }, []);
  return { detail, setDetail };
}

//Hook perzonalizado para poder extraer el detalle del personaje seleccionado, pasandole como "value", la respectiva url. Posible de reutilizar para extraer la informacion en cualquier parte de la pagina.
