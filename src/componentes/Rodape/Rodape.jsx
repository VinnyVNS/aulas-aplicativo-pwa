import "./Rodape.css";

function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <>
      <footer className="Rodape_root">
        <span>
          <strong>
            Copyright @{anoAtual} - Todos os direitos reservados - Vinicius
          </strong>
        </span>
      </footer>
    </>
  );
}

export default Rodape;
