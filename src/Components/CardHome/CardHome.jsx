import React from "react";
import { Card, Button } from "react-bootstrap";
import useFetchPlanets from "../../Hooks/useFetchPlanets";

export default function CardHome({ character, handleDetail }) {
  return (
    <div>
      <Card
        text="light "
        className="text-center"
        body
        // style={{ width: "15vw" }}
        key={character.name}
        border="warning"
        bg="dark"
      >
        <Card.Title style={{ fontSize: "14px" }}>{character.name}</Card.Title>

        <Button
          onClick={() => handleDetail(character.url)}
          variant="outline-warning"
        >
          View
        </Button>
      </Card>
    </div>
  );
}
