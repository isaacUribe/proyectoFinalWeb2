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
      <h1 className="titulo">Productos</h1>
      <h3 className="titulo">Para crear un nuevo producto pulse aqui</h3>
      <Link className="btn btn-outline-primary btn-crear" to={'/crearproducto'}>Crear producto</Link>
      <div className="card-container">
      {
        productos.map((producto)=>(
          <section key={producto.id}>
            <div className="card cardListar">
            <img src={producto.urlImg} alt="" className="card-img-top"/>
            <h3 className="card-title">Nombre: {producto.nombre}</h3>
            <p><strong>Cantidad:</strong> {producto.cantidad}</p>
            <p><strong>Valor:</strong> {producto.valor}</p>
            <p><strong>Descripcion:</strong> {producto.descripcion}</p>
            <p><strong>Categoria:</strong> {producto.categoria}</p>
            
            <button className="btn btn-outline-primary" onClick={(()=>{eliminarProducto(producto.id)})}>Eliminar</button>
            <Link className="btn btn-outline-primary" to={'/editarproducto/'+ producto.id}>Editar</Link>
            </div>
          </section>
        ))
      }
      </div>
    </section>
  )
}

export default ListarProductos