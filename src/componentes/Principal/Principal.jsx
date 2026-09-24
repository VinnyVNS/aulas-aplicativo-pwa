import './Principal.css'
import BotaoCustomizado from '../BotaoCustomizado/BotaoCustomizado'

function Principal() {
    return (
        <>
        <main className='Principal_root'>
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
        </main>
        </>
    )
}

export default Principal;