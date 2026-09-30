import './Principal.css'
import PaginaInicial from '../../paginas/PaginaInicial/PaginaInicial';

function Principal(props) {
    return (
        <main className='Principal_root'>
            {props.children}
        </main>
    )
}

export default Principal;