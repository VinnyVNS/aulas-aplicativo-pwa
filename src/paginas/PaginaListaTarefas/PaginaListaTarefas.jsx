import "./PaginaListaTarefas.css";
import Principal from "../../componentes/Principal/Principal";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import { FaTrashAlt } from "react-icons/fa";

function PaginaListaTarefas() {
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicaoTarefa = () => {
    if (!descricaoTarefa.trim()) {
      alert("O campo não pode estar vazio.");
      setDescricaoTarefa("");
      return;
    }

    const novaTarefa = { id: Date.now(), descricao: descricaoTarefa };
    setTarefas([...tarefas, novaTarefa]);
    setDescricaoTarefa("");
  };

  const remocaoTarefa = (tarefaParaExcluir) => {
    if (confirm(`Deseja remover a tarefa ${tarefaParaExcluir.descricao}?`)) {
      const tarefasAtualizadas = tarefas.filter((item) => item.id !== tarefaParaExcluir.id);
      setTarefas(tarefasAtualizadas);
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

      {!tarefas.length && <span className="PaginaListaTarefas_vazia">Nenhuma tarefa cadastrada.</span>}
    </Principal>
  );
}

export default PaginaListaTarefas;
