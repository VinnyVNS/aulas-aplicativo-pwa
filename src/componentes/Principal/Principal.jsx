import "./Principal.css";
import { FaArrowRotateLeft } from "react-icons/fa6";

import { Link } from "react-router-dom";

function Principal(props) {
  return (
    <main className="Principal_root">
      <div className="Principal_titulo">
        {props.voltarPara && (
          <Link to={props.voltarPara}>
            <FaArrowRotateLeft size={20}/>
          </Link>
        )}

        <h2>{props.titulo}</h2>
      </div>

      {props.children}
    </main>
  );
}

export default Principal;
