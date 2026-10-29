function buscarLocalStorage(chave) {
    const valor = localStorage.getItem(chave);
    if(valor) {
        return JSON.parse(valor);
    }
    
    return null;
}

function salvarLocalStorage(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}

export { buscarLocalStorage, salvarLocalStorage };
