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
      <hr />
      <h1>Si desea crea un nuevo proveedor pulse aqui</h1>
      <Link to={'/crearproveedor'}>Crear</Link>
      <h1>Aqui se mostraran los proveedores</h1>
      {
        proveedores.map((proveedor)=>(
          <section key={proveedor.id}>
            <h1>Nombre: {proveedor.nombre}</h1>
            <h2>Direccion: {proveedor.direccion}</h2>
            <h2>Ciudad: {proveedor.ciudad}</h2>
            <h2>Nit: {proveedor.nit}</h2>
            <h2>Telefono: {proveedor.telefono}</h2>
            <h3>Nombre Gerente: {proveedor.nombreGerente}</h3>
            <img src={proveedor.urlImg} />
            <img src={proveedor.urlLogo} alt="" />
            <button onClick={(()=>{eliminarProveedor(proveedor.id)})}>Eliminar</button>
            <Link to={'/editarproveedor/' + proveedor.id}>Editar</Link>
          </section>
        ))
      }
    </section>
  )
}

export default ListarProveedores