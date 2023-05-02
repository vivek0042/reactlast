import react from 'react'
import { NavLink } from 'react-router-dom'
import web from './images/vivek.jpeg'
import './App.css'
import About from './About'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home=()=>{
  return(
    <>
       <section id="header" className='d-flex align-items-center'>
        <div className='container-fluid nav_bg'> 
            <div className='row'>
                <div className='col-10-mx-auto'>
                  <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                 <h1>
                    Hi! I'm <strong className='brand-name'>Vivek Jain</strong>
                 </h1>
                 <h2 className='my-3'>   {/*my-3 here y is for top and bottom both */}
                 Web Developer,ML Enthusiast,learner.
                 </h2>
                  <div className='mt-3'>    {/*mt-3 means margin top by 3 px */}
                    <NavLink to="https://www.linkedin.com/in/vivek-jain-73b35a214/" className="ico"><LinkedInIcon style={{width:"3rem",height:"auto"}}/></NavLink>
                    <NavLink to="https://github.com/vivek0042" className="ico"><GitHubIcon style={{width:"3rem",height:"auto"}}/></NavLink>
                  
                </div>

                </div>
                <div className='col-lg-6 order-1 order-lg-1  header-img'>  {/*in this order use for showing position ingrid .it is responsive element */}
                    <img src={web} className="img-fluid animated" alt="homeimg"/>
                </div>


                </div>
            </div> 
        </div> 
        </div>
       </section>

    </>
  )
}
export default Home