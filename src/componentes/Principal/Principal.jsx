import "./Principal.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import { Link } from "react-router-dom";

function Principal(props) {
  return (
    <main className="Principal_root">
      <div className="Principal_titulo">
        {props.voltarPara && (
          <Link to={props.voltarPara}>
            <FaArrowAltCircleLeft size={20}/>
          </Link>
        )}

        <h2 >{props.titulo}</h2>
      </div>

      {props.children}
    </main>
  );
}

export default Principal;
