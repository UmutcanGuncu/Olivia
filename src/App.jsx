import { Children, useContext } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import { ThemeContext } from './context/ThemeContext';
import About from './components/About';
import { Toaster } from 'react-hot-toast';

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <>
   
    <div id={theme}>
    <Toaster  toastOptions={{
    className: '',
    style: {
      border: '2px solid #713200',
      padding: '20px',
      
    },
  }}></Toaster>
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
