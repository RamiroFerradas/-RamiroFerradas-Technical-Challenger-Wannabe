import React from "react";
import { Card, Button } from "react-bootstrap";
import useTheme from "../../Hooks/useTheme";

export default function CardHome({ character, handleDetail }) {
  const { theme } = useTheme();
  return (
    <div>
      <Card
        text={theme === "dark" ? "light" : "dark"}
        className="text-center"
        body
        // style={{ width: "15vw" }}
        key={character.name}
        border="warning"
        bg={theme}
      >
        <Card.Title style={{ fontSize: "14px" }}>{character.name}</Card.Title>

        <Button
          onClick={() => handleDetail(character.url)}
          variant={theme === "dark" ? "outline-warning" : "dark"}
        >
          View
        </Button>
      </Card>
    </div>
  );
}
