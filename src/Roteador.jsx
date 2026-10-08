import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import PaginaListaProdutos from "./paginas/PaginaListaProdutos/PaginaListaProdutos";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
  {
    path: "Lista-Produtos",
    element: <PaginaListaProdutos />,
  },
]);

function Roteador() {
  return <RouterProvider router={roteador} />;
}

export default Roteador;
