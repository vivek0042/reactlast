import react from 'react'
import {Route,Routes} from 'react-router-dom'
import About from './About'
import Contact from './Cotact'
import {Link} from "react-router-dom"
import Error from './error'
function App() {
  return (
    <>
    {/* <h1>Hello moto</h1>
    <About/>
    <Contact/> */}
    <Link to="/">About Us</Link>
      <Link to="/Contact">Contact us</Link>

    <Routes>
      <Route path="/" Component={About}/>
      <Route path="/Contact" Component={Contact}/>
      <Route path="*" Component={Error}/>
    </Routes>
    </>
)
}

export default App;
