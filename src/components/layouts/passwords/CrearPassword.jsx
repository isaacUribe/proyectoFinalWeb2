import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dataBase, subirImagen } from '../../config/dataBase'
import { addDoc, collection } from 'firebase/firestore'
import Menu from '../Menu'

const CrearPassword = () => {
  const [nombre, setNombre] = useState("")
  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")
  const [img, setImg] = useState(null)
  const returnListado = useNavigate()
  const agregarPassword = async()=>{
    const urlImg = await subirImagen(img)
    const passwordsCollection = collection(dataBase, "passwords")
    const pass = {
      nombre, usuario, password, urlImg 
    }
    await addDoc(passwordsCollection, pass)
    returnListado("/listarpasswords")
  }
  return (
    <section>
      <Menu/>
    <div className='form'>
      <form className='form-container'>
        <h2 className='form-title'>Crear Nueva Password</h2>
        <div className='form-grupo'>
        <input onChange={(e)=>setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} className='form-input'/>
        </div>
        <div className='form-grupo'>
        <input onChange={(e)=>setUsuario(e.target.value)} placeholder={"Usuario"} type={"text"} className='form-input'/>
        </div>
        <div className='form-grupo'>
        <input onChange={(e)=>setPassword(e.target.value)} placeholder={"Password"} type={"text"} className='form-input'/>
        </div>
        <section>
        <input onChange={(e)=>setImg(e.target.files[0])} type="file" />
        <label className='form-label'>Imagen Sitio Web</label>
        </section>
        <input onClick={agregarPassword} type="button" value={"Agregar password"} className='form-submit'/>
      </form>
    </div>
    </section>
  )
}

export default CrearPassword