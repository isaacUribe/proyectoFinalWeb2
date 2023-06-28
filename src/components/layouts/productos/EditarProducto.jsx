import React, { useEffect, useState } from 'react'
import { dataBase, subirImagen } from '../../config/dataBase'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import Menu from '../Menu'

const EditarProducto = () => {
  const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [valor, setValor] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [img, setImg] = useState(null)
    const [categoria, setCategoria] = useState("")
    const returnListado = useNavigate()
    const {id} = useParams();
    const editarproducto = async() =>{
      const urlImg = await subirImagen(img)
      const productosCollection = doc(dataBase, "productos", id)
      const producto = {
        nombre, cantidad, valor, descripcion, categoria, urlImg
      }
      await updateDoc(productosCollection, producto)
      returnListado("/listarproductos")
    }
    const productoActualizado = async(id)=>{
      const productoEdit = await getDoc(doc(dataBase, "productos", id))
      setNombre(productoEdit.data().nombre)
      setCantidad(productoEdit.data().cantidad)
      setValor(productoEdit.data().valor)
      setDescripcion(productoEdit.data().descripcion)
      setImg(productoEdit.data().urlImg)
      setCategoria(productoEdit.data().categoria)
    }
    useEffect(()=>{
      productoActualizado(id)
    }, [])
  return (
    <section>
      <Menu/>
    <section className='form'>
        <form className='form-container'>
          <h2 className='form-title'>Editar Producto</h2>
          <div className='form-grupo'>
            <input onChange={(e)=>setNombre(e.target.value)}  type={"text"} value={nombre} className='form-input'/>
            <label className='form-label'>Nombre</label>
            </div>
            <div className='form-grupo'>
            <input onChange={(e)=>setCantidad(e.target.value)}  type={"text"} value={cantidad} className='form-input'/>
            <label className='form-label'>Cantidad</label>
            </div>
            <div className='form-grupo'>
            <input onChange={(e)=>setValor(e.target.value)}  type={"text"} value={valor} className='form-input'/>
            <label className='form-label'>Valor</label>
            </div>
            <div className='form-grupo'>
            <input onChange={(e)=>setDescripcion(e.target.value)}  type={"text"} value={descripcion} className='form-input'/>
            <label className='form-label'>Descripcion</label>
            </div>
            <div className='form-grupo'>
            <input onChange={(e)=>setCategoria(e.target.value)}  type={"text"} value={categoria} className='form-input'/>
            <label className='form-label'>Categoria</label>
            </div>
            <div className='img-editar'>
            <img src={img}/>
            <label className='form-label'>Imagen producto</label>
            </div>
            <input onChange={(e)=>setImg(e.target.files[0])} type='file'/>
            <input onClick={editarproducto} type="button" value={"Editar producto"} className='form-submit'/>
        </form>
    </section>
    </section>
  )
}

export default EditarProducto