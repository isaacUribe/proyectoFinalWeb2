import React from 'react'
import Menu from './Menu'
import Bienvenidos from "./../img/Bienvenidos.jpg"
import empleados from "./../img/empleados.jpg"
import clientes from "./../img/clientes.png"
import productos from "./../img/productos.jpg"
import proveedores from "./../img/proveedores.jpg"
import peliculas from "./../img/peliculas.jpg"

const Home = () => {
  return (
    
    <div>
      <Menu/>
      <hr />
     <center><img  src={Bienvenidos} alt="img"/></center> 
     <center><h2>Estamos encantados de tenerte entre nosotros.¡En nombre de todos los miembros y de la dirección, nos gustaría extender nuestra más cálida bienvenida y buenos deseos!</h2></center>
      
      <hr />
      <pre> <h3>La energia y la actitud de nuestros empleados siempre es importante</h3></pre>
      <img className="imgemple" src={empleados} alt="img"/>

      <pre><h3>Queremos que nuestros clientes siempre esten satisfechos con nuetro trabajo</h3></pre>
      <img className="imgemple" src={clientes} alt="img"/>

      <pre><h3>Nuestros productos siempre son de la mejor calidad para nuestros compradores</h3></pre>
      <img className="imgemple" src={productos} alt="img"/>

      <pre><h3>Nuestros proveedores estan certificados y son unos de los mejores de colombia</h3></pre>
      <img className="imgemple" src={proveedores} alt="img"/>

      <pre><h3>Tambien tenemos un para ofrecerles peliculas de la mejor calidad para ustede y su familia</h3></pre>
      <img className="imgemple" src={peliculas} alt="img"/>
    </div>
  )
}

export default Home