import react from 'react'
import { NavLink } from 'react-router-dom'
import web from './images/vivek.jpeg'
import resume from './resume'

import './App.css'

const About=()=>{
  return(
    <>
       <section id="header" className='d-flex align-items-center'>
        <div className='container-fluid '> 
            <div className='row'>
                <div className='col-10-mx-auto'>
                  <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                 <h1>
                    Believe in<strong className='brand-name'> Atomicity </strong>and<strong className='brand-name'> Honesty </strong>
                 </h1>
                 <h2 className='my-3'>   {/*my-3 here y is for top and bottom both */}
                   Knowledge of Web devlopment and Data science.
                 </h2>
                 <h2 className='my-3'>   {/*my-3 here y is for top and bottom both */}
                   I have Problem Solving Approch and believe in Active Learning.
                 </h2>
                 <h2 className='my-3'>   {/*my-3 here y is for top and bottom both */}
                   Other information shared in Resume.
                 </h2>
                 <div className='mt-3'>    {/*mt-3 means margin top by 3 px */}
                    <NavLink to="https://drive.google.com/file/d/1AZBRz3lwU6DX3rvAhv9pzipca0zk8K9f/view?usp=share_link" className='btn-get-started'>Resume</NavLink>
                    
                    
      
                 </div>

                </div>
                <div className='col-lg-6 order-1 order-lg-1 header-img1'>  {/*in this order use for showing position ingrid .it is responsive element */}
                    <img src={web} className="img-fluid animated1" alt="homeimg"/>
                </div>


                </div>
            </div> 
        </div> 
        </div>
       </section>

    </>
  )
}
export default About