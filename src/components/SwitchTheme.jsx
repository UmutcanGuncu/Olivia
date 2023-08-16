import { useContext } from "react"
import ThemeContext, {Context} from "../context/ThemeContext"
export default function SwitchTheme(){
    const {theme, setTheme} = useContext(Context)
    return (<>
    <li className=""><span onClick={()=> setTheme(theme === "light" ? "dark" : "light")}  className="nav-link fs-12 mx-2 px-2 text-muted">Change Theme</span></li>
    </>)
}