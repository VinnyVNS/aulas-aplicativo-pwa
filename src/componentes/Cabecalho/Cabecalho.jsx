import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css";

function Cabecalho() {
  return (
    <>
      <header className="Cabecalho_root">
        <div className="textoImg">
          <img src="/favicon.svg" />
          <h1>Cabeçalho...</h1>
        </div>
        <div className="avatar">
          <Avatar nome="Vinicius Souza" />
        </div>
      </header>
    </>
  );
}

export default Cabecalho;
