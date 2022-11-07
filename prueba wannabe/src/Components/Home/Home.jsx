import React from "react";

import style from "./Home.module.css";

import useFetchCharacters from "../../Hooks/useFetchCharacters";

export default function Home() {
  const { characters } = useFetchCharacters();
  const loading = () => {
    return <h1>Cargando...</h1>;
  };

  return !characters.length ? (
    loading()
  ) : (
    <div className={style.body}>
      {characters &&
        characters.map((e) => {
          return <h1 key={e.name}>{e.name}</h1>;
        })}
    </div>
  );
}
