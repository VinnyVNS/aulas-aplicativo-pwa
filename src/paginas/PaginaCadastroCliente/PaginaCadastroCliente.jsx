import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaCadastroCliente.css";
import {
  formatarComMascara,
  MASCARA_CPF,
  MASCARA_TELEFONE,
} from "../../utils/formatarComMascara";
import { toast } from "react-toastify";
import validarCPF from "../../utils/validarCpf";
import validarEmail from "../../utils/validarEmail";
import { salvarCliente } from "../../servicos/clientes.servico";

function PaginaCadastroCliente() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");

  const salvar = () => {
    if (!nome.trim() || !email.trim()) {
      toast.error("Os campos nome e email são obrigatórios!", {
        theme: "colored",
        hideProgressBar: true,
        autoClose: 2000,
      });
      return;
    }

    if (!validarEmail(email)) {
      toast.error("Email inválido!", {
        theme: "colored",
        hideProgressBar: true,
        autoClose: 2000,
      });
      return;
    }

    if (cpf.trim() && !validarCPF(cpf)) {
      toast.error("CPF inválido!", {
        theme: "colored",
        hideProgressBar: true,
        autoClose: 2000,
      });
      return;
    }

    const cliente = {
      id: Date.now(),
      nome,
      email,
      cpf,
      dataNascimento,
      telefone,
    };

    setNome("");
    setEmail("");
    setCpf("");
    setDataNascimento("");
    setTelefone("");

    salvarCliente(cliente);
    toast.success("Cliente salvo com sucesso!", {
      theme: "colored",
      hideProgressBar: true,
      autoClose: 2000,
    });

    console.log(cliente);
  };

  return (
    <Principal titulo="Novo Cliente" voltarPara="/">
      <CampoCustomizado
        label="Nome"
        maxLength={50}
        placeholder="Digite seu nome..."
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <CampoCustomizado
        label="Email"
        maxLength={50}
        placeholder="Digite seu email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CampoCustomizado
        label="CPF"
        placeholder="Digite seu CPF..."
        value={cpf}
        onChange={(e) =>
          setCpf(formatarComMascara(e.target.value, MASCARA_CPF))
        }
      />
      <CampoCustomizado
        label="Data de Nascimento"
        type="date"
        value={dataNascimento}
        onChange={(e) => setDataNascimento(e.target.value)}
      />
      <CampoCustomizado
        label="Telefone"
        placeholder="Digite seu telefone..."
        value={telefone}
        onChange={(e) =>
          setTelefone(formatarComMascara(e.target.value, MASCARA_TELEFONE))
        }
      />

      <BotaoCustomizado tipo="primario" aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
}

export default PaginaCadastroCliente;
