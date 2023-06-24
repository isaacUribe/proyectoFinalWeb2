import {collection, getDocs, doc, deleteDoc} from "firebase/firestore"
import { useState, useEffect } from "react"
import { dataBase } from "../../config/dataBase"
import React from 'react'
import { Link } from "react-router-dom"

const ListarClientes = () => {
  const [clientes, setClientes] = useState([]);

  const mostrarClientes = async()=>{
    const clientesCollection = collection(dataBase, "clientes");
    const data = await getDocs(clientesCollection);
    setClientes(data.docs.map((doc)=>({...doc.data(),id: doc.id})));
  };
  const eliminarCliente = async(id) =>{
    const clienteEliminado = doc(dataBase, "clientes", id)
    await deleteDoc(clienteEliminado)
    mostrarClientes()
  }
  useEffect(()=>{
    mostrarClientes();
  },[]);
  console.log(clientes)
  return (
    <section>
      <h1>Esta es la lista de clientes</h1>
      <hr />
      <h1>Para crear un nuevo cliente pulse aqui</h1>
      <Link to={'/crearcliente'}>Crear</Link>
      {
        clientes.map((cliente)=>(
          <section key={cliente.id}>
            <h1>Nombre: {cliente.nombre}</h1>
            <h2>Documento: {cliente.documento}</h2>
            <h2>Correo: {cliente.correo}</h2>
            <h2>Telefono: {cliente.telefono}</h2>
            <h4>Direccion: {cliente.direccion}</h4>
            <h4>Barrio: {cliente.barrio}</h4>
            <h4>Ciudad: {cliente.ciudad}</h4>
            <img src={cliente.urlImg} alt="imagen"/>
            <p>{cliente.urlImg}</p>
            <button onClick={(()=>{eliminarCliente(cliente.id)})}>Eliminar</button>
            <Link to={'/editarCliente/'+cliente.id} >Editar</Link>
          </section>
        ))
      }
    </section>
  )
}

export default ListarClientes