import { collection, deleteDoc, doc, getDoc, getDocs } from '@firebase/firestore'
import { async } from '@firebase/util'
import React, { useEffect, useState } from 'react'
import { dataBase } from '../../config/dataBase'
import { deleteApp } from '@firebase/app'
import Menu from '../Menu'
import { Link } from 'react-router-dom'


const ListarEmpleados = () => {
  const [empleados, setEmpleados] = useState([])

  const mostrarEmpleados = async()=>{
    const empleadosCollection = collection(dataBase, "empleados")
    const data = await getDocs(empleadosCollection)
    setEmpleados(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
  }
  const eliminarEmpleado=async (id)=>{
    const empleadoEliminado = doc(dataBase, "empleados", id)
    await deleteDoc(empleadoEliminado)
    mostrarEmpleados()
  }
  useEffect(()=>{
    mostrarEmpleados()
  }, [])
  return (
      <div>
        <Menu/>
        <h1 className='titulo'>Empleados</h1>
        <h3 className='titulo'>Para crear un nuevo empleado pulse aqui</h3>
        <Link to={'/crearempleado'} className="btn btn-outline-primary btn-crear">Crear Empleado </Link>
        <div className='card-container'>
        {
          empleados.map((empleado)=>(
            <section key={empleado.id} >
              <div className="card cardListar" >
              <img src={empleado.urlImg} alt="" className="card-img-top" />
              <div className="card-body"></div>
              <h1 className="card-title">Nombre: {empleado.nombre}</h1>
              <h2>Documento: {empleado.documento}</h2>
              <h2>Correo: {empleado.correo}</h2>
              <h2>Cargo: {empleado.cargo}</h2>
              <h2>Salario: {empleado.salario}</h2>
              <h2>Direccion: {empleado.direccion}</h2>
              <h2>Numero Cuenta Bancaria: {empleado.cuentaBanco}</h2>
              
              <button className="btn btn-outline-primary" onClick={(e)=>{eliminarEmpleado(empleado.id)}}>Eliminar</button>
              <Link className="btn btn-outline-primary" to={'/editarempleado/' + empleado.id}>Editar</Link>
              </div>
            </section>
          ))
        }
        </div>
      </div>
  )
}

export default ListarEmpleados