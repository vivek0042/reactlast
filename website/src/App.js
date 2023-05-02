import react from 'react'
import Home from './Home'
import Navbar from './Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Service from './Service'
import Contact from './Contact'
import About from './About'
import './App.css'
import {Routes,Route} from "react-router-dom"
import error from './error'

const App=()=>{
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/service" Component={Service} />
      <Route path="/contact" Component={Contact} />
      {/* <Route path="/resume"  */}
      <Route path="*" Component={error} />
    </Routes>
    
    

    </>
  )
}
export default App