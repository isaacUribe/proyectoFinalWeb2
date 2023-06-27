import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dataBase, subirImagen } from '../../config/dataBase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

const EditarPassword = () => {
  const [nombre, setNombre] = useState("")
  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")
  const [img, setImg] = useState(null)
  const returnListado = useNavigate()
  const {id} =  useParams()
  const ediarPassword = async()=>{
    const urlImg = await subirImagen(img)
    const passwordCollection = doc(dataBase, "passwords",id)
    const pass={
      nombre, usuario, password, urlImg
    }
    await updateDoc(passwordCollection, pass)
    returnListado("/listarpasswords")
  }
  const passwordActualizado = async(id) =>{
    const passwordEdit = await getDoc(doc(dataBase, "passwords", id))
    setNombre(passwordEdit.data().nombre)
    setUsuario(passwordEdit.data().usuario)
    setPassword(passwordEdit.data().password)
    setImg(passwordEdit.data().urlImg)
  }
  useEffect(()=>{
    passwordActualizado(id)
  }, [])

  return (
    <div>
      <form>
        <input onChange={(e)=>setNombre(e.target.value)} placeholder={"Nombre"} type={"text"} value={nombre}/>
        <input onChange={(e)=>setUsuario(e.target.value)} placeholder={"Usuario"} type={"text"} value={usuario}/>
        <input onChange={(e)=>setPassword(e.target.value)} placeholder={"Password"} type={"text"} value={password}/>
        <img src={img} alt="" />
        <input onChange={(e)=>setImg(e.target.files[0])} type="file" />
        <input onClick={ediarPassword} type="button" value={"Editar password"}/>
      </form>
    </div>
  )
}

export default EditarPassword