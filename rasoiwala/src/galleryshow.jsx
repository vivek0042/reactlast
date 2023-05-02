import react,{ useState } from 'react'
import './App.css'

// import {NavLink} from 'react-router-dom';



import Menu from './Menu'

const Galleryshow=()=>{
  
  const date=new Date();
  const year=date.getFullYear();

   const[items,setItems]=useState(Menu);
   const filterItems=(cateItem)=>{
    const updatedItem=Menu.filter((curElem)=>{
      return curElem.category===cateItem;
      
    });
    setItems(updatedItem);
  }
   return(
    <>
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <a className="navbar-brand font-weight-bold mr-5" href="/"><img src="./images/maharaj.png" alt='name' className='i1'></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto text-center ">
      <li className="nav-item active" >
        <a className="nav-link text-light font-weight-bold mr-3 " href="#"onClick={()=>filterItems("breakfast")}><h5>BreakFast</h5> <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link  text-light font-weight-bold mr-3" href="#" onClick={()=>filterItems("lunch")}><h5>Lunch</h5><span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link  text-light font-weight-bold mr-3"  href="#" onClick={()=>filterItems("dinner")}><h5>Dinner</h5> <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link  text-light font-weight-bold mr-3" href="#" onClick={()=>filterItems("brand")}><h5>Weird</h5><span className="sr-only">(current)</span></a>
      </li>
      
      
    </ul>
    
  </div>
</nav>
    
         
      
    </div>






















<div className='motu_container mr-auto'>
  <div className="container">
          <div className="items">
          
          
          {
            items.map((elem)=>{
              const{id,name,image,category,watch}=elem;
              return(
                <div className="ele">
              <div className="cardboard">
                        <img src={image} alt="img"/>
                        <div className="title">
                          <h1>{name}</h1>
                          <a href={watch} target="_blank">
                            <button className="btn">Watch</button>
                          </a>
                        </div>

                  </div>


</div>



  )})}
  
          
          




          </div>
  </div>
   </div>
   
<footer className="page-footer font-small text-white bg-primary ">

  
  <div className="footer-copyright text-center py-3 text-white">© {year} Copyright:
    <a className="text-white" href="/"> RASOIWALA.COM</a>
  </div>


</footer>













    </>
  
  
  
  
  
  
  
          


            

   
  
  
  
  
  
  )}


   
   export default Galleryshow



















