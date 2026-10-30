import Principal from "../../componentes/Principal/Principal";
import { buscarClientes } from "../../servicos/clientes.servico";
import "./PaginaListaClientes.css";

function PaginaListaClientes() {
  const clientes = buscarClientes();

  return (
    <Principal titulo="Lista de Clientes" voltarPara="/">
      {clientes.map((cliente) => {
        return (
          <div key={cliente.id} className="PaginaListaClientes_cliente">
            <strong>Nome: {cliente.nome}</strong>
            <br />
            <strong>Email: {cliente.email}</strong>
            <br />
            <strong>CPF: {cliente.cpf}</strong>
            <br />
            <strong>Data de Nascimento: {cliente.dataNascimento}</strong>
            <br />
            <strong>Telefone: {cliente.telefone}</strong>
          </div>
        );
      })}
    </Principal>
  );
}

export default PaginaListaClientes;
