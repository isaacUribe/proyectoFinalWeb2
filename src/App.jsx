import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/layouts/Home"
import ListarClientes from "./components/layouts/clientes/ListarClientes"
import CrearCliente from "./components/layouts/clientes/CrearCliente"
import EditarCliente from "./components/layouts/clientes/EditarCliente"
import ListarEmpleados from "./components/layouts/empleados/ListarEmpleados"
import ListarPasswords from "./components/layouts/passwords/ListarPasswords"
import ListarProductos from "./components/layouts/productos/ListarProductos"
import CrearProductos from "./components/layouts/productos/CrearProductos"
import ListarProveedores from "./components/layouts/proveedores/ListarProveedores"
import CrearEmpleado from "./components/layouts/empleados/CrearEmpleado"
import EditarEmpleado from "./components/layouts/empleados/EditarEmpleado"
import Peliculas from "./components/layouts/Peliculas"
import EditarProducto from "./components/layouts/productos/EditarProducto"
import CrearProveedor from "./components/layouts/proveedores/CrearProveedor"
import EditarProveedor from "./components/layouts/proveedores/EditarProveedor"
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
    path:'/crearempleado',
    element:<CrearEmpleado/>
  },
  {
    path:'/editarempleado/:id',
    element:<EditarEmpleado/>
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
    path:'/crearproducto',
    element:<CrearProductos/>
  },
  {
    path:'editarproducto/:id',
    element:<EditarProducto/>
  },
  {
    path:'/listarproveedores',
    element:<ListarProveedores/>
  },
  {
    path:'/crearproveedor',
    element:<CrearProveedor/>
  },
  {
    path:'/editarproveedor/:id',
    element:<EditarProveedor/>
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
