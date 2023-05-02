import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import Resume from './resume'

ReactDOM.render(<BrowserRouter>
                <App/> 
                {/* <Resume/> */}
                
                </BrowserRouter>,
                document.getElementById("root")
              )

