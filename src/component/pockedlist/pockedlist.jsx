import { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "../pokemon/pokemon";
import './pockedlist.css'
function Pockedlist() {
    const [x, setx] = useState(true);
    const [y, sety] = useState([]);
    const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon");
    const temp = async function () {
        setx(true);
        const response = await axios.get(url);
        const resresult = response.data.results;
        // console.log(resresult)
        const arr = resresult.map((pokemon) => axios.get(pokemon.url));
        const finaldata = await axios.all(arr);
        console.log(finaldata);
        const res = finaldata.map((temp) => {
            return {
                id: temp.data.id,
                name: temp.data.name,
                image: temp.data.sprites.other
                    ? temp.data.sprites.other.dream_world.front_default
                    : temp.data.sprites.front_shiny,
                type: temp.data.types
            };
        });
        sety(res);
        setx(false);
    };
    const next2 = async function () {
    const response = await axios.get(url);
        seturl(response.data.next);
    };
   async function prev() {
    const response = await axios.get(url);
       if(response.data.previous)
        seturl(response.data.previous);
    }
    useEffect(() => {
        temp();
    }, [url]);
    return (
        <>
            <div className="pockemonlist">
                {x
                    ? "Pokemon is loading....."
                    : y.map((p) => (
                        <Pokemon id={p.id} name={p.name} image={p.image} type={p.type} />
                    ))}
            </div>
            <div className="but">
               <button onClick={()=>prev()}>Previous</button>
                <button onClick={() => next2()}>Next</button>
            </div>
        </>
    );
}

export default Pockedlist;
