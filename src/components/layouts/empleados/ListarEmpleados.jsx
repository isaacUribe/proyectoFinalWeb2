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
        <hr />
        <h1>Para crear un nuevo empleado pulse aqui</h1>
        <Link to={'/crearempleado'}>Crear Empleado</Link>
        {
          empleados.map((empleado)=>(
            <section key={empleado.id}>
              <h1>Nombre: {empleado.nombre}</h1>
              <h2>Documento: {empleado.documento}</h2>
              <h2>Correo: {empleado.correo}</h2>
              <h2>Cargo: {empleado.cargo}</h2>
              <h2>Salario: {empleado.salario}</h2>
              <h2>Direccion: {empleado.direccion}</h2>
              <h2>Numero Cuenta Bancaria: {empleado.cuentaBanco}</h2>
              <img src={empleado.urlImg} alt="" />
              <button onClick={(e)=>{eliminarEmpleado(empleado.id)}}>Eliminar</button>
              <Link to={'/editarempleado/' + empleado.id}>Editar</Link>
            </section>
          ))
        }
      </div>
  )
}

export default ListarEmpleados