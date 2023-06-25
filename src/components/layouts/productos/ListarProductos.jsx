import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { dataBase } from '../../config/dataBase'
import Menu from '../Menu'
import { Link } from 'react-router-dom'

const ListarProductos = () => {
  const [productos, setProductos] = useState([])
  const mostrarProductos = async()=>{
    const productosCollection = collection(dataBase, "productos")
    const data = await getDocs(productosCollection)
    setProductos(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
  }
  const eliminarProducto = async(id) =>{
    const productoEliminado = doc(dataBase, "productos", id)
    await deleteDoc(productoEliminado)
    mostrarProductos()
  }
  useEffect(()=>{
    mostrarProductos()
  },[])
  console.log(productos)
  return (
    <section>
      <Menu/>
      <h1>Esta es la lista de productos</h1>
      <hr />
      <h1>Para crear un nuevo producto pulse aqui</h1>
      <Link to={'/crearproducto'}>Crear</Link>
      {
        productos.map((producto)=>(
          <section key={producto.id}>
            <h1>Nombre: {producto.nombre}</h1>
            <h2>Cantidad: {producto.cantidad}</h2>
            <h2>Valor: {producto.valor}</h2>
            <h2>Descripcion: {producto.descripcion}</h2>
            <h2>Categoria: {producto.categoria}</h2>
            <img src={producto.urlImg} alt="" />
            <button onClick={(()=>{eliminarProducto(producto.id)})}>Eliminar</button>
            <Link to={'/editarproducto/'+ producto.id}>Editar</Link>
          </section>
        ))
      }
    </section>
  )
}

export default ListarProductos