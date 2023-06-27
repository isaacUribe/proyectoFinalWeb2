import { getDoc, updateDoc, doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dataBase, subirImagen } from '../../config/dataBase'
import Menu from "./../Menu"

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
        <Menu/>
    <section className='form'>
        <form className='form-container'>
            <h2 className='form-title'>Editar Cliente</h2>
            <div className='form-grupo'>
            <input onChange={(e)=>setNombre(e.target.value)} type={"text"} value={nombre} className='form-input'/>
            <label className='form-label'>Nombre</label>
            </div>
            <div className='form-grupo'>
            <input onChange={(e)=>setDocumento(e.target.value)} type={"text"} value={documento} className='form-input'/>
            <label className='form-label'>Documento</label>
            </div > 
            <div className='form-grupo'>
            <input onChange={(e)=>setCorreo(e.target.value)} type={"text"} value={correo} className='form-input'/>
            <label className='form-label'>Correo</label>
            </div>
            <div className='form-grupo'>
            <input onChange={(e)=>setTelefono(e.target.value)} type={"text"} value={telefono} className='form-input'/>
            <label className='form-label'>Telefono</label>
            </div>
            <div className='form-grupo'>
            <input onChange={(e)=>setDireccion(e.target.value)} type={"text"} value={direccion} className='form-input'/>
            <label className='form-label'>Direccion</label>
            </div>
            <div className='form-grupo'> 
            <input onChange={(e)=>setBarrio(e.target.value)} type={"text"} value={barrio} className='form-input'/>
            <label className='form-label'>Barrio</label>
            </div>
            <div className='form-grupo'>
            <input onChange={(e)=>setCiudad(e.target.value)} type={"text"} value={ciudad} className='form-input'/>
            <label className='form-label'>Ciudad</label>
            </div>
            <div className='img-editar'>
            <img src={img} />
            </div>
            <input onChange={(e)=>setImg(e.target.files[0])} type="file" accept="image/*"/>
            <input onClick={editarCliente} type="button" value={"Editar Cliente"} className='form-submit'/>
        </form>
    </section>
</section>
  )
}

export default EditarCliente