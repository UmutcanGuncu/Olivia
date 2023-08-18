import { useContext } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import { ThemeContext } from './context/ThemeContext';
import About from './components/About';

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <>
    <div id={theme}>
    <Navbar></Navbar>
     
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/about' element = {<About/>}></Route>
      </Routes>
      <Footer></Footer>
      </div>
    </>
  
  )
}

export default App
