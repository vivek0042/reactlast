import axios from 'axios';
import react, { useEffect, useState} from 'react'

const Com=()=>{
    const[num,setnum]=useState();
    const[name,setname]=useState();
    const[moves,setmoves]=useState();
    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name);
            console.log(res);
            console.log(res.data.moves);
            setname(res.data.name);
            setmoves(res.data.moves.length)

    }
       getData();
});
    return(
        <>
            <h1>You have choosen {num}</h1>
            <h1>Your choosen pikachu on this number is  {name}</h1>
            <h1>Your choosen pikachu moves in number is {moves}</h1>
            <select 
            value={num}
            onChange={(event)=>{
                setnum(event.target.value)
            }} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="3">3</option>
                <option value="100">100</option>
                <option value="24">24</option>
                <option value="22">22</option>
            </select>
        </>

    )
}
export default Com