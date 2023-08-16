import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import ThemeProvider from './context/ThemeContext';

function App() {
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
    <>
    <ThemeProvider>
      <Navbar></Navbar>
     
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer></Footer>
    </ThemeProvider>
    </>
  )
}

export default App
