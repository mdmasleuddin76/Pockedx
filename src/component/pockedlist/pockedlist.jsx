import Pokemon from "../pokemon/pokemon";
import './pockedlist.css'
import UsePokemonList from "../../hooks/usePokemonList";
function Pockedlist() {
    const {x,y,next2,prev}=UsePokemonList();
    return (
        <>
            <div className="pockemonlist">
                {x
                    ? "Pokemon is loading.....": y.map((p) => ( <Pokemon id={p.id} name={p.name} image={p.image} type={p.type} />))
                }
            </div>
            <div className="but">
               <button onClick={()=>prev()}>Previous</button>
                <button onClick={() => next2()}>Next</button>
            </div>
        </>
    );
}

export default Pockedlist;
