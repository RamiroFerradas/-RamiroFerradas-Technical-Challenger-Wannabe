import React, { useState } from "react";

export default function useLoader() {
  const [load, setLoad] = useState(false);

  return { load, setLoad };
}

//Hook perzonalizado para poder establecer un "laoder" en toda la pagina. Posible de reutilizar para extraer la informacion en cualquier parte de la pagina.
