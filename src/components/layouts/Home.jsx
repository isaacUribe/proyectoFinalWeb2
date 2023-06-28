import React from 'react'
import Menu from './Menu'
import Bienvenidos from "./../img/Bienvenidos.jpg"
import trabajo from "./../img/trabajo.jpg"
import empleados from "./../img/empleados.jpg"
import clientes from "./../img/clientes.png"
import productos from "./../img/productos.jpg"
import proveedores from "./../img/proveedores.jpg"
import peliculas from "./../img/peliculas.jpg"

const Home = () => {
  return (
    
    <div>
      <Menu/>
      <h1 className='titulo'>Empresa Juan Camilo Jaramillo</h1>
      <section className='cuerpo-home1'>
          <section className='texto-home1'>
            <p>
            Estamos encantados de tenerte entre nosotros.¡En nombre de todos los miembros y de la dirección, nos gustaría extender nuestra más cálida bienvenida y buenos deseos!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem quisquam ratione atque deleniti cumque nam velit. Quibusdam doloremque officia repellat? Nulla eaque, inventore ut repellat veniam cum maxime consequuntur.</p>
            <img src={Bienvenidos} alt="img"/>
          </section>
          <img src={trabajo} alt="img"/>
        </section>
        
        <section className='cuerpo-home1'>
        <img src={empleados} alt="img"/>
          <section className='texto-home1'>
            <h2>Empleados</h2>
            <p>
            La energia y la actitud de nuestros empleados siempre es importante
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem quisquam ratione atque deleniti cumque nam velit. Quibusdam doloremque officia repellat? Nulla eaque, inventore ut repellat veniam cum maxime consequuntur.</p>
          </section>
        </section>
        <section className='cuerpo-home1'>
          <section className='texto-home1'>
            <h2>Clientes</h2>
            <p>
            Queremos que nuestros clientes siempre esten satisfechos con nuetro trabajo
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem quisquam ratione atque deleniti cumque nam velit. Quibusdam doloremque officia repellat? Nulla eaque, inventore ut repellat veniam cum maxime consequuntur.</p>
          </section>
          <img src={clientes} alt="img"/>
        </section>
        <section className='cuerpo-home1'>
        <img src={productos} alt="img"/>
          <section className='texto-home1'>
            <h2>Productos</h2>
            <p>
            Nuestros productos siempre son de la mejor calidad para nuestros compradores
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem quisquam ratione atque deleniti cumque nam velit. Quibusdam doloremque officia repellat? Nulla eaque, inventore ut repellat veniam cum maxime consequuntur.</p>
          </section>
        </section>
        <section className='cuerpo-home1'>
          <section className='texto-home1'>
            <h2>Proveedores</h2>
            <p>
            Nuestros proveedores estan certificados y son unos de los mejores de colombia
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem quisquam ratione atque deleniti cumque nam velit. Quibusdam doloremque officia repellat? Nulla eaque, inventore ut repellat veniam cum maxime consequuntur.</p>
          </section>
          <img src={proveedores} alt="img"/>
        </section>
        <section className='cuerpo-home1'>
        <img src={peliculas} alt="img"/>
          <section className='texto-home1'>
            <h2>Peliculas</h2>
            <p>
            Tambien tenemos un para ofrecerles peliculas de la mejor calidad para ustede y su familia
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem quisquam ratione atque deleniti cumque nam velit. Quibusdam doloremque officia repellat? Nulla eaque, inventore ut repellat veniam cum maxime consequuntur.</p>
          </section>
          
        </section>
        
      {/* <section className='cuerpo-home'>
        <div className='seccion-principal'>
        <h4>Estamos encantados de tenerte entre nosotros.¡En nombre de todos los miembros y de la dirección, nos gustaría extender nuestra más cálida bienvenida y buenos deseos!</h4>
          <img  src={Bienvenidos} alt="img"/>
        </div> 
          
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
      </section> */}
      
    </div>
  )
}

export default Home