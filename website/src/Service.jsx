import react from 'react'
import { NavLink } from 'react-router-dom'
import web from './images/data science.jpg'
import web1 from './images/web-dev.jpg'
import web2 from './images/ml.png'
import web3 from './images/java.jpeg'
import web4 from './images/postgre.webp'
import web5 from './images/sde.png'



const Service=()=>{
  return(
    <>
       <div className='my-5'>
        <h1 className='text-center'>Our Services</h1>
        </div>
        <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
          <div className='row gy-4'>     
          <div className='col-md-4 col-10 mx-auto'>
                      <div className="card">
              <img className="card-img-top " src={web1} alt="Cardcap"/>
              <div className="card-body">
                <h5 className="card-title">Web devlopment</h5>
                <p className="card-text">I have knowledge of full stack web devlopment.we provide fully responsive and staylist website.</p>
                {/* <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink> */}
              </div>
            </div>
            </div>
            
          
          <div className='col-md-4 col-10 mx-auto'>
                      <div className="card">
              <img className="card-img-top" src={web} alt="Cardcap"/>
              <div className="card-body">
                <h5 className="card-title">Data science</h5>
                <p className="card-text">I have knowledge in data science and i'm successfully completed end to end data science project.</p>
                {/* <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink> */}
              </div>
            </div>
            </div>
            
           

          <div className='col-md-4 col-10 mx-auto'>
                      <div className="card">
              <img className="card-img-top" src={web2} alt="Cardcap"/>
              <div className="card-body">
                <h5 className="card-title">Machine learning</h5>
                <p className="card-text">I have knowledge in machine learning and i'm learn about many machine learning algorithm also.</p>
                {/* <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink> */}
              </div>
            </div>
            </div>
            

          <div className='col-md-4 col-10 mx-auto'>
                      <div className="card">
              <img className="card-img-top" src={web3} alt="Cardcap"/>
              <div className="card-body">
                <h5 className="card-title">Java Devloper</h5>
                <p className="card-text">I have knowledge of core java concept also I have knowledge of OOP and I've completed my DSA practise in Java only.</p>
                {/* <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink> */}
              </div>
            </div>
            </div>
            

          <div className='col-md-4 col-10 mx-auto'>
                      <div className="card">
              <img className="card-img-top" src={web4} alt="Cardcap"/>
              <div className="card-body">
                <h5 className="card-title">PostgreSQL</h5>
                <p className="card-text">I have done so much practise in RDBMS and i have knowledge of core DBMS also.</p>
                {/* <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink> */}
              </div>
            </div>
            </div>
      

          <div className='col-md-4 col-10 mx-auto'>
               <div className="card">
              <img className="card-img-top" src={web5} alt="Cardcap"/>
              <div className="card-body">
                <h5 className="card-title">Softwear Devlopment</h5>
                <p className="card-text">As in engineering there are many project where we use softear devlopment concept so we have idea of basic softwear devlopment.</p>
                {/* <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink> */}
              </div>
            </div>
            </div>
          

            </div>
          </div>   
          </div>
          </div>  

    </>
  )
}
export default Service