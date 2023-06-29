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
                <h3 className="card-title">Nombre: {cliente.nombre}</h3>
                <p><strong>Documento:</strong> {cliente.documento}</p>
                <p><strong>Correo:</strong> {cliente.correo}</p>
                <p><strong>Telefono:</strong> {cliente.telefono}</p>
                <p><strong>Direccion:</strong> {cliente.direccion}</p>
                <p><strong>Barrio:</strong> {cliente.barrio}</p>
                <p><strong>Ciudad:</strong> {cliente.ciudad}</p>
                <button className="btn btn-outline-primary btn-eliminar" onClick={(()=>{eliminarCliente(cliente.id)})}>Eliminar</button>
                <Link to={'/editarCliente/'+cliente.id} className="btn btn-outline-primary btn-editar">Editar</Link>
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