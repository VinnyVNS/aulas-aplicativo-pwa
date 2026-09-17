import Avatar from '../Avatar/Avatar';
import './Cabecalho.css'

function Cabecalho() {
    return (
        <>
        <header className='Cabecalho_root'>
            <img src="/favicon.svg"/>
            <h1>Cabeçalho...</h1>
            <Avatar nome="Vinicius Souza" />
        </header>
        </>
    )
}

export default Cabecalho;