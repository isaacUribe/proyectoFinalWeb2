import React, { useEffect, useState } from 'react'
import { dataBase, subirImagen } from '../../config/dataBase'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

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
        <form>
            <input onChange={(e)=>setNombre(e.target.value)} placeholder={'Nombre producto'} type={"text"} value={nombre}/>
            <input onChange={(e)=>setCantidad(e.target.value)} placeholder={'Cantidad producto'} type={"text"} value={cantidad}/>
            <input onChange={(e)=>setValor(e.target.value)} placeholder={'Valor producto'} type={"text"} value={valor}/>
            <input onChange={(e)=>setDescripcion(e.target.value)} placeholder={'Descripcion producto'} type={"text"} value={descripcion}/>
            <input onChange={(e)=>setCategoria(e.target.value)} placeholder={'Categoria producto'} type={"text"} value={categoria}/>
            <img src={img}  />
            <input onChange={(e)=>setImg(e.target.files[0])} type='file'/>
            <input onClick={editarproducto} type="button" value={"Editar producto"} />
        </form>
    </section>
  )
}

export default EditarProducto