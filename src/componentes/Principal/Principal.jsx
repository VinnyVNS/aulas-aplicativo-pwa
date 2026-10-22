import "./Principal.css";
import { IoArrowBack } from "react-icons/io5";

import { Link } from "react-router-dom";

function Principal(props) {
  return (
    <main className="Principal_root">
      <div className="Principal_titulo">
        {props.voltarPara && (
          <Link to={props.voltarPara}>
            <IoArrowBack size={24} />
          </Link>
        )}

        <h2>{props.titulo}</h2>
      </div>

      {props.children}
    </main>
  );
}

export default Principal;
