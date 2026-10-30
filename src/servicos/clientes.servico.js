import { buscarLocalStorage, salvarLocalStorage } from "./localstorage.servico";

export const salvarCliente = (cliente) => {
  const clientes = buscarLocalStorage("clientes") || [];
  clientes.push(cliente);
  salvarLocalStorage("clientes", clientes);
};

export const buscarClientes = () => {
  return buscarLocalStorage("clientes") || [];
};
