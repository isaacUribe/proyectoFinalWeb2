import React from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { dataBase, subirImagen } from '../../config/dataBase'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CrearCliente = () => {
    const [nombre, setNombre] = useState("")
    const [documento, setDocumento] = useState("")
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [barrio, setBarrio] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [img, setImg] = useState(null)
    const returnListado = useNavigate()
    const agregarCliente = async() =>{
        const urlImg = await subirImagen(img)
        console.log(urlImg)
        const clienteCollection = collection(dataBase, "clientes")
        const cliente = {
            nombre, documento, correo, telefono, direccion, barrio, ciudad, urlImg            
        }
        await addDoc(clienteCollection, cliente)
        returnListado("/listarclientes")
    }
  return (
    <section>
        <form>
            <input onChange={(e)=>setNombre(e.target.value)}placeholder={'Nombre cliente'} type={"text"}/>
            <input onChange={(e)=>setDocumento(e.target.value)}placeholder={'Documento cliente'} type={"text"}/>
            <input onChange={(e)=>setCorreo(e.target.value)}placeholder={'Correo cliente'} type={"text"}/>
            <input onChange={(e)=>setTelefono(e.target.value)}placeholder={'Telefono cliente'} type={"text"}/>
            <input onChange={(e)=>setDireccion(e.target.value)}placeholder={'Direccion cliente'} type={"text"}/>
            <input onChange={(e)=>setBarrio(e.target.value)}placeholder={'Barrio cliente'} type={"text"}/>
            <input onChange={(e)=>setCiudad(e.target.value)}placeholder={'Ciudad cliente'} type={"text"}/>
            <input onChange={(e)=>setImg(e.target.files[0])} type="file" />
            <input onClick={agregarCliente} type="button" value={"Agregar Cliente"}/>
        </form>
    </section>
  )
}

export default CrearCliente