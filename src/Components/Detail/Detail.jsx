import React, { useEffect } from "react";
import { useLocation } from "react-router";
import useFetchDetails from "../../Hooks/useFetchDetails";
import useFetchFilms from "../../Hooks/useFetchFilms";
import useFetchPlanets from "../../Hooks/useFetchPlanets";

import Loader from "../Loader/Loader";

export default function Detail({ url, setCharacterDetails, characterDetails }) {
  const { detail } = useFetchDetails(url);
  const { planet, fetchDetailsPlanets } = useFetchPlanets();
  const homeworld = detail.homeworld;
  fetchDetailsPlanets(homeworld);

  return !detail.name ? (
    <Loader />
  ) : (
    <div>
      <div>
        <h1>{detail.name}</h1>
        <span>Height: {detail.height} mts.</span>
        <span>Hair color: {detail.hair_color}</span>
        <span>Skin color: {detail.skin_color}</span>
        <span>Birth year: {detail.birth_year}</span>
        <span>Gender: {detail.gender}</span>
        <span>Gender: {detail.gender}</span>
        <span>Homeworld: {planet}</span>
      </div>

      <button onClick={() => setCharacterDetails(!characterDetails)}>
        VOLVER
      </button>
    </div>
  );
}
