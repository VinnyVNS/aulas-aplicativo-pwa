import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaCadastroCliente.css";

function PaginaCadastroCliente() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");

  const salvar = () => {
    const cliente = { nome, email, cpf, dataNascimento, telefone };
    console.log(cliente);
  };

  return (
    <Principal titulo="Novo Cliente" voltarPara="/">
      <CampoCustomizado
        label="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        maxLength={50}
      />
      <CampoCustomizado
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CampoCustomizado
        label="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <CampoCustomizado
        label="Data de Nascimento"
        value={dataNascimento}
        onChange={(e) => setDataNascimento(e.target.value)}
        type="date"
      />
      <CampoCustomizado
        label="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />

      <BotaoCustomizado tipo="primario" aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
}

export default PaginaCadastroCliente;
