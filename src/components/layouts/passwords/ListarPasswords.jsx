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
      <h1 className='titulo'>Passowords</h1>
      <h3 className='titulo'>Para crear una nueva password pulse aqui</h3>
      <Link className="btn btn-outline-primary btn-crear" to={'/crearpassword'}>Crear Password</Link>
      <div className="card-container">
      {
        passwords.map((pass)=>(
          <section key={pass.id}>
            <div className="card cardListar">
            <img src={pass.urlImg} alt="" className="card-img-top"/>
            <h1 className="card-title">Nombre: {pass.nombre}</h1>
            <h2>Usuario: {pass.usuario}</h2>
            <h2>Passoword: {pass.password}</h2>
            <h2>Url Imagen: {pass.urlImg}</h2>
            
            <button className="btn btn-outline-primary" onClick={()=>{eliminarPassword(pass.id)}}>Elimiar</button>
            <Link className="btn btn-outline-primary" to={'/editarpassword/' +  pass.id}>Editar</Link>
            </div>
          </section>
        ))
      }
      </div>
    </div>
  )
}

export default ListarPasswords