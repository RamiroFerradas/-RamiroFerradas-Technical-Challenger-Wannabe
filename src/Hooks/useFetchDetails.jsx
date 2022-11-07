import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchDetails(value) {
  console.log("aa", value);

  const [detail, setDetail] = useState([]);
  console.log("aa", detail);

  const fetchDetailsCharacter = async () => {
    const response = (await axios.get(value)).data;
    console.log(response, "response");
    setDetail(await response);
  };

  useEffect(() => {
    fetchDetailsCharacter();
  }, []);
  return { detail };
}
