
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { dataBase, subirImagen } from '../../config/dataBase'
import { doc, getDoc, updateDoc } from '@firebase/firestore'
import { async } from '@firebase/util'


const EditarEmpleado = () => {
  const [nombre, setNombre] = useState("")
  const [documento, setDocumento] = useState("")
  const [correo, setCorreo] = useState("")
  const [cargo, setCargo] = useState("")
  const [salario, setSalario] = useState("")
  const [direccion, setDireccion] = useState("")
  const [cuentaBanco, setCuentaBanco] = useState("")
  const [img, setImg] = useState(null)
  const returnListado = useNavigate()
  const {id} = useParams()
  const editarEmpleado = async() =>{
    const urlImg = await subirImagen(img)
    const empleadoCollection = doc(dataBase, "empleados", id)
    const empleado = {
      nombre, documento, correo, cargo, salario, direccion, cuentaBanco, urlImg
    }
    await updateDoc(empleadoCollection, empleado)
    returnListado('/listarempleados')
  }
  const empleadoActualizado = async(id) =>{
    const empleadoEdit = await getDoc(doc(dataBase, "empleados", id))
    setNombre(empleadoEdit.data().nombre)
    setDocumento(empleadoEdit.data().documento)
    setCorreo(empleadoEdit.data().correo)
    setCargo(empleadoEdit.data().cargo)
    setSalario(empleadoEdit.data().salario)
    setDireccion(empleadoEdit.data().direccion)
    setCuentaBanco(empleadoEdit.data().cuentaBanco)
    setImg(empleadoEdit.data().urlImg)
  }
  useEffect(()=>{
    empleadoActualizado(id)
  }, [])
  return (
    <section>
    <form >
      <input onChange={(e)=>setNombre(e.target.value)} placeholder={"Nombre empleado"} type={"text"} value={nombre}/>
      <input onChange={(e)=>setDocumento(e.target.value)} placeholder={"Documento empleado"} type={"text"} value={documento}/>
      <input onChange={(e)=>setCorreo(e.target.value)} placeholder={"Correo empleado"} type={"text"} value={correo}/>
      <input onChange={(e)=>setCargo(e.target.value)} placeholder={"Cargo empleado"} type={"text"} value={cargo}/>
      <input onChange={(e)=>setSalario(e.target.value)} placeholder={"Salario empleado"} type={"text"} value={salario}/>
      <input onChange={(e)=>setDireccion(e.target.value)} placeholder={"Direccion empleado"} type={"text"} value={direccion}/>
      <input onChange={(e)=>setCuentaBanco(e.target.value)} placeholder={"Cuenta Bancaria empleado"} type={"text"} value={cuentaBanco}/>
      <img src={img} alt="" />
      <input onChange={(e)=>setImg(e.target.files[0])}  type="file"/>
      <input type="button" onClick={editarEmpleado} value={"Editar Cliente"}/>
    </form>
  </section>
  )
}

export default EditarEmpleado