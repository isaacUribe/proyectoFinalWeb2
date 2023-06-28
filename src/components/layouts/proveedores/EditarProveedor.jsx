import { collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom/dist'
import { dataBase, subirImagen } from '../../config/dataBase'
import Menu from '../Menu'

const EditarProveedor = () => {
  const [nombre, setNombre] = useState("")
  const [direccion, setDireccion] = useState("")
  const [ciudad, setCiudad] = useState("")
  const [nit, setnit] = useState("")
  const [telefono, settelefono] = useState("")
  const [nombreGerente, setnombreGerente] = useState("")
  const [img, setImg] = useState(null)
  const [logo, setLogo] = useState(null)
  const returnListado = useNavigate()
  const {id} = useParams();
  const EditarProveedor = async()=>{
    const urlImg = await subirImagen(img)
    const urlLogo = await subirImagen(logo)
    const proveedoresCollection = doc(dataBase, "proveedores", id)
    const proveedor = {
      nombre, direccion, ciudad, nit, telefono, nombreGerente, urlImg, urlLogo
    }
    await updateDoc(proveedoresCollection, proveedor)
    returnListado("/listarproveedores")
  }
  const proveedorActualizado = async(id)=>{
    const proveedorEdit = await getDoc(doc(dataBase, "proveedores", id))
    setNombre(proveedorEdit.data().nombre)
    setDireccion(proveedorEdit.data().direccion)
    setCiudad(proveedorEdit.data().ciudad)
    setnit(proveedorEdit.data().nit)
    settelefono(proveedorEdit.data().telefono)
    setnombreGerente(proveedorEdit.data().nombreGerente)
    setImg(proveedorEdit.data().urlImg)
    setLogo(proveedorEdit.data().urlLogo)
  }
  useEffect(()=>{
    proveedorActualizado(id)
  }, [])
  return (
    <section>
      <Menu/>
    <section className='form'>
      <form className='form-container'>
        <h2 className='form-title'>Editar Proveedore</h2>
        <div className='form-grupo'>
        <input onChange={(e)=>setNombre(e.target.value)}  type={'text'} value={nombre} className='form-input'/>
        <label className='form-label'>Nombre</label>
        </div>
        <div className='form-grupo'>
        <input onChange={(e)=>setDireccion(e.target.value)}  type={'text'} value={direccion} className='form-input'/>
        <label className='form-label'>Direccion</label>
        </div>
        <div className='form-grupo'>
        <input onChange={(e)=>setCiudad(e.target.value)}  type={'text'} value={ciudad} className='form-input'/>
        <label className='form-label'>Ciudad</label>
        </div>
        <div className='form-grupo'>
        <input onChange={(e)=>setnit(e.target.value)}  type={'text'} value={nit} className='form-input'/>
        <label className='form-label'>Nit</label>
        </div>
        <div className='form-grupo'>
        <input onChange={(e)=>settelefono(e.target.value)}  type={'text'} value={telefono} className='form-input'/>
        <label className='form-label'>Telefono</label>
        </div>
        <div className='form-grupo'>
        <input onChange={(e)=>setnombreGerente(e.target.value)}  type={'text'} value={nombreGerente} className='form-input'/>
        <label className='form-label'>Nombre Gerente</label>
        </div>
        <div className='img-editar'>
        <img src={img} alt="" />
        <label className='form-label'>Imagen Gerente</label>
        </div>
        <input onChange={(e)=>setImg(e.target.files[0])}  type='file' />
        <div className='img-editar'>
        <img src={logo} alt="" />
        <label className='form-label'>Logo Empresa</label>
        </div>
        <input onChange={(e)=>setLogo(e.target.files[0])} type='file'/>
        <input onClick={EditarProveedor} type="button" value={"Editar proveedor"} className='form-submit'/>

      </form>
    </section>
    </section>
  )
}

export default EditarProveedor