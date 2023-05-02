import React from 'react';
import ReactDOM from 'react-dom';
import add,{sub,mul,div} from './cal'
// import sub from './cal'


ReactDOM.render(
  <>
    <ul>
    <li><h1>Your sum is {add(8,5)}</h1></li>
    <li><h1>your sub is {sub(8,7)}</h1></li> 
    <li><h1>your sub is {mul(8,7)}</h1></li> 
    <li><h1>your sub is {div(8,7)}</h1></li> 
    </ul>
  </>,
  document.getElementById('root')
)
