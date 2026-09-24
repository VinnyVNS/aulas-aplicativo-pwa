import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";

function PaginaInicial() {
    return (
        <>
        <h2>Conteúdo Principal...</h2>

        <BotaoCustomizado 
            tipo='primario'
            aoClicar={() => alert("Salvo...")}
        >
            Salvar
        </BotaoCustomizado>

        <BotaoCustomizado 
            tipo='secundaria'
            aoClicar={() => alert("Cancelado...")}
        >
            Cancelar
        </BotaoCustomizado>
        </>
    )  
}

export default PaginaInicial;