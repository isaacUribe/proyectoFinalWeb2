import {collection, getDocs, doc, deleteDoc} from "firebase/firestore"
import { useState, useEffect } from "react"
import { dataBase } from "../../config/dataBase"
import React from 'react'
import Menu from "./../Menu"
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
  // console.log(clientes)
  return (
    <section>
      <Menu/>
      <h1 className="titulo">Clientes</h1>
      <h3 className="titulo">Para crear un nuevo cliente pulse aqui</h3>
      <Link to={'/crearcliente'} className="btn btn-outline-primary btn-crear">Crear Cliente</Link>
      <div className="card-container">
      {
        clientes.map((cliente)=>(
          <section key={cliente.id}>
            <div className="card cardListar" >
            <img src={cliente.urlImg} alt="imagen" className="card-img-top"/>
              <div className="card-body">
                <h1 className="card-title">Nombre: {cliente.nombre}</h1>
                <h2>Documento: {cliente.documento}</h2>
                <h2>Correo: {cliente.correo}</h2>
                <h2>Telefono: {cliente.telefono}</h2>
                <h4>Direccion: {cliente.direccion}</h4>
                <h4>Barrio: {cliente.barrio}</h4>
                <h4>Ciudad: {cliente.ciudad}</h4>
                <button className="btn btn-outline-primary" onClick={(()=>{eliminarCliente(cliente.id)})}>Eliminar</button>
                <Link to={'/editarCliente/'+cliente.id} className="btn btn-outline-primary">Editar</Link>
                </div>
              </div>
          </section>
        ))
      }
      </div>
    </section>
  )
}

export default ListarClientes