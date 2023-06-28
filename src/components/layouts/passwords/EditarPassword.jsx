import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dataBase, subirImagen } from '../../config/dataBase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import Menu from '../Menu'

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
    <section>
      <Menu/>
    <div className='form'>
      <form className='form-container'>
        <h2 className='form-title'>Editar Password</h2>
        <div className='form-grupo'>
        <input onChange={(e)=>setNombre(e.target.value)}  type={"text"} value={nombre} className='form-input'/>
        <label className='form-label'>Nombre</label>
        </div>
        <div className='form-grupo'>
        <input onChange={(e)=>setUsuario(e.target.value)}  type={"text"} value={usuario} className='form-input'/>
        <label className='form-label'>Usuario</label>
        </div>
        <div className='form-grupo'>
        <input onChange={(e)=>setPassword(e.target.value)} p type={"password"} value={password} className='form-input'/>
        <label className='form-label'>Password</label>
        </div>
        <div className='img-editar'>
          <label className='form-label'>Imagen Sitio Web</label>
        <img src={img} alt="" />
        </div>
        <input onChange={(e)=>setImg(e.target.files[0])} type="file" />
        <input onClick={ediarPassword} type="button" value={"Editar password"} className='form-submit'/>
      </form>
    </div>
    </section>
  )
}

export default EditarPassword