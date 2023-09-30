import { useEffect, useState } from "react";
import axios from "axios";
function UsePokemonList(){
    const [x, setx] = useState(true);
    const [y, sety] = useState([]);
    const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon");
    const temp = async function () {
        setx(true);
        const response = await axios.get(url);
        const resresult = response.data.results;
        const arr = resresult.map((pokemon) => axios.get(pokemon.url));
        const finaldata = await axios.all(arr);
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
    return {x,y,url,next2,prev}
}
export default UsePokemonList;