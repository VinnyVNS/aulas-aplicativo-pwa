import './BotaoCustomizado.css'

function BotaoCustomizado(props) {
    const classe = ["BotaoCustomizado_root"];

    switch (props.tipo) {
        case 'primario':
            classe.push("BotaoCustomizado_primario");
            break;
        case 'secundaria':
            classe.push("BotaoCustomizado_secundaria");
            break;
    }

    return (
        <>
        <button className={classe.join(" ")} onClick={props.aoClicar}>
            {props.children}
        </button>
        </>
    )
}

export default BotaoCustomizado;