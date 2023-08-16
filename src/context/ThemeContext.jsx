import { createContext } from "react";
import useTheme from "../customHooks/useTheme";

 const ThemeContext = createContext();
 function ThemeContextProvider({ children }) {
  const [theme, handleTheme] = useTheme();
  const data = {
    theme: theme,
    handleTheme: handleTheme,
  };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
}
export { ThemeContext, ThemeContextProvider };