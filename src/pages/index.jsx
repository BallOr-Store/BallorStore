import CardComidas from 'components/Comidas';
import logo from 'media/logo blog.jpg';
import entrada from 'media/patosalagua1.jpg';
import platoFuerte1 from 'media/patosalagua2.jpg';
import platoFuerte2 from 'media/patosalagua3.jpg';

function Index (){
    return(
        <div>
            <header>
        <ul className="navbar">
            <li>
              <img src={logo} alt="Imagen" className="logo" />
              </li>
           <li>
             <button className="mainButton"> Nuevo Post </button>
             </li>
           <li>
               <div className="buscar">
                <input placeholder="Buscar Post"/>
                <i className="fas fa-search mainButton"></i>
               </div>
            </li>
           
           <li><button className="secondaryButton"> Iniciar Sesión</button></li>
           <li><button className="mainButton"> Registro </button></li>
        </ul>
    </header>
    <main>
        <section>
            <h1>AL AGUA PATOS</h1>
            <ul className="breedCardContainer">
                <CardComidas plato='Entrada' imagen={entrada} like='120' comment='1.5k' views='150'/>
                <CardComidas plato='Plato Fuerte 1' imagen={platoFuerte1} like='150' comment='1.0k' views='180'/>
                <CardComidas plato='Plato Fuerte 2'imagen={platoFuerte2} like='160' comment='1.8k' views='150'/>
            </ul>
        </section>
    </main>
    <footer></footer>
        </div>
    )
}

export default Index;