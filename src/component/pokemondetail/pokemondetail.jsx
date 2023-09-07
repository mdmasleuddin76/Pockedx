import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import './pokemondetail.css'
function Pokemondetail(){
    const {id}=useParams();
    const url=`https://pokeapi.co/api/v2/pokemon/${id}/`
    const [data,setdata]=useState({})
    async function temp(){
        console.log("before");
        const t=await axios.get(url);
        setdata({
            name:t.data.name,
            image:t.data.sprites.other.dream_world.front_default,
            weight:t.data.weight,
            height:t.data.height,
            types:t.data.types.map((p)=>p.type.name)

        });
    }
    useEffect(()=>{
        temp();
    },[])
return(

   
    <div className="temp">
      <div className="name">Name: {data.name &&data.name.toUpperCase()}</div>
      <img className="img" src={data.image} alt="img"/>
      <div className="height">Height: {data.height}</div>
      <div className="wieght">Weight: {data.weight}</div>
      <div className="type">
        <div className="typechild">Types:</div> 
        {data.types&&data.types.map((n)=><div className="typechild" key={n}>{n&&n.toUpperCase()}</div>)}
      </div>
    </div>
)
}
export default Pokemondetail