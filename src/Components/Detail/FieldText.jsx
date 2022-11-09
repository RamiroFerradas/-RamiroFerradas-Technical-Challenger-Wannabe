import React from "react";
import { Card } from "react-bootstrap";

export default function FieldText({ title, text, terminacion, className }) {
  return (
    <>
      <Card.Text className={className}>
        <span>
          {title}: {text} {terminacion}
        </span>
      </Card.Text>
    </>
  );
}

/*Componente reutilizable para renderizar texto dentro de una card pasandole las props opcioonales para renderizar, como el classname */
