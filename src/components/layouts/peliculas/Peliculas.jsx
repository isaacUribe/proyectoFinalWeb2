import React, {useState, useEffect} from "react"
import Menu from "../Menu"

const urlPeliculas = 'https://api.themoviedb.org/3/movie/popular?api_key=d5c775389c73a0b2a2bc815d05093528&language=es-MX&page='

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([])
  const getPeliculas = async () =>{
    await fetch(urlPeliculas)
    .then((response) => response.json())
    .then((data) => setPeliculas(data.results))
    .catch((error) => {
      console.log(error.message)
    })
    
  }

  useEffect(()=>{
    getPeliculas()
  },[])

  console.log(peliculas)
  return (
    <>
    <Menu/>
      <section className="container">
        {
        peliculas.map((pelicula) => (
            <section className="card-peliculas">
              <h2>Nombre: {pelicula.title}</h2>
              <h4>Valoracion: {pelicula.vote_average}</h4>
              <h4>Fecha de estreno: {pelicula.release_date}</h4>
              <h4>Descripcion: {pelicula.overview}</h4>
            </section>
        ))
      }
      </section>
    </>
  )
}

export default Peliculas