import Principal from "../../componentes/Principal/Principal";
import "./PaginaListaProdutos.css";

const produtos = [
  {
    nome: "Smartphone Samsung",
    preco: 2999,
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    nome: "Notebook Acer",
    preco: 4999,
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    nome: "Tablet Asus",
    preco: 1499,
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

function PaginaListaProdutos() {
  return (
    <Principal titulo="Lista de Produtos">
      {produtos.map((produto, index) => {
        return (
          <div key={index} className="PaginaListaProdutos_item">
            <h2>{produto.nome}</h2>
            <br />
            <h2>
              {produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </h2>
            <br />
            <div className="PaginaListaProdutos_cores">
              {produto.cores.map((itemCor) => {
                return (
                  <div
                    className="PaginaListaProdutos_cores-item"
                    style={{ backgroundColor: itemCor }}
                  ></div>
                );
              })}
            </div>
          </div>
        );
      })}
    </Principal>
  );
}

export default PaginaListaProdutos;
