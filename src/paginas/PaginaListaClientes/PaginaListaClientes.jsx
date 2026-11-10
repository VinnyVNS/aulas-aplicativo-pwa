import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";
import { buscarClientes, salvarCliente } from "../../servicos/clientes.servico";
import "./PaginaListaClientes.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { salvarLocalStorage } from "../../servicos/localstorage.servico";
import { useNavigate } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";

function PaginaListaClientes() {
  const navigate = useNavigate();

  const [clientes, setClientes] = useState(buscarClientes());

  const [clientePesquisa, setClientePesquisa] = useState("");

  const excluirCliente = (clienteParaExcluir) => {
    if (confirm(`Deseja remover o cliente ${clienteParaExcluir.nome}?`)) {
      const clientesAtualizados = clientes.filter(
        (item) => item.id !== clienteParaExcluir.id,
      );

      setClientes(clientesAtualizados);

      salvarLocalStorage("clientes", clientesAtualizados);

      toast.success("Cliente removido com sucesso!", {
        theme: "colored",
        hideProgressBar: true,
        autoClose: 2000,
      });
    }
  };

  const editarCliente = (clienteParaEditar) => {
    if (confirm(`Deseja editar o cliente ${clienteParaEditar.nome}?`)) {
      navigate(`/cadastro-cliente/${clienteParaEditar.id}`);
    }
  };

  const clientesFiltrados = clientes.filter((item) => {
    return item.nome.includes(clientePesquisa);
  });

  return (
    <Principal titulo="Lista de Clientes" voltarPara="/">
      <CampoCustomizado
        type="search"
        label="Pesquisar"
        placeholder="Digite o nome do cliente..."
        value={clientePesquisa}
        onChange={(e) => setClientePesquisa(e.target.value)}
      />

      {clientesFiltrados.map((cliente) => {
        return (
          <div key={cliente.id} className="PaginaListaClientes_cliente">
            <div className="PaginaListaClientes_dados">
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

            <div className="PaginaListaClientes_icones">
              <FaEdit
                size={20}
                color="blue"
                onClick={() => editarCliente(cliente)}
              />
              <FaTrashAlt
                size={18}
                color="red"
                onClick={() => excluirCliente(cliente)}
              />
            </div>
          </div>
        );
      })}

      <div className="PaginaListaClientes_botaoAdd">
        <IoIosAdd size={50} onClick={() => navigate("/cadastro-cliente")} />
      </div>

      {!clientes.length && (
        <span className="PaginaListaClientes_vazia">
          Nenhum cliente cadastrado.
        </span>
      )}
    </Principal>
  );
}

export default PaginaListaClientes;
