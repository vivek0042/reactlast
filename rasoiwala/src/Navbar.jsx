import React from 'react'
import { useState } from 'react'
import Menu from './Menu'

const Navbar = () => {
  const[item1,upitem1]=useState(Menu);
  const filterItems=(cateItem)=>{
    const updatedItem=Menu.filter((curElem)=>{
      return curElem.category===cateItem;
      
    });
    upitem1(updatedItem);
  }
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">RasoiWala.com</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active" >
        <button className="nav-link" onClick={()=>filterItems("breakfast")}>breakfast <span className="sr-only">(current)</span></button>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Lunch<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Dinner <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Brand-Food <span className="sr-only">(current)</span></a>
      </li>
      
      
    </ul>
    
  </div>
</nav>
    
         
      
    </div>
  )
}

export default Navbar

