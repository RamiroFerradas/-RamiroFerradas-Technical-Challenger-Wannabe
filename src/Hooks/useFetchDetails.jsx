import React, { useEffect, useState } from "react";
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
