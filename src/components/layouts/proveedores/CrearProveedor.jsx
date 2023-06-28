import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom/dist'
import { dataBase, subirImagen } from '../../config/dataBase'
import { addDoc, collection } from 'firebase/firestore'
import Menu from '../Menu'

const CrearProveedor = () => {
  const [nombre, setNombre] = useState("")
  const [direccion, setDireccion] = useState("")
  const [ciudad, setCiudad] = useState("")
  const [nit, setnit] = useState("")
  const [telefono, settelefono] = useState("")
  const [nombreGerente, setnombreGerente] = useState("")
  const [img, setImg] = useState(null)
  const [logo, setLogo] = useState(null)
  const returnListado = useNavigate()

  const agregarProveedor = async()=>{
    const urlImg = await subirImagen(img)
    const urlLogo = await subirImagen(logo)
    const proveedoresCollection = collection(dataBase, "proveedores")
    const proveedor = {
      nombre, direccion, ciudad, nit, telefono, nombreGerente, urlImg, urlLogo
    }
    await addDoc(proveedoresCollection, proveedor)
    returnListado("/listarproveedores")
  }
  return (
    <section>
      <Menu/>
    <section className='form'>
      <form className='form-container'>
        <h2 className='form-title'>Crear Nuevo Proveedor</h2>
        <div className='form-grupo'>
        <input onChange={(e)=>setNombre(e.target.value)} placeholder={'Nombre proveedor'} type={'text'} className='form-input'/>
        </div>
        <div className='form-grupo'>
        <input onChange={(e)=>setDireccion(e.target.value)} placeholder={'Direccion proveedor'} type={'text'} className='form-input'/>
        </div>
        <div className='form-grupo'>
        <input onChange={(e)=>setCiudad(e.target.value)} placeholder={'Ciudad proveedor'} type={'text'} className='form-input'/>
        </div>
        <div className='form-grupo'>
        <input onChange={(e)=>setnit(e.target.value)} placeholder={'Nit proveedor'} type={'text'} className='form-input'/>
        </div>
        <div className='form-grupo'>
        <input onChange={(e)=>settelefono(e.target.value)} placeholder={'Telefono proveedor'} type={'text'} className='form-input'/>
        </div>
        <div className='form-grupo'>
        <input onChange={(e)=>setnombreGerente(e.target.value)} placeholder={'Nombre Gerente'} type={'text'} className='form-input'/>
        </div>
        <section>
        <input onChange={(e)=>setImg(e.target.files[0])}  type='file'/>
        <label className='form-label'>Imagen Gerente</label>
        </section>
        <section>
        <input onChange={(e)=>setLogo(e.target.files[0])} type='file'/>
        <label className='form-label'>Logo Empresa</label>
        </section>
        <input onClick={agregarProveedor} type="button" value={"Crear proveedor"} className='form-submit'/>

      </form>
    </section>
    </section>
  )
}

export default CrearProveedor