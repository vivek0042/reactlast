import React from 'react'
import Galleryshow from './galleryshow'
import Navbar from './Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import("bootstrap");
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    // <BrowserRouter>
    <div>
    {/* <Navbar/> */}
    <Galleryshow/>
    </div>
      
    // </BrowserRouter>
  )
}

export default App

