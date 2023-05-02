import react ,{useState} from 'react'
import '../src/Form1.css';


const Form=()=>{
    const [fullname,setFullname]=useState({
        fname:"",
        lname:"",
        email1:"viv",
        phone:"",
    })
    // const state=useState()
    
    // const[name,setname]=useState();
    // const[name1,setname1]=useState();
const inputevent=(event)=>{
        // setname(val.target.value);
        const name=event.target.name;
        const value=event.target.value;

    
    setFullname((preValue)=>{
        if(name==="fname"){
            return{
                fname:value,
                lname:preValue.lname,
                email1:preValue.email1,
                phone:preValue.phone,
            };


        }else if(name==='lname'){
            return{
                fname:preValue.fname,
                lname:value,
                email1:preValue.email1,
                phone:preValue.phone,
            }
        }
        else if(name==='email1'){
            return{
                fname:preValue.fname,
                lname:preValue.lname,
                email1:value,
                phone:preValue.phone,



            }
        }
        else if(name==='phone'){
            return{
                fname:preValue.fname,
                lname:preValue.lname,
                email1:preValue.email1,
                phone:value,

            }
        }
    })
};
    const change=(event)=>{
        // setname1(name);
        event.preventDefault();
        alert('form submitted');

    }

    return(
        <>
           <form onSubmit={change}>
                <div className='viv'>
                    <h1>Hello {fullname.fname} {fullname.lname}</h1>
                    <h2>{fullname.email1}</h2>
                    <h3>{fullname.phone}</h3>
                    <input type="text" name="fname" placeholder='please enter your firstname ' onChange={inputevent} value={fullname.fname}></input>
                    
                    <br/>
                    
                    <input type="text" name="lname" placeholder='please enter your lastname ' onChange={inputevent} value={fullname.lname}></input>

                    <br/>

                    <input type="email" name="email1" placeholder='please enter your email ' onChange={inputevent} value={fullname.email1}></input>

                    <br/>

                    <input type="text" name="phone" placeholder='please enter your phonenumber ' onChange={inputevent} value={fullname.phone}></input>

                    <br/>
                    <button type='submit'>Click Me 👍</button>

                </div>
            </form>
        </>
    )
}
export default Form