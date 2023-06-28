import React, { useDebugValue, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dataBase, subirImagen } from '../../config/dataBase'
import { addDoc, collection } from 'firebase/firestore'
import Menu from '../Menu'

const CrearProductos = () => {
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [valor, setValor] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [img, setImg] = useState(null)
    const [categoria, setCategoria] = useState("")
    const returnListado = useNavigate()
    const agregarProducto = async()=>{
        const urlImg = await subirImagen(img)
        const productosCollection = collection(dataBase, "productos")
        const producto = {
            nombre, cantidad, valor, descripcion, urlImg, categoria
        }
        await addDoc(productosCollection, producto)
        returnListado("/listarproductos")
    }
  return (
    <section>
        <Menu/>
    <section className='form'>
        <form className='form-container'>
            <h2 className='form-title'>Crear Nuevo Producto</h2>
            <div className='form-grupo'>
            <input onChange={(e)=>setNombre(e.target.value)} placeholder={'Nombre producto'} type={"text"} className='form-input'/>
            </div>
            <div className='form-grupo'>
            <input onChange={(e)=>setCantidad(e.target.value)} placeholder={'Cantidad producto'} type={"text"} className='form-input'/>
            </div>
            <div className='form-grupo'>
            <input onChange={(e)=>setValor(e.target.value)} placeholder={'Valor producto'} type={"text"} className='form-input'/>
            </div>
            <div className='form-grupo'>
            <input onChange={(e)=>setDescripcion(e.target.value)} placeholder={'Descripcion producto'} type={"text"} className='form-input'/>
            </div>
            <div className='form-grupo'>
            <input onChange={(e)=>setCategoria(e.target.value)} placeholder={'Categoria producto'} type={"text"} className='form-input'/>
            </div>
            <section>
            <input onChange={(e)=>setImg(e.target.files[0])} type='file'/>
            <label className='form-label'>Imagen Producto</label>
            </section>
            <input onClick={agregarProducto} type="button" value={"Agregar producto"} className='form-submit'/>
        </form>
    </section>
    </section>
  )
}

export default CrearProductos