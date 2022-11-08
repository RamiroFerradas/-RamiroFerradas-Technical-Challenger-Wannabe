import React, { useState } from "react";

export default function useLoader() {
  const [load, setLoad] = useState(false);

  return { load, setLoad };
}
