import React, { useEffect, useState } from 'react'
import Menu from '../Menu'
import { Link } from 'react-router-dom/dist'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { dataBase } from '../../config/dataBase'

const ListarProveedores = () => {
  const [proveedores, setProveedores] = useState([]);

  const mostrarProveedores = async() =>{
    const proveedoresCollection = collection(dataBase, "proveedores")
    const data  = await getDocs(proveedoresCollection)
    setProveedores(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
  }
  const eliminarProveedor = async(id)=>{
    const proveedorEliminado = doc(dataBase, "proveedores", id)
    await deleteDoc(proveedorEliminado)
    mostrarProveedores()
  }
  useEffect(()=>{
    mostrarProveedores()
  }, [])
  return (
    <section>
      <Menu/>
      <h1 className='titulo'>Proveedores</h1>
      <h1 className='titulo'>Si desea crea un nuevo proveedor pulse aqui</h1>
      <Link className="btn btn-outline-primary btn-crear" to={'/crearproveedor'}>Crear Proveedor</Link>
      <div className="card-container">
      {
        proveedores.map((proveedor)=>(
          <section key={proveedor.id}>
            <div className="card cardListar">
            <img src={proveedor.urlImg} />
            <div className="card-body">
            <h1 className="card-title">Nombre: {proveedor.nombre}</h1>
            <h2>Direccion: {proveedor.direccion}</h2>
            <h2>Ciudad: {proveedor.ciudad}</h2>
            <h2>Nit: {proveedor.nit}</h2>
            <h2>Telefono: {proveedor.telefono}</h2>
            <h3>Nombre Gerente: {proveedor.nombreGerente}</h3>
            <img src={proveedor.urlLogo} alt="" />
            <p>Logo Empresa</p>
            <button className="btn btn-outline-primary" onClick={(()=>{eliminarProveedor(proveedor.id)})}>Eliminar</button>
            <Link className="btn btn-outline-primary" to={'/editarproveedor/' + proveedor.id}>Editar</Link>
            </div>
            </div>
          </section>
        ))
      }
      </div>
    </section>
  )
}

export default ListarProveedores