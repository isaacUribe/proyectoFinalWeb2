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
              <h3 className="card-title">Nombre: {empleado.nombre}</h3>
              <p><strong>Documento:</strong> {empleado.documento}</p>
              <p><strong>Correo:</strong>  {empleado.correo}</p>
              <p><strong>Cargo:</strong>  {empleado.cargo}</p>
              <p><strong>Salario:</strong>  {empleado.salario}</p>
              <p><strong>Direccion:</strong>  {empleado.direccion}</p>
              <p><strong>Numero Cuenta Bancaria: </strong> {empleado.cuentaBanco}</p>
              
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