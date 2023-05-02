import react, { createContext } from 'react'
import Conapp from './conApp'

const firstname=createContext();
const lastname=createContext();

const App=()=>{
  return(
    <>
       <firstname.Provider value={"vivek jain  "}>
          <lastname.Provider value={"jain  ji "}>
            <Conapp />
          </lastname.Provider>
       </firstname.Provider>

    </>
  )

}
export default App;
export {firstname,lastname};
