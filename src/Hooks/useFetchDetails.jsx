import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchDetails(value) {
  const [detail, setDetail] = useState({});

  const fetchDetailsCharacter = async () => {
    const response = (await axios.get(await value)).data;
    setDetail(await response);
  };

  useEffect(() => {
    fetchDetailsCharacter();
  }, []);
  return { detail };
}
