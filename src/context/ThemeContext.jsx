import { createContext, useEffect, useState } from "react";
export const Context = createContext();
const Provider = ({children}) => {
  const[theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light");
  useEffect(()=>{
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.body.classList.toggle(localTheme)
  },[theme])
  const datas ={
    theme,
    setTheme
  }
    return (
        <Context.Provider value={datas}>
            {children}
        </Context.Provider>
    )
}
export default Provider