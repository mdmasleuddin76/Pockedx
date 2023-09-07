import { Routes,Route} from "react-router-dom";
import App from "../App";
import Pokemondetail from "../component/pokemondetail/pokemondetail";
function customroute(){
return (
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/pokemon/:id" element={<Pokemondetail/>}/>
    </Routes>
)
}

export default customroute;