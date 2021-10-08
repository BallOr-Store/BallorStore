import logo from 'media/logo blog.jpg';

const Header = ()=>{
    return(
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
    )

}

export default Header;