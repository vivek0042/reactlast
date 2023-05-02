import react from 'react'
import './App.css'

const SlotM=(props)=>{
  let x = props.x;
  let y = props.y;
  let z = props.z;

  if((x===y) && (y===z)){
    return(
      <>
        <div className='slot_inner1'>
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is matching</h1>
          <hr/>
        </div>

      </>
    )
  }
  else{
    return(
      <>
        <div className='slot_inner2'>
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is  not matching</h1>
          <hr/>
        </div>

      </>

 ) }
}







const App=()=>{
  return<>
    <h1 className='heading'>🎰 Welcome to<span> Slot Machine Game</span>🎰</h1>
    <div className='viv'>
      <div className='main'>
        <SlotM x='😄' y='🎅' z='😺'/>
        <SlotM x='😄' y='😄' z='😄'/>
        <SlotM x='😄' y='🍀' z='😺'/>
      

      </div>
    </div>  
      
  </>
}

export default App;
