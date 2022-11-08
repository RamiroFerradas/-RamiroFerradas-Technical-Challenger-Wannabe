import React from "react";
import { Card, Button } from "react-bootstrap";
import useFetchPlanets from "../../Hooks/useFetchPlanets";

export default function CardHome({ character, handleDetail }) {
  return (
    <>
      <Card
        className="text-center"
        body
        // style={{ width: "15vw" }}
        key={character.name}
        onClick={() => handleDetail(character.url)}
        border="warning"
      >
        <Card.Title style={{ fontSize: "14px" }}>{character.name}</Card.Title>

        <Button variant="dark">View</Button>
      </Card>
    </>
  );
}
