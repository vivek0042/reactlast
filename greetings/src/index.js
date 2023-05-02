import react from 'react';
import ReactDOM from 'react-dom';
import "../src/index.css"

let currtime=new Date();
currtime=currtime.getHours();
let greetings;

if(currtime>1 && currtime<12){
  greetings="Good Morning";

}
else if(currtime>=12 && currtime<18){
  greetings="Good Afternoon";
}
else{
  greetings="Good Night";
}

ReactDOM.render(
  <div className='v1'>
    <h1>hello sir {greetings}</h1>
  </div>,
  document.getElementById('root')
)