import react,{useState} from 'react'
import Todolist from './todolist'
import './App.css'
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@mui/icons-material/Button';

const App=()=>{
  const[name,setname]=useState();
  const[item1,setitem]=useState([]);

  const inputEvent=(event)=>{
    setname(event.target.value )

  }
  const listofitem=()=>{
    setitem((olditems)=>{
      return[...olditems,name]
    })
    setname('');

  }
  const viv=(id)=>{
    console.log('deleted');

    setitem((olditems)=>{
      return olditems.filter((arrele,index)=>{
        return index!==id;
      })

    })
}
  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <div className='main'>
            <h1>😄 Todo List 😄</h1>
            <br/>
            <div className='main1_div'>
              <input type="text" placeholder="enter your note" value={name} onChange={inputEvent}/>
              <button onClick={listofitem}><AddCircleIcon/></button> {/*In this we can add material ui icons <AddIcon/> like this */}           
              <ol>
                {item1.map((itemval,index)=>{
                  return<Todolist key={index} id={index} text={itemval} onSelect={viv}/>
              })}
              </ol>

            </div>
          </div>  


        </div>



      </div>
    </>
  )
}

export default App;
