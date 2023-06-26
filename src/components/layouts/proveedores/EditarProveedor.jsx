import { collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom/dist'
import { dataBase, subirImagen } from '../../config/dataBase'

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
      <form>
        <input onChange={(e)=>setNombre(e.target.value)} placeholder={'Nombre proveedor'} type={'text'} value={nombre}/>
        <input onChange={(e)=>setDireccion(e.target.value)} placeholder={'Direccion proveedor'} type={'text'} value={direccion}/>
        <input onChange={(e)=>setCiudad(e.target.value)} placeholder={'Ciudad proveedor'} type={'text'} value={ciudad}/>
        <input onChange={(e)=>setnit(e.target.value)} placeholder={'Nit proveedor'} type={'text'} value={nit}/>
        <input onChange={(e)=>settelefono(e.target.value)} placeholder={'Telefono proveedor'} type={'text'} value={telefono}/>
        <input onChange={(e)=>setnombreGerente(e.target.value)} placeholder={'Nombre Gerente'} type={'text'} value={nombreGerente}/>
        <img src={img} alt="" />
        <input onChange={(e)=>setImg(e.target.files[0])}  type='file' />
        <img src={logo} alt="" />
        <input onChange={(e)=>setLogo(e.target.files[0])} type='file'/>
        <input onClick={EditarProveedor} type="button" value={"Editar proveedor"} />

      </form>
    </section>
  )
}

export default EditarProveedor