import "./PaginaListaTarefas.css";
import Principal from "../../componentes/Principal/Principal";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";

import { useState } from "react";

function PaginaListaTarefas() {
  const [descricaoTarefa, setdescricaoTarefa] = useState("");
  const adicaoTarefa = () => {};

  return (
    <Principal titulo="Lista de Tarefas" voltarPara="/">
      <input
        type="text"
        placeholder="Digite um Tarefa"
        value={descricaoTarefa}
        onChange={(evento) => {
          setdescricaoTarefa(evento.target.value);
        }}
      />

      <BotaoCustomizado tipo="primario" aoClicar={adicaoTarefa}>
        Adicionar Tarefas{" "}
      </BotaoCustomizado>
    </Principal>
  );
}

export default PaginaListaTarefas;
