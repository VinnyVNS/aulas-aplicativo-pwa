import "./PaginaListaTarefas.css";
import Principal from "../../componentes/Principal/Principal";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import { FaTrashAlt } from "react-icons/fa";
import {
  buscarLocalStorage,
  salvarLocalStorage,
} from "../../servicos/localstorage.servico";
import { ToastContainer, toast } from 'react-toastify';

function PaginaListaTarefas() {
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [tarefas, setTarefas] = useState(buscarLocalStorage("tarefas") || []);

  const adicaoTarefa = () => {
    if (!descricaoTarefa.trim()) {
      toast.error("O campo não pode estar vazio.");
      setDescricaoTarefa("");
      return;
    }

    const novaTarefa = { id: Date.now(), descricao: descricaoTarefa };
    const tarefasAtualizadas = [...tarefas, novaTarefa];
    setTarefas([...tarefas, novaTarefa]);
    setDescricaoTarefa("");

    salvarLocalStorage("tarefas", tarefasAtualizadas);

    toast.success("Tarefa adicionada com sucesso!", {theme: "colored", hideProgressBar: true, autoClose: 2000});
  };

  const remocaoTarefa = (tarefaParaExcluir) => {
    if (confirm(`Deseja remover a tarefa ${tarefaParaExcluir.descricao}?`)) {
      const tarefasAtualizadas = tarefas.filter(
        (item) => item.id !== tarefaParaExcluir.id,
      );
      setTarefas(tarefasAtualizadas);

      salvarLocalStorage("tarefas", tarefasAtualizadas);

      toast.success("Tarefa removida com sucesso!", {theme: "colored", hideProgressBar: true, autoClose: 2000});
    }
  };

  return (
    <Principal titulo="Lista de Tarefas" voltarPara="/">
      <CampoCustomizado
        label="Tarefa"
        type="text"
        placeholder="Digite um Tarefa"
        value={descricaoTarefa}
        onChange={(evento) => {
          setDescricaoTarefa(evento.target.value);
        }}
      />

      <BotaoCustomizado tipo="primario" aoClicar={adicaoTarefa}>
        Adicionar Tarefas
      </BotaoCustomizado>

      {tarefas.map((item) => {
        return (
          <div key={item.id} className="PaginaListaTarefas_item">
            {item.descricao}{" "}
            <FaTrashAlt
              cursor="pointer"
              color="red"
              onClick={() => remocaoTarefa(item)}
            />
          </div>
        );
      })}

      {!tarefas.length && (
        <span className="PaginaListaTarefas_vazia">
          Nenhuma tarefa cadastrada.
        </span>
      )}
    </Principal>
  );
}

export default PaginaListaTarefas;
