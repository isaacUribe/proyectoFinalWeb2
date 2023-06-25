import { getDoc, updateDoc, doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dataBase, subirImagen } from '../../config/dataBase'

const EditarCliente = () => {
    const [nombre, setNombre] = useState("")
    const [documento, setDocumento] = useState("")
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [barrio, setBarrio] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [img, setImg] = useState(null)
    const returnListado = useNavigate()
    const {id} = useParams();
    const editarCliente = async() =>{
        const urlImg = await subirImagen(img)
        const clienteCollection = doc(dataBase, "clientes", id)
        const cliente = {
            nombre, documento, correo, telefono, direccion, barrio, ciudad, urlImg         
        }
        await updateDoc(clienteCollection, cliente)
        returnListado("/listarclientes")
    }
    const clienteActualizado = async (id) =>{
        const clienteEdit = await getDoc(doc(dataBase, "clientes", id))
        setNombre(clienteEdit.data().nombre)
        setDocumento(clienteEdit.data().documento)
        setCorreo(clienteEdit.data().correo)
        setTelefono(clienteEdit.data().telefono)
        setDireccion(clienteEdit.data().direccion)
        setBarrio(clienteEdit.data().barrio)
        setCiudad(clienteEdit.data().ciudad)
        setImg(clienteEdit.data().urlImg)
        console.log(clienteEdit)
    }
    useEffect(()=>{
        clienteActualizado(id)
    },[])
    
  return (
    <section>
        <form>
            <input onChange={(e)=>setNombre(e.target.value)}placeholder={'Nombre cliente'} type={"text"} value={nombre}/>
            <input onChange={(e)=>setDocumento(e.target.value)}placeholder={'Documento cliente'} type={"text"} value={documento}/>
            <input onChange={(e)=>setCorreo(e.target.value)}placeholder={'Correo cliente'} type={"text"} value={correo}/>
            <input onChange={(e)=>setTelefono(e.target.value)}placeholder={'Telefono cliente'} type={"text"} value={telefono}/>
            <input onChange={(e)=>setDireccion(e.target.value)}placeholder={'Direccion cliente'} type={"text"} value={direccion}/>
            <input onChange={(e)=>setBarrio(e.target.value)}placeholder={'Barrio cliente'} type={"text"} value={barrio}/>
            <input onChange={(e)=>setCiudad(e.target.value)}placeholder={'Ciudad cliente'} type={"text"} value={ciudad}/>
            <img src={img}/>
            <input onChange={(e)=>setImg(e.target.files[0])} type="file" accept="image/*" />
            <input onClick={editarCliente} type="button" value={"Editar Cliente"}/>
        </form>
    </section>
  )
}

export default EditarCliente