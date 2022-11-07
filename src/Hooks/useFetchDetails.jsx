import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchDetails(value) {
  const [detail, setDetail] = useState({});

  console.log("detalles", detail);

  const fetchDetailsCharacter = async () => {
    const response = (await axios.get(value)).data;

    setDetail(await response);
  };

  useEffect(() => {
    fetchDetailsCharacter();
  }, []);
  return { detail };
}
