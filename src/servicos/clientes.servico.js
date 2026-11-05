import { buscarLocalStorage, salvarLocalStorage } from "./localstorage.servico";

export const salvarCliente = (cliente) => {
  const clientes = buscarLocalStorage("clientes") || [];
  if(!cliente.id) {
    cliente.id = Date.now();
    clientes.push(cliente);
  }
  else{
    const index = clientes.findIndex((c) => c.id === cliente.id);
    clientes[index] = cliente;
  }
  salvarLocalStorage("clientes", clientes);
};

export const buscarClientes = () => {
  return buscarLocalStorage("clientes") || [];
};
