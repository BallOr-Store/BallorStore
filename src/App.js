import logo from './media/logo blog.jpg';
import './styles/estilos.css';
import entrada from './media/patosalagua1.jpg';
import platoFuerte1 from './media/patosalagua2.jpg';
import platoFuerte2 from './media/patosalagua3.jpg';

function App() {
  return (
    <div className="App">
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
                <li className="Card">
                    <div className="contenedorImagen">
                        <img src={entrada} alt="Al agua Patos"/>
                    </div>
                    <span className="Titulo">Entrada</span>
                    <div className="Interacciones"> 
                        <div><i className="fas fa-heart like"></i> 150</div> 
                        <div><i className="fas fa-comment"></i> 1.5k</div>
                        <div><i className="fas fa-eye"></i> 120</div>
                    </div>
                </li>
                <li className="Card">
                    <div className="contenedorImagen">
                        <img src={platoFuerte1} alt="Al agua Patos"/>
                    </div>
                    <span className="Titulo">Plato Fuerte 1</span>
                    <div className="Interacciones"> 
                        <div><i className="fas fa-heart like"></i> 120</div> 
                        <div><i className="fas fa-comment"></i> 2.0k</div>
                        <div><i className="fas fa-eye"></i> 180</div>
                    </div>
                </li>
                <li className="Card">
                    <div className="contenedorImagen">
                        <img src={platoFuerte2} alt="Al agua Patos"/>
                    </div>
                    <span className="Titulo">Plato Fuerte 2</span>
                    <div className="Interacciones"> 
                        <div><i className="fas fa-heart like"></i> 100</div> 
                        <div><i className="fas fa-comment"></i> 1.2</div>
                        <div><i className="fas fa-eye"></i> 120</div>
                    </div>
                </li>
            </ul>
        </section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
