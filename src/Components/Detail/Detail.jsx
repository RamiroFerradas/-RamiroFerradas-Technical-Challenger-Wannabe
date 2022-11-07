import React from "react";
import { useLocation } from "react-router";
import useFetchDetails from "../../Hooks/useFetchDetails";
import Loader from "../Loader/Loader";

export default function Detail({ url, setCharacterDetails, characterDetails }) {
  const { detail } = useFetchDetails(url);

  return !detail.name ? (
    <Loader />
  ) : (
    <div>
      <span>{detail.name}</span>
      <button onClick={() => setCharacterDetails(!characterDetails)}>
        VOLVER
      </button>
    </div>
  );
}
