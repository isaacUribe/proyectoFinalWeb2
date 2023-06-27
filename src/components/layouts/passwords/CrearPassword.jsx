import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dataBase, subirImagen } from '../../config/dataBase'
import { addDoc, collection } from 'firebase/firestore'

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
    <div>
      <form>
        <input onChange={(e)=>setNombre(e.target.value)} placeholder={"Nombre"} type={"text"}/>
        <input onChange={(e)=>setUsuario(e.target.value)} placeholder={"Usuario"} type={"text"}/>
        <input onChange={(e)=>setPassword(e.target.value)} placeholder={"Password"} type={"text"}/>
        <input onChange={(e)=>setImg(e.target.files[0])} type="file" />
        <input onClick={agregarPassword} type="button" value={"Agregar password"}/>
      </form>
    </div>
  )
}

export default CrearPassword