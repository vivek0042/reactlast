import react from 'react';
import ReactDOM from "react-dom";



const name="vivek";
const currdate=new Date().toLocaleDateString();
const currtime=new Date().toLocaleTimeString();



const heading={
    textAlign:'center',
    color:'red'
};

ReactDOM.render(
<>    
    <h1 style={heading}>hello vivek</h1>
    <p contentEditable="true">my name is {name}</p>
    <p>current date is {currdate}</p>
    <p>current date is {currtime}</p>
</>,
document.getElementById("root")

);