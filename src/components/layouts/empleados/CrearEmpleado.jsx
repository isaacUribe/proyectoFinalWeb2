import { async } from '@firebase/util'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { dataBase, subirImagen } from '../../config/dataBase'
import { addDoc, collection } from '@firebase/firestore'


const CrearEmpleado = () => {
  const [nombre, setNombre] = useState("")
  const [documento, setDocumento] = useState("")
  const [correo, setCorreo] = useState("")
  const [cargo, setCargo] = useState("")
  const [salario, setSalario] = useState("")
  const [direccion, setDireccion] = useState("")
  const [cuentaBanco, setCuentaBanco] = useState("")
  const [img, setImg] = useState(null)
  const returnListado = useNavigate()
  const agregarEmpleado = async() =>{
    const urlImg = await subirImagen(img)
    const empleadoCollection = collection(dataBase, "empleados")
    const empleado = {
      nombre, documento, correo, cargo, salario, direccion, cuentaBanco, urlImg
    }
    await addDoc(empleadoCollection, empleado)
    returnListado('/listarempleados')
  }
  return (
    <section>
      <form >
        <input onChange={(e)=>setNombre(e.target.value)} placeholder={"Nombre empleado"} type={"text"}/>
        <input onChange={(e)=>setDocumento(e.target.value)} placeholder={"Documento empleado"} type={"text"}/>
        <input onChange={(e)=>setCorreo(e.target.value)} placeholder={"Correo empleado"} type={"text"}/>
        <input onChange={(e)=>setCargo(e.target.value)} placeholder={"Cargo empleado"} type={"text"}/>
        <input onChange={(e)=>setSalario(e.target.value)} placeholder={"Salario empleado"} type={"text"}/>
        <input onChange={(e)=>setDireccion(e.target.value)} placeholder={"Direccion empleado"} type={"text"}/>
        <input onChange={(e)=>setCuentaBanco(e.target.value)} placeholder={"Cuenta Bancaria empleado"} type={"text"}/>
        <input onChange={(e)=>setImg(e.target.files[0])}  type="file"/>
        <input type="button" onClick={agregarEmpleado} value={"Agregar Cliente"}/>
      </form>
    </section>
  )
}

export default CrearEmpleado