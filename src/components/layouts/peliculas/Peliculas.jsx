import React, {useState} from "react"

const urlPeliculas = 'https://api.themoviedb.org/3/movie/popular?api_key=d5c775389c73a0b2a2bc815d05093528&language=es-MX&page='

const Peliculas = () => {
  const [Peliculas, setPeliculas] = useState([])
  const getPeliculas = async () =>{
    
  }

  return (
    <div>Aqui se mostrara el listado de peliculas</div>
  )
}

export default Peliculas