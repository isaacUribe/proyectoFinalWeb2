import React, { useDebugValue, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dataBase, subirImagen } from '../../config/dataBase'
import { addDoc, collection } from 'firebase/firestore'

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
        <form>
            <input onChange={(e)=>setNombre(e.target.value)} placeholder={'Nombre producto'} type={"text"}/>
            <input onChange={(e)=>setCantidad(e.target.value)} placeholder={'Cantidad producto'} type={"text"}/>
            <input onChange={(e)=>setValor(e.target.value)} placeholder={'Valor producto'} type={"text"}/>
            <input onChange={(e)=>setDescripcion(e.target.value)} placeholder={'Descripcion producto'} type={"text"}/>
            <input onChange={(e)=>setCategoria(e.target.value)} placeholder={'Categoria producto'} type={"text"}/>
            <input onChange={(e)=>setImg(e.target.files[0])} type='file'/>
            <input onClick={agregarProducto} type="button" value={"Agregar producto"} />
        </form>
    </section>
  )
}

export default CrearProductos