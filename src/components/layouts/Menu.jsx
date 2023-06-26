import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <header>
        <nav>
            <ul className='ul'>
                <li><Link to={'/'} className='link'>Home</Link></li>
                <li><Link to={'/listarempleados'} className='link'>Empleados</Link></li>
                <li><Link to={'/listarclientes'} className='link'>Clientes</Link></li>
                <li><Link to={'/listarpasswords'} className='link'>Passwords</Link></li>
                <li><Link to={'/listarproductos'} className='link'>Productos</Link></li>
                <li><Link to={'/listarproveedores'} className='link'>Proveedores</Link></li>
                <li><Link to={'/peliculas'} className='link'>Peliculas</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Menu