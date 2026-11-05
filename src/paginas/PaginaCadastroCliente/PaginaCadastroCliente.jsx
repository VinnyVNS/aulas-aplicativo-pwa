import { useEffect, useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaCadastroCliente.css";
import {
  formatarComMascara,
  MASCARA_CPF,
  MASCARA_DATA_NASCIMENTO,
  MASCARA_NOME,
  MASCARA_TELEFONE,
} from "../../utils/formatarComMascara";
import { toast } from "react-toastify";
import validarCPF from "../../utils/validarCpf";
import validarEmail from "../../utils/validarEmail";
import { buscarClientes, salvarCliente } from "../../servicos/clientes.servico";
import validarDataNascimento from "../../utils/validarDataNascimento";
import validarTelefone from "../../utils/validarTelefone";
import { useNavigate, useParams } from "react-router-dom";

function PaginaCadastroCliente() {
  const navigate = useNavigate();

  const [formCliente, setFormCliente] = useState({
    id: "",
    nome: "",
    email: "",
    cpf: "",
    dataNascimento: "",
    telefone: "",
  });

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const clienteParaEditar = buscarClientes().find(
        (item) => item.id === +params.id,
      );

      if (clienteParaEditar) {
        setFormCliente(clienteParaEditar);
      }
    }
  }, [params.id]);

  const salvar = () => {
    if (!formCliente.nome.trim() || !formCliente.email.trim()) {
      toast.error("Os campos nome e email são obrigatórios!", {
        theme: "colored",
        hideProgressBar: true,
        autoClose: 2000,
      });
      return;
    }

    if (!validarEmail(formCliente.email)) {
      toast.error("Email inválido ou incompleto!", {
        theme: "colored",
        hideProgressBar: true,
        autoClose: 2000,
      });
      return;
    }

    if (formCliente.cpf.trim() && !validarCPF(formCliente.cpf)) {
      toast.error("CPF inválido ou incompleto!", {
        theme: "colored",
        hideProgressBar: true,
        autoClose: 2000,
      });
      return;
    }

    if (
      formCliente.dataNascimento.trim() &&
      !validarDataNascimento(formCliente.dataNascimento)
    ) {
      toast.error("Data de nascimento inválida ou incompleta!", {
        theme: "colored",
        hideProgressBar: true,
        autoClose: 2000,
      });
      return;
    }

    if (formCliente.telefone.trim() && !validarTelefone(formCliente.telefone)) {
      toast.error("Telefone inválido ou incompleto!", {
        theme: "colored",
        hideProgressBar: true,
        autoClose: 2000,
      });
      return;
    }

    salvarCliente(formCliente);
    toast.success("Cliente salvo com sucesso!", {
      theme: "colored",
      hideProgressBar: true,
      autoClose: 2000,
    });

    console.log(formCliente);

    navigate("/lista-clientes");
  };

  const titulo = formCliente.id ? "Editar Cliente" : "Novo Cliente";

  return (
    <Principal titulo={titulo} voltarPara="/">
      <CampoCustomizado
        label="Nome *"
        maxLength={50}
        placeholder="Digite seu nome..."
        value={formCliente.nome}
        onChange={(e) =>
          setFormCliente({
            ...formCliente,
            nome: formatarComMascara(e.target.value, MASCARA_NOME),
          })
        }
      />
      <CampoCustomizado
        label="Email *"
        maxLength={50}
        placeholder="Digite seu email..."
        value={formCliente.email}
        onChange={(e) =>
          setFormCliente({ ...formCliente, email: e.target.value })
        }
      />
      <CampoCustomizado
        label="CPF"
        placeholder="Digite seu CPF..."
        value={formCliente.cpf}
        onChange={(e) =>
          setFormCliente({
            ...formCliente,
            cpf: formatarComMascara(e.target.value, MASCARA_CPF),
          })
        }
      />
      <CampoCustomizado
        label="Data de Nascimento"
        placeholder="Digite sua data de nascimento..."
        value={formCliente.dataNascimento}
        onChange={(e) =>
          setFormCliente({
            ...formCliente,
            dataNascimento: formatarComMascara(
              e.target.value,
              MASCARA_DATA_NASCIMENTO,
            ),
          })
        }
      />
      <CampoCustomizado
        label="Telefone"
        placeholder="Digite seu telefone..."
        value={formCliente.telefone}
        onChange={(e) =>
          setFormCliente({
            ...formCliente,
            telefone: formatarComMascara(e.target.value, MASCARA_TELEFONE),
          })
        }
      />

      <BotaoCustomizado tipo="primario" aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
}

export default PaginaCadastroCliente;
