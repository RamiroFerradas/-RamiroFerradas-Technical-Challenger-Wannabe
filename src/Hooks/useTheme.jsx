import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

export default () => useContext(ThemeContext);

//Hook perzonalizado para poder para poder usar el contexto de tema de color que podemos encontrar en la  "Context/UseTheme". Posible de reutilizar para extraer la informacion en cualquier parte de la pagina.
