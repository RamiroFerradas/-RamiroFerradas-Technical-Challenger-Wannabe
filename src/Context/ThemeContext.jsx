import { createContext } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const ThemeContext = createContext();
const initialTheme = "dark";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage(
    "theme",
    initialTheme ? initialTheme : `dark`
  );
  const [check, setCheck] = useLocalStorage("check", false);

  const handleTheme = (e) => {
    if (e.target.checked === true) {
      setTheme("dark");
      setCheck(true);
    } else {
      setTheme("light");
      setCheck(false);
    }
  };

  const data = { theme, handleTheme, check };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvider };
export default ThemeContext;

/*Contexto de tema de color para poder para poder usar las funcionalidades en toda la pagina. Complementado con el hook "useTheme". 

Uso:
 const  { theme, handleTheme, check } = useTheme() */
