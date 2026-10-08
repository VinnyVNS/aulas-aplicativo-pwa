import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";

function PaginaInicial() {
  return (
    <Principal>
      <h2>Conteúdo Principal...</h2>

      <BotaoCustomizado tipo="primario" aoClicar={() => alert("Salvo...")}>
        Salvar
      </BotaoCustomizado>

      <BotaoCustomizado
        tipo="secundaria"
        aoClicar={() => alert("Cancelado...")}
      >
        Cancelar
      </BotaoCustomizado>
    </Principal>
  );
}

export default PaginaInicial;
