import react, { useState } from 'react'
import Header from './header'
import Footer from './footer'
import Createnote from './createnote'
import Note from './Note'

const App=()=>{


  const[additem,setItem]=useState([]);
  const addNote=(note)=>{                  {/* here when it call add note it is simply pass note which is get from createnote.*/}
    // alert("I'm clicked");
    setItem((predata)=>{
      return[...predata,note];
    });
    console.log(note);
  }
  const onDelete=(id)=>{
    setItem((olddata)=>
      olddata.filter((currdata,index)=>{
        return index !== id;
      })
  );
  };
  return(
    <>
       <Header/>
       <Createnote passnote={addNote}/>    {/* in this we pass props named as passnot and it called function addNOte.*/}
       
       {additem.map((val,index)=>{
        return(
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteitem={onDelete}
            />
       )})}





       <Footer/>
       

    </>
  )

}

export default App;
