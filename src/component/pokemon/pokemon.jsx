import "./pokemon.css";
import { Link } from "react-router-dom";
function Pokemon({ id, name, image, type }) {
  return (
    <>
      <Link to={`/pokemon/${id}`}>
        <div className="img">
          <div><img src={image} alt=" Pokemon pictures" /></div>
          <div>{name.toUpperCase()}</div>
        </div>
      </Link>
    </>
  );
}

export default Pokemon;
