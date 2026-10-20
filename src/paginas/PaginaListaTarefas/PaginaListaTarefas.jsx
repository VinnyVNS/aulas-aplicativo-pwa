import "./PaginaListaTarefas.css";
import Principal from "../../componentes/Principal/Principal";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";

function PaginaListaTarefas() {
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicaoTarefa = () => {
    tarefas.push(descricaoTarefa);
    setTarefas([...tarefas]);
  };

  const remocaoTarefa = () => {};

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
        return <li>{item}</li>;
      })}
    </Principal>
  );
}

export default PaginaListaTarefas;
