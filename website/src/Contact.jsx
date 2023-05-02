import react, { useState } from 'react'

const Contact=()=>{
  const[num,setnum]=useState({
    fname:'',
    phone:'',
    email:'',
    message:''
  });
  const inputEvent=(event)=>{
    const{name,value}=event.target;
    setnum((preval)=>{
      return{
        ...preval,
        [name]:value,
      }
    })

  }
  const formsubmit=(e)=>{
    e.preventDefault()
    alert(`your form is submitted ${num.fname}`)

  }
  return(
    <>
       <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
       </div>
       <div className='contaner contact_div'>
        <div className='row'>

          <div className='col-md-6 col-10 mx-auto'>
          <form onSubmit={formsubmit}>
          <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Full Name</label>
          <input type="text" class="form-control" name="fname" value={num.fname} onChange={inputEvent} id="exampleFormControlInput1" placeholder="Enter your full name"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
          <input type="Number" class="form-control" name="phone" value={num.phone} onChange={inputEvent} id="exampleFormControlInput1" placeholder="Enter your mobile number"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input type="email" class="form-control" name="email" value={num.email} onChange={inputEvent} id="exampleFormControlInput1" placeholder="Enter your valid email"/>
        </div>


        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Message</label>
          <textarea class="form-control" name="message" value={num.message} onChange={inputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>   

      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
      </form>
          </div>
        </div>
       </div>

    </>
  )
}
export default Contact