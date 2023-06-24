import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/layouts/Home"
import ListarClientes from "./components/layouts/clientes/ListarClientes"
import CrearCliente from "./components/layouts/clientes/CrearCliente"
import EditarCliente from "./components/layouts/clientes/EditarCliente"
import ListarEmpleados from "./components/layouts/empleados/ListarEmpleados"
import ListarPasswords from "./components/layouts/passwords/ListarPasswords"
import ListarProductos from "./components/layouts/productos/ListarProductos"
import ListarProveedores from "./components/layouts/proveedores/ListarProveedores"
import Peliculas from "./components/layouts/Peliculas"
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/listarclientes',
    element:<ListarClientes/>
  },
  {
    path:'/crearcliente',
    element:<CrearCliente/>
  },
  {
    path:'/editarcliente/:id',
    element:<EditarCliente/>
  },
  {
    path:'/listarempleados',
    element:<ListarEmpleados/>
  },
  {
    path:'/listarpasswords',
    element:<ListarPasswords/>
  },
  {
    path:'/listarproductos',
    element:<ListarProductos/>
  },
  {
    path:'/listarproveedores',
    element:<ListarProveedores/>
  },
  {
    path:'/peliculas',
    element:<Peliculas/>
  }
])
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
