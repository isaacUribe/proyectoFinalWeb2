
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { dataBase, subirImagen } from '../../config/dataBase'
import { doc, getDoc, updateDoc } from '@firebase/firestore'
import { async } from '@firebase/util'
import Menu from '../Menu'


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
      <Menu/>
    <section className='form'>
    <form className='form-container'>
    <h2 className='form-title'>Editar Empleado</h2>
    <div className='form-grupo'>
      <input onChange={(e)=>setNombre(e.target.value)} placeholder={"Nombre empleado"} type={"text"} value={nombre} className='form-input'/>
      <label className='form-label'>Nombre</label>
      </div>
      <div className='form-grupo'>
      <input onChange={(e)=>setDocumento(e.target.value)} placeholder={"Documento empleado"} type={"text"} value={documento} className='form-input'/>
      <label className='form-label'>Documento</label>
      </div>
      <div className='form-grupo'>
      <input onChange={(e)=>setCorreo(e.target.value)} placeholder={"Correo empleado"} type={"text"} value={correo} className='form-input'/>
      <label className='form-label'>Correo</label>
      </div>
      <div className='form-grupo'>
      <input onChange={(e)=>setCargo(e.target.value)} placeholder={"Cargo empleado"} type={"text"} value={cargo} className='form-input'/>
      <label className='form-label'>Cargo</label>
      </div>
      <div className='form-grupo'>
      <input onChange={(e)=>setSalario(e.target.value)} placeholder={"Salario empleado"} type={"text"} value={salario} className='form-input'/>
      <label className='form-label'>Salario</label>
      </div>
      <div className='form-grupo'>
      <input onChange={(e)=>setDireccion(e.target.value)} placeholder={"Direccion empleado"} type={"text"} value={direccion} className='form-input'/>
      <label className='form-label'>Direccion</label>
      </div>
      <div className='form-grupo'>
      <input onChange={(e)=>setCuentaBanco(e.target.value)} placeholder={"Cuenta Bancaria empleado"} type={"text"} value={cuentaBanco} className='form-input'/>
      <label className='form-label'>Cuenta Banco</label>
      </div>
      <div className='img-editar'>
      <img src={img} alt="" />
      </div>
      <input onChange={(e)=>setImg(e.target.files[0])}  type="file"/>
      <input type="button" onClick={editarEmpleado} value={"Editar Empleado"} className='form-submit'/>
    </form>
  </section>
  </section>
  )
}

export default EditarEmpleado