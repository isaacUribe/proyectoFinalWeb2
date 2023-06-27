import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { dataBase } from '../../config/dataBase'
import Menu from '../Menu'
import { Link } from 'react-router-dom'

const ListarPasswords = () => {
  const [passwords, setPasswords] = useState([])
  const mostrarPasswords = async() =>{
    const passwordsCollection = collection(dataBase, "passwords")
    const data = await getDocs(passwordsCollection)
    setPasswords(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
  }
  const eliminarPassword = async(id) =>{
    const passwordEliminada = doc(dataBase, "passwords", id)
    await deleteDoc(passwordEliminada)
    mostrarPasswords()
  }
  useEffect(()=>{
    mostrarPasswords()
  }, [])
  return (
    <div>
      <Menu/>
      <h1>Para crear una nueva password pulse aqui</h1>
      <Link to={'/crearpassword'}>Crear Password</Link>
      {
        passwords.map((pass)=>(
          <section key={pass.id}>
            <h1>Nombre: {pass.nombre}</h1>
            <h2>Usuario: {pass.usuario}</h2>
            <h2>Passoword: {pass.password}</h2>
            <h2>Url Imagen: {pass.urlImg}</h2>
            <img src={pass.urlImg} alt="" />
            <button onClick={()=>{eliminarPassword(pass.id)}}>Elimiar</button>
            <Link to={'/editarpassword/' +  pass.id}>Editar</Link>
          </section>
        ))
      }
    </div>
  )
}

export default ListarPasswords